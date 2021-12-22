import React from "react";
import { hot } from "react-hot-loader";

const HelloWorld = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

// Will use hot-loader during development
export default hot(module)(HelloWorld);
