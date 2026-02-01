import ReactDOM from "react-dom/client";

import { AppProviders } from "@/app/providers/AppProvider";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <App />
  </AppProviders>,
);
