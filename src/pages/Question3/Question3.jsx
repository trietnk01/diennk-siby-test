import React, { useEffect, useState } from "react";
function ItemTd({ name, id, onChangeId }) {
  const handleChangeId = (val) => () => {
    onChangeId(val);
  };
  return <td onClick={handleChangeId(id)}>{name}</td>;
}
function Cards({ amount }) {
  const [lstTd, setlstTd] = useState([]);
  const [id, setId] = useState(0);
  useEffect(() => {
    let data = new Array(0);
    if (amount > 0) {
      for (let i = 0; i < amount; i++) {
        let id = i + 1;
        let tdItem = {
          id,
        };
        data.push(tdItem);
      }
    }
    setlstTd(data);
  }, []);
  function handleSetId(val) {
    setId(val);
  }
  return (
    <table>
      <tbody>
        <tr>
          {lstTd.length > 0 &&
            lstTd.map((elmt) => {
              return <ItemTd key={elmt.id} name={elmt.id === id ? "up" : "down"} id={elmt.id} onChangeId={handleSetId} />;
            })}
        </tr>
      </tbody>
    </table>
  );
}
function Question3() {
  return <Cards amount={4} />;
}

export default Question3;
