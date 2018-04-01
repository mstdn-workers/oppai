// <script>
// 今の時間(UTC)
var nownow = new Date();
nownow.setTime(nownow.getTime()-3600*1000*9) //日本だったら-9時間

// ////////////////////////////
// 太平洋標準時 (PST)
function getPST(t) {
	return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours()-8,t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds());
}

// 太平洋夏時間 (PDT)
function getStartPDT(t) {
	dd = new Date(t.getFullYear(),2,1); // 3月1日
	dt = new Date(dd.getFullYear(),2,(1-dd.getDay())+7,2,0,0,0); // 3月第2日曜
	return dt;
}

function getEndPDT(t) {
	dd = new Date(t.getFullYear(),10,1); // 11月1日
	dt = new Date(dd.getFullYear(),10,(1-dd.getDay()),1,0,0,0); // 11月第1日曜
	return dt;

}

// 夏時間込みの時間出力（夏時間：現地時間基準)
function getPSTs(t) {
	start_pdt = getStartPDT(t);
	end_pdt = getEndPDT(t);
	PST = getPST(t);

	if (start_pdt.getTime() <= PST.getTime() && PST.getTime() < end_pdt.getTime()) {
		PST.setTime(PST.getTime()+3600*1000);
	}

	return PST;
}
// ----------------------------------------------

// 山岳部標準時 (MST)
function getMST(t) {
	return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours()-7,t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds());
}

// 山岳部夏時間 (MDT) 
function getStartMDT(t) {
	dd = new Date(t.getFullYear(),2,1); // 3月1日
	dt = new Date(dd.getFullYear(),2,(1-dd.getDay())+7,2,0,0,0); // 3月第2日曜
	return dt;
}

function getEndMDT(t) {
	dd = new Date(t.getFullYear(),10,1); // 11月1日
	dt = new Date(dd.getFullYear(),10,(1-dd.getDay()),1,0,0,0); // 11月第1日曜
	return dt;
}

// 夏時間込みの時間出力（夏時間：現地時間基準)
function getMSTs(t) {
	start_mdt = getStartMDT(t);
	end_mdt = getEndMDT(t);
	MST = getMST(t);

	if (start_mdt.getTime() <= MST.getTime() && MST.getTime() < end_mdt.getTime()) {
		MST.setTime(MST.getTime()+3600*1000);
	}

	return MST;
}
// ----------------------------------------------

// 中部標準時 (CST)
function getCST(t) {
	return CST = new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours()-6,t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds());
}

// 中部夏時間 (CDT) 
function getStartCDT(t) {
	dd = new Date(t.getFullYear(),2,1); // 3月1日
	dt = new Date(dd.getFullYear(),2,(1-dd.getDay())+7,2,0,0,0); // 3月第2日曜
	return dt;
}

function getEndCDT(t) {
	dd = new Date(t.getFullYear(),10,1); // 11月1日
	dt = new Date(dd.getFullYear(),10,(1-dd.getDay()),1,0,0,0); // 11月第1日曜
	return dt;
}

// 夏時間込みの時間出力（夏時間：現地時間基準)
function getCSTs(t) {
	start_cdt = getStartCDT(t);
	end_cdt = getEndCDT(t);
	CST = getCST(t);

	if (start_cdt.getTime() <= CST.getTime() && CST.getTime() < end_cdt.getTime()) {
		CST.setTime(CST.getTime()+3600*1000);
	}

	return CST;
}
// ----------------------------------------------

// 東部標準時 (EST)
function getEST(t) {
	return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours()-5,t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds());
}

// 東部夏時間 (EDT) 
function getStartEDT(t) {
	dd = new Date(t.getFullYear(),2,1); // 3月1日
	dt = new Date(dd.getFullYear(),2,(1-dd.getDay())+7,2,0,0,0); // 3月第2日曜
	return dt;
}

