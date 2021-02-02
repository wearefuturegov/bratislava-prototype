

import React, {Suspense} from 'react';
import {useTranslation} from "react-i18next";
import { Link } from "react-router-dom";
import routes from './../data/routes'

// govuk-header__navigation-item--active
function NavigationComponent()
{
    // return (
    //     <p>hello</p>
    // );  
    const [t, i18n] = useTranslation('common');
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

// {/* <Link to="/tacos">Tacos</Link> */}

/* 
            {routes.map((route, i) => (
            <Route key={i} {...route} />
        ))} */



    //     <li key={i} className="govuk-header__navigation-item ">
    //     <a className="govuk-header__link" href="#1">
    //     {t(route.titleKey)}
    //     </a>
    // </li>