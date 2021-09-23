import styled, {css} from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors = {
  border: "#0075FF",
  buttonover: "#1155FF",
  error: "#EE5533",
  success: "#119200",
};
const FormStyled = styled.form`
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

  ${props => props.valid === 'false' && css`
     color: ${colors.error}
  `}
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
  border: 3px solid transparent;
  
  &:focus {
      border: 5px solid ${colors.border};
      outline: none;
      box-shadow: 3px 3px 5px rgba( 163,163, 163, 0.4);
  }

  ${props => props.valid === 'true' && css`
      border: 3px solid transparent;
  `}

  ${props => props.valid === 'false' && css`
      border: 3px solid ${colors.error} !important;
  `}
`;

const MsgInputError = styled.p`
  font-size: 12px;
  color: ${colors.error};
  margin-bottom: 0;
  display: none;

  ${props => props.valid === 'false' && css`
    display: block;
  `}
`;

const IconValidation = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0; 

  ${props => props.valid === 'false' && css`
    opacity: 1;
    color: ${colors.error}
  `}
  ${props => props.valid === 'true' && css`
    opacity: 1;
    color: ${colors.success}
  `}
`;

const DivTerms = styled.div`
  grid-column: span 2;

  input {
      margin-right: 10px;
  }

  @media (max-width: 800px){
      grid-column: span 1;
  }
`;

const DivErrorFormMsg = styled.div`
  grid-column: span 2;
  height: 45px;
  line-height: 45px;
  background: ${colors.error};
  padding: 0 15px;
  border-radius: 3px; 
  p {
      margin: 0;
  }
  b{
      margin-left: 10px;
  }
`;

const DivSubmitCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;

    @media (max-width: 800px){
      grid-column: span 1;
  }
`;

const Button = styled.button`
    height: 45px;
    line-height: 45px;
    width: 30%;
    background: #0075ff;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;

    &:hover {
       box-shadow: 5px 5px 5px rgba(163,163,163, 1);
       background: ${colors.buttonover};
    }
`;

const PMsgSuccess = styled.p`
    font-size: 14px;
    color: ${colors.success};
    display: block;
`;

export { FormStyled, Label, GroupInput, Input, MsgInputError, IconValidation,
         DivTerms, DivErrorFormMsg, DivSubmitCentered, Button, PMsgSuccess};
