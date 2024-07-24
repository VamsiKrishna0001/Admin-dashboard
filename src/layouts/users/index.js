import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import NotificationModel from "layouts/users/component/send-notification"
import DataTable from "examples/Tables/DataTable";

// Data
import tableData from "layouts/users/data/tableData";
import { useEffect, useState } from "react";
import { useAppSelector } from "hooks";
import { AllUsers } from "services/dashboard";
import { fetchAllUsers } from "reducers/analytics";
import { useDispatch } from "react-redux";
import { BlockUser } from "services/dashboard";
import { SearchInUsers } from "services/dashboard";

function UsersTable() {
  const access_token = localStorage.getItem('admin_access_token');
  const {all_users_list} = useAppSelector((state)=> state?.analytics);
  const dispatch = useDispatch()
  const [notificationData, setNotificationData] = useState({})
  const [data, setData] = useState(all_users_list ? all_users_list?.users : [])
  const [open, setOpen] = useState(false);
  const customEntriesPerPage = { defaultValue: 10, entries: [10, 25, 50] };
  const handleOpen = (user) => {
    setNotificationData(user);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const handleBlockUser = async (user) => {
    const payload = {
      phoneNumber: user.phoneNumber,
      block_user: !user.block
    }
    const result = await BlockUser(payload);
    if(result){
      setData(prevData => {
        return prevData.map(item => 
            item.userID === user.userID 
            ? { ...item, block: !item.block } 
            : item
        );
      });
    }
  }
  const { columns, rows } = tableData(data, handleOpen, handleBlockUser);
  const [pageSize, setPageSize] = useState(10)
  const [totalRows, setTotalRows] = useState(all_users_list ? all_users_list?.total : 0);
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


  const searchList = async (pageIndex, pageSize, search)=> {
    const result = await SearchInUsers(pageIndex, pageSize, search);
    setSearch(search);
    dispatch(fetchAllUsers(result));
    setData(result.users)
    setTotalRows(result.total)
    return {
      total: result.total,
      users: result.users,
    };
  }

  

  const usersList = async (pageIndex, pageSize) =>{
    const result = await AllUsers (pageIndex, pageSize);
    dispatch(fetchAllUsers(result));
    setData(result.users)
    setTotalRows(result.total)
    return {
      total: result.total,
      users: result.users,
    };
  }

  useEffect(() =>{
    usersList(pageIndex, pageSize)
  },[]);

  useEffect(()=>{
  },[data])

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
                  Users Table
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
      <NotificationModel open={open} handleClose={handleClose} data = {notificationData}/>
    </DashboardLayout>
  );
}

export default UsersTable;
