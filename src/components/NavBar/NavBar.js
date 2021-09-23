import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Tab, Tabs } from "@mui/material";
import styles from "./NavBar.module.css";
export default function NavBar() {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = React.useState("search");

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
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
            <Tab
              value={"search"}
              label="Parts Lookup"
              onClick={() => navigate("/")}
              className={styles.navTab}
            />
            <Tab
              value={"delete"}
              label="Delete Parts"
              onClick={() => navigate("/delete")}
              className={styles.navTab}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}
