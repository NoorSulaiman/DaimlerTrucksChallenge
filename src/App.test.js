import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("should render App correctly with given props", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
