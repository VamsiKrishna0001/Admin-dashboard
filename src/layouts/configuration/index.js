import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";


import PlatformSettings from "layouts/configuration/components/PlatformSettings";


function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} xl={12}>
              <PlatformSettings />
            </Grid>
          </Grid>
        </MDBox>
    </DashboardLayout>
  );
}

export default Overview;
