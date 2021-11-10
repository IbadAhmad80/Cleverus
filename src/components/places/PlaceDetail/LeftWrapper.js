import React from "react";
import styles from "./placeDetails.module.scss";
import Amenities from "./amenities";
import Reviews from "./reviews";
import CreateComments from "./CreateComment";

const LeftWrapper = ({ place }) => {
  return (
    <div className={styles.left_wrapper}>
      <Amenities />
      <CreateComments />
      <div className={styles.review_wrapper}>
        <Reviews place={place} />
      </div>
    </div>
  );
};

export default LeftWrapper;