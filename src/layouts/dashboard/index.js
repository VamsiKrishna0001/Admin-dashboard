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
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useAppSelector } from "hooks";
import { UserGrowthGraph } from "services/dashboard";
import { fetchUsersGrowthGraph } from "reducers/analytics";
import { UserAttributeGraph } from "services/dashboard";
import { fetchUsersAttributesGraph } from "reducers/analytics";
import GradientCircularProgress from "components/MDLoader";
import { AnalyticsOnBoardTime } from "services/dashboard";
import { AnalyticsPercentage } from "services/dashboard";
import { AnalyticAvg } from "services/dashboard";
import { fetchAnalyticsAvg } from "reducers/analytics";
import { fetchAnalyticsPercentage } from "reducers/analytics";
import { fetchAnalyticsOnBoard } from "reducers/analytics";

function Dashboard() {
  const dispatch = useDispatch();
  const {
    analytics_avg,
    analytics_percentage,
    analytics_onboard_time,
    user_growth_graph,
    user_attribute_graph,
  } = useAppSelector((state) => state?.analytics);
  const [attributeCountData, setAttributeCountData] = useState(
    Object.keys(user_attribute_graph).length !== 0
      ? user_attribute_graph.attributes_count
      : []
  );
  const [attributeData, setAttributeData] = useState(
    Object.keys(user_attribute_graph).length !== 0
      ? user_attribute_graph.user_attributes
      : []
  );
  const [datesList, setDatesList] = useState(
    Object.keys(user_growth_graph).length !== 0
      ? user_growth_graph?.date_list
      : []
  );
  const [dates, setDates] = useState(
    Object.keys(user_growth_graph).length !== 0 ? user_growth_graph?.dates : []
  );
  const [isLoaderAvg, setLoaderAvg] = useState(false);
  const [isLoaderPerc, setLoaderPerc] = useState(false);

  let growth_data = {
    labels: datesList,
    datasets: { label: "Users Joined", data: dates },
  };

  console.log("analytics_avg", analytics_avg);

  const attribute_data = {
    labels: attributeData,
    datasets: [
      {
        label: "Users Attributes",
        tension: 0.4,
        borderWidth: 0,
        borderRadius: 4,
        borderSkipped: false,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        data: attributeCountData,
        maxBarThickness: 6,
      },
    ],
  };

  const analyticsAvgData = async () => {
    setLoaderAvg(true);
    const result = await AnalyticAvg();
    dispatch(fetchAnalyticsAvg(result));
    setLoaderAvg(false);
  };
  const analyticsPercentageData = async () => {
    setLoaderPerc(true);
    const result = await AnalyticsPercentage();
    dispatch(fetchAnalyticsPercentage(result));
    setLoaderPerc(false);
  };
  const analyticsOnboardData = async () => {
    const result = await AnalyticsOnBoardTime();
    dispatch(fetchAnalyticsOnBoard(result.onboarding_time_avg));
  };

  const userGrowthData = async () => {
    const result = await UserGrowthGraph();
    dispatch(fetchUsersGrowthGraph(result));
    setDates(result.dates);
    setDatesList(result.date_list);
  };

  const userAttributeData = async () => {
    const result = await UserAttributeGraph();
    dispatch(fetchUsersAttributesGraph(result));
    setAttributeCountData(result.attributes_count);
    setAttributeData(result.user_attributes);
  };

  useEffect(() => {
    analyticsAvgData();
    analyticsPercentageData();
    userGrowthData();
    userAttributeData();
    analyticsOnboardData();
  }, []);

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
                count={
                  Object.keys(analytics_avg).length === 0 ? (
                    isLoaderAvg ? (
                      <GradientCircularProgress size={35} />
                    ) : (
                      0
                    )
                  ) : (
                    analytics_avg?.user_wait_list
                  )
                }
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
                count={
                  Object.keys(analytics_percentage).length === 0 ? (
                    isLoaderPerc ? (
                      <GradientCircularProgress size={35} />
                    ) : (
                      0
                    )
                  ) : (
                    analytics_percentage?.percent_invited_user_account
                  )
                }
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
                count={
                  Object.keys(analytics_avg).length === 0 ? (
                    isLoaderAvg ? (
                      <GradientCircularProgress size={35} />
                    ) : (
                      0
                    )
                  ) : (
                    analytics_avg?.invited_other_users
                  )
                }
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
                count={
                  Object.keys(analytics_avg).length === 0 ? (
                    isLoaderAvg ? (
                      <GradientCircularProgress size={35} />
                    ) : (
                      0
                    )
                  ) : (
                    analytics_avg?.avg_invited_user
                  )
                }
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
                count={
                  Object.keys(analytics_avg).length === 0 ? (
                    isLoaderAvg ? (
                      <GradientCircularProgress size={35} />
                    ) : (
                      0
                    )
                  ) : (
                    Object.keys(analytics_avg).length ===
                    0?.avg_users_on_wait_list
                  )
                }
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
                count={
                  Object.keys(analytics_avg).length === 0 ? (
                    isLoaderAvg ? (
                      <GradientCircularProgress size={35} />
                    ) : (
                      0
                    )
                  ) : (
                    analytics_avg?.avg_users_preset
                  )
                }
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
                count={
                  Object.keys(analytics_avg).length === 0 ? (
                    isLoaderAvg ? (
                      <GradientCircularProgress size={35} />
                    ) : (
                      0
                    )
                  ) : (
                    Object.keys(analytics_avg).length ===
                    0?.shared_attribute_connection
                  )
                }
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
                count={analytics_onboard_time ? '00:00:00' : analytics_onboard_time}
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
                count={
                  Object.keys(analytics_avg).length === 0 ? (
                    isLoaderAvg ? (
                      <GradientCircularProgress size={35} />
                    ) : (
                      0
                    )
                  ) : (
                    Object.keys(analytics_avg).length ===
                    0?.avg_number_of_connection_added_via_search
                  )
                }
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
                count={
                  Object.keys(analytics_avg).length === 0 ? (
                    isLoaderPerc ? (
                      <GradientCircularProgress size={35} />
                    ) : (
                      0
                    )
                  ) : (
                    Object.keys(analytics_avg).length ===
                    0?.avg_number_of_manual_contact_added_via_search
                  )
                }
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
                count={
                  Object.keys(analytics_percentage).length === 0 ? (
                    isLoaderPerc ? (
                      <GradientCircularProgress size={35} />
                    ) : (
                      0
                    )
                  ) : (
                    analytics_percentage?.percentage_successful_authentication
                  )
                }
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
                count={
                  Object.keys(analytics_percentage).length === 0 ? (
                    isLoaderPerc ? (
                      <GradientCircularProgress size={35} />
                    ) : (
                      0
                    )
                  ) : (
                    analytics_percentage?.forget_password_reset_percentage
                  )
                }
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
                title="% OF NOTIFICATION ENABLED"
                count={
                  Object.keys(analytics_percentage).length === 0 ? (
                    isLoaderPerc ? (
                      <GradientCircularProgress size={35} />
                    ) : (
                      0
                    )
                  ) : (
                    analytics_percentage?.percentage_of_push_notification
                  )
                }
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
                count={
                  Object.keys(analytics_percentage).length === 0 ? (
                    isLoaderPerc ? (
                      <GradientCircularProgress size={35} />
                    ) : (
                      0
                    )
                  ) : (
                    analytics_percentage?.users_import_connection_percentage
                  )
                }
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
        <MDBox></MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
