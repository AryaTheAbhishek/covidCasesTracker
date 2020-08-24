//Global Data Updated Time
// document.getElementById('gUpdatedTime').innerHTML = tGlobal.data[0].updated_at;
var updTime = new Date(tGlobal.data[0].updated_at);
var ccTime = new Date();
var ms = moment(ccTime,"DD/MM/YYYY HH:mm:ss").diff(moment(updTime,"DD/MM/YYYY HH:mm:ss"));
var d = moment.duration(ms);
var upAgo = moment.utc(moment.duration(d, "seconds").asMilliseconds()).format("HH:mm:ss");
document.getElementById('gUpdatedTime').innerHTML = upAgo;

//Indian State Wise Data Updated Time
document.getElementById('updateTime').innerHTML = (sWiseData[0].lastupdatedtime);


///Data and Functions for Lasest News Popup
var ccNewsLen = ccNews.raw_data.length-1;
var reqNoData = [];
for (var i = 0; i < 2000; i++){
    reqNoData[i] = ccNews.raw_data[ccNewsLen];
    ccNewsLen--;
}
var newReqData = [];
var bjwdata = [];
var othsData = [];
for (var j = 0; j < reqNoData.length; j++) {
    for (var k = 0; k < reqNoData.length - j; k++) {
        if (reqNoData[k].currentstatus != '') {
            newReqData[j]=reqNoData[k];
            if (newReqData[j].detectedstate == 'Bihar' || newReqData[j].detectedstate == 'Jharkhand' || newReqData[j].detectedstate == 'West Bengal'){
                bjwdata[j] = newReqData[j];
            }
            else {
                othsData[j] = newReqData[j];
            }
        }
    }
}
newReqData.reverse();
bjwdata.reverse();
othsData.reverse();
//News Data for Bihar Jharkhand And WestBengal
var dataSrc = [];
function lstBJW(){
    const tableBody = document.getElementById('bhJhWbNewsData');
    let dataHtml = '';
    for (var j = 0; j < bjwdata.length-1; j++){
        if(bjwdata[j].source1 != bjwdata[j+1].source1){
            dataSrc = bjwdata[j].source1.slice(0,50);
            dataHtml += `<tr>
                <td class="align-center font-bold text-gray-700">${bjwdata[j].detectedstate}</td>
                <td class="" style="cursor:pointer"><a href="${bjwdata[j].source1}" target="_blank">${dataSrc}...</a></td></tr>`;
        }
    }
    tableBody.innerHTML = dataHtml;
}
//News Data Function for Other State Data
function lstOthers(){
    const tableBody = document.getElementById('oStateNewsData');
    let dataHtml = '';
    for (var j = 0; j < othsData.length-1; j++){
        if(othsData[j].source1 != othsData[j+1].source1){
            dataSrc = othsData[j].source1.slice(0,50);
            dataHtml += `<tr>
                <td class="align-center font-bold text-gray-700">${othsData[j].detectedstate}</td>
                <td class="" style="cursor:pointer"><a href="${othsData[j].source1}" target="_blank">${dataSrc}...</a></td></tr>`;
        }
    }
    tableBody.innerHTML = dataHtml;
}
//News for Other State Latest News Search Function
function searchBJWFun(){
    let getInputText = document.getElementById('myBJWInput').value.toUpperCase();
    let tableSNameValue = document.getElementById('oStateNewsData');
    let tr = tableSNameValue.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let textV = td.textContent || td.innerHTML;
            if (textV.toUpperCase().indexOf(getInputText) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


///Onload Functions Calls
var newSwiseData = [];
window.onload = () => {
    for (var i = 0; i < sWiseData.length-1; i++){
        newSwiseData[i] = sWiseData[i+1];
    }
    loadStateTableData(newSwiseData);
    // sBycCases(newSwiseData);
    globalData();
    indiaData();

};

//Overall Global Data Till now
function globalData(){
    const indiaDivData = document.getElementById('idGlobalData');
    let divDataHtml = '';
    divDataHtml += `<div class="sStyle"><div class="text-red-600">Total Confirmed<br>${tGlobal.data[0].confirmed}</div>
    <div class="text-green-600">Total Recovered<br>${tGlobal.data[0].recovered}</div>
    <div class="text-gray-600">Total Deaths<br>${tGlobal.data[0].deaths}</div>
    <div class="text-blue-700">Active Cases<br>${tGlobal.data[0].active}</div></div>
    <div class="sStyle"><div class="text-red-600">New Confirmed<br>${tGlobal.data[0].new_confirmed}</div>
    <div class="text-green-600">New Recovered<br>${tGlobal.data[0].new_recovered}</div>
    <div class="text-gray-600">New Deaths<br>${tGlobal.data[0].new_deaths}</div></div>`;

    indiaDivData.classList.add("sStyle");
    indiaDivData.innerHTML = divDataHtml;
}
//Overall India Data Till Now
function indiaData(){
    const indiaDivData = document.getElementById('idIndiaData');
    let divDataHtml = '';
    divDataHtml += `<div class="sStyle"><div class="text-red-600">Total Confirmed<br>${sWiseData[0].confirmed}</div>
    <div class="text-green-600">Total Recovered<br>${sWiseData[0].recovered}</div>
    <div class="text-gray-600">Total Deaths<br>${sWiseData[0].deaths}</div>
    <div class="text-blue-700">Active Cases<br>${sWiseData[0].active}</div></div>
    <div class="sStyle"><div class="text-red-600">New Confirmed<br>${sWiseData[0].deltaconfirmed}</div>
    <div class="text-green-600">New Recovered<br>${sWiseData[0].deltarecovered}</div>
    <div class="text-gray-600">New Deaths<br>${sWiseData[0].deltadeaths}</div></div>`;

    indiaDivData.classList.add("sStyle");
    indiaDivData.innerHTML = divDataHtml;
}

//DayWise Covid-19 Cases Globaly
function dailyGlobal(){
    const tableBody = document.getElementById('dgValue');
    let dataHtml = '';
    for (var j = 0; j < tGlobal.data.length; j++){
        dataHtml += `<tr><td class="align-center font-bold text-gray-700 bg-gray-200 hover:text-white">${tGlobal.data[j].date}</td>
        <td class="bg-red-100 align-center"><span class="pr-1 text-red-700"> ++${tGlobal.data[j].new_confirmed}</span><span class="float-right">${tGlobal.data[j].confirmed}<span></td>
        <td class="bg-green-100 align-center"><span class="pr-1 text-green-700"> ++${tGlobal.data[j].new_recovered}</span><span class="float-center">${tGlobal.data[j].deaths}<span></td>
        <td class="bg-gray-100 align-center"><span class="pr-1 text-red-700"> ++${tGlobal.data[j].new_deaths}</span><span class="float-right">${tGlobal.data[j].confirmed}<span></td>
        <td class="bg-blue-100 align-center">${tGlobal.data[j].active}</td></tr>`;
    }
    tableBody.innerHTML = dataHtml;
}

//Daily daywise cases in India
function dailyLocal(){
    const tableBody = document.getElementById('dlValue');
    let dataHtml = '';
    var lctSeries = [];
    var testTillNow = [];
    for (var i = 0; i < staJsonOb.cases_time_series.length; i++){
        lctSeries[i] = staJsonOb.cases_time_series[i];
    }
    lctSeries.reverse();
    for (var i = 0; i < staJsonOb.tested.length; i++){
        testTillNow[i] = staJsonOb.tested[i].totalsamplestested;
    }
    testTillNow.reverse();
    var lctActive = [];
    for (var j = 0; j < lctSeries.length; j++){
        lctActive[j] = parseInt(parseInt(lctSeries[j].totalconfirmed) - (parseInt(lctSeries[j].totalrecovered) + parseInt(lctSeries[j].totaldeceased)));
        dataHtml += `<tr><td class="align-center font-bold text-gray-700 bg-gray-200 hover:text-white">${lctSeries[j].date}</td>
        <td class="bg-red-100 align-center"><span class="pr-1 text-red-700"> ++${lctSeries[j].dailyconfirmed}</span><span class="float-right">${lctSeries[j].totalconfirmed}<span></td>
        <td class="bg-green-100 align-center"><span class="pr-1 text-green-700"> ++${lctSeries[j].dailyrecovered}</span><span class="float-center">${lctSeries[j].totalrecovered}<span></td>
        <td class="bg-gray-100 align-center"><span class="pr-1 text-red-700"> ++${lctSeries[j].dailydeceased}</span><span class="float-right">${lctSeries[j].totaldeceased}<span></td>
        <td class="bg-blue-100 align-center">${lctActive[j]}</td>`;
    }
    tableBody.innerHTML = dataHtml;
}
function dailyLocalTest(){
	const tableBody = document.getElementById('dltValue');
    let dataHtml = '';
    var testTillNow = [];
    for (var i = 0; i < staJsonOb.tested.length; i++){
        testTillNow[i] = staJsonOb.tested[i];
    }
    testTillNow.reverse();
    var ltdSource = [];
    var testdataLength = staJsonOb.tested.length;
    for (var j = 0; j < testdataLength - 1; j++){
    	ltdSource = testTillNow[j].source.slice(0,30);
    	if (testTillNow[j].totalsamplestested !== ''){
    		var newTests = parseInt(parseInt(testTillNow[j].totalsamplestested) - parseInt(testTillNow[j+1].totalsamplestested));
	        dataHtml += `<tr><td class="align-center font-bold text-gray-700 bg-gray-200 hover:text-white">${testTillNow[j].updatetimestamp}</td>
	        <td class="bg-blue-100 align-center">${testTillNow[j].totalsamplestested}</td>
	        <td class="bg-blue-100 align-center">${newTests}</td>
	        <td class="bg-blue-100 align-center" style="cursor:pointer"><a href="${testTillNow[j].source}" target="_blank">${ltdSource}...</a></td></tr>`;
    	}
    }
    tableBody.innerHTML = dataHtml;
}
function stateDailyTest() {
	const locstateHead = document.getElementById('stateHead');
	// console.log(locstateHead.textContent);
	document.getElementById('stateHeadTest').innerHTML = locstateHead.textContent;
	const tableBody = document.getElementById('stateTestDaily');
    let dataHtml = '';
    var newTestData = [];
    var j = 0;
    for (var i = 0; i < dTestDataLen; i++){
    	// console.log(dTestData.state);
        if (dTestData[i].state == locstateHead.textContent){
			// console.log(dTestData[i].totaltested);
			newTestData[j] = dTestData[i];
			j++;
        }
    }
    newTestData.reverse();
    for (var k = 0; k < newTestData.length - 1; k++){
    	    // console.log(newTestData[j].updatedon)
    	if (newTestData[k].totaltested !== ''){
    		var newTotayTest = parseInt(parseInt(newTestData[k].totaltested) - parseInt(newTestData[k + 1].totaltested));
			dataHtml += `<tr>
			<td class="align-center font-bold text-gray-700 bg-gray-200 hover:text-white">${newTestData[k].updatedon}</td>
			<td class="align-center text-gray-700 bg-blue-100 hover:text-red-500">${newTestData[k].totaltested}</td>
			<td class="align-center text-gray-700 bg-blue-100 hover:text-red-500">${newTotayTest}</td>
			<td class="align-center text-gray-700 bg-red-100 hover:text-red-500">${newTestData[k].positive}</td>
			<td class="align-center text-gray-700 bg-orange-100 hover:text-red-500">${newTestData[k].testpositivityrate}</td></tr>`;
    	}
    }
    tableBody.innerHTML = dataHtml;
}

var count = 0;
function loadStateTableData(newSwiseData){
    const stateTableBody = document.getElementById('stateValue');
    let sDataHtml = '';
    var exSec = $('#sBycCases').html();
    var newStrSec = exSec.substring(0, exSec.length-1);
    if(count < 1){
        newStrSec += '&#9660';
        $('#sBycCases').html(newStrSec);
    }
    count++;

    for(var i=0; i<newSwiseData.length; i++){
        var nonZeroDataone = (newSwiseData[i].deltaconfirmed !== "0") ? "++"+newSwiseData[i].deltaconfirmed : "";
        var nonZeroDatatwo = (newSwiseData[i].deltarecovered !== "0") ? "++"+newSwiseData[i].deltarecovered : "";
        var nonZeroDatathree = (newSwiseData[i].deltadeaths !== "0") ? "++"+newSwiseData[i].deltadeaths : "";
        if (newSwiseData[i].confirmed == "0"){
            continue;
        }
        sDataHtml += `<tr>
        <td class="arrowRight pptrState align-middle font-bold text-gray-700 bg-gray-200 hover:bg-gray-500 hover:text-white" onclick="oneByOneState(this)" data-toggle="modal" data-target="#exampleModalCenter">${newSwiseData[i].state}</td>
        <td class="bg-red-100"><span class="text-red-700 pr-1"> ${nonZeroDataone}</span><span class="float-right">${newSwiseData[i].confirmed}<span></td>
        <td class="bg-green-100"><span class="text-green-700 pr-1"> ${nonZeroDatatwo}</span><span class="float-right">${newSwiseData[i].recovered}<span></td>
        <td class="bg-gray-100"><span class="text-red-700 pr-1"> ${nonZeroDatathree}</span><span class="float-right">${newSwiseData[i].deaths}<span></td>
        <td class="bg-blue-100" class="align-middle">${newSwiseData[i].active}</td></tr>
        `;
    }
    stateTableBody.innerHTML = sDataHtml;
}
///Function for Search State Table
const searchStateFun = () => {
    let filter = document.getElementById('myStateInput').value.toUpperCase();
    let tValue = document.getElementById('stateValue');
    let tr = tValue.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let textV = td.textContent || td.innerHTML;
            if (textV.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


let sStateName = '';
var nonZeroConfi = [];
var nonZeroRecov = [];
var nonZeroDecea = [];
var tDistName = [];
var tDistConfi = [];
var tDistRecov = [];
var tDistDecea = [];
var tDistActive = [];
function oneByOneState(checkNewState){
    // var targetRow = $(checkNewState).parents('td');
    var targetRow = checkNewState.textContent;
    // console.log(checkNewState.textContent);
    // console.log(checkNewState);

    const distsTableBody = document.getElementById('dWiseValue');
    let dDataHtml = '';

    var exSec = $('#sDistByDefault').html();
    var newStrSec = exSec.substring(0, exSec.length-1);
    newStrSec += '&#9660';
    $('#sDistByDefault').html(newStrSec);

    // var exFst = $('#sDistByDefault').html();
    // var p = $('#sDistByDefault').html();
    // var p = p.charCodeAt(exFst.length-1);

    var exSec = $('#sDistBycCases').html();
    var q = $('#sDistBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

    var exSecSec = $('#sDistByTcCases').html();
    var qq = $('#sDistByTcCases').html();
    var qq = qq.charCodeAt(exSecSec.length-1);

    var exTrd = $('#sDistByrCases').html();
    var r = $('#sDistByrCases').html();
    var r = r.charCodeAt(exTrd.length-1);

    var exTrdTrd = $('#sDistByTrCases').html();
    var rr = $('#sDistByTrCases').html();
    var rr = rr.charCodeAt(exTrdTrd.length-1);

    var exFor = $('#sDistByDeath').html();
    var s = $('#sDistByDeath').html();
    var s = s.charCodeAt(exFor.length-1);

    var exForFor = $('#sDistByTDeath').html();
    var ss = $('#sDistByTDeath').html();
    var ss = ss.charCodeAt(exForFor.length-1);

    var exFth = $('#sDistByaCases').html();
    var t = $('#sDistByaCases').html();
    var t = t.charCodeAt(exFth.length-1);

    // if (p == '9650' || p == '9660'){
    //     var newStrFst = exFst.substring(0, exFst.length-1);
    //     newStrFst += ' ';
    //     $('#sDistByDefault').html(newStrFst);
    // }
    if (q == '9650' || q == '9660'){
        var newStrSec = exSec.substring(0, exSec.length-1);
        newStrSec += ' ';
        $('#sDistBycCases').html(newStrSec);
    }
    if (qq == '9650' || qq == '9660'){
        var newStrSecSec = exSecSec.substring(0, exSecSec.length-1);
        newStrSecSec += ' ';
        $('#sDistByTcCases').html(newStrSecSec);
    }
    if (r == '9650' ||  r== '9660'){
        var newStrTrd = exTrd.substring(0, exTrd.length-1);
        newStrTrd += ' ';
        $('#sDistByrCases').html(newStrTrd);
    }
    if (rr == '9650' ||  rr== '9660'){
        var newStrTrdTrd = exTrdTrd.substring(0, exTrdTrd.length-1);
        newStrTrdTrd += ' ';
        $('#sDistByTrCases').html(newStrTrdTrd);
    }
    if (s == '9650' || s == '9660'){
        var newStrFor = exFor.substring(0, exFor.length-1);
        newStrFor += ' ';
        $('#sDistByDeath').html(newStrFor);
    }
    if (ss == '9650' || ss == '9660'){
        var newStrForFor = exForFor.substring(0, exForFor.length-1);
        newStrForFor += ' ';
        $('#sDistByTDeath').html(newStrForFor);
    }
    if (t == '9650' || t == '9660'){
        var newStrFth = exFth.substring(0, exFth.length-1);
        newStrFth += ' ';
        $('#sDistByaCases').html(newStrFth);
    }

    for(var k = 0; k < distWiseLength; k++){
        if((distJsonOb[k].state) == targetRow){
            // console.log((distJsonOb[k].state));
            document.getElementById('stateHead').innerHTML = (distJsonOb[k].state);
            sStateName = (distJsonOb[k].state);
            for (var j = 0; j < (distJsonOb[k].districtData.length); j++){
                nonZeroConfi[j] = ((distJsonOb[k].districtData[j].delta.confirmed) == "0") ? "" : "++"+(distJsonOb[k].districtData[j].delta.confirmed);
                nonZeroRecov[j] = ((distJsonOb[k].districtData[j].delta.recovered) == "0") ? "" : "++"+(distJsonOb[k].districtData[j].delta.recovered);
                nonZeroDecea[j] = ((distJsonOb[k].districtData[j].delta.deceased) == "0") ? "" : "++"+(distJsonOb[k].districtData[j].delta.deceased);
                tDistName[j] = (distJsonOb[k].districtData[j].district);
                tDistConfi[j] = (distJsonOb[k].districtData[j].confirmed);
                tDistRecov[j] = (distJsonOb[k].districtData[j].recovered);
                tDistDecea[j] = (distJsonOb[k].districtData[j].deceased);
                tDistActive[j] = (distJsonOb[k].districtData[j].active);
                var fetchColor = tDistName[j];
                for (var i = 0; i < nofDistZone.length; i++){
                    if(fetchColor == nofDistZone[i].district){
                        var distZoneColor = nofDistZone[i].zone;
                        if(distZoneColor == 'Green'){
                            distZoneColor = '#d9ffcc';
                        }
                        if(distZoneColor == 'Red'){
                            distZoneColor = '#ffd9cc';
                        }
                        if(distZoneColor == 'Orange'){
                            distZoneColor = '#ffe6cc';
                        }
                    }
                }
                dDataHtml += `<tr><td class="align-middle font-bold text-gray-700 hover:text-white bg-gray-200" style="background-color: ${distZoneColor}">${tDistName[j]}</td>
                <td class="bg-red-100"><span class="text-red-700 pr-1"> ${nonZeroConfi[j]}</span><span class="float-right">${tDistConfi[j]}<span></td>
                <td class="bg-green-100"><span class="text-green-700 pr-1"> ${nonZeroRecov[j]}</span><span class="float-right">${tDistRecov[j]}<span></td>
                <td class="bg-gray-100"><span class="text-red-700 pr-1"> ${nonZeroDecea[j]}</span><span class="float-right">${tDistDecea[j]}<span></td>
                <td class="bg-blue-100" class="align-middle">${tDistActive[j]}</td></tr>`;
            }
            distsTableBody.innerHTML = dDataHtml;
        }
    }
    // loadStateTableData();
}
var nnonZeroConfi = [];
var nnonZeroRecov = [];
var nnonZeroDecea = [];
function sortedOneByOneDist(lsdata){
    const distsTableBody = document.getElementById('dWiseValue');
    let dDataHtml = '';
    for (var j = 0; j < lsdata.length; j++){
        nnonZeroConfi[j] = ((lsdata[j].delta.confirmed) == "0") ? "" : "++"+(lsdata[j].delta.confirmed);
        nnonZeroRecov[j] = ((lsdata[j].delta.recovered) == "0") ? "" : "++"+(lsdata[j].delta.recovered);
        nnonZeroDecea[j] = ((lsdata[j].delta.deceased) == "0") ? "" : "++"+(lsdata[j].delta.deceased);

        var fetchColor = lsdata[j].district;
        for (var i = 0; i < nofDistZone.length; i++){
            if(fetchColor == nofDistZone[i].district){
                var distZoneColor = nofDistZone[i].zone;
                if(distZoneColor == 'Green'){
                    distZoneColor = '#d9ffcc';
                }
                if(distZoneColor == 'Red'){
                    distZoneColor = '#ffd9cc';
                }
                if(distZoneColor == 'Orange'){
                    distZoneColor = '#ffe6cc';
                }
            }
        }

        dDataHtml += `<tr><td class="align-middle font-bold text-gray-700 bg-gray-200 hover:text-white" style="background-color:${distZoneColor}">${lsdata[j].district}</td>
        <td class="bg-red-100"><span class="pr-1 text-red-700"> ${nnonZeroConfi[j]}</span><span class="float-right">${lsdata[j].confirmed}<span></td>
        <td class="bg-green-100"><span class="pr-1 text-green-700"> ${nnonZeroRecov[j]}</span><span class="float-right">${lsdata[j].recovered}<span></td>
        <td class="bg-gray-100"><span class="pr-1 text-red-700"> ${nnonZeroDecea[j]}</span><span class="float-right">${lsdata[j].deceased}<span></td>
        <td class="bg-blue-100" class="align-middle">${lsdata[j].active}</td></tr>`;
    }
    distsTableBody.innerHTML = dDataHtml;
}
const searchDistFun = () => {
    let filter = document.getElementById('myDistInput').value.toUpperCase();
    let tValue = document.getElementById('dWiseValue');
    let tr = tValue.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let textV = td.textContent || td.innerHTML;
            if (textV.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}






///Countries Data and its Sorting
var conZeroConfi = [];
var conZeroRecov = [];
var conZeroDecea = [];
var contActiveCases = [];
// function getloadTableData(){
//     loadTableData(jssonObData);
// }
function loadTableData(jssonObData){
    const tableBody = document.getElementById('tValue');
    let dataHtml = '';

    for (var j = 0; j < jssonObData.length; j++){
        conZeroConfi[j] = ((jssonObData[j].today.confirmed) == "0") ? "" : "++"+(jssonObData[j].today.confirmed);
        // conZeroRecov[j] = ((jssonObData[j].today[j]) == "0") ? "" : "++"+(data[j].NewRecovered);
        conZeroDecea[j] = ((jssonObData[j].today.deaths) == "0") ? "" : "++"+(jssonObData[j].today.deaths);
        contActiveCases[j] = (jssonObData[j].latest_data.confirmed)-((jssonObData[j].latest_data.recovered)+(jssonObData[j].latest_data.deaths));
        if (jssonObData[j].latest_data.confirmed == "0"){
            continue;
        }
        dataHtml += `<tr><td class="align-center font-bold text-gray-700 bg-gray-200 hover:text-white">${jssonObData[j].name}</td>
        <td class="bg-red-100 align-center"><span class="pr-1 text-red-700"> ${conZeroConfi[j]}</span><span class="float-right">${jssonObData[j].latest_data.confirmed}<span></td>
        <td class="bg-green-100 align-center"><span class="pr-1 text-green-700"> ${""}</span><span class="float-center">${jssonObData[j].latest_data.recovered}<span></td>
        <td class="bg-gray-100 align-center"><span class="pr-1 text-red-700"> ${conZeroDecea[j]}</span><span class="float-right">${jssonObData[j].latest_data.deaths}<span></td>
        <td class="bg-blue-100 align-center">${contActiveCases[j]}</td>
        <td class="bg-blue-100 align-center">${jssonObData[j].latest_data.calculated.recovery_rate.toFixed(2)}</td>
        <td class="bg-blue-100 align-center">${jssonObData[j].latest_data.calculated.death_rate.toFixed(2)}</td></tr>`;
    }
    tableBody.innerHTML = dataHtml;
}
// function All Countries searchFun(){}
const searchFun = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();
    let tValue = document.getElementById('tValue');
    let tr = tValue.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let textV = td.textContent || td.innerHTML;
            if (textV.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function sContBycCases(){
    var exSec = $('#sContBycCases').html();
    var newStrSec = exSec.substring(0, exSec.length-1);
    newStrSec += '&#9660';
    $('#sContBycCases').html(newStrSec);

    var exFst = $('#sContByDefault').html();
    var p = $('#sContByDefault').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSecSec = $('#sContByTcCases').html();
    var qq = $('#sContByTcCases').html();
    var qq = qq.charCodeAt(exSecSec.length-1);

    var exTrd = $('#sContByrCases').html();
    var r = $('#sContByrCases').html();
    var r = r.charCodeAt(exTrd.length-1);

    // var exTrdTrd = $('#sContByTrCases').html();
    // var rr = $('#sContByTrCases').html();
    // var rr = rr.charCodeAt(exTrdTrd.length-1);

    var exFor = $('#sContByDeath').html();
    var s = $('#sContByDeath').html();
    var s = s.charCodeAt(exFor.length-1);

    var exForFor = $('#sContByTDeath').html();
    var ss = $('#sContByTDeath').html();
    var ss = ss.charCodeAt(exForFor.length-1);

    var exFth = $('#sContByaCases').html();
    var t = $('#sContByaCases').html();
    var t = t.charCodeAt(exFth.length-1);

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sContByDefault').html(newStrFst);
    }
    if (qq == '9650' || qq == '9660'){
        var newStrSecSec = exSecSec.substring(0, exSecSec.length-1);
        newStrSecSec += ' ';
        $('#sContByTcCases').html(newStrSecSec);
    }
    if (r == '9650' ||  r== '9660'){
        var newStrTrd = exTrd.substring(0, exTrd.length-1);
        newStrTrd += ' ';
        $('#sContByrCases').html(newStrTrd);
    }
    // if (rr == '9650' ||  rr== '9660'){
    //     var newStrTrdTrd = exTrdTrd.substring(0, exTrdTrd.length-1);
    //     newStrTrdTrd += ' ';
    //     $('#sContByTrCases').html(newStrTrdTrd);
    // }
    if (s == '9650' || s == '9660'){
        var newStrFor = exFor.substring(0, exFor.length-1);
        newStrFor += ' ';
        $('#sContByDeath').html(newStrFor);
    }
    if (ss == '9650' || ss == '9660'){
        var newStrForFor = exForFor.substring(0, exForFor.length-1);
        newStrForFor += ' ';
        $('#sContByTDeath').html(newStrForFor);
    }
    if (t == '9650' || t == '9660'){
        var newStrFth = exFth.substring(0, exFth.length-1);
        newStrFth += ' ';
        $('#sContByaCases').html(newStrFth);
    }

    var lsdata = [];
    for (var i = 0; i < jssonObData.length; i++) {
        lsdata[i] = jssonObData[i];
    }
    var temp = null;
    for (var j = 0; j < jssonObData.length - 1; j++) {
        for (var k = 0; k < jssonObData.length - 1 - j; k++) {
            if (parseInt(lsdata[k].latest_data.confirmed) < parseInt(lsdata[k + 1].latest_data.confirmed)) {
                temp = lsdata[k];
                lsdata[k] = lsdata[k + 1];
                lsdata[k + 1] = temp;
            }
        }
    }
    loadTableData(lsdata);
}
