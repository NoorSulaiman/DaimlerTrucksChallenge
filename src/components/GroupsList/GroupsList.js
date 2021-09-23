import React, { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
const GroupsList = ({ groups, selectGroup }) => {
  const [group, setGroup] = useState("");
  const handleGroupChange = (event) => {
    setGroup(event.target.value);
    selectGroup(event.target.value);
  };
  const menuItems = groups.map((prefix) => {
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
