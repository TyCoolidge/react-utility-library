import React from "react";

export default function FunctionUi(props) {
  const renderInputs = (number) => {
    const inputs = [];
    for (let i = 0; i < number; i++) {
      const id = `input-${props.name}-${i}`; //template literals https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
      //ex of what line 7 does; input-add-0. places the string "inputs" infront of componenet name followed by the cuurent index of the input
      //render some JSX
      inputs.push(
        <input
          type="text"
          className="form-control inline-action"
          key={id} //takes the current input length of the given library
          id={id}
        />
      );
    }
    return inputs;
  };

  return (
    <div className="col-12 col-lg-8 offset-lg-2 mb-5">
      <p className="name">
        <b>{props.name}</b> - {props.desc}
      </p>
      <pre style={{ display: "none" }}>
        <code></code>
      </pre>
      <div className="actions float-right">
        {renderInputs(props.inputs)}
        {/* if we do not call renderInputs, all of the libraries will have the same number of inputs */}
        <button className="btn btn-primary inline-action">Run</button>
      </div>
      <div className="clearfix mb-3"></div>
      <div className="alert alert-primary" style={{ display: "none" }}></div>
      <div className="alert alert-danger" style={{ display: "none" }}></div>
    </div>
  );
}
