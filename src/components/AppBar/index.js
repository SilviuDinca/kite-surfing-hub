import {
  AppBar as AppBarMui,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../../assets/images/Logo.png";
import AddSpot from "../AddSpot";
import styles from "./appBar.module.css";

const AppBar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { onLogout } = props;

  const open = Boolean(anchorEl);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBarMui color="inherit" position="static">
      <Toolbar component={"div"} className={styles.toolbar}>
        <div>
          <img src={Logo} alt="Logo" width="50%" />
        </div>
        <div className={styles.rightSideNav}>
          <AddSpot refreshSpots={props.onRefreshSpots} />
          <Button size="small" color="primary" onClick={handleOpen}>
            {/* {user.username} */}
            <AccountCircleIcon className={styles.iconAccount} color="primary" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={onLogout}>
              <LogoutIcon color="error" />
              <Typography
                className={styles.logout}
                variant="subtitle1"
                color="error"
              >
                Logout
              </Typography>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBarMui>
  );
};
export default AppBar;
