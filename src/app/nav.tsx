"use client";

import { useScroll, motion, useAnimation } from "framer-motion";
import styles from "./nav.module.css";
import { useEffect } from "react";

export default function Nav() {
  const { scrollY } = useScroll();
  console.log(scrollY);

  const navVariants = {
    top: {
      backgroundColor: "rgba(0,0,0,0)",
      color: "black",
    },
    scroll: {
      backgroundColor: "rgba(0,0,0,1)",
      color: "white",
    },
  };

  const navAnimation = useAnimation();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 40) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY]);
  return (
    <motion.div
      className={styles.nav}
      animate={navAnimation}
      variants={navVariants}
      initial="top"
    >
      <motion.div
        className={styles.Title}
        animate={navAnimation}
        variants={navVariants}
      >
        김경재의 CSP
      </motion.div>
      <motion.div className={styles.navigation}>
        <motion.div
          className={styles.Title}
          animate={navAnimation}
          variants={navVariants}
        >
          Home
        </motion.div>
        <motion.div
          className={styles.Title}
          animate={navAnimation}
          variants={navVariants}
        >
          Project
        </motion.div>
        <motion.div
          className={styles.Title}
          animate={navAnimation}
          variants={navVariants}
        >
          About
        </motion.div>
        <motion.div
          className={styles.Title}
          animate={navAnimation}
          variants={navVariants}
        >
          Contact
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
