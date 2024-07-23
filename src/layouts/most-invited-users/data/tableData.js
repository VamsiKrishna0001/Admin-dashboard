import MDTypography from "components/MDTypography";

export default function data(data) {


  const columns = [
    { Header: "User Name", accessor: "name", align: "left" },
    { Header: "Invited Users Count", accessor: "invited_users_count", align: "left" },
  ]
  
  let rows = [];
      if(data !== undefined){
        rows = data?.map(user => ({
          name:  ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {user?.[0]}
        </MDTypography>),
          invited_users_count: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {user?.[1]}
        </MDTypography>)
        }));
      }
  
      return { columns, rows };

};
