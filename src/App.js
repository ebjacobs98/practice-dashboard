import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import RealApp from "./components/realApp";
import "./App.css";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RealApp />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
