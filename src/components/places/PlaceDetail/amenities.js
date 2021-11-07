import React from "react";
import styles from "./placeDetails.module.scss";
import { AiTwotoneCalendar } from "react-icons/ai";
import { RiEBike2Fill, RiSurgicalMaskFill } from "react-icons/ri";
import { BiCoffeeTogo } from "react-icons/bi";

const Amenities = () => {
  return (
    <div className={styles.amenities_wrapper}>
      <h4>Amenities and More</h4>
      <div className={styles.flex_wrap}>
        <div>
          <i>
            <AiTwotoneCalendar />
          </i>
          <p>Takes Reservations</p>
        </div>
        <div>
          <i>
            <RiEBike2Fill />
          </i>
          <p>Offers Delivery</p>
        </div>
        <div>
          <i>
            <BiCoffeeTogo />
          </i>
          <p>Offers Takeout</p>
        </div>
        <div>
          <i>
            <RiSurgicalMaskFill />
          </i>
          <p>Masks required</p>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
