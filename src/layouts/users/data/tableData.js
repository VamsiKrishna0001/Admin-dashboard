

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";

export default function data(handleOpen) {

  return {
    columns: [
      { Header: "User Id", accessor: "userid", align: "left" },
      { Header: "Username", accessor: "username", align: "left" },
      { Header: "Block User", accessor: "isblock", align: "center" },
      { Header: "Send Notification", accessor: "sendNotification", align: "center" },
    ],

    rows: [
      {
        userid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            90903399
          </MDTypography>
        ),
        username: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        98989
      </MDTypography>),
        Content:  ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Agent App two-factor authentication code: 568215
      </MDTypography>),
        type: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            MFA
          </MDTypography>
        ),
        created_at: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          2023-01-21 22:06:23.827035+00:00
        </MDTypography>
        ),
        isblock: (
          <MDButton variant="gradient" color="info" onClick={handleOpen}>
            Block
          </MDButton>
        ),
        sendNotification: (
          <MDButton variant="gradient" color="info" onClick={handleOpen}>
            Send Notification
          </MDButton>
        ),
      },
      {
        userid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            090903399
          </MDTypography>
        ),
        username: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        564632
      </MDTypography>),
        Content:  ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Agent App two-factor authentication code: 568215
      </MDTypography>),
        type: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            FORGET_PASSWORD
          </MDTypography>
        ),
        created_at: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          2023-01-21 22:06:23.827035+00:00
        </MDTypography>
        ),
        isblock: (
          <MDButton variant="gradient" color="info" onClick={handleOpen}>
            Unblock
          </MDButton>
        ),
        sendNotification: (
          <MDButton variant="gradient" color="info" onClick={handleOpen}>
            Send Notification
          </MDButton>
        ),
      },
      {
        userid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            9090903399
          </MDTypography>
        ),
        username: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        909090
      </MDTypography>),
        Content: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
       Agent App two-factor authentication code: 568215
      </MDTypography>),
        type: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           FORGET_PASSWORD
          </MDTypography>
        ),
        created_at: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          2023-01-21 22:06:23.827035+00:00
        </MDTypography>
        ),
        isblock: (
          <MDButton variant="gradient" color="info" onClick={handleOpen}>
            Unblock
          </MDButton>
        ),
        sendNotification: (
          <MDButton variant="gradient" color="info" onClick={handleOpen}>
            Send Notification
          </MDButton>
        ),
      },
      {
        userid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            09090903399
          </MDTypography>
        ),
        username: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        6787997
      </MDTypography>),
        Content:  ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Agent App two-factor authentication code: 568215
      </MDTypography>),
        type: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Sms_Invite
          </MDTypography>
        ),
        created_at: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          2023-01-21 22:06:23.827035+00:00
        </MDTypography>
        ),
        isblock: (
          <MDButton variant="gradient" color="info" onClick={handleOpen}>
            Block
          </MDButton>
        ),
        sendNotification: (
          <MDButton variant="gradient" color="info" onClick={handleOpen}>
            Send Notification
          </MDButton>
        ),
      },
      {
        userid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            9090903399
          </MDTypography>
        ),
        username: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        324534
      </MDTypography>),
        Content:  ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Agent App two-factor authentication code: 568215
      </MDTypography>),
        type: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            MFA
          </MDTypography>
        ),
        created_at:(
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          2023-01-21 22:06:23.827035+00:00
        </MDTypography>
        ),
        isblock: (
          <MDButton variant="gradient" color="info" onClick={handleOpen}>
            Block
          </MDButton>
        ),
        sendNotification: (
          <MDButton variant="gradient" color="info" onClick={handleOpen}>
            Send Notification
          </MDButton>
        ),
      },
      {
        userid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            9090903399
          </MDTypography>
        ),
        username: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        089897
      </MDTypography>),
        Content:  ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Agent App two-factor authentication code: 568215
      </MDTypography>),
        type: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Sms_Invite
          </MDTypography>
        ),
        created_at: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          2023-01-21 22:06:23.827035+00:00
        </MDTypography>
        ),
        isblock: (
          <MDButton variant="gradient" color="info" onClick={handleOpen}>
            Unblock
          </MDButton>
        ),
        sendNotification: (
          <MDButton variant="gradient" color="info" onClick={handleOpen}>
            Send Notification
          </MDButton>
        ),
      },
    ],
  };
};
