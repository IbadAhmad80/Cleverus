import React from "react";
import "./topnav.css";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import { IoMdArrowRoundBack } from "react-icons/io";
import user_menu from "../../assets/JsonData/user_menus.json";
import { db, auth, logout } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import cogoToast from "cogo-toast";
import { useHistory } from "react-router";

const Topnav = () => {
  const [user, loading] = useAuthState(auth);
  const [currentUser, setCurrentUser] = React.useState(null);
  const history = useHistory();

  React.useEffect(() => {
    if (loading) return;
    if (!user) {
      cogoToast.error("Please Log in / Sign Up First!");
      return history.replace("/sign-in");
    }
    setCurrentUser(JSON.parse(localStorage.getItem("user")));
  }, [user, loading]);

  const curr_user = {
    name: currentUser?.name,
    image: currentUser?.photoURL,
  };

  const renderUserToggle = (user) => (
    <div className="topnav__right-user">
      <div className="topnav__right-user__image">
        <img src={user?.image} alt="" />
      </div>
      <div className="topnav__right-user__name">
        {user?.name?.split(" ")[0]} &nbsp;
        {user?.name?.split(" ")[1][0]}&nbsp; {user?.name && "."}
      </div>
    </div>
  );

  const renderUserMenu = (item, index) => (
    <Link key={index}>
      <div className="notification-item">
        <i className={item.icon}></i>
        <span>{item.content}</span>
      </div>
    </Link>
  );

  return (
    <div className="topnav">
      <div className="topnav__go_back">
        <Link to="/">
          <IoMdArrowRoundBack />
        </Link>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
          />
        </div>
        <button
          onClick={() => logout()}
          className="mx-3 btn-danger p-1 px-3 rounded"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Topnav;
