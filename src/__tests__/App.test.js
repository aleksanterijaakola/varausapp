import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Button from "../components/Login";
import App from "../components/App";

describe("Button", () => {
  it("should be defined", () => {
    expect(Button).toBeDefined();
  });
  it("should render correctly", () => {
    const tree = shallow(<Button name="button test" />);
    expect(tree).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});




