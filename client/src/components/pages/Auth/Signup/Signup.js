import React from "react";
import styles from "../../../Navbar/styles.module.css"
import signupSchema from "./validation";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useFormik } from "formik";

function Signup() {
  const {handleBlur,handleChange,values,handleSubmit,errors,touched} = useFormik({
    initialValues: {
      password: "",
      passwordConfirm: "",
      email: "",
    },
    onSubmit: (values,action) => {
      console.log(values);
    },
    validationSchema: signupSchema
  });
  return (
    <div>
      <Flex align="center" justifyContent="center" width="full">
        <Box p="10" textAlign="center" mt="10">
          <Heading>Sign Up</Heading>
          <Box mt="10">
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                ></Input>
                {errors.email && touched.email ? <div className={styles.error}>{errors.email}</div> : ""}
              </FormControl>
              <FormControl mt="4">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                ></Input>
                {errors.password && touched.password ? <div className={styles.error}>{errors.password}</div> : ""}
              </FormControl>
              <FormControl mt="4">
                <FormLabel>Password Confirm</FormLabel>
                <Input
                  name="passwordConfirm"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirm}
                ></Input>
                {errors.passwordConfirm && touched.passwordConfirm ? <div className={styles.error}>{errors.passwordConfirm}</div> : ""}
              </FormControl>
              <Button mt="4" width="100%" colorScheme="green" type="submit">
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Signup;
