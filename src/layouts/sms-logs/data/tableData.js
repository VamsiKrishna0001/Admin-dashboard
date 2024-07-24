

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

export default function data(data) {
  const columns = [
    { Header: "Phone Number", accessor: "phoneNumber", align: "left" },
    { Header: "Sender", accessor: "Sender", align: "left" },
    { Header: "Content", accessor: "Content", align: "left" },
    { Header: "Type", accessor: "type", align: "left" },
    { Header: "Created Time", accessor: "created_at", align: "left" },
  ]
  
  let rows = [];
      if(data !== undefined){
        rows = data?.map(user => ({
          phoneNumber: (
            <MDTypography  variant="caption" color="text" fontWeight="medium">
             {user?.phonenumber}
            </MDTypography>
          ),
          Sender: ( <MDTypography  variant="caption" color="text" fontWeight="medium">
          {user?.sender}
        </MDTypography>),
          Content:  ( <MDTypography variant="caption" color="text" fontWeight="medium">
           {user?.content}
        </MDTypography>),
          type: (
            <MDTypography  variant="caption" color="text" fontWeight="medium">
               {user?.type}
            </MDTypography>
          ),
          created_at: (
            <MDTypography  variant="caption" color="text" fontWeight="medium">
             {user?.created_at?.slice(0, 10)}
          </MDTypography>
          ),
        }));
      }
  
      return { columns, rows };
};
