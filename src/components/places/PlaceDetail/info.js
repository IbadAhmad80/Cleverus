import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import styles from "./placeDetails.module.scss";

const Info = ({ place }) => {
  return (
    <div className={styles.info_wrapper}>
      <div className={styles.single_info}>
        <h5>Visit Website</h5>
        <i>
          <BsBoxArrowUpRight />
        </i>
      </div>
      <div className={styles.single_info}>
        <h5>{place?.display_phone}</h5>
        <i>
          <FiPhoneCall />
        </i>
      </div>
      <div className={styles.single_info}>
        <h5>
          {place?.location?.display_address[0]} , &nbsp;
          {place?.location?.display_address[1]} , &nbsp;
          {place?.location?.display_address[2]}
        </h5>
        <i>
          <GoLocation />
        </i>
      </div>
    </div>
  );
};

export default Info;
