import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    anlaytics_list: null,
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
      fetchAnalytics: (state, action) => {
        state.anlaytics_list = action.payload;
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
        // state.percent_invited_user_account = null;
        // state.invited_other_users = null,
        // state.avg_invited_user = null,
        // state.avg_users_on_wait_list = AnalyticsResponse,
        // state.avg_users_preset = null,
        // state.shared_attribute_connection = null,
        // state.onboarding_time_avg = null,
        // state.avg_number_of_connection_added_via_search = null,
        // state.avg_number_of_manual_contact_added_via_search = null,
        // state.percentage_successful_authentication = null,
        // state.percentage_of_push_notification = null,
        // state.users_import_connection_percentage = null,
        state.loading = false;
      }
    },
  });
  
  
  export const { fetchAnalyticsDataStart, fetchConfiguration, fetchSmsUsers,fetchMostInvitedUsers, fetchInvitedUsers, fetchAllUsers, fetchUsersAttributesGraph, fetchUsersGrowthGraph, fetchAnalyticsDataReset, fetchAnalytics, fetchAnalyticsDataFailure } = analytics.actions;
  export default analytics.reducer;