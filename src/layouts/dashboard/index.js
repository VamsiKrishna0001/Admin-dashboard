import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import WeekendIcon from "@mui/icons-material/Weekend";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import StoreIcon from "@mui/icons-material/Store";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Analytics } from "services/dashboard";
import { fetchAnalytics } from "reducers/analytics";
import { useAppSelector } from "hooks";
import { UserGrowthGraph } from "services/dashboard";
import { fetchUsersGrowthGraph } from "reducers/analytics";
import { UserAttributeGraph } from "services/dashboard";
import { fetchUsersAttributesGraph } from "reducers/analytics";
import GradientCircularProgress from "components/MDLoader";

function Dashboard() {
  const dispatch = useDispatch();
  const {anlaytics_list: analytics, user_growth_graph, user_attribute_graph } = useAppSelector((state)=> state?.analytics);
  const [attributeData, setAttributeData] = useState([]);
  const [isLoader, setLoader] = useState(false);

  let growth_data = {
    labels: user_growth_graph === undefined ? [] : user_growth_graph?.date_list,
    datasets: { label: "Users Joined", data: user_growth_graph === undefined ? [] : user_growth_graph?.dates},
  }
  
  const attribute_data = {
    labels: user_attribute_graph ? user_attribute_graph.user_attributes : [],
    datasets: [ {
      label: "Users Attributes",
      tension: 0.4,
      borderWidth: 0,
      borderRadius: 4,
      borderSkipped: false,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      data: attributeData,
      maxBarThickness: 6,
    },],
  };


  const analyticsData = async ()=>{
    setLoader(true);
    const result = await Analytics();
    dispatch(fetchAnalytics(result));
    setLoader(false);
  }


  const userGrowthData = async ()=>{
    const result = await UserGrowthGraph();
    dispatch(fetchUsersGrowthGraph(result));
  }
  
  const userAttributeData = async ()=>{
    const result = await UserAttributeGraph();
    dispatch(fetchUsersAttributesGraph(result));
    setAttributeData(result.attributes_count);
  }

  useEffect(() => {
    analyticsData()
    userGrowthData();
    userAttributeData();
  }, []);

  useEffect(()=> {

  },[isLoader, attributeData])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon={<WeekendIcon />}
                title="Users In Wait List"
                count={analytics === undefined || null ? isLoader ? <GradientCircularProgress/>: 0 : analytics?.avg_users_on_wait_list}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<LeaderboardIcon />}
                title="% INVITED USERS WHO SIGNED UP"
                count={analytics === undefined || null ? isLoader ? <GradientCircularProgress /> : 0 : analytics?.avg_invited_user}
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon={<StoreIcon />}
                title="USER WHO SENT INVITE"
                count={analytics === undefined || null ? isLoader ? <GradientCircularProgress/>: 0  : analytics?.avg_invited_user}
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon={<PersonAddIcon />}
                title="AVG NO OF REQUEST SENT PER USER"
                count={analytics === undefined || null ? isLoader ? <GradientCircularProgress/>: 0 : analytics?.avg_invited_user}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon={<WeekendIcon />}
                title="% OF USERS ON WAITLIST"
                count={analytics === undefined || null ? isLoader ? <GradientCircularProgress/>: 0 : analytics?.avg_users_on_wait_list}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<LeaderboardIcon />}
                title="% OF USERS PRESETS"
                count={analytics === undefined || null ? isLoader ? <GradientCircularProgress/>: 0 : analytics?.avg_users_preset}
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon={<StoreIcon />}
                title="AVG NO OF SHARED ATTRIBUTES"
                count={analytics === undefined || null ? isLoader ? <GradientCircularProgress/>: 0 : analytics?.shared_attribute_connection}
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon={<PersonAddIcon />}
                title="ON BOARDING TIME"
                count={analytics === undefined || null ? isLoader ? <GradientCircularProgress/>: 0 : analytics?.onboarding_time_avg}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon={<WeekendIcon />}
                title="AVG NO OF CONNECTION ADDED BY SEARCH"
                count={analytics === undefined || null ? isLoader ? <GradientCircularProgress/>: 0 : analytics?.avg_number_of_connection_added_via_search}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<LeaderboardIcon />}
                title="AVG NO OF MUTUAL CONTACTS ADDED BY SEARCH"
                count={analytics === undefined || null ? isLoader ? <GradientCircularProgress/>: 0 : analytics?.avg_number_of_manual_contact_added_via_search}
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon={<StoreIcon />}
                title="% OF SUCCESSFUL AUTHENTICATION"
                count={analytics === undefined || null ? isLoader ? <GradientCircularProgress/>: 0 : analytics?.percentage_successful_authentication}
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon={<PersonAddIcon />}
                title="% SUCCESSFUL PASSWORD RESETS"
                count={analytics === undefined || null ? isLoader ? <GradientCircularProgress/>: 0 : analytics?.percentage_successful_authentication}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon={<WeekendIcon />}
                title="NOTIFICATION ENABLED PERCENTAGE"
                count={analytics === undefined || null ? isLoader ? <GradientCircularProgress/>: 0 : analytics?.percentage_of_push_notification}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<LeaderboardIcon />}
                title="% USER IMPORTED CONTACTS"
                count={analytics === undefined || null ? isLoader ? <GradientCircularProgress/>: 0 : analytics?.users_import_connection_percentage}
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="User Attribute Graph"
                  description="User Attribute Percentage"
                  date="campaign sent 2 days ago"
                  chart={attribute_data}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="User Growth Report"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={growth_data}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
