import { useEffect, useRef } from "react";
import styles from "./Banner.module.css";
import Link from "next/link";

export default function Banner() {
  const vidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    vidRef.current?.play();
  }, []);


  return (
    <>
      <div id="wrapperVideo" className={styles.wrapperVideo}>
        <video
          className={styles.video}
          src="/banner.mp4"
          ref={vidRef}
          muted
          autoPlay
          loop
        />
      </div>

      <div className={styles.wordBanner}>
        <div>
          <div>Hello, Im Sherly Lolita Sari</div>
          <div>Im a Frontend Web Developer</div>
        </div>
        <Link className={styles.bannerLink} href="/#professional-portfolio"><div className={styles.buttonView}>View my work</div></Link>
      </div>




    </>
  );
}
