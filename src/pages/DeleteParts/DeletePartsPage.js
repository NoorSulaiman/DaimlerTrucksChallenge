import React, { useState, useContext } from "react";
import { appContext } from "../../provider";
import GroupsList from "../../components/GroupsList/GroupsList";
import ComponentCardList from "../../components/ComponentsList/ComponentCardList";

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
  const deleteComponent = (locationName) => {
    let newComponentsArray = componentsList;
    context.parts.map((component, indx) => {
      if (locationName === component.location) {
        // Removed item will not be shown in Part Sorting page, as it's been removed from the context
        context.parts.splice(indx, 1);
        newComponentsArray.splice(indx, 1);
        setComponentsList(newComponentsArray);
      }
    });
  };
  return (
    <div>
      {groupsArray.length && (
        <GroupsList components={groupsArray} selectGroup={sortComponents} />
      )}
      {componentsList.length ? (
        <ComponentCardList
          components={componentsList}
          cardButtonFunction={deleteComponent}
        />
      ) : null}
    </div>
  );
}
