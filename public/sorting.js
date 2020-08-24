$('#sByAlphabet').on('click',function(){
    var exSec = $('#sBycCases').html();
    var q = $('#sBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

    var exSecSec = $('#sByTcCases').html();
    var qq = $('#sByTcCases').html();
    var qq = qq.charCodeAt(exSecSec.length-1);

    var exTrd = $('#sByrCases').html();
    var r = $('#sByrCases').html();
    var r = r.charCodeAt(exTrd.length-1);

    var exTrdTrd = $('#sByTrCases').html();
    var rr = $('#sByTrCases').html();
    var rr = rr.charCodeAt(exTrdTrd.length-1);

    var exFor = $('#sByDeath').html();
    var s = $('#sByDeath').html();
    var s = s.charCodeAt(exFor.length-1);

    var exForFor = $('#sByTDeath').html();
    var ss = $('#sByTDeath').html();
    var ss = ss.charCodeAt(exForFor.length-1);

    var exFth = $('#sByaCases').html();
    var t = $('#sByaCases').html();
    var t = t.charCodeAt(exFth.length-1);

    if (q == '9650' || q == '9660'){
        var newStrSec = exSec.substring(0, exSec.length-1);
        newStrSec += ' ';
        $('#sBycCases').html(newStrSec);
    }
    if (qq == '9650' || qq == '9660'){
        var newStrSecSec = exSecSec.substring(0, exSecSec.length-1);
        newStrSecSec += ' ';
        $('#sByTcCases').html(newStrSecSec);
    }
    if (r == '9650' ||  r== '9660'){
        var newStrTrd = exTrd.substring(0, exTrd.length-1);
        newStrTrd += ' ';
        $('#sByrCases').html(newStrTrd);
    }
    if (rr == '9650' ||  rr== '9660'){
        var newStrTrdTrd = exTrdTrd.substring(0, exTrdTrd.length-1);
        newStrTrdTrd += ' ';
        $('#sByTrCases').html(newStrTrdTrd);
    }
    if (s == '9650' || s == '9660'){
        var newStrFor = exFor.substring(0, exFor.length-1);
        newStrFor += ' ';
        $('#sByDeath').html(newStrFor);
    }
    if (ss == '9650' || ss == '9660'){
        var newStrForFor = exForFor.substring(0, exForFor.length-1);
        newStrForFor += ' ';
        $('#sByTDeath').html(newStrForFor);
    }
    if (t == '9650' || t == '9660'){
        var newStrFth = exFth.substring(0, exFth.length-1);
        newStrFth += ' ';
        $('#sByaCases').html(newStrFth);
    }
    
    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    for (var i = 0; i < newSwiseData.length; i++) {
        lsdata[i] = newSwiseData[i];
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        lsdata.sort(function(a, b) {
            var nameA = a.state.toUpperCase();
            var nameB = b.state.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        });
        lstItem += '&#9660';
    }
    else {
        $(this).data('order',"desc");
        lsdata.sort(function(a, b) {
            var nameA = a.state.toUpperCase();
            var nameB = b.state.toUpperCase();
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
        });
        lstItem += '&#9650';
    }
    $(this).html(lstItem);
    loadStateTableData(lsdata);
});

$('#sBycCases').on('click',function(){
    var exFst = $('#sByAlphabet').html();
    var p = $('#sByAlphabet').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSecSec = $('#sByTcCases').html();
    var qq = $('#sByTcCases').html();
    var qq = qq.charCodeAt(exSecSec.length-1);

    var exTrd = $('#sByrCases').html();
    var r = $('#sByrCases').html();
    var r = r.charCodeAt(exTrd.length-1);

    var exTrdTrd = $('#sByTrCases').html();
    var rr = $('#sByTrCases').html();
    var rr = rr.charCodeAt(exTrdTrd.length-1);

    var exFor = $('#sByDeath').html();
    var s = $('#sByDeath').html();
    var s = s.charCodeAt(exFor.length-1);

    var exForFor = $('#sByTDeath').html();
    var ss = $('#sByTDeath').html();
    var ss = ss.charCodeAt(exForFor.length-1);

    var exFth = $('#sByaCases').html();
    var t = $('#sByaCases').html();
    var t = t.charCodeAt(exFth.length-1);

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sByAlphabet').html(newStrFst);
    }
    if (qq == '9650' || qq == '9660'){
        var newStrSecSec = exSecSec.substring(0, exSecSec.length-1);
        newStrSecSec += ' ';
        $('#sByTcCases').html(newStrSecSec);
    }
    if (r == '9650' ||  r== '9660'){
        var newStrTrd = exTrd.substring(0, exTrd.length-1);
        newStrTrd += ' ';
        $('#sByrCases').html(newStrTrd);
    }
    if (rr == '9650' ||  rr== '9660'){
        var newStrTrdTrd = exTrdTrd.substring(0, exTrdTrd.length-1);
        newStrTrdTrd += ' ';
        $('#sByTrCases').html(newStrTrdTrd);
    }
    if (s == '9650' || s == '9660'){
        var newStrFor = exFor.substring(0, exFor.length-1);
        newStrFor += ' ';
        $('#sByDeath').html(newStrFor);
    }
    if (ss == '9650' || ss == '9660'){
        var newStrForFor = exForFor.substring(0, exForFor.length-1);
        newStrForFor += ' ';
        $('#sByTDeath').html(newStrForFor);
    }
    if (t == '9650' || t == '9660'){
        var newStrFth = exFth.substring(0, exFth.length-1);
        newStrFth += ' ';
        $('#sByaCases').html(newStrFth);
    }


    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    if(order == 'desc'){
        $(this).data('order',"asec");
        var lsdata = [];
        var temp = null;
        for (var i = 0; i < newSwiseData.length; i++) {
            lsdata[i] = newSwiseData[i];
        }
        for (var j = 0; j < newSwiseData.length - 1; j++) {
            for (var k = 0; k < newSwiseData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].confirmed) > parseInt(lsdata[k + 1].confirmed)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
        loadStateTableData(lsdata);
    }
    else {
        $(this).data('order',"desc");
        lstItem += '&#9660';
        loadStateTableData(newSwiseData);   
    }
    $(this).html(lstItem);
});

