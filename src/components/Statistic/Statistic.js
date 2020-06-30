import React from "react";
import styles from "./Statistic.module.css";

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2>Statistics</h2>
    <ul className={styles.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feadback: {positivePercentage}%</li>
    </ul>
  </>
);
export default Statistic;
