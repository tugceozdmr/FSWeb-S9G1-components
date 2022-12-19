import React from "react";

export default function Todo(props) {
  const { item, updateIt, mevcutlar } = props;

  const handleClick = () => {
    const mevcutlarCopy = [...mevcutlar];
    mevcutlarCopy.filter((oge) => oge.id === item.id)[0].tamamlandi =
      !item.tamamlandi;
    updateIt(mevcutlarCopy);
  };

  return (
    <li className="test" onClick={handleClick}>
      {item.isim} {item.tamamlandi ? "(ok)" : ""}
    </li>
  );
}
