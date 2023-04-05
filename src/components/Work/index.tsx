import React, { useState } from "react";
import styles from "./Work.module.css";
import Image from "next/image";
// import Lightbox from "react-image-lightbox";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Work = ({ id, title, description, thumbnail, screenshoots, liststacks, demo }: any) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = screenshoots;

  const onClickThumbnail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (screenshoots.length > 0) {
      setIsOpen(!isOpen);
    } else {
      window.open(demo, "_blank");
    }
  };

  return (
    <>
      <div className={styles.grupCard}>
        <div
          onClick={onClickThumbnail}
          className={` ${styles.card} ${
            id % 2 ? styles.rightSide : styles.leftSide
          } ${id == 1 ? styles.noMargin : styles.minMargin}`}
        >
          <div className={`${styles.grupImage}`}>
            <Image
              className={styles.imgCard}
              src={`/${thumbnail}`}
              alt="image"
              width={470}
              height={290}
            ></Image>
          </div>
          <div className={styles.grupDescription}>
            <div className={styles.titleDesc}>{title}</div>
            <div className={styles.contentDesc}>{description}</div>
          </div>
          <div className={styles.liststack}>
            {liststacks.map((liststack: any, i: any) => (
              <div>{liststack}</div>
            ))}
          </div>

        </div>
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={[
            { src: screenshoots[0] },
            { src: screenshoots[1] },
            { src: screenshoots[2] },
          ]}
        />
      )}
    </>
  );
};

export default Work;
