import React from "react";

import AppBarComponent from "./AppBar";
import SideBarComponent from "./SideBar";
import { useStyles } from "./styles";

function DashboardLayout({ children, title }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBarComponent title={title} />
      <SideBarComponent />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
