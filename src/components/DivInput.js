import React from "react";
import {Label, GroupInput, Input, IconValidation, MsgInputError} from "../elements/formulary.js";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

const DivInput = () => {
  return (
    <div>
        <Label htmlFor="user">User</Label>
        <GroupInput>
          <Input type="text" placeholder="user" id="user"/>
          <IconValidation icon={faCheckCircle} />
        </GroupInput>
        <MsgInputError>This is on the react application</MsgInputError>
    </div>
  );
};

export default DivInput;