import { useState } from "react";
import classes from "./Mybutton.module.css";
const Mybutton = function ({ children, ...props }) {
  return (
    <button {...props} className={classes.my__button}>
      {children}
    </button>
  );
};

export default Mybutton;
