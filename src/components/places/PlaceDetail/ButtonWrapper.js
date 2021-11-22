import React, { useState } from "react";
import { BsStar, BsHeart } from "react-icons/bs";
import styles from "./placeDetails.module.scss";
import { useHistory } from "react-router";
import cogoToast from "cogo-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebase";

const ButtonWrapper = ({ place }) => {
  const history = useHistory();
  const [user, loading] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();

      const data = await query.docs[0]?.data();
      setCurrentUser(data);
    } catch (err) {
      console.error(err);
      cogoToast.error("An error occured while fetching user data");
    }
  };

  React.useEffect(() => {
    if (loading) return;
    if (!user) {
    } else {
      fetchUserName();
    }
  }, [user, loading]);

  const handleSubmit = () => {
    if (!currentUser)
      history.replace({
        pathname: "/sign-in",
        state: {
          place,
        },
      });
  };

  return (
    <div className={styles.button_wrapper}>
      <div className={styles.review_btn}>
        <button onClick={handleSubmit}>Write a Review</button>
        <i className={styles.icon}>
          <BsStar />
        </i>
      </div>
      <div className={styles.review_btn}>
        <button onClick={handleSubmit}>Add to Favourites</button>
        <i className={styles.icon}>
          <BsHeart />
        </i>
      </div>
    </div>
  );
};

export default ButtonWrapper;
