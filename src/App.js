import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <main>
      <Form_styled action="">
         <label htmlFor="">User</label>
         <input type="text" placeholder="user"></input>
         <p>This is on the react application</p>
      </Form_styled>
    </main>
  );
}

const Form_styled = styled.form`
  background: #bbb;
  `;

export default App;