// fixSFDCString.js
//
// Fix Salesforce Multi-select Picklist with any REST API
// for a JSON insert and alleviate JSON_PARSER_ERROR

function fixSFDCString(formJSON, elementName)
{
    if (Array.isArray(formJSON[elementName]))
    {
        var brokenArray = formJSON[elementName];
        var fixedArray = brokenArray.join(";");

        delete formJSON[elementName];
        formJSON[elementName] = fixedArray;
    }
    return formJSON;
}