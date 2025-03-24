import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.section1}>
        <div className={styles.profile}></div>
        <div className={styles.container}>
          <div className={styles.Title}>202301559</div>
          <div className={styles.row2}>
            <div className={styles.label}>Developer</div>
            <div className={styles.label}>Front</div>
          </div>
          <div className={styles.row3}>인터넷 설계 실습 CSP입니다.</div>
        </div>
      </div>
    </div>
  );
}
