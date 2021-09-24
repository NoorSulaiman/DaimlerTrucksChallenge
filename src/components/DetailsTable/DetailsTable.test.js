import React from "react";
import { shallow } from "enzyme";
import DetailsTable from "./DetailsTable";

const componentObj = {
  panelNumber: "22-58883-000",
  panelDescription: "PNL-INR TRIMPLTKAHLUA SPRKL",
  location: "AGAAA",
  parentPanelNumber: "734-C02202",
  modelCode: "H",
  type: "hardwired-component",
  switchId: "",
  bom: "734-C02202",
};

describe("DetailsTable", () => {
  it("should render DetailsTable correctly with given props", () => {
    const component = shallow(<DetailsTable component={componentObj} />);
    expect(component).toMatchSnapshot();
  });
});
