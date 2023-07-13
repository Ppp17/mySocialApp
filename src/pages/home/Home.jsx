import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import "./home.scss";
import Share from "../../components/share/share";
const Home = () => {
  return (
    <div className="home">
      <Stories></Stories>
      <Share />
      <Posts></Posts>
    </div>
  );
};

export default Home;
