import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    analytics_avg: {},
    analytics_percentage: {},
    analytics_onboard_time: '00:00:00',
    user_growth_graph: {},
    user_attribute_graph: {},
    all_users_list: {},
    invite_users_list: {},
    most_invited_users_list: {},
    sms_users_list: {},
    configuration_settings: {},
    loading: false
  };
  
  
  const analytics = createSlice({
    name: 'analytics',
    initialState,
    reducers: {
      fetchAnalyticsDataStart: (state) => {
        state.loading = true;
      },
      fetchAnalyticsOnBoard: (state, action) => {
        state.analytics_onboard_time = action.payload;
        state.loading = false;
      },
      fetchAnalyticsAvg: (state, action) => {
        state.analytics_avg = action.payload;
        state.loading = false;
      },
      fetchAnalyticsPercentage: (state, action) => {
        state.analytics_percentage = action.payload;
        state.loading = false;
      },
      fetchUsersGrowthGraph: (state, action) => {
        state.user_growth_graph = action.payload;
        state.loading = false;
      },
      fetchUsersAttributesGraph: (state, action) => {
        state.user_attribute_graph = action.payload;
        state.loading = false;
      },
      fetchAllUsers: (state, action) => {
        state.all_users_list = action.payload;
        state.loading = false;
      },
      fetchInvitedUsers: (state, action) => {
        state.invite_users_list = action.payload;
        state.loading = false;
      },
      fetchMostInvitedUsers: (state, action) => {
        state.most_invited_users_list = action.payload;
        state.loading = false;
      },
      fetchSmsUsers: (state, action) => {
        state.sms_users_list = action.payload;
        state.loading = false;
      },
      fetchConfiguration: (state, action) => {
        state.configuration_settings = action.payload;
        state.loading = false;
      },
      fetchAnalyticsDataFailure: (state) => {
        state.loading = false;
      },
      fetchAnalyticsDataReset: (state) => {
        state.loading = false;
      }
    },
  });
  
  
  export const { fetchAnalyticsDataStart, fetchAnalyticsOnBoard, fetchAnalyticsAvg, fetchAnalyticsPercentage, fetchConfiguration, fetchSmsUsers,fetchMostInvitedUsers, fetchInvitedUsers, fetchAllUsers, fetchUsersAttributesGraph, fetchUsersGrowthGraph, fetchAnalyticsDataReset, fetchAnalyticsDataFailure } = analytics.actions;
  export default analytics.reducer;