

import React, {Suspense} from 'react';
import {useTranslation} from "react-i18next";

function NavigationComponent()
{
    const [t, i18n] = useTranslation('common');
    return (
        <nav>
            <ul id="navigation" className="govuk-header__navigation " aria-label="Navigation menu">
                <li className="govuk-header__navigation-item govuk-header__navigation-item--active">
                    <a className="govuk-header__link" href="#1">
                    {t('navigation.2-2')}
                    </a>
                </li>
            </ul>
            </nav>

    );
}

function Navigation()
{
    return (
        <Suspense fallback="loading">
            <NavigationComponent/>
        </Suspense>
    );
}

export default Navigation;

// "2-2": "P2.2 Email",
// "2-3": "P2.3 Online Bill",
// "2-4": "P2.4 Tax dept CMS",
// "2-5": "P2.5 Tax dept CMS - edit",
// "3": "P3 Payment Email",
// "3-4": "P3 Bill with payment"