var fetch = require('node-fetch')

const token = 'ENTER YOUR AUTH TOKEN HERE'
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let myTimer = setTimeout(checkOnTimer, 3000);
var thisurl;

function checkOnTimer() {
    for (j = 0; j < 26; j++) {
        for (i = 0; i < 26; i++) {
            thisurl = letters[i] + letters[j];
            fetch('https://urlmanager.cloudapp.net/api/akams/validate/vanity?random=0.707221923423432', { method: 'POST', headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token }, body: "{'vanity':'" + thisurl + "'" })
                .then(function (res) {
                    return res.json();
                }).then(function (json) {
                    //console.log(json);
                    if (res.json.used == false) {
                        console.log(thisurl + " is not being used!")
                    }
                });
        }
    }
    clearTimeout(myTimer);
}
