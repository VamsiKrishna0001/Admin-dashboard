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
import { SearchInInviteListUsers } from "services/dashboard";

function InviteUsersTable() {
  const customEntriesPerPage = { defaultValue: 10, entries: [10, 25, 50] };
  const access_token = localStorage.getItem('admin_access_token');
  const {invite_users_list} = useAppSelector((state)=> state?.analytics);
  const dispatch = useDispatch()
  const [data, setData] = useState(invite_users_list)
  const { columns, rows } = inviteUsersTableData(invite_users_list);
  const [pageSize, setPageSize] = useState(10)
  const [totalRows, setTotalRows] = useState(invite_users_list ? invite_users_list?.total : 0);
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
    const result = await InviteListUsers(pageIndex, pageSize);
    dispatch(fetchInvitedUsers(result));
    return {
      total: result.total,
      users: result.users,
    };
  }

  const searchList = async (pageIndex, pageSize, search)=> {
    const result = await SearchInInviteListUsers(pageIndex, pageSize, search);
    setSearch(search);
    dispatch(fetchInvitedUsers(result));
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
                  Invite Users Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={customEntriesPerPage}
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
