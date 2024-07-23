/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useDispatch } from "react-redux";
import { ConfigurationsSettings, Configurations } from "services/dashboard";
import { fetchConfiguration } from "reducers/analytics";
import { useAppSelector } from "hooks";
import MDButton from "components/MDButton";

function PlatformSettings() {
  const access_token = localStorage.getItem('admin_access_token');
  const {configuration_settings} = useAppSelector((state)=> state?.analytics);
  const [bypassInviteUser, setBypassInviteUser] = useState(configuration_settings?.bypass_invite_user);
  const [byPassSms, setByPassSms] = useState(configuration_settings?.bypass_sms);
  const [byPassNumber, setByPassNumber] = useState(configuration_settings?.bypass_number);

  const dispatch = useDispatch()
  const usersList = async (access_token)=>{
    const result = await ConfigurationsSettings(access_token);
    dispatch(fetchConfiguration(result));
  }

  const update_configuration = async () => {
    const data = {
      bypass_invite_user: bypassInviteUser,
      bypass_sms: byPassSms,
      bypass_number: byPassNumber,
    };
    const result = await Configurations(access_token, data);
    if (result.status === 200) {
      alert("Configurations updated successfully");
      dispatch(fetchConfiguration(result.data));
    } else {
      alert("Failed to update configurations");
    }
  };

  useEffect(() =>{
    usersList(access_token)
  },[]);

  useEffect(() =>{

  },[bypassInviteUser, byPassSms, byPassNumber])

  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox p={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Agent Configurations
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2} lineHeight={1.25}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          settings
        </MDTypography>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox width="80%" ml={5}>
            <MDTypography variant="button" fontWeight="bold" color="text">
              By Pass Invite User
            </MDTypography>
          </MDBox>
          <MDBox mt={0.5}>
            <Switch checked={bypassInviteUser} onChange={() => setBypassInviteUser(!bypassInviteUser)} />
          </MDBox>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox width="80%" ml={5}>
            <MDTypography variant="button" fontWeight="bold" color="text">
              By Pass Sms
            </MDTypography>
          </MDBox>
          <MDBox mt={0.5}>
            <Switch checked={byPassSms} onChange={() => setByPassSms(!byPassSms)} />
          </MDBox>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox width="80%" ml={5}>
            <MDTypography variant="button" fontWeight="bold" color="text">
              By Pass Change Phone Number
            </MDTypography>
          </MDBox>
          <MDBox mt={0.5}>
            <Switch checked={byPassNumber} onChange={() => setByPassNumber(!byPassNumber)} />
          </MDBox>
        </MDBox>

      </MDBox>
      <MDBox p={2}>
        <MDButton variant="gradient" color="info" onClick={update_configuration}>
         Save
        </MDButton>
      </MDBox>
    </Card>
  );
}

export default PlatformSettings;
