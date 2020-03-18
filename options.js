// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//import * as $ from 'jquery.min.js';


function newRow(col1, col2) {
    var resTable = document.getElementById("resultsTable");
    var row = resTable.insertRow(-1); // new row
    var column1 = row.insertCell(0); // type column
    var column2 = row.insertCell(1); // resultScore column
    column1.innerHTML = col1;
    column2.innerHTML = col2;
}


var pathname = window.location.search; // the path entered into browser
var tempQuery = pathname.split('=')[1]; // the parsed query string
var searchQuery = tempQuery.replace(/[+]|[%20]/g, " "); // replace the +s in URL with a space

var service_url = 'https://kgsearch.googleapis.com/v1/entities:search';
var params = {
    //'query': 'Taylor Swift',
    'query': searchQuery,
    'limit': 10,
    'indent': true,
    'key': 'INSERT API KEY HERE',
};
$.getJSON(service_url + '?callback=?', params, function(response) {
    // if the array itemListElemet has an entry
    if (response.itemListElement[0]) {
        // add header
        newRow("<b>Category</b>", "<b>Score</b>");
        $.each(response.itemListElement, function(i, element) {
            // convert jQuery to string and insert in respective column
            newRow(($('<div>', { text: element['result']['@type'] }).prop('innerHTML').replace(/[,]/g, ", ")),
                parseInt($('<div>', { text: element['resultScore'] }).prop('innerHTML'), 10));
        });
    }
    // if the array doesn't have an entry, no results were found
    else {
        document.getElementById("result").innerHTML = "No results found!";
    }
});
