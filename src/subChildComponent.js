import React, { useContext } from "react";
import { UserContext } from "./useContext-ex-1";

const SubChildComponent = () => {
  const data = useContext(UserContext);
  const { firstName, lastName, email } = data;
  return (
    <div>
      <h3> Sub Child Component</h3>
      <div>fistname:{firstName}</div>
      <div>lastname:{lastName}</div>
      <div>email:{email}</div>
    </div>
  );
};
export default SubChildComponent;
