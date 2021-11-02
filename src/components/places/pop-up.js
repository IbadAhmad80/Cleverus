import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import SinglePlace from "./singlePlace";

const PlacesModal = ({ setOpen, open }) => {
  const styles = {};
  const lorem = (
    <p>
      Mauris ac arcu sit amet dui interdum bibendum a sed diam. Praesent rhoncus
      congue ipsum elementum lobortis. Ut ligula purus, ultrices id condimentum
      quis, tincidunt quis purus. Proin quis enim metus. Nunc feugiat odio at
      eros porta, ut rhoncus lorem tristique. Nunc et ipsum eu ex vulputate
      consectetur vel eu nisi. Donec ultricies rutrum lectus, sit ame feugiat
      est semper vitae. Proin varius imperdiet consequat. Proin eu metus nisi.
      In hac habitasse platea dictumst. Vestibulum ac ultrices risus.
      Pellentesque arcu sapien, aliquet sed orci sit amet, pulvinar interdum
      velit. Nunc a rhoncus ipsum, maximus fermentum dolor. Praesent aliquet
      justo vitae rutrum volutpat. Ut quis pulvinar est.
    </p>
  );

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)} styles={styles}>
        <h2>Big modal</h2>
        <SinglePlace />
        {lorem}
        {lorem}
        {lorem}
      </Modal>
    </>
  );
};

export default PlacesModal;
