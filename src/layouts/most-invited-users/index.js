import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/Table";

// Data
import tableData from "layouts/most-invited-users/data/tableData";
import { fetchMostInvitedUsers } from "reducers/analytics";
import { useAppSelector } from "hooks";
import { useDispatch } from "react-redux";
import { MostInviteListUsers } from "services/dashboard";
import { useEffect, useState } from "react";

function MostInviteUsersTable() {
  const dispatch = useDispatch()
  const {most_invited_users_list} = useAppSelector((state)=> state?.analytics);
  const [data, setData] = useState(Object.keys(most_invited_users_list).length !== 0 ? most_invited_users_list?.users : [])
  const [filterData, setFilterData] = useState(Object.keys(most_invited_users_list).length !== 0 ? most_invited_users_list?.users : [])
  let { columns, rows } = tableData(data);

  const handleSearch = (search) => {
    const lowerCaseSearch = search.toString().toLowerCase();
    const filteredRows = filterData.filter(([str, num]) => {
      return (
        str.toLowerCase().includes(lowerCaseSearch) || 
        num.toString().includes(lowerCaseSearch)
      );
    });
    setData(filteredRows)
  }
  

  const usersList = async ()=>{
    const result = await MostInviteListUsers();
    dispatch(fetchMostInvitedUsers(result));
    setData(result?.users);
  }

  useEffect(() =>{
    usersList()
  },[]);

  useEffect(()=> {

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
                  Most Invited Users 
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
                  handleSearch={handleSearch}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default MostInviteUsersTable;
