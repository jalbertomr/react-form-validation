import React from "react";
import { Form_styled, Label, GroupInput, Input, MsgInputError, IconValidation,
DivTerms, DivErrorFormMsg, DivSubmitCentered, Button, PMsgSuccess} from "./elements/formulary.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle ,faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

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
        <div>
          <Label htmlFor="user">email</Label>
          <GroupInput>
            <Input type="email" placeholder="email" id="email"/>
            <IconValidation icon={faCheckCircle} />
          </GroupInput>
          <MsgInputError>This is on the react application</MsgInputError>
        </div>
        <DivTerms>
          <label>
            <input type="checkbox" name='terms' id='terms'/>
            I Accept terms and conditions.
          </label>
        </DivTerms>
        {false && <DivErrorFormMsg>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b>Error</b>Please, Check your data and accept terms.
          </p>
        </DivErrorFormMsg>}
        <DivSubmitCentered>
          <Button type="submit" >Submit</Button>
          <PMsgSuccess>Data send successfully!</PMsgSuccess>
        </DivSubmitCentered>
      </Form_styled>
    </main>
  );
};

export default App;
