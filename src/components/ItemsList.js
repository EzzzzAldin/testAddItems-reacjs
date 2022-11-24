import { useState } from "react";

import classes from "./ItemsList.module.css";

const ItemsList = (props) => {
  const [isCounter, setIsCounter] = useState(props.counter);
  const [isDone, setIsDone] = useState(false);

  const increseItemHandler = () => {
    setIsCounter(isCounter + 1);
  };

  const decreaseItemHandler = () => {
    if (isCounter === 0) return;
    setIsCounter(isCounter - 1);
  };

  const doneHandler = () => {
    setIsDone(!isDone);
  };

  let labelStyle = !isDone
    ? classes["form-control"]
    : `${classes["form-control"]} ${classes.done}`;

  return (
    <>
      <div className={classes.item}>
        <label className={labelStyle}>
          <input type="checkbox" onClick={doneHandler} />
          {props.title}
        </label>
        <div className={classes.counter}>
          <i
            className={`${classes.arrow} ${classes["arrow-right"]}`}
            onClick={increseItemHandler}
          ></i>
          {isCounter}
          <i
            className={`${classes.arrow} ${classes["arrow-left"]}`}
            onClick={decreaseItemHandler}
          ></i>
        </div>
      </div>
    </>
  );
};

export default ItemsList;
