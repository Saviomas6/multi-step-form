import styled from "styled-components";
export const ModalBody = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000 !important;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  overflow: hidden;
  padding: 0px 5px;
`;
export const ModalContainer = styled.div`
  height: 400px;
  width: 350px;
  border-radius: 10px;
  background-color: #fafafa;
  color: #000;
  padding: 10px;
  overflow: auto;
  @media screen and (max-width: 560px) {
    height: 400px;
    width: 275px;
  }
`;
export const ModalHeading = styled.div`
  color: #000;
  font-size: 25px;
  text-align: center;
  @media screen and (max-width: 560px) {
    font-size: 20px;
  }
`;

export const TextContent = styled.div`
  color: #000;
  font-size: 16px;
  margin: 6px 0;
  @media screen and (max-width: 560px) {
    font-size: 14px;
  }
`;
