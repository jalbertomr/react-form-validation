import React from "react";
import { Form_styled, DivTerms, DivErrorFormMsg, DivSubmitCentered, 
Button, PMsgSuccess} from "./elements/formulary.js";
import DivInput from "./components/DivInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <main>
      <Form_styled action="">
        <DivInput/>
        <DivInput/>
        <DivInput/>
        <DivInput/>
        <DivInput/>
        
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
