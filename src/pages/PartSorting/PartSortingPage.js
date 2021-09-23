import React, { useState, useContext } from "react";
import { appContext } from "../../provider";
import GroupsList from "../../components/GroupsList/GroupsList";
import ComponentsDetailsList from "../../components/ComponentsList/ComponentsDetailsList";

export default function PartSortingPage() {
  const context = useContext(appContext);
  const groupsArray = context.parts;
  const [componentsList, setComponentsList] = useState([]);

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
      {groupsArray.length ? (
        <GroupsList components={groupsArray} selectGroup={sortComponents} />
      ) : (
        "No Groups Found..."
      )}
      {componentsList.length ? (
        <ComponentsDetailsList components={componentsList} />
      ) : null}
    </div>
  );
}
