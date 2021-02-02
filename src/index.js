import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from "i18next"
import { I18nextProvider } from  "react-i18next";
import GOVUKFrontend from "govuk-frontend/govuk/all.js";
import './styles/unbranded.scss';

import SkipToMainContent from './components/SkipToMainContent';
import LanguagePicker from './components/LanguagePicker';
import Navigation from './components/Navigation';
import Router from "./Router";


import common_sk from "./translations/sk/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      sk: {
          common: common_sk
      },
  },
});


GOVUKFrontend.initAll()

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <SkipToMainContent />
    <div className="govuk-width-container ">
    <LanguagePicker />
      <main className="govuk-main-wrapper govuk-main-wrapper--auto-spacing" id="main-content" role="main">
          <Router />
      </main>
    </div>
  </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
