import React from "react";
import Modal from "@mui/material/Modal";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

export default function LogoutModal({ open, handleClose, handleLogout }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <MDBox
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 3,
        }}
      >
        <MDTypography variant="h6" component="h2" textAlign={"center"}>
            Are you sure you want to log out ?
        </MDTypography>
        <MDBox component="form" mt={2}>
          <MDBox mt={2} display="flex" justifyContent="space-between">
            <MDButton variant="outlined" size="small" color="secondary" onClick={handleClose}>
              Cancel
            </MDButton>
            <MDButton variant="contained" size="small" color="primary" onClick={handleLogout}>
              Logout
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Modal>
  );
}
