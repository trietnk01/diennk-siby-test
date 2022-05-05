import React from "react";

const AsyncParagraph = ({ loadData }) => {
  let [test, setTest] = React.useState("");
  React.useEffect(() => {
    loadData().then((data) => {
      setTest(data);
    });
    console.log("AsyncParagraph");
  }, []);
  return <p>{test}</p>;
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
