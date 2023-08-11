import React from "react";

const insitialState = {
  firstName: "emma",
  lastName: "watson",
  email: "emma@gmail.com"
};

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={insitialState}>
      {children}
    </UserContext.Provider>
  );
};
