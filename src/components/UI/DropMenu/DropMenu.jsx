import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./DropMenu.module.scss";

const activeClass = `${styles.activeDropMenu}`;

function DropMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [menuClasses, setMenuClasses] = useState(`${styles.dropMenu}`);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuClasses(menuClasses + " " + activeClass);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setMenuClasses(`${styles.dropMenu}`);
  };

  return (
    <div className={menuClasses}>
      <div className={styles.image}>
        <img src="./ServersPage/example.png" alt="avatar" />
      </div>
      <h4 className={styles.name}>
        {menuClasses.includes(activeClass) ? "Name" : false}
      </h4>
      <button className={styles.btn} onClick={handleClick}>
        <img src="./ServersPage/arrow.svg" alt="" />
      </button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        className={styles.menu}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default DropMenu;