$('#sByTcCases').on('click',function(){
    var exFst = $('#sByAlphabet').html();
    var p = $('#sByAlphabet').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSec = $('#sBycCases').html();
    var q = $('#sBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

    var exTrd = $('#sByrCases').html();
    var r = $('#sByrCases').html();
    var r = r.charCodeAt(exTrd.length-1);

    var exTrdTrd = $('#sByTrCases').html();
    var rr = $('#sByTrCases').html();
    var rr = rr.charCodeAt(exTrdTrd.length-1);

    var exFor = $('#sByDeath').html();
    var s = $('#sByDeath').html();
    var s = s.charCodeAt(exFor.length-1);

    var exForFor = $('#sByTDeath').html();
    var ss = $('#sByTDeath').html();
    var ss = ss.charCodeAt(exForFor.length-1);

    var exFth = $('#sByaCases').html();
    var t = $('#sByaCases').html();
    var t = t.charCodeAt(exFth.length-1);

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sByAlphabet').html(newStrFst);
    }
    if (q == '9650' || q == '9660'){
        var newStrSec = exSec.substring(0, exSec.length-1);
        newStrSec += ' ';
        $('#sBycCases').html(newStrSec);
    }
    if (r == '9650' ||  r== '9660'){
        var newStrTrd = exTrd.substring(0, exTrd.length-1);
        newStrTrd += ' ';
        $('#sByrCases').html(newStrTrd);
    }
    if (rr == '9650' ||  rr== '9660'){
        var newStrTrdTrd = exTrdTrd.substring(0, exTrdTrd.length-1);
        newStrTrdTrd += ' ';
        $('#sByTrCases').html(newStrTrdTrd);
    }
    if (s == '9650' || s == '9660'){
        var newStrFor = exFor.substring(0, exFor.length-1);
        newStrFor += ' ';
        $('#sByDeath').html(newStrFor);
    }
    if (ss == '9650' || ss == '9660'){
        var newStrForFor = exForFor.substring(0, exForFor.length-1);
        newStrForFor += ' ';
        $('#sByTDeath').html(newStrForFor);
    }
    if (t == '9650' || t == '9660'){
        var newStrFth = exFth.substring(0, exFth.length-1);
        newStrFth += ' ';
        $('#sByaCases').html(newStrFth);
    }

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for (var i = 0; i < newSwiseData.length; i++) {
        lsdata[i] = newSwiseData[i];
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < newSwiseData.length - 1; j++) {
            for (var k = 0; k < newSwiseData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].deltaconfirmed) < parseInt(lsdata[k + 1].deltaconfirmed)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
        loadStateTableData(lsdata);
    }
    else {
        $(this).data('order',"desc");
        for (var j = 0; j < newSwiseData.length - 1; j++) {
            for (var k = 0; k < newSwiseData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].deltaconfirmed) > parseInt(lsdata[k + 1].deltaconfirmed)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
        loadStateTableData(lsdata);
    }
    $(this).html(lstItem);
});

$('#sByrCases').on('click',function(){
    num = true;
    var exFst = $('#sByAlphabet').html();
    var p = $('#sByAlphabet').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSec = $('#sBycCases').html();
    var q = $('#sBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

    var exSecSec = $('#sByTcCases').html();
    var qq = $('#sByTcCases').html();
    var qq = qq.charCodeAt(exSecSec.length-1);

    var exTrdTrd = $('#sByTrCases').html();
    var rr = $('#sByTrCases').html();
    var rr = rr.charCodeAt(exTrdTrd.length-1);

    var exFor = $('#sByDeath').html();
    var s = $('#sByDeath').html();
    var s = s.charCodeAt(exFor.length-1);

    var exForFor = $('#sByTDeath').html();
    var ss = $('#sByTDeath').html();
    var ss = ss.charCodeAt(exForFor.length-1);

    var exFth = $('#sByaCases').html();
    var t = $('#sByaCases').html();
    var t = t.charCodeAt(exFth.length-1);

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sByAlphabet').html(newStrFst);
    }
    if (q == '9650' || q == '9660'){
        var newStrSec = exSec.substring(0, exSec.length-1);
        newStrSec += ' ';
        $('#sBycCases').html(newStrSec);
    }
    if (qq == '9650' || qq == '9660'){
        var newStrSecSec = exSecSec.substring(0, exSecSec.length-1);
        newStrSecSec += ' ';
        $('#sByTcCases').html(newStrSecSec);
    }
    if (rr == '9650' ||  rr== '9660'){
        var newStrTrdTrd = exTrdTrd.substring(0, exTrdTrd.length-1);
        newStrTrdTrd += ' ';
        $('#sByTrCases').html(newStrTrdTrd);
    }
    if (s == '9650' || s == '9660'){
        var newStrFor = exFor.substring(0, exFor.length-1);
        newStrFor += ' ';
        $('#sByDeath').html(newStrFor);
    }
    if (ss == '9650' || ss == '9660'){
        var newStrForFor = exForFor.substring(0, exForFor.length-1);
        newStrForFor += ' ';
        $('#sByTDeath').html(newStrForFor);
    }
    if (t == '9650' || t == '9660'){
        var newStrFth = exFth.substring(0, exFth.length-1);
        newStrFth += ' ';
        $('#sByaCases').html(newStrFth);
    }

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for (var i = 0; i < newSwiseData.length; i++) {
        lsdata[i] = newSwiseData[i];
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < newSwiseData.length - 1; j++) {
            for (var k = 0; k < newSwiseData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].recovered) < parseInt(lsdata[k + 1].recovered)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
        loadStateTableData(lsdata);
    }
    else {
        $(this).data('order',"desc");
        for (var j = 0; j < newSwiseData.length - 1; j++) {
            for (var k = 0; k < newSwiseData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].recovered) > parseInt(lsdata[k + 1].recovered)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
        loadStateTableData(lsdata);
    }
    $(this).html(lstItem);
});

