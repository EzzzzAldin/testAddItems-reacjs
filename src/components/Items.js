import { useState } from "react";

import Card from "./UI/Card";
import ItemsList from "./ItemsList";
import classes from "./Items.module.css";

const DUMMY_ITEMS = [
  {
    id: "i1",
    title: "Book 1",
    counter: 2,
    done: false,
  },
  {
    id: "i2",
    title: "Book 2",
    counter: 4,
    done: false,
  },
  {
    id: "i3",
    title: "Food",
    counter: 1,
    done: false,
  },
  {
    id: "i4",
    title: "Labtop",
    counter: 3,
    done: false,
  },
];

const Items = () => {
  const [entredItem, setEntredItem] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let formIsValid = false;
  let invalidInput = false;

  if (entredItem.length > 1) formIsValid = true;
  if (entredItem.length < 1 && isTouched) invalidInput = true;

  const addItemHandler = (event) => {
    setEntredItem(event.target.value);
  };

  const itemBlurHandler = () => {
    setIsTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    const newItem = {
      id: Math.random().toFixed(2),
      title: entredItem,
      counter: 0,
      done: false,
    };

    DUMMY_ITEMS.push(newItem);

    setEntredItem("");
    setIsTouched(false);
  };

  const inputClasses = invalidInput ? "invalid" : "input";

  let i = 0;
  const itemsList = DUMMY_ITEMS.map((item) => (
    <ItemsList
      key={item.id}
      title={item.title}
      counter={item.counter}
      done={item.done}
      total={(i += item.counter)}
    />
  ));

  return (
    <Card>
      <form className={classes["input-item"]} onSubmit={formSubmitHandler}>
        <input
          className={classes[inputClasses]}
          type="text"
          placeholder="Add Item"
          value={entredItem}
          onChange={addItemHandler}
          onBlur={itemBlurHandler}
        />
        <button>+</button>
      </form>
      {itemsList}
      <div className={classes.total}>{i}</div>
    </Card>
  );
};

export default Items;
