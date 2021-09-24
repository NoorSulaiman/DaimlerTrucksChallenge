import React from "react";
import { shallow } from "enzyme";
import ComponentCardList from "./ComponentCardList";
import ComponentsDetailsList from "./ComponentsDetailsList";
const compArray = [
  {
    panelNumber: "22-58883-000",
    panelDescription: "PNL-INR TRIMPLTKAHLUA SPRKL",
    location: "AGAAA",
    parentPanelNumber: "734-C02202",
    modelCode: "H",
    whitelist: ["AGAAA"],
    blacklist: [],
    type: "hardwired-component",
    switchId: "",
    bom: "734-C02202",
    isAsBuilt: true,
  },
  {
    panelNumber: "22-69410-000",
    panelDescription: "PNL-SW,SMARTPLX,OVHD,SD,KAHLUA",
    location: "OVLHP",
    parentPanelNumber: "679-C01232",
    modelCode: "H",
    whitelist: ["OVLHP", "OVRHP"],
    blacklist: [],
    type: "hardwired-component",
    switchId: "",
    bom: "679-C01232",
    isAsBuilt: true,
  },
];

describe("ComponentCardList", () => {
  it("should render ComponentCardList correctly with given props", () => {
    const component = shallow(<ComponentCardList components={compArray} />);
    expect(component).toMatchSnapshot();
  });

  it("should render components cards", () => {
    const component = shallow(<ComponentCardList components={compArray} />);
    expect(component.find("Grid").children.length).toBe(1);
  });
});
describe("ComponentsDetailsList", () => {
  it("should render ComponentCardList correctly with given props", () => {
    const component = shallow(<ComponentsDetailsList components={compArray} />);
    expect(component).toMatchSnapshot();
  });

  it("should render components cards", () => {
    const component = shallow(<ComponentsDetailsList components={compArray} />);
    expect(component.find("Grid").children.length).toBe(1);
  });
});
