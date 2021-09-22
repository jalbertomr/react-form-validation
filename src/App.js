import React, { useState } from "react";
import { FormStyled, DivTerms, DivErrorFormMsg, DivSubmitCentered, 
Button, PMsgSuccess} from "./elements/formulary.js";
import DivInput from "./components/DivInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

const expressions = {
    user: /^[a-zA-Z0-9_-]{4,16}$/,    // letters, numbers, _ , -
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,      // letters, spaces, accents
    password: /^.{4,12}$/,              // 4 and 12 digits
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,
    telephone: /^\d{7,14}$/             // 7 to 14 numbers
}

const App = () => {
  const [user, changeUser] = useState({field:'', valid: null});
  const [name, changeName] = useState({field:'', valid: null});
  const [password, changePassword] = useState({field:'', valid: null});
  const [password2, changePassword2] = useState({field:'', valid: null});
  const [email, changeEmail] = useState({field:'', valid: null});
  const [telephone, changeTelephone] = useState({field:'', valid: null});
    
  return (
    <main>
      <FormStyled action="">
        <DivInput state={user} changeState={changeUser} type="text" label="User" placeholder="type the user" name="user" 
        msginputerror="The user must have between 4 and 16 digits of numbers, leters and '_'." regexp={expressions.user}/>
        <DivInput state={name} changeState={changeName} type="text" label="Name" placeholder="type the name" name="name" 
        msginputerror="The name must have between 1 and 40 digits of letters, spaces and accents." regexp=""/>
        <DivInput state={password} changeState={changePassword} type="password" label="Password" placeholder="type the password" name="password" 
        msginputerror="The password must have between 4 and 12 digits.." regexp=""/>
        <DivInput state={password2} changeState={changePassword2} type="password" label="Repeat Password" placeholder="retype the password" name="password2" 
        msginputerror="message Both passwords must be the same. error" regexp=""/>
        <DivInput state={email} changeState={changeEmail} type="email" label="email" placeholder="type the email" name="email" 
        msginputerror="message The email must correspont to an email syntax." regexp=""/>
        <DivInput state={telephone} changeState={changeTelephone} type="text" label="Telephone" placeholder="type the telephone" name="telephone" 
        msginputerror="message The telephone must have between 7 and 14 digits of numbers. error" regexp=""/>
        
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
