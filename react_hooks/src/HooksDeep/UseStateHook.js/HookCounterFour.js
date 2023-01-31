import React, { useRef, useState } from "react";

function HookCounterFour() {
  const newItem = useRef();
  const [items, setItems] = useState([{ id: 0, value: "Rafi" }]);

  const AddItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: newItem.current.value,
      },
    ]);
    newItem.current.value = "";
    newItem.current.focus();
  };

  return (
    <div>
      <input ref={newItem} />
      <button onClick={AddItem}>Add new Item</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterFour;
