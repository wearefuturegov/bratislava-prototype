import React, {Suspense} from 'react';
import {useTranslation} from "react-i18next";
import ShowData from '../components/ShowData';
import billData from '../data/bill';
import qrCode from '../assets/images/qr-code.svg';

function PageComponent()
{
    const [t, i18n] = useTranslation('common');
    return (
        <>
<h1 className="govuk-heading-xl">{t('bill.theBill')}</h1>
<p>
<img src={qrCode} alt="Scan me 😈" />
</p>

<table className="govuk-table">
    <tbody className="govuk-table__body">
        <tr className="govuk-table__row">
        <th scope="row" className="govuk-table__header">{t('bill.taxAuthority.taxAdministrator')}</th>
        <td className="govuk-table__cell">{billData.taxAdministration.administration}</td>
        </tr>
        <tr className="govuk-table__row">
        <th scope="row" className="govuk-table__header">{t('bill.taxAuthority.businessAddress')}</th>
        <td className="govuk-table__cell">{billData.taxAdministration.businessAddress}</td>
        </tr>
        <tr className="govuk-table__row">
        <th scope="row" className="govuk-table__header">{t('bill.taxAuthority.name')}</th>
        <td className="govuk-table__cell">{billData.taxAdministration.administratorName}</td>
        </tr>
        <tr className="govuk-table__row">
        <th scope="row" className="govuk-table__header">{t('bill.taxAuthority.email')}</th>
        <td className="govuk-table__cell">{billData.taxAdministration.email}</td>
        </tr>
        <tr className="govuk-table__row">
        <th scope="row" className="govuk-table__header">{t('bill.taxAuthority.telephone')}</th>
        <td className="govuk-table__cell">{billData.taxAdministration.telephone}</td>
        </tr>
        <tr className="govuk-table__row">
        <th scope="row" className="govuk-table__header">{t('bill.taxAuthority.location')}</th>
        <td className="govuk-table__cell">{billData.taxAdministration.location}</td>
        </tr>
        <tr className="govuk-table__row">
        <th scope="row" className="govuk-table__header">{t('bill.caseNumber')}</th>
        <td className="govuk-table__cell">{billData.caseNumber}</td>
        </tr>
        <tr className="govuk-table__row">
        <th scope="row" className="govuk-table__header">{t('bill.date')}</th>
        <td className="govuk-table__cell">{billData.date}</td>
        </tr>
    </tbody>
</table>


<div className="govuk-inset-text">               
    <p className="govuk-body">{billData.resident.fullName}</p>
    <p className="govuk-body">{billData.resident.permanantAddress}</p>
    <p className="govuk-body"><strong>{t('bill.resident.taxIdentificationNo')}:</strong> {billData.resident.identificationNumber}</p>
</div>


<p className="govuk-body">{t('bill.taxLawAndObligation')}</p>

<p className="govuk-heading-s">{t('bill.decision')} {billData.caseNumber}</p>

<p className="govuk-body">{t('bill.dataAdministration')}</p>


<div className="govuk-inset-text">               
    <p className="govuk-body"><strong>{t('bill.resident.fullName')}:</strong> {billData.resident.fullName}</p>
    <p className="govuk-body"><strong>{t('bill.resident.permanantAddress')}:</strong> {billData.resident.permanantAddress}</p>
    <p className="govuk-body"><strong>{t('bill.resident.taxIdentificationNo')}:</strong> {billData.resident.identificationNumber}</p>
</div>


<p className="govuk-heading-s">{t('bill.propertyTaxIsAsFollows')}</p>



{billData.propertyTax.map((data,i) => 
<>
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
      <td className="govuk-table__cell">{data.landTax.aArableLand.landArea}</td>
      <td className="govuk-table__cell">{data.landTax.aArableLand.taxBase}</td>
      <td className="govuk-table__cell">{data.landTax.aArableLand.tax}</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.landTax.B')}</th>
      <td className="govuk-table__cell">{data.landTax.bPermanantGrassland.landArea}</td>
      <td className="govuk-table__cell">{data.landTax.bPermanantGrassland.taxBase}</td>
      <td className="govuk-table__cell">{data.landTax.bPermanantGrassland.tax}</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.landTax.C')}</th>
      <td className="govuk-table__cell">{data.landTax.cGardens.landArea}</td>
      <td className="govuk-table__cell">{data.landTax.cGardens.taxBase}</td>
      <td className="govuk-table__cell">{data.landTax.cGardens.tax}</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.landTax.D')}</th>
      <td className="govuk-table__cell">{data.landTax.dForest.landArea}</td>
      <td className="govuk-table__cell">{data.landTax.dForest.taxBase}</td>
      <td className="govuk-table__cell">{data.landTax.dForest.tax}</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.landTax.E')}</th>
      <td className="govuk-table__cell">{data.landTax.ePonds.landArea}</td>
      <td className="govuk-table__cell">{data.landTax.ePonds.taxBase}</td>
      <td className="govuk-table__cell">{data.landTax.ePonds.tax}</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.landTax.F')}</th>
      <td className="govuk-table__cell">{data.landTax.fBuiltUp.landArea}</td>
      <td className="govuk-table__cell">{data.landTax.fBuiltUp.taxBase}</td>
      <td className="govuk-table__cell">{data.landTax.fBuiltUp.tax}</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.landTax.G')}</th>
      <td className="govuk-table__cell">{data.landTax.gBuildingLand.landArea}</td>
      <td className="govuk-table__cell">{data.landTax.gBuildingLand.taxBase}</td>
      <td className="govuk-table__cell">{data.landTax.gBuildingLand.tax}</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.landTax.H')}</th>
      <td className="govuk-table__cell">{data.landTax.hOther.landArea}</td>
      <td className="govuk-table__cell">{data.landTax.hOther.taxBase}</td>
      <td className="govuk-table__cell">{data.landTax.hOther.tax}</td>
    </tr>

    <tr className="govuk-table__row">
    <td className="govuk-table__cell">&nbsp;</td>
      <td className="govuk-table__cell">&nbsp;</td>
      <th scope="row" className="govuk-table__header">{t('bill.total')}</th>
      <td className="govuk-table__cell">{data.landTax.total}</td>
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
      <td className="govuk-table__cell">{data.constructionTax.aResidentialBuildings.taxBase}</td>
      <td className="govuk-table__cell">{data.constructionTax.aResidentialBuildings.tax}</td>
    </tr>

    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.B')}</th>
      <td className="govuk-table__cell">{data.constructionTax.bConstructionsForAgricultural.taxBase}</td>
      <td className="govuk-table__cell">{data.constructionTax.bConstructionsForAgricultural.tax}</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.C')}</th>
      <td className="govuk-table__cell">{data.constructionTax.cCottages.taxBase}</td>
      <td className="govuk-table__cell">{data.constructionTax.cCottages.tax}</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.D')}</th>
      <td className="govuk-table__cell">{data.constructionTax.dDetachedGarages.taxBase}</td>
      <td className="govuk-table__cell">{data.constructionTax.dDetachedGarages.tax}</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.E')}</th>
      <td className="govuk-table__cell">{data.constructionTax.eCollectiveGarages.taxBase}</td>
      <td className="govuk-table__cell">{data.constructionTax.eCollectiveGarages.tax}</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.F')}</th>
      <td className="govuk-table__cell">{data.constructionTax.fCollectiveGatagesUnderground.taxBase}</td>
      <td className="govuk-table__cell">{data.constructionTax.fCollectiveGatagesUnderground.tax}</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.G')}</th>
      <td className="govuk-table__cell">{data.constructionTax.gIndustrialBuildings.taxBase}</td>
      <td className="govuk-table__cell">{data.constructionTax.gIndustrialBuildings.tax}</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.H')}</th>
      <td className="govuk-table__cell">{data.constructionTax.hAdministrationBuildings.taxBase}</td>
      <td className="govuk-table__cell">{data.constructionTax.hAdministrationBuildings.tax}</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.I')}</th>
      <td className="govuk-table__cell">{data.constructionTax.iOtherConstructions.taxBase}</td>
      <td className="govuk-table__cell">{data.constructionTax.iOtherConstructions.tax}</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.constructionTax.J')}</th>
      <td className="govuk-table__cell">{data.constructionTax.jMultipurposeBuilding.taxBase}</td>
      <td className="govuk-table__cell">{data.constructionTax.jMultipurposeBuilding.tax}</td>
    </tr>


    <tr className="govuk-table__row">
    <td className="govuk-table__cell">&nbsp;</td>
      <th scope="row" className="govuk-table__header">{t('bill.total')}</th>
      <td className="govuk-table__cell">{data.constructionTax.total}</td>
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
      <td className="govuk-table__cell">{data.apartmentTax.aFlat.taxBase}</td>
      <td className="govuk-table__cell">{data.apartmentTax.aFlat.tax}</td>
    </tr>

    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.apartmentTax.B')}</th>
      <td className="govuk-table__cell">{data.apartmentTax.bNonResidential.taxBase}</td>
      <td className="govuk-table__cell">{data.apartmentTax.bNonResidential.tax}</td>
    </tr>


    <tr className="govuk-table__row">
    <td className="govuk-table__cell">&nbsp;</td>
      <th scope="row" className="govuk-table__header">{t('bill.total')}</th>
      <td className="govuk-table__cell">{data.apartmentTax.total}</td>
    </tr>
    
  </tbody>
</table>



</>
)}







<table className="govuk-table">
  <caption className="govuk-table__caption govuk-table__caption--m">IV {t('bill.totalTax.title')}</caption>
  <tbody className="govuk-table__body">
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.totalTax.totalSum')}</th>
      <td className="govuk-table__cell">{billData.totals.totalSum}</td>
    </tr>

    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.totalTax.dueDate')}</th>
      <td className="govuk-table__cell">&nbsp;</td>
    </tr>



    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.totalTax.firstInstallment')}</th>
      <td className="govuk-table__cell">{billData.totals.installments.first.amount}</td>
    </tr>


    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.totalTax.secondInstallment', {date: billData.totals.installments.second.date})}</th>
      <td className="govuk-table__cell">{billData.totals.installments.second.amount}</td>
    </tr>


    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header">{t('bill.totalTax.thirdInstallment', {date: billData.totals.installments.third.date})}</th>
      <td className="govuk-table__cell">{billData.totals.installments.third.amount}</td>
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
            <ShowData type="json" data={billData} />          
        </Suspense>
    );
}

export default Bill;