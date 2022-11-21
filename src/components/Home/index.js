import React from "react";
// import About from "../About";
import Inputs from "../Inputs";
import InputValues from "../InputValues";
import Users from "../Users";
// import Navbar from "../Navbar";

function Home() {
  //   const [state, setState] = React.useState();
  const [inputsValue, setInputsValue] = React.useState({
    email: "",
    fullname: "",
  });
  const [isShowResult, setIsShowResult] = React.useState(true);
  //   const [stateNew, setStateNew] = useState(5);

  //   let tempValue = 5;

  //   function changeStateValue() {
  //     setState(10);
  //     tempValue = 10;
  //   }

  //   const showStateValue = () => {
  //     console.log("state", state);
  //     console.log("tempValue", tempValue);

  //     // setStateNew();
  //   };

  return (
    <>
      {/* <Navbar changeStateValue={changeStateValue} />
      <About state={state} tempValue={tempValue} /> */}

      {/* <button onClick={showStateValue}>(Show)</button> */}

      {/* {isShowResult ? ( */}
      {/* <Inputs
        inputsValue={inputsValue}
        setInputsValue={setInputsValue}
        setIsShowResult={setIsShowResult}
        isShowResult={isShowResult}
      /> */}
      {/* ) : (
        <InputValues
          fullname={inputsValue.fullname}
          email={inputsValue.email}
          setIsShowResult={setIsShowResult}
        />
      )} */}

      <Users />
    </>
  );
}

export default Home;
