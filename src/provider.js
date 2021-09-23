import React from "react";
import { responseFromApi } from "./data/truckParts";

//Used react context api to create a single source of truth to make all components in sync with any data changes.
export const appContext = React.createContext({
  parts: responseFromApi.data.dashboard.components,
});
