import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useDispatch } from "react-redux";
import { ConfigurationsSettings, Configurations } from "services/dashboard";
import { fetchConfiguration } from "reducers/analytics";
import { useAppSelector } from "hooks";
import MDButton from "components/MDButton";

function PlatformSettings() {
  const { configuration_settings } = useAppSelector(
    (state) => state?.analytics
  );
  const [bypassInviteUser, setBypassInviteUser] = useState(
    Object.keys(configuration_settings).length !== 0
      ? configuration_settings?.bypass_invite_user
      : false
  );
  const [byPassSms, setByPassSms] = useState(
    Object.keys(configuration_settings).length !== 0
      ? configuration_settings?.bypass_sms
      : false
  );
  const [byPassNumber, setByPassNumber] = useState(
    Object.keys(configuration_settings).length !== 0
      ? configuration_settings?.bypass_number
      : false
  );

  const dispatch = useDispatch();
  const usersList = async () => {
    const result = await ConfigurationsSettings();
    setBypassInviteUser(result.bypass_invite_user);
    setByPassSms(result.bypass_sms);
    setByPassNumber(result.bypass_number);
    dispatch(fetchConfiguration(result));
  };

  const update_configuration = async () => {
    const data = {
      bypass_invite_user: bypassInviteUser,
      bypass_sms: byPassSms,
      bypass_number: byPassNumber,
    };
    const result = await Configurations(data);
    if (result.status === 200) {
      alert("Configurations updated successfully");
      dispatch(fetchConfiguration(result.data));
    } else {
      alert("Failed to update configurations");
    }
  };

  useEffect(() => {
    usersList();
  }, []);

  useEffect(() => {}, [bypassInviteUser, byPassSms, byPassNumber]);

  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox p={2}>
        <MDTypography
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize"
        >
          Agent Configurations
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2} lineHeight={1.25}>
        <MDTypography
          variant="caption"
          fontWeight="bold"
          color="text"
          textTransform="uppercase"
        >
          settings
        </MDTypography>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox width="80%" ml={5}>
            <MDTypography variant="button" fontWeight="bold" color="text">
              By Pass Invite User
            </MDTypography>
          </MDBox>
          <MDBox mt={0.5}>
            <Switch
              checked={bypassInviteUser}
              onChange={() => setBypassInviteUser(!bypassInviteUser)}
            />
          </MDBox>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox width="80%" ml={5}>
            <MDTypography variant="button" fontWeight="bold" color="text">
              By Pass Sms
            </MDTypography>
          </MDBox>
          <MDBox mt={0.5}>
            <Switch
              checked={byPassSms}
              onChange={() => setByPassSms(!byPassSms)}
            />
          </MDBox>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox width="80%" ml={5}>
            <MDTypography variant="button" fontWeight="bold" color="text">
              By Pass Change Phone Number
            </MDTypography>
          </MDBox>
          <MDBox mt={0.5}>
            <Switch
              checked={byPassNumber}
              onChange={() => setByPassNumber(!byPassNumber)}
            />
          </MDBox>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <MDButton
          variant="gradient"
          color="info"
          onClick={update_configuration}
        >
          Save
        </MDButton>
      </MDBox>
    </Card>
  );
}

export default PlatformSettings;
