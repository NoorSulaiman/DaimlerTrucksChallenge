import React from "react";
import { shallow } from "enzyme";
import GroupsList from "./GroupsList";

const clickFn = jest.fn();
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
const sortGroups = (components) => {
  let groupStore = {};
  let sortedGroupArray = [];
  if (components.length) {
    components.map((component) => {
      let prefix = component.location.slice(0, 2);
      if (!groupStore[prefix]) {
        groupStore[prefix] = prefix;
        sortedGroupArray.push(prefix);
      }
    });
  }
  return sortedGroupArray.sort();
};
describe("GroupsList", () => {
  it("should render GroupsList correctly with given props", () => {
    const component = shallow(
      <GroupsList components={compArray} selectGroup={clickFn} />
    );
    expect(component).toMatchSnapshot();
  });

  it("should sort components list into group prefixes", () => {
    const component = shallow(
      <GroupsList components={compArray} selectGroup={clickFn} />
    );
    expect(component.find("Select").children.length).toBe(1);
  });

  it("should take prefixs and sort them", () => {
    expect(sortGroups(compArray)).toStrictEqual(["AG", "OV"]);
  });
});
