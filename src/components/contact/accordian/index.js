import Accordion from "./accordion";
import "./accordion.scss";
import "../../../css/style.css";

export default function AccordianMain() {
  return (
    <div className="gx-sm-0 gx-md-4">
      <div className="container accordion_container mb-5 pb-5 ">
        <span className="text-color">FAQ'S</span>
        <h3 className="text-md mb-4">Read it Out</h3>
        <Accordion
          title="What is your return policy?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          type={"active"}
          height={"120px"}
        />
        <Accordion
          title="How do I track my order?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Accordion
          title="Can I purchase items again?"
          content="
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </br>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </br>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      "
        />
      </div>
    </div>
  );
}
