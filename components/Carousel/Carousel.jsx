import styles from "./Carousel.module.css";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const number = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};

export default function Carousel({ children, show, type }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(0);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - number[show]) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button
          className={`${styles.leftArrow} ${styles[type]}`}
          onClick={() => prev()}
        >
          <ChevronLeft />
        </button>

        <div className={styles.contentWrapper}>
          <div
            className={`${styles.content} ${styles[show]} `}
            style={{
              transform: `translateX(-${currentIndex * (100 / number[show])}%)`,
            }}
          >
            {children}
          </div>
        </div>
        <button
          className={`${styles.rightArrow} ${styles[type]}`}
          onClick={() => next()}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
