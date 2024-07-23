

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

export default function data(data) {

const columns = [
  { Header: "Phone Number", accessor: "phoneNumber", align: "left" },
  { Header: "Invited By", accessor: "invitedBy", align: "left" },
  { Header: "Name", accessor: "name", align: "center" },
  { Header: "User Number", accessor: "userNumber", align: "center" },
  { Header: "Joined", accessor: "Joined", align: "center" },
]

let rows = [];
    if(data !== undefined){
      rows = data?.users?.map(user => ({
        phoneNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           {user?.phonenumber}
          </MDTypography>
        ),
        invitedBy: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      {user?.invitedby}
      </MDTypography>),
        name:  ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {user?.name}
      </MDTypography>),
        userNumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           {user?.invited_user_phonenumber}
          </MDTypography>
        ),
        Joined: (
          <MDBox ml={-1}>
            <MDBadge badgeContent={user?.is_joined ? "true" : "false"} color={user?.is_joined ? "success": "dark"} variant="gradient" size="sm" />
          </MDBox>
        )
      }));
    }

    return { columns, rows };
};
