import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";
import App from "./App.tsx";
import { BrowserRouter } from 'react-router-dom'
import { store } from "./redux/store.ts";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <App />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
