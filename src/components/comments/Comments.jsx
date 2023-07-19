import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from "moment";
const Comments = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);
  const [desc, setDesc] = useState("");
  const { isLoading, error, data } = useQuery(["comments"], async () => {
    console.log(postId);
    const res = await makeRequest.get("/comments?postId=" + postId);
    return res.data;
  });

  const queryClient = useQueryClient();
  // 修改
  const mutation = useMutation({
    mutationFn: (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    onSuccess: () => {
      // 错误处理和刷新
      // 触发完mutationFn后，刷新onSuccess中的函数
      // 触发的函数为useQuery初始时，[]内的函数名
      queryClient.invalidateQueries(["comments"]);
    },
  });
  const handleClick = async (e) => {
    e.preventDefault();

    mutation.mutate({ desc, postId });
    setDesc("");
  };
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input
          type="text"
          placeholder="write a comment"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {isLoading
        ? "loading"
        : data.map((comment) => (
            <div className="comment" key={comment.id}>
              {/* 头像 */}
              <img src={comment.profilePic} alt="" />
              {/* 名称、简介 */}
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              {/*  */}
              <span className="date">
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
