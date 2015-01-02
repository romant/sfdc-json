###Situation

Attempting to save data into a Salesforce Multi-select Picklist with any REST API with a JSON object returns a 

 ```
 Cannot deserialize instance of multipicklist from START_ARRAY value
 ```
and
```
JSON_PARSER_ERROR
 ```
This looks to be due to the way Salesforce treats Array Elements with the JSON Object.

#####Example
If you wish to create a new contact with a custom field **Availability__c**, you typically end up with:
```
{
  "FirstName": "Jeffrey",
  "LastName": "McKillop",
  "Availability__c": [
    "Monday",
    "Tuesday",
    "Friday",
    "Sunday"
  ]
}
```
What Salesforce is actually expecting:
```
{
  "FirstName": "Jeffrey",
  "LastName": "McKillop",
  "Availability__c": "Monday;Tuesday;Friday;Sunday"
}
```
######Differences
Note that not only is the customer object no longer an array, but also the separator has to change to a **;** (semi-colon)

To fix. Simply use the attached **function** for amend for a seamless Salesforce injestion.

###Usage
``` js
regUserJSON = fixSFDCString(regUserJSON, "Availability__c");
```