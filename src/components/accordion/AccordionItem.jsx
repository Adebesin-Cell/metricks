import { useRef } from "react";
import styles from "./AccordionItem.module.scss";
import { ReactComponent as Plus } from "../../assets/svgs/icon-plus.svg";
import { ReactComponent as Minus } from "../../assets/svgs/icon-minus.svg";

const AccordionItem = function (props) {
  const contentEl = useRef();

  return (
    <li
      className={`${styles.accordion__item} ${
        props?.active ? styles["accordion__item--active"] : ""
      }`}
    >
      <button className={styles.accordion__header} onClick={props?.onToggle}>
        <h3 className={styles.accordion__heading}>{props?.faq?.question}</h3>
        <span className={styles.accordion__icon}>
          {props?.active ? <Minus /> : <Plus />}
        </span>
      </button>
      <div
        ref={contentEl}
        className={`${styles.accordion__body}`}
        style={
          props?.active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className={styles.accordion__text}>{props?.faq?.answers}</p>
        <ul className={styles.accordion__list}>
          {props?.faq?.answersList.map((answer, i) => (
            <li className={styles.accordion__answer}>
              {i + 1}. {answer}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default AccordionItem;
