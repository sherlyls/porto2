import styles from "./Stacks.module.css";
import Image from "next/image";

export default function Stacks({ stacks }) {
  return (
    <div>
      <div className={styles.title}>My Tech Stacks</div>
      <div className={styles.headerBar}></div>
      <div className={styles.wrapperStack}>
        {stacks.map((stack, i) => (
          <div className={styles.grupStack} key={i}>
            <Image className={styles.imageStack} src={`/${stack.image}`} height="60" width="60" alt="image" />
            <span className={styles.label}>{stack.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
