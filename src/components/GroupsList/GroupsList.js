import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";

const GroupsList = ({ components, selectGroup }) => {
  const [group, setGroup] = useState("");
  const [groupList, setGroupList] = useState([]);
  useEffect(() => {
    sortGroups();
  }, []);
  const sortGroups = () => {
    //this function will take componentes location prefixes and sort them in array without duplicates.
    //used object to store prefixes for duplicate check and filtering efficiency
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
    setGroupList(sortedGroupArray.sort());
  };
  const handleGroupChange = (event) => {
    setGroup(event.target.value);
    selectGroup(event.target.value);
  };
  const menuItems = groupList.map((prefix) => {
    return (
      <MenuItem key={prefix} value={prefix}>
        {prefix}
      </MenuItem>
    );
  });
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={group}
          onChange={handleGroupChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}>
          <MenuItem value="">
            <em>Select Group Prefix...</em>
          </MenuItem>
          {menuItems}
        </Select>
      </FormControl>
    </div>
  );
};

export default GroupsList;
