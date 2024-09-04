import { PropTypes } from "prop-types";
import { Box, Toolbar } from "@mui/material";
import { Navbar, Sidebar } from "../components";

const drawerWidth = 240;  

export const DiarioLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/*Navbar*/}
      <Navbar drawerWidth={drawerWidth}  />

      {/* Sidebar */}
      <Sidebar drawerWidth={drawerWidth} />



      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar/>
        {children}
      </Box>
    </Box>
  );
};

DiarioLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
