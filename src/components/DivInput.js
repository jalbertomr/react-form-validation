import React from "react";
import {Label, GroupInput, Input, IconValidation, MsgInputError} from "../elements/formulary.js";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

const DivInput = ({state, changeState, type, label, placeholder, name, msginputerror, regexp}) => {
  const onChange = (e) => {
    changeState({...state, field: e.target.value});
  };

  const validation = () => {
    if(regexp){
      if(regexp.test(state.field)){
        changeState({...state, valid: 'true'});
      } else {
        changeState({...state, valid: 'false'});
      }
    }
  };

  return (
    <div>
        <Label htmlFor={name} valid={state.valid}>{label}</Label>
        <GroupInput>
          <Input type={type} placeholder={placeholder} id={name} value={state.field} 
          onChange={onChange} onKeyUp={validation} onBlur={validation} valid={state.valid}/>
          <IconValidation icon={state.valid === 'true' ? faCheckCircle : faTimesCircle} 
          valid={state.valid} />
        </GroupInput>
        <MsgInputError valid={state.valid}>{msginputerror}</MsgInputError>
    </div>
  );
};

export default DivInput;