import React from "react";

const AsyncParagraph = ({ loadData }) => {
  let [key, setKey] = React.useState("");
  React.useEffect(() => {
    loadData().then((data) => {
      setKey(data);
    });
  }, []);
  return <p>{key}</p>;
};
function Question1() {
  return (
    <AsyncParagraph
      loadData={() => {
        return new Promise((resolve) => {
          resolve("Data !");
        });
      }}
    ></AsyncParagraph>
  );
}

export default Question1;
