import React, {Suspense} from 'react';
import {useTranslation} from "react-i18next";
import ShowData from '../components/ShowData';
import emailData from '../data/email';

function PageComponent()
{
    console.log(emailData);
    const [t, i18n] = useTranslation('common');
    const {taxEstimationTotal} = emailData;
    return (
        <>
            <h1 className="govuk-heading-xl">{t('email.title')}</h1>
            <p className="govuk-body-l">
                {t('email.paragraphLede')}
            </p>

            <p className="govuk-body">
                {t('email.paragraphTwo')}
            </p>

            <p className="govuk-body">
                {t('email.paragraphThree')}
            </p>

            <div className="govuk-inset-text">
                <h2 className="govuk-heading-l">{t('email.cta.title')}</h2>

                <p className="govuk-body">
                    {t('email.cta.description')}
                </p>


                <p className="govuk-body">
                    {t('email.cta.estimatedAmount')} {taxEstimationTotal} {t('helper.currencyIcon')} 
                </p>


                <p className="govuk-body">
                    {t('email.cta.moreInfo')}
                </p>
            </div>

            <p className="govuk-body-s">
                {t('email.smallPrint')}
            </p>

        </>
    );
}

function Email()
{
    return (
        <Suspense fallback="loading">
            <PageComponent/>

            <ShowData type="json" data={emailData} />
            
        </Suspense>
    );
}

export default Email;