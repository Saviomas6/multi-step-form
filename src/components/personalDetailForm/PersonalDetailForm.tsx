import { ErrorMessage, Form, Formik } from "formik";
import InputField from "../../shared/inputField/InputField";
import {
  Button,
  ButtonWrapper,
  Container,
  Error,
  FadeAnimation,
  FormHeading,
} from "../../styles/sharedStyles";
import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const PersonalDetailForm = ({ next, back, data }: any) => {
  const handleSubmitForm = (values: any) => {
    next(values);
  };

  const personalDetailValidation = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "To short")
      .max(20, "Too long")
      .required("FirstName is a required field"),
    lastName: yup
      .string()
      .min(3, "To short")
      .max(20, "Too long")
      .required("LastName is a required field"),
    phoneNumber: yup
      .string()
      .required("Phone number is a required field")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "Invalid mobile no")
      .max(10, "Invalid mobile no"),
    location: yup.string().required("Location is a required field"),
  });

  return (
    <Container width="90%">
      <FadeAnimation>
        <FormHeading>Personal Details</FormHeading>
        <Formik
          initialValues={data}
          onSubmit={handleSubmitForm}
          validationSchema={personalDetailValidation}
        >
          {({ isValid }) => (
            <Form>
              <InputField
                type="text"
                placeholder="Enter your firstname"
                name="firstName"
                label="FirstName"
                id="firstName"
              />
              <Error>
                <ErrorMessage name="firstName" />
              </Error>
              <InputField
                type="text"
                placeholder="Enter your lastName"
                name="lastName"
                label="LastName"
                id="lastName"
              />
              <Error>
                <ErrorMessage name="lastName" />
              </Error>
              <InputField
                type="text"
                placeholder="Enter your phone number"
                name="phoneNumber"
                label="Phone Number"
                id="phoneNumber"
              />
              <Error>
                <ErrorMessage name="phoneNumber" />
              </Error>
              <InputField
                type="text"
                placeholder="Enter your location"
                name="location"
                label="Location"
                id="location"
              />
              <Error>
                <ErrorMessage name="location" />
              </Error>
              <ButtonWrapper>
                <Button type="button" onClick={() => back()}>
                  Back
                </Button>
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

export default PersonalDetailForm;
