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
import { SearchInSmstUsers } from "services/dashboard";

function InviteUsersTable() {
  const {sms_users_list} = useAppSelector((state)=> state?.analytics);
  const dispatch = useDispatch()
  const [data, setData] = useState(sms_users_list ? sms_users_list?.users: [])
  const [pageSize, setPageSize] = useState(10)
  const { columns, rows } = tableData(data);
  const [totalRows, setTotalRows] = useState(sms_users_list ? sms_users_list?.total : 0);
  const [pageIndex, setPageIndex] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState('');

  const previousPage = async ()=> {
    if (pageIndex >= 0) {
      !isSearch ? await usersList(pageIndex-1, pageSize) : await searchList(pageIndex-1, pageSize, search)
      setPageIndex(pageIndex-1)
    }
  }

  const nextPage =async ()=> {
    if (pageIndex >= 0) {
      !isSearch ? await usersList(pageIndex+1, pageSize) : await searchList(pageIndex+1, pageSize, search)
      setPageIndex(pageIndex+1)
    }
  }

  const setEntriesPerPage = async (value) =>{
    if (pageIndex >= 0) {
      !isSearch ? await usersList(pageIndex, value) : await searchList(pageIndex, value, search)
      setPageSize(value);
    }
  }


  const usersList = async (pageIndex, pageSize) => {
    const result = await SmsListUsers(pageIndex, pageSize);
    dispatch(fetchSmsUsers(result));
    setData(result?.users);
    setTotalRows(result.total)
    return {
      total: result.total,
      users: result.users,
    };
  }

  const searchList = async (pageIndex, pageSize, search)=> {
    const result = await SearchInSmstUsers(pageIndex, pageSize, search);
    setSearch(search);
    dispatch(fetchSmsUsers(result));
    setData(result?.users);
    setTotalRows(result.total)
    return {
      total: result.total,
      users: result.users,
    };
  }

  useEffect(() =>{
    usersList(pageIndex, pageSize)
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
                  showTotalEntries={true}
                  noEndBorder
                  canSearch={true}
                  totalRows={totalRows}
                  pageIndex={pageIndex}
                  pageSize={pageSize}
                  setPageIndex={setPageIndex}
                  setPageSize={setPageSize}
                  previousPage={previousPage}
                  nextPage={nextPage}
                  setEntriesPerPage={setEntriesPerPage}
                  searchList={searchList}
                  setIsSearch={setIsSearch}
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
