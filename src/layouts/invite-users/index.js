import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import inviteUsersTableData from "layouts/invite-users/data/inviteUsersTableData";
import { useAppSelector } from "hooks";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchInvitedUsers } from "reducers/analytics";
import { InviteListUsers } from "services/dashboard";

function InviteUsersTable() {
  const customEntriesPerPage = { defaultValue: 10, entries: [10, 25, 50] };
  const access_token = localStorage.getItem('admin_access_token');
  const {invite_users_list} = useAppSelector((state)=> state?.analytics);
  const dispatch = useDispatch()
  const [data, setData] = useState(invite_users_list)
  const { columns, rows } = inviteUsersTableData(invite_users_list);


  const usersList = async (access_token)=>{
    const result = await InviteListUsers(access_token);
    dispatch(fetchInvitedUsers(result));
  }

  useEffect(() =>{
    usersList(access_token)
  },[]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Invite Users Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={customEntriesPerPage}
                  showTotalEntries={false}
                  noEndBorder
                  canSearch={true}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default InviteUsersTable;
