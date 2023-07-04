import { ErrorMessage, Form, Formik } from "formik";
import InputField from "../../shared/inputField/InputField";
import {
  Button,
  ButtonWrapper,
  Container,
  FormHeading,
  Error,
  FadeAnimation,
} from "../../styles/sharedStyles";
import * as yup from "yup";

const SignUpForm = ({ next, data }: any) => {
  const handleSubmitForm = (values: any) => {
    next(values);
  };
  const signUpValidation = yup.object().shape({
    username: yup
      .string()
      .min(10, "To short")
      .max(25, "Too long")
      .required("Username is a required field"),
    email: yup.string().email().required("Email is a required field"),
    password: yup
      .string()
      .required("Password is a required field")
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    conformPassword: yup.string().when("password", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Both password need to be the same"),
    }),
  });
  return (
    <Container width="90%">
      <FadeAnimation>
        <FormHeading>SignUp Details</FormHeading>
        <Formik
          initialValues={data}
          onSubmit={handleSubmitForm}
          validationSchema={signUpValidation}
        >
          {({ isValid, dirty }) => (
            <Form>
              <InputField
                type="text"
                placeholder="Enter your userName"
                name="username"
                label="UserName"
                id="username"
              />
              <Error>
                <ErrorMessage name="username" />
              </Error>
              <InputField
                type="email"
                placeholder="Enter your email"
                name="email"
                label="Email"
                id="email"
              />
              <Error>
                <ErrorMessage name="email" />
              </Error>
              <InputField
                type="password"
                placeholder="Enter your password"
                name="password"
                label="Password"
                id="password"
              />
              <Error>
                <ErrorMessage name="password" />
              </Error>
              <InputField
                type="password"
                placeholder="Conform your password"
                name="conformPassword"
                label="Conform Password"
                id="conformPassword"
              />
              <Error>
                <ErrorMessage name="conformPassword" />
              </Error>
              <ButtonWrapper>
                <Button type="submit" disabled={!isValid}>
                  Next
                </Button>
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      </FadeAnimation>
    </Container>
  );
};

export default SignUpForm;
