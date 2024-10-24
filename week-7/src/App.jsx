import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <Count />
    </div>
  );
}

function Count() {
  console.log("Count re-rendered");
  return (
    <div>
      <RecoilRoot>
        <CountRenderer />
        <Buttons />
        <TextPortion />
      </RecoilRoot>
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
    </div>
  );
}

function Buttons() {
  console.log("Buttons re-rendered");
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

function TextPortion() {
  console.log("TextPortion re-rendered");

  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? <p>It is Even</p> : ""}</div>;
}

export default App;