function getEndEDT(t) {
	dd = new Date(t.getFullYear(),10,1); // 11月1日
	dt = new Date(dd.getFullYear(),10,(1-dd.getDay()),1,0,0,0); // 11月第1日曜
	return dt;
}

// 夏時間込みの時間出力（夏時間：現地時間基準)
function getESTs(t) {
	start_edt = getStartEDT(t);
	end_edt = getEndEDT(t);
	EST = getEST(t)

	if (start_edt.getTime() <= EST.getTime() && EST.getTime() < end_edt.getTime()) {
		EST.setTime(EST.getTime()+3600*1000);
	}

	return EST;
}
// ----------------------------------------------

// 西ヨーロッパ時間 (WET)
function getWET(t) {
	return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds());
}

// 西ヨーロッパ夏時間 (WEST) 
function getStartWEST(t) {
	dd = new Date(t.getFullYear(),2,31); // 3月31日
	st = new Date(dd.getFullYear(),2,31-(dd.getDay()),1,0,0,0); // 3月最終日曜1:00
	return st;
}

function getEndWEST(t) {
	dd = new Date(t.getFullYear(),9,30); // 10月30日
	st = new Date(dd.getFullYear(),9,30-(dd.getDay()),1,0,0,0); // 10月最終日曜1:00
	return st;
}

// 夏時間込みの時間出力（夏時間：UTC基準)
function getWETs(t) {
	start_west = getStartWEST(t);
	end_west = getEndWEST(t);
	WET = getWET(t);

	if (start_west.getTime() <= nownow.getTime() && nownow.getTime() < end_west.getTime()) {
		WET.setTime(WET.getTime()+3600*1000);
	}

	return WET;
}
// ----------------------------------------------

// 中央ヨーロッパ時間 (CET)  UTC+1
function getCET(t) {
	return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours()+1,t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds());
}

// 中央ヨーロッパ夏時間 (CEST) 
function getStartCEST(t) {
	dd = new Date(t.getFullYear(),2,31); // 3月31日
	st = new Date(dd.getFullYear(),2,31-(dd.getDay()),1,0,0,0); // 3月最終日曜1:00
	return st;
}

function getEndCEST(t) {
	dd = new Date(t.getFullYear(),9,30); // 10月30日
	st = new Date(dd.getFullYear(),9,30-(dd.getDay()),1,0,0,0); // 10月最終日曜1:00
	return st;
}

// 夏時間込みの時間出力（夏時間：UTC基準)
function getCETs(t) {
	start_cest = getStartCEST(t);
	end_cest = getEndCEST(t);
	CET = getCET(t);

	if (start_cest.getTime()-3600*1000 <= nownow.getTime() && nownow.getTime() < end_cest.getTime()-3600*1000) {
		CET.setTime(CET.getTime()+3600*1000);
	}

	return CET;
}
// ----------------------------------------------

// 東ヨーロッパ時間 (EET)
function getEET(t) {
	return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours()+2,t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds());
}

// 東ヨーロッパ夏時間 (EEST) 
function getStartEEST(t) {
	dd = new Date(t.getFullYear(),2,31); // 3月31日
	st = new Date(dd.getFullYear(),2,31-(dd.getDay()),1,0,0,0); // 3月最終日曜1:00
	return st;
}

function getEndEEST(t) {
	dd = new Date(t.getFullYear(),9,30); // 10月30日
	st = new Date(dd.getFullYear(),9,30-(dd.getDay()),1,0,0,0); // 10月最終日曜1:00
	return st;
}

// 夏時間込みの時間出力（夏時間：UTC基準)
function getEETs(t) {
	start_eest = getStartEEST(t);
	end_eest = getEndEEST(t);
	EET = getEET(t);

	if (start_eest.getTime()-3600*1000 <= nownow.getTime() && nownow.getTime() < end_eest.getTime()-3600*1000) {
		EET.setTime(EET.getTime()+3600*1000);
	}

	return EET;
}
// ----------------------------------------------

