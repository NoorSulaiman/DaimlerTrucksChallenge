import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Tab, Tabs } from "@mui/material";
import styles from "./NavBar.module.css";
export default function NavBar() {
  const history = useHistory();
  const [tabIndex, setTabIndex] = useState("search");

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
    history.push(newIndex);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example">
            <Tab value={"/"} label="Sorted Parts" className={styles.navTab} />
            <Tab
              value={"/delete"}
              label="Remove Parts"
              className={styles.navTab}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}
