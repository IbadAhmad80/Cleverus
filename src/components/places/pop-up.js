import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import SinglePlace from "./singlePlace";

const PlacesModal = ({ setOpen, open, places }) => {
  const styles = {
    modal: {
      minWidth: "80%",
    },
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)} styles={styles}>
        {places?.data?.map((place) => {
          return <SinglePlace place={place} key={place.id} />;
        })}
      </Modal>
    </>
  );
};

export default PlacesModal;
