import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import SinglePlace from "./singlePlace";

const PlacesModal = ({ setOpen, open }) => {
  const styles = {};

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)} styles={styles}>
        <SinglePlace />
        <SinglePlace />
        <SinglePlace />
        <SinglePlace />
        <SinglePlace />
      </Modal>
    </>
  );
};

export default PlacesModal;
