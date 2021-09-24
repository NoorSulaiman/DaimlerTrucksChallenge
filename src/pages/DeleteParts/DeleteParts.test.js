import React from "react";
import { shallow } from "enzyme";
import DeletePartsPage from "./DeletePartsPage";

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
  {
    panelNumber: "A06-30769-027",
    panelDescription: "SW-RCKR,PS PWR WDW",
    location: "AG017",
    parentPanelNumber: "66A-C00132",
    modelCode: "H",
    whitelist: ["AG003"],
    blacklist: [],
    type: "hardwired-component",
    switchId: "NONE",
    bom: "66A-C00132",
    isAsBuilt: true,
  },
];
const deleteComponent = (locationName) => {
  let newComponentsArray = compArray;
  compArray.map((component, indx) => {
    if (locationName === component.location) {
      newComponentsArray.splice(indx, 1);
    }
  });
  return newComponentsArray;
};
describe("DeletePartsPage", () => {
  it("should render PartSorting Page correctly with given props", () => {
    const component = shallow(<DeletePartsPage />);
    expect(component).toMatchSnapshot();
  });

  it("should sort components list into group prefixes", () => {
    const component = shallow(<DeletePartsPage />);
    expect(component.find("GroupsList").length).toBe(1);
  });

  it("should take prefixs and sort them", () => {
    expect(deleteComponent("AGAAA").length).toStrictEqual(2);
  });
});
