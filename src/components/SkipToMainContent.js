import React, {Suspense} from 'react';
import {useTranslation} from "react-i18next";

function SkipToMainContentComponent()
{
    const [t] = useTranslation('common');
    return <a href="#main-content" className="govuk-skip-link">{t('helper.skipToMain')}</a>;
}

function SkipToMainContent()
{
    return (
        <Suspense fallback="loading">
            <SkipToMainContentComponent/>
        </Suspense>
    );
}

export default SkipToMainContent;