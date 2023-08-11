import React, { useState } from "react";
import ChildComponent from "./childComponent";

let ParentComponent = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "emma",
    lastName: "watson",
    email: "emma123@gmail.com"
  });
  return (
    <div>
      <h1>Use Context Parent</h1>
      <ChildComponent userDetails={userDetails} />
    </div>
  );
};

export default ParentComponent;
