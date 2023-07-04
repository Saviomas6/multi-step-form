import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
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

const CompanyDetailForm = ({ next, back, data }: any) => {
  const handleSubmitForm = (values: any) => {
    next(values, true);
  };

  const companyDetailValidation = yup.object().shape({
    companyName: yup.string().required("Company Name is a required field"),
    designation: yup.string().required("Designation is a required field"),
    totalExperience: yup
      .number()
      .positive("Invalid number")
      .typeError("Must be a number")
      .test(
        "maxDigits",
        "Invalid number",
        (number) => String(number).length >= 1 && String(number).length <= 3
      )
      .required("Total Experience is a required field"),
    companyLocation: yup.string().required("Location is a required field"),
  });

  return (
    <Container width="90%">
      <FadeAnimation>
        <FormHeading>Company Details</FormHeading>
        <Formik
          initialValues={data}
          onSubmit={handleSubmitForm}
          validationSchema={companyDetailValidation}
        >
          {({ isValid }) => (
            <Form>
              <InputField
                type="text"
                placeholder="Enter your company name"
                name="companyName"
                label="Company Name"
                id="companyName"
              />
              <Error>
                <ErrorMessage name="companyName" />
              </Error>
              <InputField
                type="text"
                placeholder="Enter your designation"
                name="designation"
                label="Designation"
                id="designation"
              />
              <Error>
                <ErrorMessage name="designation" />
              </Error>
              <InputField
                type="text"
                placeholder="Enter your total experience"
                name="totalExperience"
                label="Total Experience"
                id="totalExperience"
              />
              <Error>
                <ErrorMessage name="totalExperience" />
              </Error>
              <InputField
                type="text"
                placeholder="Enter your company location"
                name="companyLocation"
                label="Company Location"
                id="companyLocation"
              />
              <Error>
                <ErrorMessage name="companyLocation" />
              </Error>
              <ButtonWrapper>
                <Button type="button" onClick={() => back()}>
                  Back
                </Button>
                <Button type="submit" disabled={!isValid}>
                  Submit
                </Button>
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      </FadeAnimation>
    </Container>
  );
};

export default CompanyDetailForm;
