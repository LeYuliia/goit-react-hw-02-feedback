import React from "react";
import styles from "./FeadbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {Object.keys(options).map((key) => (
      <button
        type="button"
        className={styles.button}
        name={key}
        key={key}
        onClick={onLeaveFeedback}
      >
        {key}
      </button>
    ))}
  </>
);
export default FeedbackOptions;
