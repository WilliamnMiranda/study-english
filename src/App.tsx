import { RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import router from "./routes";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CollectionProvider } from "./contexts/Collection_Context";
import { ModalProvider } from "./contexts/Modal_Context";
import { UserStorage } from "./contexts/User_Context";
const GlobalStyle = createGlobalStyle`
  *{
    margin:0px;
    padding: 0px;
    box-sizing: border-box;
  }
`;
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserStorage>
        <ModalProvider>
          <CollectionProvider>
            <GlobalStyle />
            <RouterProvider router={router} />
            <ToastContainer
              position="top-right"
              autoClose={1000}
              limit={0}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </CollectionProvider>
        </ModalProvider>
      </UserStorage>
    </QueryClientProvider>
  );
}

export default App;
