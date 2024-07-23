import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import NotificationModel from "layouts/sms-logs/component/send-notification"
import DataTable from "examples/Tables/DataTable";

// Data
import tableData from "layouts/sms-logs/data/tableData";
import { useDispatch } from "react-redux";
import { useAppSelector } from "hooks";
import { SmsListUsers } from "services/dashboard";
import { useEffect, useState } from "react";
import { fetchSmsUsers } from "reducers/analytics";

function InviteUsersTable() {
  const customEntriesPerPage = { defaultValue: 10, entries: [10, 25, 50] };
  const access_token = localStorage.getItem('admin_access_token');
  const {sms_users_list} = useAppSelector((state)=> state?.analytics);
  const dispatch = useDispatch()
  const [data, setData] = useState(sms_users_list)
  const [pageSize, setPageSize] = useState(customEntriesPerPage.defaultValue)
  const { columns, rows } = tableData(sms_users_list);
  const [totalRows, setTotalRows] = useState(sms_users_list ? sms_users_list?.total : 0);
  const [pageIndex, setPageIndex] = useState(1);


  const usersList = async (pageIndex, pageize) => {
    const result = await SmsListUsers(pageIndex, pageize);
    dispatch(fetchSmsUsers(result));
    return {
      total: result.total,
      users: result.users,
    };
  }

  useEffect(() =>{
    usersList(0, pageSize)
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
                  Users Sms Logs Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                  canSearch={true}
                  totalRows={totalRows}
                  pageIndex={pageIndex}
                  pageSize={pageSize}
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
