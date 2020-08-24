//Fetch data from API https://corona-api.com/timeline Global Country Data
function Get(Turl) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", Turl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
let Turl = "https://corona-api.com/timeline";
let tGlobal = JSON.parse(Get(Turl));

//Fetch data from API https://corona-api.com/countries for Country wise Data
function Get(Curl) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", Curl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
let Curl = "https://corona-api.com/countries";
let jsonOb = JSON.parse(Get(Curl));
let jssonObData = jsonOb.data;

//fetch the data from API https://api.covid19india.org/data.json for Indian state wise data
function Get(surl) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", surl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
let surl = "https://api.covid19india.org/data.json";
let staJsonOb = JSON.parse(Get(surl));
let sWiseData = staJsonOb.statewise;

//fetch the data from API https://api.covid19india.org/v2/state_district_wise.json for Indian Distict wise data
function Get(durl) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", durl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
let durl = "https://api.covid19india.org/v2/state_district_wise.json";
let distJsonOb = JSON.parse(Get(durl));
let distWiseLength = distJsonOb.length;

///Fetch the Color Zones Disticts of Indian State 
function Get(zurl) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", zurl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
let zurl = "https://api.covid19india.org/zones.json";
let distZone = JSON.parse(Get(zurl));
let nofDistZone = distZone.zones;


///Fetch the Data for most latest cases confirmation
function Get(ccurl) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", ccurl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
let ccurl = "https://api.covid19india.org/raw_data6.json";
let ccNews = JSON.parse(Get(ccurl));


///Fetch the Data for stateWise Test Cases Reports
function Get(tReurl) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", tReurl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
let tReurl = "https://api.covid19india.org/state_test_data.json";
let dTestDataTemp = JSON.parse(Get(tReurl));
let dTestData = dTestDataTemp.states_tested_data;
let dTestDataLen = dTestData.length;

window.addEventListener('load',() => {
    registerSW();
});

async function registerSW(){
    if('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('sw.js');
        } catch (e) {
            console.log('sw registration failed');
        }
    }
}



// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('sw.js');
// }
