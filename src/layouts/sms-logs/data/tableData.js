

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

export default function data() {

  return {
    columns: [
      { Header: "Phone Number", accessor: "phoneNumber", align: "left" },
      { Header: "Sender", accessor: "Sender", align: "left" },
      { Header: "Content", accessor: "Content", align: "left" },
      { Header: "Type", accessor: "type", align: "left" },
      { Header: "Created Time", accessor: "created_at", align: "left" },
    ],

    rows: [
      {
        phoneNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +9809090903399
          </MDTypography>
        ),
        Sender: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        System
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
      },
      {
        phoneNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +9809090903399
          </MDTypography>
        ),
        Sender: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
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
      },
      {
        phoneNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +9809090903399
          </MDTypography>
        ),
        Sender: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        System
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
      },
      {
        phoneNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +9809090903399
          </MDTypography>
        ),
        Sender: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        System
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
      },
      {
        phoneNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +9809090903399
          </MDTypography>
        ),
        Sender: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
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
      },
      {
        phoneNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +9809090903399
          </MDTypography>
        ),
        Sender: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
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
      },
    ],
  };
};
