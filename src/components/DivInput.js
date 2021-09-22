import React from "react";
import {Label, GroupInput, Input, IconValidation, MsgInputError} from "../elements/formulary.js";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

const DivInput = ({type, label, placeholder, name, msginputerror, regexp}) => {
  return (
    <div>
        <Label htmlFor={name}>{label}</Label>
        <GroupInput>
          <Input type={type} placeholder={placeholder} id={name}/>
          <IconValidation icon={faCheckCircle} />
        </GroupInput>
        <MsgInputError>{msginputerror}</MsgInputError>
    </div>
  );
};

export default DivInput;