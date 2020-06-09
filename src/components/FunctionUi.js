import React from "react";
import utils from "../utils/utils";
import { convertDataType } from "../utils/helpers";

export default class FunctionUi extends React.Component {
  constructor() {
    super();
    this.state = {
      isResultDisplayed: false,
      isCodeDisplayed: false,
      result: "",
    };
  }

  toggleCodeDisplay() {
    if (this.state.isCodeDisplayed === false) {
      //if the current state of codeDisplay is not showing(false)
      this.setState({ isCodeDisplayed: true }); // when clicked, display(true)
    } else {
      this.setState({ isCodeDisplayed: false }); //when clicked again, do not display(false)
    }
  }

  getUserInput = () => {
    const props = this.props;
    console.log(props.name);
    const inputValues = [];
    for (let i = 0; i < props.inputs; i++) {
      const element = document.getElementById(`input-${props.name}-${i}`); //takes the id of our component name followed by the number of inputs
      const value = element.value; // assigned const to the value of that ID and pushed it into new array
      const convertedValue = convertDataType(value);
      inputValues.push(convertedValue); //if console.logged, console will show what user typed
    }
    console.log(inputValues);
    const result = utils[props.name](...inputValues);
    console.log(result);
    this.setState({ result: JSON.stringify(result), isResultDisplayed: true }); // removes all return bars unless user clicks run
  };

  render() {
    const props = this.props;

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
        <p className="name" onClick={() => this.toggleCodeDisplay()}>
          <b>{props.name}</b> - {props.desc}
        </p>
        {this.state.isCodeDisplayed && (
          <pre>
            <code>{String(utils[props.name])}</code>
          </pre>
        )}
        <div className="actions float-right">
          {renderInputs(props.inputs)}
          {/* if we do not call renderInputs, all of the libraries will have the same number of inputs */}
          <button
            className="btn btn-primary inline-action"
            onClick={() => this.getUserInput()}
          >
            {/* runs anonymous function that looks for userInput */}
            Run
          </button>
        </div>
        <div className="clearfix mb-3"></div>
        {/* adds display bar after clicking run */}
        {this.state.isResultDisplayed && (
          <div className="alert alert-primary">{this.state.result}</div>
        )}
      </div>
    );
  }
}
