var userDataFetcher = require('user-data-for-fraud-prevention');
var beautify = require("json-beautify");
var {fraudPreventionHeadersEnum, getFraudPreventionHeaders} = userDataFetcher;

var enumDisplayElement = document.getElementById('enumDisplay');
enumDisplayElement.innerText = beautify(fraudPreventionHeadersEnum, null, 4, 100);

function handleOnFetch(response) {
    var tableBody = document.getElementById('tableBody');
    response.headers.forEach((value, key) => {
        var row = document.createElement('tr');
        var keyElement = document.createElement('td');
        keyElement.innerText = key;
        var valueElement = document.createElement('td');
        valueElement.innerText = value;
        row.appendChild(keyElement);
        row.appendChild(valueElement);
        tableBody.appendChild(row);
    });
    var headersDisplayElement = document.getElementById('responseDisplay');
    headersDisplayElement.innerText = beautify(response, null, 4, 100);
};
getFraudPreventionHeaders().then(handleOnFetch);