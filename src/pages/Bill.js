import React, {Suspense} from 'react';
import {useTranslation} from "react-i18next";
import ShowData from '../components/ShowData';
import emailData from '../data/email';
import qrCode from '../assets/images/qr-code.svg';

function PageComponent()
{
    const [t, i18n] = useTranslation('common');
    return (
        <>
<h1 className="govuk-heading-xl">The Bill</h1>
<p>
<img src={qrCode} alt="" />
</p>

<table className="govuk-table">
    <tbody className="govuk-table__body">
        <tr className="govuk-table__row">
        <th scope="row" className="govuk-table__header">{t('bill.taxAuthority.taxAdministrator')}</th>
        <td className="govuk-table__cell">[Hlavné mesto Slovenskej republiky Bratislava]</td>
        </tr>
        <tr className="govuk-table__row">
        <th scope="row" className="govuk-table__header">{t('bill.taxAuthority.businessAddress')}</th>
        <td className="govuk-table__cell">[Magistrat hlavného mesta SR Bratislavy, oddelenie miest. dani, popl. a lic., Blagoevova 9, P.O. Box 76, 85005 Bratislava 55]</td>
        </tr>
        <tr className="govuk-table__row">
        <th scope="row" className="govuk-table__header">{t('bill.taxAuthority.name')}</th>
        <td className="govuk-table__cell">[Meno prideleného správcu dane]</td>
        </tr>
        <tr className="govuk-table__row">
        <th scope="row" className="govuk-table__header">{t('bill.taxAuthority.email')}</th>
        <td className="govuk-table__cell">[****@bratislava.sk]</td>
        </tr>
        <tr className="govuk-table__row">
        <th scope="row" className="govuk-table__header">{t('bill.taxAuthority.telephone')}</th>
        <td className="govuk-table__cell">[(01)234 567 89]</td>
        </tr>
        <tr className="govuk-table__row">
        <th scope="row" className="govuk-table__header">{t('bill.taxAuthority.location')}</th>
        <td className="govuk-table__cell">[V Bratislave]</td>
        </tr>
        <tr className="govuk-table__row">
        <th scope="row" className="govuk-table__header">{t('bill.caseNumber')}</th>
        <td className="govuk-table__cell">[1/20/0761 86-36/21/860141]</td>
        </tr>
        <tr className="govuk-table__row">
        <th scope="row" className="govuk-table__header">{t('bill.taxAuthority.date')}</th>
        <td className="govuk-table__cell">[Dňa 15.05.2020]</td>
        </tr>
    </tbody>
</table>


<div className="govuk-inset-text">               
    <p className="govuk-body">[full name of tax payer]</p>
    <p className="govuk-body">[permanant address of tax payer]</p>
    <p className="govuk-body"><strong>{t('bill.resident.taxIdentificationNo')}:</strong> [identification no of tax payer]</p>
</div>


<p className="govuk-body">{t('bill.taxLawAndObligation')}</p>

<p className="govuk-heading-s">{t('bill.decision')} [1/20/0761 86-36/21/860141]</p>

<p className="govuk-body">{t('bill.dataAdministration')}</p>


<div className="govuk-inset-text">               
    <p className="govuk-body"><strong>{t('bill.resident.fullName')}:</strong> [full name of tax payer]</p>
    <p className="govuk-body"><strong>{t('bill.resident.permanantAddress')}:</strong> [permanant address of tax payer]</p>
    <p className="govuk-body"><strong>{t('bill.resident.taxIdentificationNo')}:</strong> [identification no of tax payer]</p>
</div>


<p className="govuk-heading-s">{t('bill.propertyTaxIsAsFollows')}</p>


<table className="govuk-table">
  <caption className="govuk-table__caption govuk-table__caption--m">I {t('bill.landTax.title')}</caption>
  <thead className="govuk-table__head">
    <tr className="govuk-table__row">
      <th scope="col" className="govuk-table__header">{t('bill.landTax.subject')}</th>
      <th scope="col" className="govuk-table__header">{t('bill.landTax.landArea')}</th>
      <th scope="col" className="govuk-table__header">{t('bill.landTax.taxBase')}</th>
      <th scope="col" className="govuk-table__header">{t('bill.landTax.tax')}</th>
    </tr>
  </thead>
  <tbody className="govuk-table__body">
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.landTax.A')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,00]</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.landTax.B')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,00]</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.landTax.C')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,00]</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.landTax.D')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,00]</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.landTax.E')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,00]</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.landTax.F')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,00]</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.landTax.G')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,00]</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.landTax.H')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,00]</td>
    </tr>

    <tr className="govuk-table__row">
    <td className="govuk-table__cell">&nbsp;</td>
      <td className="govuk-table__cell">&nbsp;</td>
      <th scope="row" className="govuk-table__header">{t('bill.total')}</th>
      <td className="govuk-table__cell">[0,00]</td>
    </tr>
  </tbody>
