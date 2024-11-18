import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter, HashRouter } from "react-router-dom";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <HashRouter basename="/react-hw-05-movies_ts">
      <App />
    </HashRouter>
  </QueryClientProvider>

  // </React.StrictMode>
);
