import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RealApp from "./components/realApp";
import "./App.css";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RealApp />
    </QueryClientProvider>
  );
};

export default App;
