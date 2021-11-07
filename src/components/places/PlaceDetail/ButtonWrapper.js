import React from "react";
import { BsStar, BsHeart } from "react-icons/bs";
import styles from "./placeDetails.module.scss";

const ButtonWrapper = () => {
  return (
    <div className={styles.button_wrapper}>
      <div className={styles.review_btn}>
        <button>Write a Review</button>
        <i className={styles.icon}>
          <BsStar />
        </i>
      </div>
      <div className={styles.review_btn}>
        <button c>Add to Favourites</button>
        <i className={styles.icon}>
          <BsHeart />
        </i>
      </div>
    </div>
  );
};

export default ButtonWrapper;
