import React from "react";
import styles from "./placeDetails.module.scss";
import Footer from "../../footer/index";
import PlaceHeroSection from "./HeroSection";
import ButtonWrapper from "./ButtonWrapper";
import LeftWrapper from "./LeftWrapper";
import RightWrapper from "./RightWrapper";
import NavBar from "../../navbar/index";

function PlaceDetails({
  history: {
    location: { state },
  },
}) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.main_wrapper}>
        <PlaceHeroSection place={state?.place} />
        <ButtonWrapper place={state?.place} />
        <div className={styles.body_wrapper}>
          <LeftWrapper place={state?.place} />
          <RightWrapper place={state?.place} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PlaceDetails;
