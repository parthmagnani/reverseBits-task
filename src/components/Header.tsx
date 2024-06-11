import {
  // AppBar,
  Badge,
  // Button,
  IconButton,
  Menu,
  MenuItem,
  // Toolbar,
  // Typography
} from "@mui/material";
// import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { menuListMenu } from "../utils/mainMenuList";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  // const [open, setOpen] = useState(true);

  // const toggleDrawer = () => {
  //   console.log("Hii from toggleDrawer");
  // };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { headingName } = useSelector((state: any) => state.heading);

  useEffect(() => {
    console.log("headingName", headingName);
  }, []);

  return (
    <>
      {/* <AppBar>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar> */}
      <div className="flex justify-between bg-[#A5A3AE] py-[16px] px-3">
        <div className="flex gap-3 items-center">
          <h1 className="capatilize">{headingName}</h1>
          <div className="md:hidden block">
            {/* <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Dashboard
          </Button> */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {menuListMenu.map((item: any) => (
                <MenuItem
                  key={item.id}
                  className="py-4 cursor-pointer"
                  onClick={handleClose}
                >
                  <Link to={item.navigateTo}>
                    <p className="text-[#8B909A] text-[15px]">{item.title}</p>
                  </Link>
                </MenuItem>
              ))}
              {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
          </div>
        </div>

        <div>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Header;
