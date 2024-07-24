import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

export default function data(data ,handleOpen, handleBlockUser) {

  const getButtonColor = (isBlocked) => {
    console.log("getButtonColor", isBlocked);
    return isBlocked ? "error" : "info"; // Adjust colors as needed
  };
  const  columns = [
      { Header: "User Id", accessor: "userid", align: "left" },
      { Header: "Phone Number", accessor: "phoneNumber", align: "left" },
      { Header: "Block User", accessor: "block", align: "center" },
      { Header: "Send Notification", accessor: "sendNotification", align: "center" },
    ];
    let rows = [];
    if(data !== undefined){
      rows = data?.map(user => ({
       userid: (
         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           {user.userID}
         </MDTypography>
       ),
       phoneNumber: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
       {user.phoneNumber}
     </MDTypography>),
       block: (
         <MDButton variant="gradient" color={getButtonColor(user.block)} onClick={()=> handleBlockUser(user)}>
          {user.block ? "Unblock" : "Block"}
         </MDButton>
       ),
       sendNotification: (
         <MDButton variant="gradient" color="info" onClick={() => handleOpen(user)}>
           Send Notification
         </MDButton>
       ),
     }));
    }

    return { columns, rows };
};
