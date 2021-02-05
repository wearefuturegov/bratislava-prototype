import React from 'react';
import {useTranslation} from "react-i18next";


function App()
{
    const [t, i18n] = useTranslation('common');


    const isCurrentLang = (lang) => {
        if(i18n.language === lang) return true
        return false;
    }

    return (
        <div>
            <button className={isCurrentLang('sk') ? 'govuk-button' : 'govuk-button  govuk-button--secondary'} data-module="govuk-button" onClick={() => i18n.changeLanguage('sk')}>sk</button>
            <button className={isCurrentLang('en') ? 'govuk-button' : 'govuk-button  govuk-button--secondary'} data-module="govuk-button" onClick={() => i18n.changeLanguage('en')}>en</button>
        </div>
    );
}

export default App;