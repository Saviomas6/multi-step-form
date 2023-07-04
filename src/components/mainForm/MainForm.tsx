import { useState } from "react";
import CustomModal from "../../shared/customModal/CustomModal";
import { FadeAnimation } from "../../styles/sharedStyles";
import CompanyDetailForm from "../companyDetailForm/CompanyDetailForm";
import PersonalDetailForm from "../personalDetailForm/PersonalDetailForm";
import SignUpForm from "../signupForm/SignUpForm";
import { Heading } from "./MainForm.style";

interface I_Form {
  username: string;
  email: string;
  password: string;
  conformPassword: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  location: string;
  companyName: string;
  designation: string;
  totalExperience: string;
  companyLocation: string;
}

const MainForm = () => {
  const [currentForm, setCurrentForm] = useState<number>(0);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState<boolean>(false);
  const [formValue, setFormValue] = useState<I_Form>({
    username: "",
    email: "",
    password: "",
    conformPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    location: "",
    companyName: "",
    designation: "",
    totalExperience: "",
    companyLocation: "",
  });

  const handleNext = (newData: any, final = false) => {
    setFormValue((pre) => ({ ...pre, ...newData }));
    if (final) {
      setSuccessModalOpen(true);
      setCurrentForm(0);
      return;
    }
    setCurrentForm((pre) => pre + 1);
  };
  const handleBack = (newData: any) => {
    setFormValue((pre) => ({ ...pre, ...newData }));
    setCurrentForm((pre) => pre - 1);
  };

  const formStep = [
    <SignUpForm next={handleNext} data={formValue} />,
    <PersonalDetailForm next={handleNext} back={handleBack} data={formValue} />,
    <CompanyDetailForm next={handleNext} back={handleBack} data={formValue} />,
  ];
  return (
    <div>
      <Heading>Multi Step Form</Heading>
      {formStep[currentForm]}
      {isSuccessModalOpen && (
        <CustomModal
          formValue={formValue}
          setSuccessModalOpen={setSuccessModalOpen}
        />
      )}
    </div>
  );
};

export default MainForm;
