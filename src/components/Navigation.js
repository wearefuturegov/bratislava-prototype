

import React, {Suspense} from 'react';
import {useTranslation} from "react-i18next";
import { Link } from "react-router-dom";
import routes from './../data/routes'

function NavigationComponent()
{
    const [t] = useTranslation('common');
    return (
        <nav>
            <ul id="navigation" className="govuk-list" aria-label="Navigation menu">
                {routes.map((route, i) => {
                return(
                    <li key={i} className="">
                        <Link className="govuk-link" to={route.path}>{t(route.titleKey)}</Link>
                    </li>
                    )
                })}
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

