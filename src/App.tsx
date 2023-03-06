import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import router from "./routes";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0px;
    padding: 0px;
    box-sizing: border-box;
  }
`;
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
