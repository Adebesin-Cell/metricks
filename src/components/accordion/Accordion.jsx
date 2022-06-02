import { useState } from "react";
import { faqs } from "../../mock/Accordion-data";
import styles from "./Accordion.module.scss";
import AccordionItem from "./AccordionItem";

const Accordion = function (props) {
  const [clicked, setClicked] = useState("0");

  const handleToggle = function (index) {
    if (clicked === index) {
      return setClicked("0");
    }

    setClicked(index);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__wrapper}>
        <ul className={styles.accordion__list}>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              onToggle={() => {
                handleToggle(i);
              }}
              active={clicked === i}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