$('#sByTrCases').on('click',function(){
    var exFst = $('#sByAlphabet').html();
    var p = $('#sByAlphabet').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSec = $('#sBycCases').html();
    var q = $('#sBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

    var exSecSec = $('#sByTcCases').html();
    var qq = $('#sByTcCases').html();
    var qq = qq.charCodeAt(exSecSec.length-1);

    var exTrd = $('#sByrCases').html();
    var r = $('#sByrCases').html();
    var r = r.charCodeAt(exTrd.length-1);

    var exFor = $('#sByDeath').html();
    var s = $('#sByDeath').html();
    var s = s.charCodeAt(exFor.length-1);

    var exForFor = $('#sByTDeath').html();
    var ss = $('#sByTDeath').html();
    var ss = ss.charCodeAt(exForFor.length-1);

    var exFth = $('#sByaCases').html();
    var t = $('#sByaCases').html();
    var t = t.charCodeAt(exFth.length-1);

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sByAlphabet').html(newStrFst);
    }
    if (q == '9650' || q == '9660'){
        var newStrSec = exSec.substring(0, exSec.length-1);
        newStrSec += ' ';
        $('#sBycCases').html(newStrSec);
    }
    if (qq == '9650' || qq == '9660'){
        var newStrSecSec = exSecSec.substring(0, exSecSec.length-1);
        newStrSecSec += ' ';
        $('#sByTcCases').html(newStrSecSec);
    }
    if (r == '9650' ||  r== '9660'){
        var newStrTrd = exTrd.substring(0, exTrd.length-1);
        newStrTrd += ' ';
        $('#sByrCases').html(newStrTrd);
    }
    if (s == '9650' || s == '9660'){
        var newStrFor = exFor.substring(0, exFor.length-1);
        newStrFor += ' ';
        $('#sByDeath').html(newStrFor);
    }
    if (ss == '9650' || ss == '9660'){
        var newStrForFor = exForFor.substring(0, exForFor.length-1);
        newStrForFor += ' ';
        $('#sByTDeath').html(newStrForFor);
    }
    if (t == '9650' || t == '9660'){
        var newStrFth = exFth.substring(0, exFth.length-1);
        newStrFth += ' ';
        $('#sByaCases').html(newStrFth);
    }

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for (var i = 0; i < newSwiseData.length; i++) {
        lsdata[i] = newSwiseData[i];
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < newSwiseData.length - 1; j++) {
            for (var k = 0; k < newSwiseData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].deltarecovered) < parseInt(lsdata[k + 1].deltarecovered)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
        loadStateTableData(lsdata);
    }
    else {
        $(this).data('order',"desc");
        for (var j = 0; j < newSwiseData.length - 1; j++) {
            for (var k = 0; k < newSwiseData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].deltarecovered) > parseInt(lsdata[k + 1].deltarecovered)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
        loadStateTableData(lsdata);
    }
    $(this).html(lstItem);
});

$('#sByDeath').on('click',function(){
    var exFst = $('#sByAlphabet').html();
    var p = $('#sByAlphabet').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSec = $('#sBycCases').html();
    var q = $('#sBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

    var exSecSec = $('#sByTcCases').html();
    var qq = $('#sByTcCases').html();
    var qq = qq.charCodeAt(exSecSec.length-1);

    var exTrd = $('#sByrCases').html();
    var r = $('#sByrCases').html();
    var r = r.charCodeAt(exTrd.length-1);

    var exTrdTrd = $('#sByTrCases').html();
    var rr = $('#sByTrCases').html();
    var rr = rr.charCodeAt(exTrdTrd.length-1);

    var exForFor = $('#sByTDeath').html();
    var ss = $('#sByTDeath').html();
    var ss = ss.charCodeAt(exForFor.length-1);

    var exFth = $('#sByaCases').html();
    var t = $('#sByaCases').html();
    var t = t.charCodeAt(exFth.length-1);

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sByAlphabet').html(newStrFst);
    }
    if (q == '9650' || q == '9660'){
        var newStrSec = exSec.substring(0, exSec.length-1);
        newStrSec += ' ';
        $('#sBycCases').html(newStrSec);
    }
    if (qq == '9650' || qq == '9660'){
        var newStrSecSec = exSecSec.substring(0, exSecSec.length-1);
        newStrSecSec += ' ';
        $('#sByTcCases').html(newStrSecSec);
    }
    if (r == '9650' ||  r== '9660'){
        var newStrTrd = exTrd.substring(0, exTrd.length-1);
        newStrTrd += ' ';
        $('#sByrCases').html(newStrTrd);
    }
    if (rr == '9650' ||  rr== '9660'){
        var newStrTrdTrd = exTrdTrd.substring(0, exTrdTrd.length-1);
        newStrTrdTrd += ' ';
        $('#sByTrCases').html(newStrTrdTrd);
    }
    if (ss == '9650' || ss == '9660'){
        var newStrForFor = exForFor.substring(0, exForFor.length-1);
        newStrForFor += ' ';
        $('#sByTDeath').html(newStrForFor);
    }
    if (t == '9650' || t == '9660'){
        var newStrFth = exFth.substring(0, exFth.length-1);
        newStrFth += ' ';
        $('#sByaCases').html(newStrFth);
    }

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for (var i = 0; i < newSwiseData.length; i++) {
        lsdata[i] = newSwiseData[i];
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < newSwiseData.length - 1; j++) {
            for (var k = 0; k < newSwiseData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].deaths) < parseInt(lsdata[k + 1].deaths)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
        loadStateTableData(lsdata);
    }
    else {
        $(this).data('order',"desc");
        for (var j = 0; j < newSwiseData.length - 1; j++) {
            for (var k = 0; k < newSwiseData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].deaths) > parseInt(lsdata[k + 1].deaths)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
        loadStateTableData(lsdata);
    }
    $(this).html(lstItem);
});

