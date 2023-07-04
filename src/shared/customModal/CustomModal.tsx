import { FadeAnimation } from "../../styles/sharedStyles";
import {
  ModalBody,
  ModalContainer,
  ModalHeading,
  TextContent,
} from "./CustomModal.style";
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

interface I_Value {
  formValue: I_Form;
  setSuccessModalOpen(value: boolean): void;
}

const CustomModal = ({ formValue, setSuccessModalOpen }: I_Value) => {
  const {
    username,
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    location,
    companyName,
    designation,
    totalExperience,
    companyLocation,
  } = formValue;

  const handleClickOutside = (e: any) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      setSuccessModalOpen(false);
    }
  };

  return (
    <ModalBody onMouseDown={handleClickOutside}>
      <FadeAnimation>
        <ModalContainer>
          <ModalHeading>Success</ModalHeading>
          <TextContent>Name : {username}</TextContent>
          <TextContent>Email : {email}</TextContent>
          <TextContent>Password : {password}</TextContent>
          <TextContent>First Name : {firstName}</TextContent>
          <TextContent>Last Name : {lastName}</TextContent>
          <TextContent>Phone Number : {phoneNumber}</TextContent>
          <TextContent>Location : {location}</TextContent>
          <TextContent>Company Name : {companyName}</TextContent>
          <TextContent>Designation : {designation}</TextContent>
          <TextContent>Total Experience : {totalExperience}</TextContent>
          <TextContent>Company Location : {companyLocation}</TextContent>
        </ModalContainer>
      </FadeAnimation>
    </ModalBody>
  );
};

export default CustomModal;
