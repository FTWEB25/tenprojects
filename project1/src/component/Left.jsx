import React from "react";
import styles from "./Left.module.css";
function Left() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>YOUR FEET DESERVES THE BEST</h1>
      </div>
      <div className={styles.p}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis cum
          eos at sequi facere molestias id est inventore possimus iste quos
          exercitationem quod sint, ex assumenda obcaecati accusantium? Minima,
          deleniti?
        </p>
      </div>
      <div className={styles.btncont}>
        <button className={styles.btn}>shop now</button>
        <button className={styles.btn}>category</button>
      </div>
      <span>Also Available On</span>
      <div className={styles.logocont}>
        <img src="/images/flipkart.png" alt="flipkart" />
        <img src="/images/amazon.png" alt="amazon" />
      </div>
    </div>
  );
}

export default Left;
