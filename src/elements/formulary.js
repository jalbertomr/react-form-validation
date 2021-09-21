import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors = {
  border: "#0075FF",
  error: "#bb2929",
  success: "#1ed12d",
};
const Form_styled = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;
`;

const GroupInput = styled.div`
  position: relative;
  z-index: 90;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background: white;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid trasparent;
  
  &:focus {
      border: 5px solid ${colors.border};
      outline: none;
      shadow-box: 3px 3px 5px rgba( 163,163, 163, 0.4);
  }
`;

const MsgInputError = styled.form`
  font-size: 12px;
  color: ${colors.error};
  margin-bottom: 0;
`;

const IconValidation = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  /*opacity: 0; */
`;

export { Form_styled, Label, GroupInput, Input, MsgInputError, IconValidation };
