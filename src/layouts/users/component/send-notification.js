import React from "react";
import Modal from "@mui/material/Modal";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SendNotification } from "services/dashboard";
import { showSuccessToast } from "components/MDToast";

// Validation schema
const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  subtitle: Yup.string().required("Subtitle is required"),
  message: Yup.string().required("Message is required"),
  usernames: Yup.string().required("Usernames are required"),
  type: Yup.string().required("Message Type is required"),
});

export default function NotificationModal({ open, handleClose, data }) {
  const handleSubmit = async (values) => {
    // Handle form submission here
    console.log(values);
    handleClose(); // Close the modal on successful submission
    const result = await SendNotification(values);
    if(result){
      showSuccessToast("Notification sent successfully", true);
    }
  };

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
        <Formik
          initialValues={{
            title: '',
            subtitle: '',
            message: '',
            usernames: data?.username,
            type: 'Admin Notification',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <MDBox mt={2}>
                <Field
                  as={MDInput}
                  fullWidth
                  label="Title"
                  margin="normal"
                  name="title"
                  error={touched.title && Boolean(errors.title)}
                  helperText={<ErrorMessage name="title" />}
                />
              </MDBox>
              <MDBox mt={2}>
                <Field
                  as={MDInput}
                  fullWidth
                  label="Subtitle"
                  margin="normal"
                  name="subtitle"
                  error={touched.subtitle && Boolean(errors.subtitle)}
                  helperText={<ErrorMessage name="subtitle" />}
                />
              </MDBox>
              <MDBox mt={2}>
                <Field
                  as={MDInput}
                  fullWidth
                  label="Message"
                  margin="normal"
                  name="message"
                  multiline
                  rows={4}
                  error={touched.message && Boolean(errors.message)}
                  helperText={<ErrorMessage name="message" />}
                />
              </MDBox>
              <MDBox mt={2}>
                <Field
                  as={MDInput}
                  fullWidth
                  disabled
                  label="Username"
                  margin="normal"
                  name="usernames"
                  error={touched.usernames && Boolean(errors.usernames)}
                  helperText={<ErrorMessage name="usernames" />}
                />
              </MDBox>
              <MDBox mt={2}>
                <Field
                  as={MDInput}
                  fullWidth
                  label="Message Type"
                  margin="normal"
                  name="type"
                  error={touched.type && Boolean(errors.type)}
                  helperText={<ErrorMessage name="type" />}
                />
              </MDBox>
              <MDBox mt={2} display="flex" justifyContent="space-between">
                <MDButton variant="outlined" color="secondary" type="button" onClick={handleClose}>
                  Close
                </MDButton>
                <MDButton variant="contained" color="primary" type="submit">
                  Send
                </MDButton>
              </MDBox>
            </Form>
          )}
        </Formik>
      </MDBox>
    </Modal>
  );
}