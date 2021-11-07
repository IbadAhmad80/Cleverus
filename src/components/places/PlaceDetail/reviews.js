import React from "react";
import styles from "./placeDetails.module.scss";

const Reviews = ({ place }) => {
  const reviews = [
    {
      name: "Ibad Ahmad",
      text: " ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumv lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum orem ipsum  ipsum ",
    },
    {
      name: "Haseeb Yaseen",
      text: "ipsum lorem ipsumv lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    },
    {
      name: "Wahaj Hafeez",
      text: " ipsum lorem ipsumv lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    },
  ];
  return (
    <>
      <h4 style={{ marginTop: "1rem" }}>What People Say</h4>
      {place?.reviews?.map(({ id, text, user: { name, image_url } }) => {
        return (
          <div className={styles.author_section} key={id}>
            <div className={styles.top_flex}>
              <div>
                <img src={image_url} className={styles.review_img} />
              </div>

              <div>
                <h6>{name}</h6>
                <p style={{ margin: "1em 0 0 0" }}>{text.slice(0, 300)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Reviews;
