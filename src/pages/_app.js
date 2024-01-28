import MainLayout from "@/Layout/MainLayout";
import store from "@/redux/store";
import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { ReactFlowProvider } from "reactflow";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ReactFlowProvider>
        <Provider store={store}>
          <Toaster position="top-right" />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </Provider>
      </ReactFlowProvider>
    </ThemeProvider>
  );
}