</table>





<table className="govuk-table">
  <caption className="govuk-table__caption govuk-table__caption--m">II {t('bill.constructionTax.title')}</caption>
  <thead className="govuk-table__head">
    <tr className="govuk-table__row">
      <th scope="col" className="govuk-table__header">{t('bill.constructionTax.subject')}</th>
      <th scope="col" className="govuk-table__header">{t('bill.constructionTax.taxBase')}</th>
      <th scope="col" className="govuk-table__header">{t('bill.constructionTax.tax')}</th>
    </tr>
  </thead>
  <tbody className="govuk-table__body">
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.A')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,000]</td>
    </tr>

    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.B')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,000]</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.C')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,000]</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.D')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,000]</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.E')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,000]</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.F')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,000]</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.G')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,000]</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.H')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,000]</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.I')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,000]</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.J')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,000]</td>
    </tr>


    <tr className="govuk-table__row">
    <td className="govuk-table__cell">&nbsp;</td>
      <th scope="row" className="govuk-table__header">{t('bill.total')}</th>
      <td className="govuk-table__cell">[0,000]</td>
    </tr>
  </tbody>
</table>






<table className="govuk-table">
  <caption className="govuk-table__caption govuk-table__caption--m">III {t('bill.apartmentTax.title')}</caption>
  <thead className="govuk-table__head">
    <tr className="govuk-table__row">
      <th scope="col" className="govuk-table__header">{t('bill.apartmentTax.subject')}</th>
      <th scope="col" className="govuk-table__header">{t('bill.apartmentTax.taxBase')}</th>
      <th scope="col" className="govuk-table__header">{t('bill.apartmentTax.tax')}</th>
    </tr>
  </thead>

  <tbody className="govuk-table__body">
  <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.apartmentTax.A')}</th>
      <td className="govuk-table__cell">[59,00]</td>
      <td className="govuk-table__cell">[59,000]</td>
    </tr>

    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.apartmentTax.B')}</th>
      <td className="govuk-table__cell">[0,00]</td>
      <td className="govuk-table__cell">[0,000]</td>
    </tr>

    
  </tbody>
</table>





<table className="govuk-table">
  <caption className="govuk-table__caption govuk-table__caption--m">IV {t('bill.totalTax.title')}</caption>
  <tbody className="govuk-table__body">
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.totalTax.totalSum')}</th>
      <td className="govuk-table__cell">[59,00]</td>
    </tr>

    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.totalTax.dueDate')}</th>
      <td className="govuk-table__cell">&nbsp;</td>
    </tr>



    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.totalTax.firstInstallment')}</th>
      <td className="govuk-table__cell">[19,68]</td>
    </tr>


    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.totalTax.secondInstallment')}</th>
      <td className="govuk-table__cell">[19,66]</td>
    </tr>


    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.totalTax.thirdInstallment')}</th>
      <td className="govuk-table__cell">[19,66]</td>
    </tr>


    
  </tbody>
</table>



<p className="govuk-body">{t('bill.taxSubject')}</p>
<p className="govuk-body">{t('bill.justification')}</p>
<p className="govuk-body">{t('bill.justificationPara')}</p>
<p className="govuk-body">{t('bill.instruction')}</p>
<p className="govuk-body">{t('bill.howToPay')}</p>
<p className="govuk-body">{t('bill.howWeUseYourMoney')}</p>
<p className="govuk-body">{t('bill.howWeUseYourMoneyP2')}</p>
<p className="govuk-body">{t('bill.howWeUseYourMoneyP3')}</p>


        </>
    );
}

function Bill()
{
    return (
        <Suspense fallback="loading">
            <PageComponent/>
            <ShowData type="json" data={emailData} />          
        </Suspense>
    );
}

export default Bill;