$('#sByTDeath').on('click',function(){
    var exFst = $('#sByAlphabet').html();
    var p = $('#sByAlphabet').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSec = $('#sBycCases').html();
    var q = $('#sBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

    var exSecSec = $('#sByTcCases').html();
    var qq = $('#sByTcCases').html();
    var qq = qq.charCodeAt(exSecSec.length-1);

    var exTrd = $('#sByrCases').html();
    var r = $('#sByrCases').html();
    var r = r.charCodeAt(exTrd.length-1);

    var exTrdTrd = $('#sByTrCases').html();
    var rr = $('#sByTrCases').html();
    var rr = rr.charCodeAt(exTrdTrd.length-1);

    var exFor = $('#sByDeath').html();
    var s = $('#sByDeath').html();
    var s = s.charCodeAt(exFor.length-1);

    var exFth = $('#sByaCases').html();
    var t = $('#sByaCases').html();
    var t = t.charCodeAt(exFth.length-1);

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sByAlphabet').html(newStrFst);
    }
    if (q == '9650' || q == '9660'){
        var newStrSec = exSec.substring(0, exSec.length-1);
        newStrSec += ' ';
        $('#sBycCases').html(newStrSec);
    }
    if (qq == '9650' || qq == '9660'){
        var newStrSecSec = exSecSec.substring(0, exSecSec.length-1);
        newStrSecSec += ' ';
        $('#sByTcCases').html(newStrSecSec);
    }
    if (r == '9650' ||  r== '9660'){
        var newStrTrd = exTrd.substring(0, exTrd.length-1);
        newStrTrd += ' ';
        $('#sByrCases').html(newStrTrd);
    }
    if (rr == '9650' ||  rr== '9660'){
        var newStrTrdTrd = exTrdTrd.substring(0, exTrdTrd.length-1);
        newStrTrdTrd += ' ';
        $('#sByTrCases').html(newStrTrdTrd);
    }
    if (s == '9650' || s == '9660'){
        var newStrFor = exFor.substring(0, exFor.length-1);
        newStrFor += ' ';
        $('#sByDeath').html(newStrFor);
    }
    if (t == '9650' || t == '9660'){
        var newStrFth = exFth.substring(0, exFth.length-1);
        newStrFth += ' ';
        $('#sByaCases').html(newStrFth);
    }

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for (var i = 0; i < newSwiseData.length; i++) {
        lsdata[i] = newSwiseData[i];
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < newSwiseData.length - 1; j++) {
            for (var k = 0; k < newSwiseData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].deltadeaths) < parseInt(lsdata[k + 1].deltadeaths)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
        loadStateTableData(lsdata);
    }
    else {
        $(this).data('order',"desc");
        for (var j = 0; j < newSwiseData.length - 1; j++) {
            for (var k = 0; k < newSwiseData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].deltadeaths) > parseInt(lsdata[k + 1].deltadeaths)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
        loadStateTableData(lsdata);
    } 
    $(this).html(lstItem);
});
$('#sByaCases').on('click',function(){
    var exFst = $('#sByAlphabet').html();
    var p = $('#sByAlphabet').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSec = $('#sBycCases').html();
    var q = $('#sBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

    var exSecSec = $('#sByTcCases').html();
    var qq = $('#sByTcCases').html();
    var qq = qq.charCodeAt(exSecSec.length-1);

    var exTrd = $('#sByrCases').html();
    var r = $('#sByrCases').html();
    var r = r.charCodeAt(exTrd.length-1);

    var exTrdTrd = $('#sByTrCases').html();
    var rr = $('#sByTrCases').html();
    var rr = rr.charCodeAt(exTrdTrd.length-1);

    var exFor = $('#sByDeath').html();
    var s = $('#sByDeath').html();
    var s = s.charCodeAt(exFor.length-1);

    var exForFor = $('#sByTDeath').html();
    var ss = $('#sByTDeath').html();
    var ss = ss.charCodeAt(exForFor.length-1);

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sByAlphabet').html(newStrFst);
    }
    if (q == '9650' || q == '9660'){
        var newStrSec = exSec.substring(0, exSec.length-1);
        newStrSec += ' ';
        $('#sBycCases').html(newStrSec);
    }
    if (qq == '9650' || qq == '9660'){
        var newStrSecSec = exSecSec.substring(0, exSecSec.length-1);
        newStrSecSec += ' ';
        $('#sByTcCases').html(newStrSecSec);
    }
    if (r == '9650' ||  r== '9660'){
        var newStrTrd = exTrd.substring(0, exTrd.length-1);
        newStrTrd += ' ';
        $('#sByrCases').html(newStrTrd);
    }
    if (rr == '9650' ||  rr== '9660'){
        var newStrTrdTrd = exTrdTrd.substring(0, exTrdTrd.length-1);
        newStrTrdTrd += ' ';
        $('#sByTrCases').html(newStrTrdTrd);
    }
    if (s == '9650' || s == '9660'){
        var newStrFor = exFor.substring(0, exFor.length-1);
        newStrFor += ' ';
        $('#sByDeath').html(newStrFor);
    }
    if (ss == '9650' || ss == '9660'){
        var newStrForFor = exForFor.substring(0, exForFor.length-1);
        newStrForFor += ' ';
        $('#sByTDeath').html(newStrForFor);
    }

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for (var i = 0; i < newSwiseData.length; i++) {
        lsdata[i] = newSwiseData[i];
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < newSwiseData.length - 1; j++) {
            for (var k = 0; k < newSwiseData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].active) < parseInt(lsdata[k + 1].active)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
        loadStateTableData(lsdata);
    }
    else {
        $(this).data('order',"desc");
        for (var j = 0; j < newSwiseData.length - 1; j++) {
            for (var k = 0; k < newSwiseData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].active) > parseInt(lsdata[k + 1].active)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
        loadStateTableData(lsdata);
    }
    $(this).html(lstItem);
});




