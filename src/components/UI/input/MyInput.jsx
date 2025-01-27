import { useState } from "react";
import classes from "./MyInput.module.css";
const MyInput = function (props) {
  return (
    <div className={classes.body}>
      <input
        className={classes.my__input}
        type="text"
        onChange={props.onChange}
        value={props.value}
        placeholder="Назва поста"
      />
      <input
        value={props.value2}
        className={classes.my__input}
        onChange={props.onChange2}
        type="text"
        placeholder="Опис поста"
      />
    </div>
  );
};

export default MyInput;
