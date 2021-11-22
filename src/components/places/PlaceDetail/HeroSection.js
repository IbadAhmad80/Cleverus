import React from "react";
import styles from "./placeDetails.module.scss";
import { TiTick } from "react-icons/ti";
import { BiArrowBack } from "react-icons/bi";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

const PlaceHeroSection = ({ place }) => {
  return (
    <div>
      <div className={styles.image_overlay}>
        <img src={place?.image_url} className={styles.image} alt="place-pic" />

        <div className={styles.image_content}>
          <div style={{ paddingTop: "38vh" }}>
            <Link to="/search">
              <i className={styles.back_icon}>
                <BiArrowBack />
              </i>
            </Link>
            <h2>{place?.name}</h2>
            <div className={styles.rating_flex}>
              <div style={{ margin: "-4px 0 0 0" }}>
                <StarRatings
                  rating={place?.rating}
                  starDimension="18px"
                  starSpacing="0px"
                  starRatedColor={"#31B4BD"}
                  emptyRatedColor={"white"}
                />
              </div>
              <div className={styles.total_reviews}>
                {place?.review_count} reviews
              </div>
            </div>
            <div className={styles.price_range_flex}>
              <div className={styles.is_claimed}>
                <i>
                  <TiTick />
                </i>
                Claimed
              </div>
              <div className={styles.price_range}>{place?.price} </div>
              <div className={styles.location}>
                {place?.location?.address1},{place?.location?.city},
                {place?.location?.country}
              </div>
            </div>

            <div className={styles.open_close_flex}>
              <div className={styles.status}>
                {place?.is_closed ? "Close" : "Open"} .
              </div>
              <div className={styles.hours_updated}>Hours Updated Recently</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceHeroSection;
