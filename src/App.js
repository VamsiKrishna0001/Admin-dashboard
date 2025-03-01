import { useState, useEffect, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
// Material Dashboard 2 React themes
import theme from "./assets/theme";
import SettingsIcon from "@mui/icons-material/Settings";
// Material Dashboard 2 React Dark Mode themes
import themeDark from "./assets/theme-dark";
import Sidenav from "examples/Sidenav";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import agentIcon from "assets/images/agent-img.png";

import {
  useMaterialUIController,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";
// Material Dashboard 2 React routes
import routes from "./routes";
import Configurator from "examples/Configurator";
import { ToastContainer } from "react-toastify";

function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    darkMode,
    layout,
    sidenavColor,
    openConfigurator,
    transparentSidenav,
    whiteSidenav,
    miniSidenav,
  } = controller;
  const { pathname } = useLocation();
  const [onMouseEnter, setOnMouseEnter] = useState(false);

  const adminAccessToken = localStorage.getItem("admin_access_token");
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleConfiguratorOpen = () =>
    setOpenConfigurator(dispatch, !openConfigurator);

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <SettingsIcon />
    </MDBox>
  );

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  console.log("layout", layout);
  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={
              (transparentSidenav && !darkMode) || whiteSidenav
                ? agentIcon
                : agentIcon
            }
            brandName="Agent Admin Dashboard"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        {adminAccessToken === null && (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
}

export default App;
