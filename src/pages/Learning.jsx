import { ReactComponent as Search } from "../assets/svgs/icon-search.svg";
import { ReactComponent as File } from "../assets/svgs/icon-file-text.svg";
import styles from "../styles/Learning.module.scss";
import Accordion from "../components/accordion/Accordion";
import { Activities } from "../mock/Learning-center";

const Learning = function (props) {
  return (
    <>
      <div className={styles.learning}>
        <div className={styles.learning__eclipse}>&nbsp;</div>
        <div className={styles.learning__overlay}>
          <div className={styles.learning__underlay}>&nbsp;</div>
          <p className={styles.learning__paragraph}>
            <span className={styles.learning__line}>&nbsp;</span>
            <span className={styles.learning__text}>Learning Center</span>
          </p>
          <h1 className={styles.learning__heading}>Learning Center</h1>
        </div>
        <form action='' className={styles.learning__form}>
          <div className={styles.learning__group}>
            <input
              type='text'
              className={styles.learning__input}
              placeholder='Searching...'
            />
            <button className={styles.learning__button}>
              <Search className={styles.learning__icon} />
            </button>
          </div>
        </form>
      </div>
      <section className={styles.learning__intro}>
        <div className={styles.view}>
          <div className={styles.view__left}>
            <div className={styles.view__icon}>
              <File className={styles["view__icon--file"]} />
            </div>
            <div className={styles.view__page}>
              <h1 className={styles.view__heading}>
                In-App Messaging Features
              </h1>
              <p className={styles.view__paragraph}>
                New around here ? Start with the Basics
              </p>
              <Accordion />
            </div>
          </div>
          <div className={styles.view__right}>
            <ul className={styles.view__list}>
              {Activities.map((activity, i) => (
                <li key={i} className={styles.view__item}>
                  <a href='/' className={styles.view__link}>
                    {activity}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Learning;
