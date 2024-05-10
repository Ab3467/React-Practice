import { useState } from "react";

import IconButton from "../UI/IconBtn.js";
import MinusIcon from "../UI/Icons/MinusIcon.js";
import PlusIcon from "../UI/icons/PlusIcon.js";
import CounterOutput from "./CounterOutput.js";
import { log } from "../../log.js";

function isPrime(number) {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

export default function Counter({ initialCount }) {
  log("<Counter /> rendered", 1);
  const initialCountIsPrime = isPrime(initialCount);
const [counter, setCounter] = useState(initialCount);
function handleDecrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }
function handleIncrement() {
    setCounter((prevCounter) => prevCounter + 1);
  }
return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  );
}