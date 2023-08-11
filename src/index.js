import { createRoot } from "react-dom/client";
import { UserContextProvider } from "./useContext-ex-1";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
