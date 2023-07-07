import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import "./navBar.scss";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <MailOutlineOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
