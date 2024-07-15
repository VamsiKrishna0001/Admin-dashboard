import React from "react";
import Modal from "@mui/material/Modal";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

export default function NotificationModal({ open, handleClose }) {
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
          Send Notification
        </MDTypography>
        <MDBox component="form" mt={2}>
          <MDInput fullWidth label="Title" margin="normal" />
          <MDInput fullWidth label="Subtitle" margin="normal" />
          <MDInput fullWidth label="Message" margin="normal" multiline rows={4} />
          <MDInput fullWidth label="Usernames" margin="normal" />
          <MDInput fullWidth label="Message Type" margin="normal" />
          <MDBox mt={2} display="flex" justifyContent="space-between">
            <MDButton variant="outlined" color="secondary" onClick={handleClose}>
              Close
            </MDButton>
            <MDButton variant="contained" color="primary">
              Send
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Modal>
  );
}
