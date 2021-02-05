import React from 'react';
import Lowlight from 'react-lowlight'
import json from 'highlight.js/lib/languages/json'
import 'highlight.js/styles/default.css';

Lowlight.registerLanguage('json', json)



function ShowData(props)
{
    
    const {data, type} = props;
    return (
        <div className="govuk-panel govuk-panel--bratislava margin-top--lg">
            <div className="govuk-body">
                This is the data sent to create this page
            </div>
            <Lowlight
                language={type}
                value={JSON.stringify(data, undefined, 4)}
            />
        </div>
    );
}

export default ShowData;