import React from "react";
import { Form_styled, Label, GroupInput, Input, MsgInputError, IconValidation} from "./elements/formulary.js";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <main>
      <Form_styled action="">
        <div>
          <Label htmlFor="user">User</Label>
          <GroupInput>
            <Input type="text" placeholder="user" id="user"/>
            <IconValidation icon={faCheckCircle} />
          </GroupInput>
          <MsgInputError>This is on the react application</MsgInputError>
        </div>
      </Form_styled>
    </main>
  );
};

export default App;
