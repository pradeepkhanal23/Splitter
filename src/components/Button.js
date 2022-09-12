import React from "react";
import { buttons } from "../buttons";
import { useGlobalContext } from "../Context/AppContext";

const Button = () => {
  const { setTip, activeID, setActiveID, setCustom } = useGlobalContext();

  function toggleActive(e) {
    e.preventDefault();
    setActiveID(e.target.id);
    setTip(e.target.value);
    setCustom("");
  }

  return (
    <>
      {buttons.map((item, i) => {
        const { value, id } = item;
        return (
          <button
            id={id}
            className={`${activeID == id ? "active-amount" : "amount"}`}
            /* eslint eqeqeq: 0 */
            key={i}
            value={value}
            onClick={(e) => {
              toggleActive(e);
            }}
          >
            {value}%
          </button>
        );
      })}
    </>
  );
};

export default Button;
