import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

export default function data(data ,handleOpen) {
  const  columns = [
      { Header: "User Id", accessor: "userid", align: "left" },
      { Header: "Username", accessor: "username", align: "left" },
      { Header: "Block User", accessor: "isblock", align: "center" },
      { Header: "Send Notification", accessor: "sendNotification", align: "center" },
    ];
    let rows = [];
    if(data !== undefined){
      rows = data?.users?.map(user => ({
       userid: (
         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           {user.userID}
         </MDTypography>
       ),
       username: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
       {user.username}
     </MDTypography>),
       isblock: (
         <MDButton variant="gradient" color="info" onClick={handleOpen}>
          {user.isblock ? "Unblock" : "Block"}
         </MDButton>
       ),
       sendNotification: (
         <MDButton variant="gradient" color="info" onClick={handleOpen}>
           Send Notification
         </MDButton>
       ),
     }));
    }

    return { columns, rows };
};
