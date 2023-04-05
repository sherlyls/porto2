// import React, { useState } from "react";
// import styles from "./Work.module.css";
// import Image from "next/image";
// import Lightbox from "react-image-lightbox";
// // import Lightbox from "yet-another-react-lightbox";
// // import "yet-another-react-lightbox/styles.css";

// const Work = ({id, title, description, thumbnail, screenshoots, demo}) => {
//   const [photoIndex, setPhotoIndex] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);
//   const images = screenshoots;

//   const onClickThumbnail = (e) => {
//     e.preventDefault();

//     if (screenshoots.length > 0) {
//       setIsOpen(!isOpen);
//     } else {
//         window.open(demo, '_blank');
//     }
//   };

//   return (
//     <>
//       <div className={styles.grupCard}>
//         <div
//           onClick={onClickThumbnail}
//           className={` ${styles.card} ${
//             id % 2 ? styles.rightSide : styles.leftSide
//           } ${id == 1 ? styles.noMargin : styles.minMargin}`}
//         >
//           <div className={`${styles.grupImage}`}>
//             <Image
//               className={styles.imgCard}
//               src={`/${thumbnail}`}
//               alt="image"
//               width={470}
//               height={290}
//             ></Image>
//           </div>
//           <div className={styles.grupDescription}>
//             <div className={styles.titleDesc}>{title}</div>
//             <div className={styles.contentDesc}>{description}</div>
//           </div>
//         </div>
//       </div>

//     {isOpen && (
//         <Lightbox
//           mainSrc={images[photoIndex]}
//           nextSrc={images[(photoIndex + 1) % images.length]}
//           prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//           onCloseRequest={() => setIsOpen(false)}
//           onMovePrevRequest={() =>
//             setPhotoIndex((photoIndex + images.length - 1) % images.length)
//           }
//           onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
//           imageTitle={title}
//         />
//       )}
//     </>
//   );
// }

// export default Work;
// import React, { useState } from "react";
// import styles from "./Work.module.css";
// import Image from "next/image";
// import Lightbox from "react-image-lightbox";
// // import Lightbox from "yet-another-react-lightbox";
// // import "yet-another-react-lightbox/styles.css";

// const Work = ({id, title, description, thumbnail, screenshoots, demo}) => {
//   const [photoIndex, setPhotoIndex] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);
//   const images = screenshoots;

//   const onClickThumbnail = (e) => {
//     e.preventDefault();

//     if (screenshoots.length > 0) {
//       setIsOpen(!isOpen);
//     } else {
//         window.open(demo, '_blank');
//     }
//   };

//   return (
//     <>
//       <div className={styles.grupCard}>
//         <div
//           onClick={onClickThumbnail}
//           className={` ${styles.card} ${
//             id % 2 ? styles.rightSide : styles.leftSide
//           } ${id == 1 ? styles.noMargin : styles.minMargin}`}
//         >
//           <div className={`${styles.grupImage}`}>
//             <Image
//               className={styles.imgCard}
//               src={`/${thumbnail}`}
//               alt="image"
//               width={470}
//               height={290}
//             ></Image>
//           </div>
//           <div className={styles.grupDescription}>
//             <div className={styles.titleDesc}>{title}</div>
//             <div className={styles.contentDesc}>{description}</div>
//           </div>
//         </div>
//       </div>

//     {isOpen && (
//         <Lightbox
//           mainSrc={images[photoIndex]}
//           nextSrc={images[(photoIndex + 1) % images.length]}
//           prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//           onCloseRequest={() => setIsOpen(false)}
//           onMovePrevRequest={() =>
//             setPhotoIndex((photoIndex + images.length - 1) % images.length)
//           }
//           onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
//           imageTitle={title}
//         />
//       )}
//     </>
//   );
// }

// export default Work;