//Distict Data Sort Functions for NO of Cases
$('#sDistByDefault').on('click',function(){
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

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    for(var k = 0; k < distWiseLength; k++){
        if((distJsonOb[k].state) == sStateName){
            for (var j = 0; j < (distJsonOb[k].districtData.length); j++){
                lsdata[j] = distJsonOb[k].districtData[j];
            }
        }
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        lsdata.sort(function(a, b) {
            var nameA = a.district.toUpperCase();
            var nameB = b.district.toUpperCase();
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
        });
        lstItem += '&#9650';
    }
    else {
        $(this).data('order',"desc");
        lsdata.sort(function(a, b) {
            var nameA = a.district.toUpperCase();
            var nameB = b.district.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        });
        lstItem += '&#9660';
    }
    $(this).html(lstItem);
    sortedOneByOneDist(lsdata);
});
$('#sDistBycCases').on('click',function(){
    var exFst = $('#sDistByDefault').html();
    var p = $('#sDistByDefault').html();
    var p = p.charCodeAt(exFst.length-1);

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

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sDistByDefault').html(newStrFst);
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

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for(var k = 0; k < distWiseLength; k++){
        if((distJsonOb[k].state) == sStateName){
            for (var j = 0; j < (distJsonOb[k].districtData.length); j++){
                lsdata[j] = distJsonOb[k].districtData[j];
            }
        }
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < lsdata.length; j++) {
            for (var k = 0; k < lsdata.length - 1 - j; k++) {
                if (lsdata[k].confirmed < lsdata[k + 1].confirmed) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
    }
    else {
        $(this).data('order',"desc");
        for (var j = 0; j < lsdata.length; j++) {
            for (var k = 0; k < lsdata.length - 1 - j; k++) {
                if (lsdata[k].confirmed > lsdata[k + 1].confirmed) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
    }
    $(this).html(lstItem);
    sortedOneByOneDist(lsdata);
});
$('#sDistByTcCases').on('click',function(){
    var exFst = $('#sDistByDefault').html();
    var p = $('#sDistByDefault').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSec = $('#sDistBycCases').html();
    var q = $('#sDistBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

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

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sDistByDefault').html(newStrFst);
    }
    if (q == '9650' || q == '9660'){
        var newStrSec = exSec.substring(0, exSec.length-1);
        newStrSec += ' ';
        $('#sDistBycCases').html(newStrSec);
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

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for(var k = 0; k < distWiseLength; k++){
        if((distJsonOb[k].state) == sStateName){
            for (var j = 0; j < (distJsonOb[k].districtData.length); j++){
                lsdata[j] = distJsonOb[k].districtData[j];
            }
        }
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < lsdata.length; j++) {
            for (var k = 0; k < lsdata.length - 1 - j; k++) {
                if (lsdata[k].delta.confirmed < lsdata[k + 1].delta.confirmed) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
    }
    else {
        $(this).data('order',"desc");
        for (var j = 0; j < lsdata.length; j++) {
            for (var k = 0; k < lsdata.length - 1 - j; k++) {
                if (lsdata[k].delta.confirmed > lsdata[k + 1].delta.confirmed) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
    }
    $(this).html(lstItem);
    sortedOneByOneDist(lsdata);
});
$('#sDistByrCases').on('click',function(){
    var exFst = $('#sDistByDefault').html();
    var p = $('#sDistByDefault').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSec = $('#sDistBycCases').html();
    var q = $('#sDistBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

    var exSecSec = $('#sDistByTcCases').html();
    var qq = $('#sDistByTcCases').html();
    var qq = qq.charCodeAt(exSecSec.length-1);

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

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sDistByDefault').html(newStrFst);
    }
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

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for(var k = 0; k < distWiseLength; k++){
        if((distJsonOb[k].state) == sStateName){
            for (var j = 0; j < (distJsonOb[k].districtData.length); j++){
                lsdata[j] = distJsonOb[k].districtData[j];
            }
        }
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < lsdata.length; j++) {
            for (var k = 0; k < lsdata.length - 1 - j; k++) {
                if (lsdata[k].recovered < lsdata[k + 1].recovered) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
    }
    else {
        $(this).data('order',"desc");
        for (var j = 0; j < lsdata.length; j++) {
            for (var k = 0; k < lsdata.length - 1 - j; k++) {
                if (lsdata[k].recovered > lsdata[k + 1].recovered) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
    }
    $(this).html(lstItem);
    sortedOneByOneDist(lsdata);
});
$('#sDistByTrCases').on('click',function(){
    var exFst = $('#sDistByDefault').html();
    var p = $('#sDistByDefault').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSec = $('#sDistBycCases').html();
    var q = $('#sDistBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

    var exSecSec = $('#sDistByTcCases').html();
    var qq = $('#sDistByTcCases').html();
    var qq = qq.charCodeAt(exSecSec.length-1);

    var exTrd = $('#sDistByrCases').html();
    var r = $('#sDistByrCases').html();
    var r = r.charCodeAt(exTrd.length-1);

    var exFor = $('#sDistByDeath').html();
    var s = $('#sDistByDeath').html();
    var s = s.charCodeAt(exFor.length-1);

    var exForFor = $('#sDistByTDeath').html();
    var ss = $('#sDistByTDeath').html();
    var ss = ss.charCodeAt(exForFor.length-1);

    var exFth = $('#sDistByaCases').html();
    var t = $('#sDistByaCases').html();
    var t = t.charCodeAt(exFth.length-1);

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sDistByDefault').html(newStrFst);
    }
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

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for(var k = 0; k < distWiseLength; k++){
        if((distJsonOb[k].state) == sStateName){
            for (var j = 0; j < (distJsonOb[k].districtData.length); j++){
                lsdata[j] = distJsonOb[k].districtData[j];
            }
        }
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < lsdata.length; j++) {
            for (var k = 0; k < lsdata.length - 1 - j; k++) {
                if (lsdata[k].delta.recovered < lsdata[k + 1].delta.recovered) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
    }
    else {
        $(this).data('order',"desc");
        for (var j = 0; j < lsdata.length; j++) {
            for (var k = 0; k < lsdata.length - 1 - j; k++) {
                if (lsdata[k].delta.recovered > lsdata[k + 1].delta.recovered) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
    }
    $(this).html(lstItem);
    sortedOneByOneDist(lsdata);
});
$('#sDistByDeath').on('click',function(){
    var exFst = $('#sDistByDefault').html();
    var p = $('#sDistByDefault').html();
    var p = p.charCodeAt(exFst.length-1);

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

    var exForFor = $('#sDistByTDeath').html();
    var ss = $('#sDistByTDeath').html();
    var ss = ss.charCodeAt(exForFor.length-1);

    var exFth = $('#sDistByaCases').html();
    var t = $('#sDistByaCases').html();
    var t = t.charCodeAt(exFth.length-1);

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sDistByDefault').html(newStrFst);
    }
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

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for(var k = 0; k < distWiseLength; k++){
        if((distJsonOb[k].state) == sStateName){
            for (var j = 0; j < (distJsonOb[k].districtData.length); j++){
                lsdata[j] = distJsonOb[k].districtData[j];
            }
        }
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < lsdata.length; j++) {
            for (var k = 0; k < lsdata.length - 1 - j; k++) {
                if (lsdata[k].deceased < lsdata[k + 1].deceased) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
    }
    else {
        $(this).data('order',"desc");
        for (var j = 0; j < lsdata.length; j++) {
            for (var k = 0; k < lsdata.length - 1 - j; k++) {
                if (lsdata[k].deceased > lsdata[k + 1].deceased) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
    }
    $(this).html(lstItem);
    sortedOneByOneDist(lsdata);
});
$('#sDistByTDeath').on('click',function(){
    var exFst = $('#sDistByDefault').html();
    var p = $('#sDistByDefault').html();
    var p = p.charCodeAt(exFst.length-1);

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

    var exFth = $('#sDistByaCases').html();
    var t = $('#sDistByaCases').html();
    var t = t.charCodeAt(exFth.length-1);

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sDistByDefault').html(newStrFst);
    }
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
    if (t == '9650' || t == '9660'){
        var newStrFth = exFth.substring(0, exFth.length-1);
        newStrFth += ' ';
        $('#sDistByaCases').html(newStrFth);
    }

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for(var k = 0; k < distWiseLength; k++){
        if((distJsonOb[k].state) == sStateName){
            for (var j = 0; j < (distJsonOb[k].districtData.length); j++){
                lsdata[j] = distJsonOb[k].districtData[j];
            }
        }
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < lsdata.length; j++) {
            for (var k = 0; k < lsdata.length - 1 - j; k++) {
                if (lsdata[k].delta.deceased < lsdata[k + 1].delta.deceased) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
    }
    else {
        $(this).data('order',"desc");
        for (var j = 0; j < lsdata.length; j++) {
            for (var k = 0; k < lsdata.length - 1 - j; k++) {
                if (lsdata[k].delta.deceased > lsdata[k + 1].delta.deceased) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
    }
    $(this).html(lstItem);
    sortedOneByOneDist(lsdata);
});
$('#sDistByaCases').on('click',function(){
    var exFst = $('#sDistByDefault').html();
    var p = $('#sDistByDefault').html();
    var p = p.charCodeAt(exFst.length-1);

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

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sDistByDefault').html(newStrFst);
    }
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
    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for(var k = 0; k < distWiseLength; k++){
        if((distJsonOb[k].state) == sStateName){
            for (var j = 0; j < (distJsonOb[k].districtData.length); j++){
                lsdata[j] = distJsonOb[k].districtData[j];
            }
        }
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < lsdata.length; j++) {
            for (var k = 0; k < lsdata.length - 1 - j; k++) {
                if (lsdata[k].active < lsdata[k + 1].active) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
    }
    else {
        $(this).data('order',"desc");
        for (var j = 0; j < lsdata.length; j++) {
            for (var k = 0; k < lsdata.length - 1 - j; k++) {
                if (lsdata[k].active > lsdata[k + 1].active) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
    }
    $(this).html(lstItem);
    sortedOneByOneDist(lsdata);
});


///Sorting Functions for Country wise data
$('#sContByDefault').on('click',function(){
    var exSec = $('#sContBycCases').html();
    var q = $('#sContBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

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

    if (q == '9650' || q == '9660'){
        var newStrSec = exSec.substring(0, exSec.length-1);
        newStrSec += ' ';
        $('#sContBycCases').html(newStrSec);
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

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    for (var i = 0; i < jssonObData.length; i++) {
        lsdata[i] = jssonObData[i];
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        lsdata.sort(function(a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        });
        lstItem += '&#9660';
    }
    else {
        $(this).data('order',"desc");
        lsdata.sort(function(a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
        });
        lstItem += '&#9650';
    }
    $(this).html(lstItem);
    loadTableData(lsdata);
});
$('#sContBycCases').on('click',function(){
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

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for (var i = 0; i < jssonObData.length; i++) {
        lsdata[i] = jssonObData[i];
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < jssonObData.length - 1; j++) {
            for (var k = 0; k < jssonObData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].latest_data.confirmed) < parseInt(lsdata[k + 1].latest_data.confirmed)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
    }
    else{
        $(this).data('order',"desc");
        for (var j = 0; j < jssonObData.length - 1; j++) {
            for (var k = 0; k < jssonObData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].latest_data.confirmed) > parseInt(lsdata[k + 1].latest_data.confirmed)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
    }
    $(this).html(lstItem);
    loadTableData(lsdata);
});
$('#sContByTcCases').on('click',function(){
    var exFst = $('#sContByDefault').html();
    var p = $('#sContByDefault').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSec = $('#sContBycCases').html();
    var q = $('#sContBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

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
    if (q == '9650' || q == '9660'){
        var newStrSec = exSec.substring(0, exSec.length-1);
        newStrSec += ' ';
        $('#sContBycCases').html(newStrSec);
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

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for (var i = 0; i < jssonObData.length; i++) {
        lsdata[i] = jssonObData[i];
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < jssonObData.length - 1; j++) {
            for (var k = 0; k < jssonObData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].today.confirmed) < parseInt(lsdata[k + 1].today.confirmed)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
    }
    else{
        $(this).data('order',"desc");
        for (var j = 0; j < jssonObData.length - 1; j++) {
            for (var k = 0; k < jssonObData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].today.confirmed) > parseInt(lsdata[k + 1].today.confirmed)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
    }
    $(this).html(lstItem);
    loadTableData(lsdata);
});
$('#sContByrCases').on('click',function(){
    var exFst = $('#sContByDefault').html();
    var p = $('#sContByDefault').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSec = $('#sContBycCases').html();
    var q = $('#sContBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

    var exSecSec = $('#sContByTcCases').html();
    var qq = $('#sContByTcCases').html();
    var qq = qq.charCodeAt(exSecSec.length-1);

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
    if (q == '9650' || q == '9660'){
        var newStrSec = exSec.substring(0, exSec.length-1);
        newStrSec += ' ';
        $('#sContBycCases').html(newStrSec);
    }
    if (qq == '9650' || qq == '9660'){
        var newStrSecSec = exSecSec.substring(0, exSecSec.length-1);
        newStrSecSec += ' ';
        $('#sContByTcCases').html(newStrSecSec);
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

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for (var i = 0; i < jssonObData.length; i++) {
        lsdata[i] = jssonObData[i];
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < jssonObData.length - 1; j++) {
            for (var k = 0; k < jssonObData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].latest_data.recovered) < parseInt(lsdata[k + 1].latest_data.recovered)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
    }
    else{
        $(this).data('order',"desc");
        for (var j = 0; j < jssonObData.length - 1; j++) {
            for (var k = 0; k < jssonObData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].latest_data.recovered) > parseInt(lsdata[k + 1].latest_data.recovered)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
    }
    $(this).html(lstItem);
    loadTableData(lsdata);
});
$('#sContByTrCases').on('click',function(){
    var exFst = $('#sContByDefault').html();
    var p = $('#sContByDefault').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSec = $('#sContBycCases').html();
    var q = $('#sContBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

    var exSecSec = $('#sContByTcCases').html();
    var qq = $('#sContByTcCases').html();
    var qq = qq.charCodeAt(exSecSec.length-1);

    var exTrd = $('#sContByrCases').html();
    var r = $('#sContByrCases').html();
    var r = r.charCodeAt(exTrd.length-1);

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
    if (q == '9650' || q == '9660'){
        var newStrSec = exSec.substring(0, exSec.length-1);
        newStrSec += ' ';
        $('#sContBycCases').html(newStrSec);
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

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for (var i = 0; i < jssonObData.length; i++) {
        lsdata[i] = jssonObData[i];
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < jssonObData.length - 1; j++) {
            for (var k = 0; k < jssonObData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].today.recovered) < parseInt(lsdata[k + 1].today.recovered)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
    }
    else{
        $(this).data('order',"desc");
        for (var j = 0; j < jssonObData.length - 1; j++) {
            for (var k = 0; k < jssonObData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].today.recovered) > parseInt(lsdata[k + 1].today.recovered)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
    }
    $(this).html(lstItem);
    loadTableData(lsdata);
});
$('#sContByDeath').on('click',function(){
    var exFst = $('#sContByDefault').html();
    var p = $('#sContByDefault').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSec = $('#sContBycCases').html();
    var q = $('#sContBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

    var exSecSec = $('#sContByTcCases').html();
    var qq = $('#sContByTcCases').html();
    var qq = qq.charCodeAt(exSecSec.length-1);

    var exTrd = $('#sContByrCases').html();
    var r = $('#sContByrCases').html();
    var r = r.charCodeAt(exTrd.length-1);

    // var exTrdTrd = $('#sContByTrCases').html();
    // var rr = $('#sContByTrCases').html();
    // var rr = rr.charCodeAt(exTrdTrd.length-1);

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
    if (q == '9650' || q == '9660'){
        var newStrSec = exSec.substring(0, exSec.length-1);
        newStrSec += ' ';
        $('#sContBycCases').html(newStrSec);
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

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for (var i = 0; i < jssonObData.length; i++) {
        lsdata[i] = jssonObData[i];
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < jssonObData.length - 1; j++) {
            for (var k = 0; k < jssonObData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].latest_data.deaths) < parseInt(lsdata[k + 1].latest_data.deaths)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
    }
    else{
        $(this).data('order',"desc");
        for (var j = 0; j < jssonObData.length - 1; j++) {
            for (var k = 0; k < jssonObData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].latest_data.deaths) > parseInt(lsdata[k + 1].latest_data.deaths)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
    }
    $(this).html(lstItem);
    loadTableData(lsdata);
});
$('#sContByTDeath').on('click',function(){
    var exFst = $('#sContByDefault').html();
    var p = $('#sContByDefault').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSec = $('#sContBycCases').html();
    var q = $('#sContBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

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

    var exFth = $('#sContByaCases').html();
    var t = $('#sContByaCases').html();
    var t = t.charCodeAt(exFth.length-1);

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sContByDefault').html(newStrFst);
    }
    if (q == '9650' || q == '9660'){
        var newStrSec = exSec.substring(0, exSec.length-1);
        newStrSec += ' ';
        $('#sContBycCases').html(newStrSec);
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
    if (t == '9650' || t == '9660'){
        var newStrFth = exFth.substring(0, exFth.length-1);
        newStrFth += ' ';
        $('#sContByaCases').html(newStrFth);
    }

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for (var i = 0; i < jssonObData.length; i++) {
        lsdata[i] = jssonObData[i];
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < jssonObData.length - 1; j++) {
            for (var k = 0; k < jssonObData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].today.deaths) < parseInt(lsdata[k + 1].today.deaths)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
    }
    else{
        $(this).data('order',"desc");
        for (var j = 0; j < jssonObData.length - 1; j++) {
            for (var k = 0; k < jssonObData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].today.deaths) > parseInt(lsdata[k + 1].today.deaths)) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
    }
    $(this).html(lstItem);
    loadTableData(lsdata);
});
$('#sContByaCases').on('click',function(){
    var exFst = $('#sContByDefault').html();
    var p = $('#sContByDefault').html();
    var p = p.charCodeAt(exFst.length-1);

    var exSec = $('#sContBycCases').html();
    var q = $('#sContBycCases').html();
    var q = q.charCodeAt(exSec.length-1);

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

    if (p == '9650' || p == '9660'){
        var newStrFst = exFst.substring(0, exFst.length-1);
        newStrFst += ' ';
        $('#sContByDefault').html(newStrFst);
    }
    if (q == '9650' || q == '9660'){
        var newStrSec = exSec.substring(0, exSec.length-1);
        newStrSec += ' ';
        $('#sContBycCases').html(newStrSec);
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

    var order = $(this).data('order');
    var lstItem = $(this).html();
    lstItem = lstItem.substring(0, lstItem.length - 1);
    var lsdata = [];
    var temp = null;
    for (var i = 0; i < jssonObData.length; i++) {
        lsdata[i] = jssonObData[i];
        // contActiveCases[i] = (jssonObData[i].latest_data.confirmed)-((jssonObData[i].latest_data.recovered)+(jssonObData[i].latest_data.deaths));
    }
    if(order == 'desc'){
        $(this).data('order',"asec");
        for (var j = 0; j < jssonObData.length - 1; j++) {
            for (var k = 0; k < jssonObData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].latest_data.confirmed - (lsdata[k].latest_data.recovered + lsdata[k].latest_data.deaths)) < parseInt(lsdata[k + 1].latest_data.confirmed - (lsdata[k + 1].latest_data.recovered + lsdata[k + 1].latest_data.deaths))) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9660';
    }
    else{
        $(this).data('order',"desc");
        for (var j = 0; j < jssonObData.length - 1; j++) {
            for (var k = 0; k < jssonObData.length - 1 - j; k++) {
                if (parseInt(lsdata[k].latest_data.confirmed - (lsdata[k].latest_data.recovered + lsdata[k].latest_data.deaths)) > parseInt(lsdata[k + 1].latest_data.confirmed - (lsdata[k + 1].latest_data.recovered + lsdata[k + 1].latest_data.deaths))) {
                    temp = lsdata[k];
                    lsdata[k] = lsdata[k + 1];
                    lsdata[k + 1] = temp;
                }
            }
        }
        lstItem += '&#9650';
    }
    $(this).html(lstItem);
    loadTableData(lsdata);
});