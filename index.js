//Request

// Node.js SDK: https://github.com/sendinblue/APIv3-nodejs-library
var SibApiV3Sdk = require('sib-api-v3-sdk');
/*var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';

var apiInstance = new SibApiV3Sdk.ContactsApi();

var createContact = new SibApiV3Sdk.CreateContact(); // CreateContact | Values to create a contact
createContact = { 'email': "ing8@tciconsultoria.com" };

apiInstance.createContact(createContact).then(function(data) {
    console.log('API called successfully. Returned data: ' + data);
}, function(error) {
    console.error(error);
});*/

//prueba

var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix['api-key'] = "Token"

// Configure API key authorization: partner-key
var partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = "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"
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //partnerKey.apiKeyPrefix['partner-key'] = "Token"

var api = new SibApiV3Sdk.AccountApi()
api.getAccount().then(function(data) {
    console.log('API called successfully. Returned data: ' + data + ' Hola');
}, function(error) {
    console.error(error);
});