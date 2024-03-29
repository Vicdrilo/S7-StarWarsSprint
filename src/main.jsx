import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { DataProvider } from "./context/DataProvider.jsx";
import { GetDifferentAPIInfo } from "./context/ApiDataProvider.jsx";
import { AuthProvider } from "./context/AuthContextProvider.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <GetDifferentAPIInfo>
          <AuthProvider>
            <App />
          </AuthProvider>
        </GetDifferentAPIInfo>
        <ReactQueryDevtools />
      </DataProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
