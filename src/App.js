import React, { useState } from "react";
import { FormStyled, DivTerms, DivErrorFormMsg, DivSubmitCentered, 
Button, PMsgSuccess} from "./elements/formulary.js";
import DivInput from "./components/DivInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [user, changeUser] = useState({field:'', valid: null});
  console.log("user: " + user);
  console.log("changeUser: " + changeUser);

  return (
    <main>
      <FormStyled action="">
        <DivInput type="text" label="user" placeholder="type the user" name="user" 
        msginputerror="message input error" regexp=""/>
        
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
      </FormStyled>
    </main>
  );
};

export default App;
