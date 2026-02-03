import { useState } from "react";

export default function Counter({ initialValue = 0 }) {
  const { value, setValue } = useState(initialValue);
  const handleSum = () => {
    setValue(value + 1);
  };
  const handleRes = () => {
    setValue(value - 1);
  };
  const handleRei = () => {
    setValue((value = 0));
  };

  return (
    <>
      <p>{value}</p>
      <button onClick={handleSum}>Sumar</button>
      <button onClick={handleRes}>Restar</button>
      <button onClick={handleRei}>Reiniciar</button>
    </>
  );
}
