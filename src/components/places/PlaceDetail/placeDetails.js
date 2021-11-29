import React from "react";
import styles from "./placeDetails.module.scss";
import Footer from "../../footer/index";
import PlaceHeroSection from "./HeroSection";
import ButtonWrapper from "./ButtonWrapper";
import LeftWrapper from "./LeftWrapper";
import RightWrapper from "./RightWrapper";
import NavBar from "../../navbar/index";
import { useHistory } from "react-router";

function PlaceDetails({
  history: {
    location: { state },
  },
}) {
  const history = useHistory();
  React.useEffect(() => {
<<<<<<< HEAD
    console.log(state?.place);
=======
>>>>>>> d070edd3215cd0a64fd3ade9838a8466aec8078f
    window.scrollTo(0, 0);
    if (!state?.place) history.replace("/");
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
