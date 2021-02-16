const billData = {
    taxAdministration: {
        administration: "Hlavné mesto Slovenskej republiky Bratislava",
        businessAddress: "Magistrat hlavného mesta SR Bratislavy, oddelenie miest. dani, popl. a lic., Blagoevova 9, P.O. Box 76, 85005 Bratislava 55",
        administratorName: "Meno prideleného správcu dane",
        email: "****@bratislava.sk",
        telephone: "(01)234 567 89",
        location: "V Bratislave"
    },
    caseNumber: "1/20/0761 86-36/21/860141",
    date: "15.05.2020",
    resident: {
        fullName: "First Last",
        permanantAddress: "Flat 1, ABCD House, Kitten Road",
        identificationNumber: "12345"
    },


    // a person can (on the paper form) submit property tax for multiple things at a time 
    // I'm guessing since the bill shows the propery information above the tables this would mean multiple tables for multiple addresses hence multiple options below.
    propertyTax: [
        {
            // unknown if this would be used but handy to have
            propertyId: "xxxx",
            // A person can submit multiple landTax sections if the information at the top of the page 
            // (I assume these? - The village,The value of the land determined by an expert opinion, Legal relationship, Co-ownership, Birth number of the spouse, Number of co - owners, Co-owner designated by agreement)
            // is different
            landTax: {
                aArableLand: {
                    landArea: 0,
                    taxBase: 0,
                    tax: 0
                },
                bPermanantGrassland: {
                    landArea: 0,
                    taxBase: 0,
                    tax: 0
                },
                cGardens: {
                    landArea: 0,
                    taxBase: 0,
                    tax: 0
                },
                dForest: {
                    landArea: 0,
                    taxBase: 0,
                    tax: 0
                },
                ePonds: {
                    landArea: 0,
                    taxBase: 0,
                    tax: 0
                },
                fBuiltUp: {
                    landArea: 0,
                    taxBase: 0,
                    tax: 0
                },
                gBuildingLand: {
                    landArea: 0,
                    taxBase: 0,
                    tax: 0
                },
                hOther: {
                    landArea: 0,
                    taxBase: 0,
                    tax: 0
                },
                total: 0
            },
            // same as land tax I think we can submit multiple of these pages if top info is different
            // also lookslike the two types of construction tax are combined into one for the bill
            constructionTax: {
                aResidentialBuildings: {
                    taxBase: 0,
                    tax: 0
                },
                bConstructionsForAgricultural: {
                    taxBase: 0,
                    tax: 0
                },
                cCottages: {
                    taxBase: 0,
                    tax: 0
                },
                dDetachedGarages: {
                    taxBase: 0,
                    tax: 0
                },
                eCollectiveGarages: {
                    taxBase: 0,
                    tax: 0
                },
                fCollectiveGatagesUnderground: {
                    taxBase: 0,
                    tax: 0
                },
                gIndustrialBuildings: {
                    taxBase: 0,
                    tax: 0
                },
                hAdministrationBuildings: {
                    taxBase: 0,
                    tax: 0
                },
                iOtherConstructions: {
                    taxBase: 0,
                    tax: 0
                },
                jMultipurposeBuilding: {
                    taxBase: 0,
                    tax: 0
                },
                total: 0
            },

            // I assume you can submit for multiple properties here too
            apartmentTax: {
                aFlat: {
                    taxBase: 59,
                    tax: 59
                },
                bNonResidential: {
                    taxBase: 0,
                    tax: 0
                },
                total: 59
            }
        }
    ],

    totals: {
        totalSum: 59,
        installments: {
            first: {
                amount: 19.68,
                date: "30.09.2020"
            },
            second: {
                amount: 19.68,
                date: "30.09.2020"
            },
            third: {
                amount: 19.68,
                date: "30.09.2020"
            }
        }
    }

    
}

export default billData;
