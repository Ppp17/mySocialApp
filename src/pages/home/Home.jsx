import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import "./home.scss";
import Post from "../../components/post/Post";

const Home = () => {
  return (
    <div className="home">
      <Stories></Stories>
      <Posts></Posts>
    </div>
  );
};

export default Home;
