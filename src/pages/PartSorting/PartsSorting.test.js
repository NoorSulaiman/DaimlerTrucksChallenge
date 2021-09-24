import React from "react";
import { shallow } from "enzyme";
import PartSortingPage from "./PartSortingPage";

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
    whitelist: [
      "AG003",
      "AG004",
      "AG009",
      "AG010",
      "AG013",
      "AG014",
      "AG015",
      "AG016",
      "AG017",
      "AG018",
      "AG019",
      "AG023",
      "AG024",
      "AG025",
      "AG026",
      "AG027",
      "AG028",
      "AG096",
      "AG097",
    ],
    blacklist: [],
    type: "hardwired-component",
    switchId: "NONE",
    bom: "66A-C00132",
    isAsBuilt: true,
  },
];
const sortComponents = (group) => {
  let sortedComponentsArray = [];
  compArray.map((component) => {
    let prefix = component.location.slice(0, 2);
    if (group === prefix) {
      sortedComponentsArray.push(component);
    }
  });

  sortedComponentsArray = sortedComponentsArray.sort((a, b) =>
    a.location > b.location ? 1 : b.location > a.location ? -1 : 0
  );
  return sortedComponentsArray;
};
describe("PartSortingPage", () => {
  it("should render PartSorting Page correctly with given props", () => {
    const component = shallow(<PartSortingPage />);
    expect(component).toMatchSnapshot();
  });

  it("should sort components list into group prefixes", () => {
    const component = shallow(<PartSortingPage />);
    expect(component.find("GroupsList").length).toBe(1);
  });

  it("should take prefixs and sort them", () => {
    expect(sortComponents("AG").length).toStrictEqual(2);
  });
});
