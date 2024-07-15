

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

export default function data() {

  return {
    columns: [
      { Header: "Phone Number", accessor: "phoneNumber", align: "left" },
      { Header: "Invited By", accessor: "invitedBy", align: "left" },
      { Header: "Name", accessor: "name", align: "center" },
      { Header: "User Number", accessor: "userNumber", align: "center" },
      { Header: "Joined", accessor: "Joined", align: "center" },
    ],

    rows: [
      {
        phoneNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +9809090903399
          </MDTypography>
        ),
        invitedBy: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
       54322324
      </MDTypography>),
        name:  ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        hkbkh hbj
      </MDTypography>),
        userNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +98090903388
          </MDTypography>
        ),
        Joined: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="true" color="success" variant="gradient" size="sm" />
          </MDBox>
        )
      },
      {
        phoneNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +9809090903399
          </MDTypography>
        ),
        invitedBy: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        564632
      </MDTypography>),
        name:  ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        bfkbk khbkb
      </MDTypography>),
        userNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +98090903388
          </MDTypography>
        ),
        Joined: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="false" color="dark" variant="gradient" size="sm" />
          </MDBox>
        )
      },
      {
        phoneNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +9809090903399
          </MDTypography>
        ),
        invitedBy: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        654634343
      </MDTypography>),
        name: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        kfb bkjbk
      </MDTypography>),
        userNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           +98090903388
          </MDTypography>
        ),
        Joined: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="true" color="success" variant="gradient" size="sm" />
          </MDBox>
        )
      },
      {
        phoneNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +9809090903399
          </MDTypography>
        ),
        invitedBy: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        246453
      </MDTypography>),
        name:  ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        ifhbksb kbkhbk
      </MDTypography>),
        userNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +98090903388
          </MDTypography>
        ),
        Joined: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="true" color="success" variant="gradient" size="sm" />
          </MDBox>
        )
      },
      {
        phoneNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +9809090903399
          </MDTypography>
        ),
        invitedBy: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        324534
      </MDTypography>),
        name:  ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        cjbkdb  kbkb
      </MDTypography>),
        userNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +98090903388
          </MDTypography>
        ),
        Joined:(
          <MDBox ml={-1}>
            <MDBadge badgeContent="true" color="success" variant="gradient" size="sm" />
          </MDBox>
        )
      },
      {
        phoneNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +9809090903399
          </MDTypography>
        ),
        invitedBy: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        089897
      </MDTypography>),
        name:  ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Nbkhbds bcskjbckbsdj
      </MDTypography>),
        userNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            +98090903388
          </MDTypography>
        ),
        Joined: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="true" color="success" variant="gradient" size="sm" />
          </MDBox>
        )
      },
    ],
  };
};