// モスクワ時間 (MSK)
function getMSK(t) {
	return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours()+3,t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds());
}

// モスクワ夏時間 (MSD) 
function getStartMSD(t) {
	dd = new Date(t.getFullYear(),2,31); // 3月31日
	st = new Date(dd.getFullYear(),2,31-(dd.getDay()),2,0,0,0); // 3月最終日曜2:00
	return st;
}

function getEndMSD(t) {
	dd = new Date(t.getFullYear(),9,30); // 10月30日
	st = new Date(dd.getFullYear(),9,30-(dd.getDay()),2,0,0,0); // 10月最終日曜2:00
	return st;
}

// 夏時間込みの時間出力（夏時間：現地時間基準)
function getMSKs(t) {
	start_msd = getStartMSD(t);
	end_msd = getEndMSD(t);
	MSK = getMSK(t);

	if (start_msd.getTime() <= MSK.getTime() && MSK.getTime() < end_msd.getTime()) {
		MSK.setTime(MSK.getTime()+3600*1000);
	}

	return MSK;
}
// ----------------------------------------------

// 日本標準時 (JST)
function getJST(t) {
	return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours()+9,t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds());
}

// 夏時間込みの時間出力（夏時間：なし)
function getJSTs(t) {
	JST = getJST(t);
	return JST;
}
// ----------------------------------------------


// 表示用
function Hyoji(time) {
	dayst = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
	yy = time.getFullYear();
	mm = time.getMonth()+1;
	dd = time.getDate();
	day = time.getDay();
	hh = time.getHours();	if (hh<10) { hh="0"+hh; }
	mi = time.getMinutes();	if (mi<10) { mi="0"+mi; }
	ss = time.getSeconds();	if (ss<10) { ss="0"+ss; }
	ms = time.getMilliseconds();
	this.toString = function () {
		return (mm+"/"+dd+"("+dayst[day]+") "+hh+":"+mi);
	}
}

function Hyoji2(time) {
	dayst = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
	yy = time.getFullYear();
	mm = time.getMonth()+1;
	dd = time.getDate();
	day = time.getDay();
	hh = time.getHours();	if (hh<10) { hh="0"+hh; }
	mi = time.getMinutes();	if (mi<10) { mi="0"+mi; }
	ss = time.getSeconds();	if (ss<10) { ss="0"+ss; }
	ms = time.getMilliseconds();
	this.toString = function () {
		return (hh+":"+mi);
	}
}

function event::onChannelText(prefix, channel, text) {
	if (text.match(/^現地時間$/) || text.match(/^!time$/)) {
		d = new Date();
		send(channel, "イギリス: " + new Hyoji(getWETs(d)));
		send(channel, "ドイツ: " + new Hyoji(getCETs(d)));
		send(channel, "北米: " + new Hyoji(getPSTs(d)) +"～"+ new Hyoji2(getESTs(d)));
		send(channel, "日本: " + new Hyoji(getJSTs(d)));
	}

	if (text.match(/^EU時間$/) || text.match(/^欧州時間$/) || text.match(/^!timeeu$/)) {
		d = new Date();
		send(channel, "イギリス/ポルトガル: " + new Hyoji(getWETs(d)));
		send(channel, "ドイツ/フランス/イタリア/スペイン: " + new Hyoji(getCETs(d)));
		send(channel, "ルーマニア/トルコ: " + new Hyoji(getEETs(d)));
		send(channel, "モスクワ: " + new Hyoji(getMSKs(d)));
	}

	if (text.match(/^NA時間$/) || text.match(/^北米時間$/) || text.match(/^!timena$/)) {
		d = new Date();
		send(channel, "ロサンゼルス: " + new Hyoji(getPSTs(d)));
		send(channel, "デンバー: " + new Hyoji(getMSTs(d)));
		send(channel, "シカゴ: " + new Hyoji(getCSTs(d)));
		send(channel, "ニューヨーク: " + new Hyoji(getESTs(d)));
	}

}
