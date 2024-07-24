

import { useState } from "react";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import { useFormik } from "formik";
import * as Yup from "yup";

import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { login } from "services/auth";
import { useNavigate } from "react-router-dom";
import { showSuccessToast } from "components/MDToast";

const Basic = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    number: Yup.number()
    .typeError("Must be a number")
    .integer("Must be an integer")
    .positive("Must be a positive number")
    .required("Required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      number: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
     const result = await login(values.number, values.password);
     if (result){
      showSuccessToast("Logged in", true)
      navigate('/dashboard')
     }
    },
  });
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
        <form onSubmit={formik.handleSubmit}>
          {/* <MDBox component="form" role="form"> */}
            <MDBox mb={2}>
            <MDInput
                type="number"
                label="Phone Number"
                fullWidth
                name="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.number && Boolean(formik.errors.number)}
                helperText={formik.touched.number && formik.errors.number}
              />
            </MDBox>
            <MDBox mb={2}>
            <MDInput
                type="password"
                label="Password"
                fullWidth
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth type="submit">
                sign in
              </MDButton>
            </MDBox>
            </form>
          {/* </MDBox> */}
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
