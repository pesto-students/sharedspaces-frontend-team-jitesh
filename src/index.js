import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter
} from "react-router-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store/store'
import {
  LoadScript,
} from "@react-google-maps/api";
import Loader from "./components/loader/Loader";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

const libraries = ["places"];


Sentry.init({
  dsn: "https://46fcfb28730c4649a14a9646c3874ee9@o1379584.ingest.sentry.io/4504061587357696",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
      libraries={libraries}
      language="en"
      region="us"
      loadingElement={<Loader className={"w-10 text-gray-200 mt-20"} />}
    >
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <App />
        </BrowserRouter>
      </Provider>
    </LoadScript>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
