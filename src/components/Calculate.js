import React, { useEffect } from "react";
import { useGlobalContext } from "../Context/AppContext";
import Button from "./Button";

const Calculate = () => {
  const {
    amount,
    setAmount,
    tip,
    setTip,
    people,
    setPeople,
    setTipPP,
    setTotalPP,
    custom,
    setCustom,
    setActiveID,
  } = useGlobalContext();

  function result() {
    //useState took the value as string from input
    if (
      amount !== "" &&
      (tip !== "" || custom !== "") &&
      people !== "" &&
      people !== 0
    ) {
      let tip_per_person =
        (((tip === "" ? custom : tip) / 100) * amount) / people;
      let total_per_person =
        ((1 + (tip === "" ? custom : tip) / 100) * amount) / people;
      setTipPP(tip_per_person);
      setTotalPP(total_per_person);
    } else {
      setTipPP(0);
      setTotalPP(0);
    }
  }

  useEffect(() => {
    result();
    // eslint-disable-next-line
  }, [people, amount, tip, custom]);

  return (
    <section className="calculate-section">
      <form className="total-bill">
        <label htmlFor="bill-amount">Bill</label>
        <input
          type="number"
          id="bill-amount"
          min="0"
          placeholder="0"
          value={amount}
          onChange={(e) => {
            let finalAmount = "";
            if (e.target.value === "" || amount === 0) {
              finalAmount = "";
              setAmount(e.target.value);
            } else {
              finalAmount = Math.abs(e.target.value);
              setAmount(finalAmount);
            }
          }}
        />
      </form>
      <article id="tip-select">
        <header id="select-tip">Select Tip %</header>
        <form className="tip-amounts">
          <Button />
          <input
            type="number"
            min="0"
            className="custom-tip"
            placeholder="Custom"
            value={custom}
            onChange={(e) => {
              let finalTip = "";
              if (e.target.value === "" || custom === 0) {
                finalTip = "";
                setCustom(e.target.value);
                setTip("");
                setActiveID();
              } else {
                finalTip = Math.abs(e.target.value);
                setCustom(finalTip);
                setTip("");
                setActiveID();
              }
            }}
          />
        </form>
      </article>
      <form className="number-of-people">
        <div className="label-container">
          <label htmlFor="total-people">Number of people</label>
          {people === 0 && people !== "" && (
            <label className="error-label">Can't be zero</label>
          )}
        </div>
        <input
          type="number"
          min="0"
          className={`${
            people === 0 && people !== ""
              ? "total-people input-field input-error-field"
              : " total-people input-field "
          }`}
          placeholder="0"
          value={parseInt(people)}
          onChange={(e) => {
            let peopleValue = "";
            if (e.target.value === "" || people === 0) {
              peopleValue = "";
            } else {
              peopleValue = Math.abs(e.target.value);
            }
            setPeople(peopleValue);
          }}
        />
      </form>
    </section>
  );
};

export default Calculate;
