import React, { useState, useEffect } from "react";
import { responseFromApi } from "../../data/truckParts";
import GroupsList from "../../components/GroupsList/GroupsList";
import ComponentsList from "../../components/ComponentsList/ComponentsList";

export default function PartSortingPage() {
  const groupsArray = responseFromApi.data.dashboard.components;
  const [sortedGroupsList, setGroupList] = useState([]);
  const [componentsList, setComponentsList] = useState([]);
  useEffect(() => {
    sortGroups();
  }, []);
  const sortGroups = () => {
    //this function will take componentes location prefixes and sort them in array without duplicates.
    //used object to store prefixes for duplicate check and filtering efficiency
    let groupStore = {};
    let sortedGroupArray = [];
    groupsArray.map((component) => {
      let prefix = component.location.slice(0, 2);
      if (!groupStore[prefix]) {
        groupStore[prefix] = prefix;
        sortedGroupArray.push(prefix);
      }
    });
    setGroupList(sortedGroupArray.sort());
  };
  const sortComponents = (group) => {
    let sortedComponentsArray = [];
    groupsArray.map((component) => {
      let prefix = component.location.slice(0, 2);
      if (group === prefix) {
        sortedComponentsArray.push(component);
      }
    });

    sortedComponentsArray = sortedComponentsArray.sort((a, b) =>
      a.location > b.location ? 1 : b.location > a.location ? -1 : 0
    );
    setComponentsList(sortedComponentsArray);
  };
  return (
    <div>
      {sortedGroupsList.length && (
        <GroupsList groups={sortedGroupsList} selectGroup={sortComponents} />
      )}
      {componentsList.length && <ComponentsList components={componentsList} />}
    </div>
  );
}
