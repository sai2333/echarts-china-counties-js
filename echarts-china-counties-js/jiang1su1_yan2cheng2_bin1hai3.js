(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('滨海县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"320922","properties":{"name":"滨海县","cp":[119.82083,33.990334],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@EA@@G@@D@@@C@@AMA@@@@@ADE@@@BNBBEA@]IOCCL@@ABGRB@IVFB@@@B@@DBBA`HHB@@@@AA@A@@AA@AAABAA@@A@@BCFB@AAAF@BAD@BC"],["@@D@@BA@EAKAAF@@@DA@ADABADC@ABE@BB@BEAAD@@@BB@ABBB@BBB@@@BBB@@@@GAK\\@@A@A@ENC@WGHU]IHSIAHSYGA@EEECBEDI@ADIoMBCBC@@AAGEHACCB@GIPEB@HAFAD@JCA@@@ACCE@ABKTABKJB@CB@@AA@GEECAAIDGBEKLCAAAACEEECEHCDD@AEECAECEC@@A@DMBA@@AMAOA@BDO@@CD@@AFA@D@@@AB@@AB@@BB@AOAMBCBCDGNYDCDCDA@CBCBM@EAECCAAA@AAA@EAA@O@EBEDE@A@E@A@AACAAC@AACA@C@A@@DCF@BEHKNADCDEDABEBABA@A@E@CAC@GCGCA@A@A@AB@@A@@BBB@DBFDDBD@FBD@B@F@BABADCBCDAB@@EBCBC@A@C@A@CAC@@@AAACAA@CAOAC@CAA@AEECCCAAAEAC@A@A@ABA@ABADAB@BAH@HBD@BAB@BABABA@ABA@A@A@E@A@EAKCCAIAKAEAEACAAAAAAAAA@A@A@A@C@A@@BCBA@ADADAB@DAF@BAH@FAHAD@DABAB@BCBA@A@C@A@CAAAC@ACCAAAAC@CAA@G@A@C@A@CBEBABGDA@C@EBCAC@CAEAAA@@AA@@@A@A@C@@BABCJGLI@ABCBA@A@C@A@E@ACEAACC@@A@CAG@A@C@C@CBCBEDA@A@EAEAEAI@EAC@CAC@@ACGCCCEEECEAC@A@@AG@AAAACAACAAACAC@CAOEC@CACAECA@AAC@EAE@AAC@AACAAAAAACAC@AAAA@@AA@EAC@CAA@CBE@CBC@AAA@A@AA@A@@GAAB@@@B@BAA@@AB@AAD@@ABECABAD@@@DFB@DBD@@@@@D@@@@DCBBB@@@BB@@@@AFA@AB@@A@@BAA@@A@@@AB@@A@@A@@EDA@@@@@@@BB@@@@@B@@@@A@A@@B@@BBA@@@A@AAAA@@@@A@AB@B@@@@@B@BA@@B@@@@B@ABAFE@CAA@EBCEAA@A@CED@JABA@@DABEA@DG@AAA@@B@BC@@BD@BBAHA@@BCAAJ@@@@D@@B@@@D@B@@AB@BJBABB@B@B@ABBB@BB@@@@@@@B@D@@@AB@BAFDBF@@B@B@B@BEA@DAB@@A@@DA@@@ADA@@B@B@@AHF@D@B@@@B@@@D@BAB@B@@@@DAA@B@F@@@B@@@@@@BBD@B@B@BFDFBDC@BBBA@BA@@BA@@@D@@B@BA@@@@@A@@BC@@BAB@@BB@@@BA@@@ABCAA@@@@A@@@AA@A@ABAB@@BB@@@B@@@DA@@AAA@@C@@B@@E@@@@@@B@B@@AB@@A@A@AA@@@A@@A@@@@BA@@BA@A@A@C@@@A@BB@B@@A@C@@@A@@@ABAC@AE@@BA@@ACBSB@@ADABB@BBBBBB@@@B@@@@C@AB@@A@A@@@A@ADA@AD@@EAGCIEEAKEGEMEMIGCGEGEEEKGEC@BABy\\DD@@@@@BEB@@FHBBCBA@E@ODCEC@CB@@A@@AEDBBA@A@A@A@@@ABA@@AA@A@@DBA@B@@B@BBA@@DDABB@@@BC@@@F@@DC@@B@@@@AA@AA@@D@@@BD@@@C@B@CBB@GB@BA@@@@DABAC@@@AAAB@B@@AC@@@@@@@A@@@A@@AA@@A@AAA@@@AAB@AABA@ABC@ABA@@@BBAB@AC@@B@@@DC@@A@@@@@AIDABFFCD@@@@@FCBDJFABDAB@BB@A@GDBBEB@@@@@BA@ABDBB@HBFBBB@@BA@BBA@@BABPDAFDBBHDFF@@BBB@ADHBDBBBDD@BDDDFDBFJHFJJJLBBHHBBBBBBB@BBH@D@BBFBB@BBBBDBDD@DA@@@CBABAB@@@@@@BBB@FBB@BBB@@@NFDBB@D@D@D@DBDDB@DBBDFFBD@B@B@B@@BBBBB@HDLFFBD@D@DBF@BBB@F@RAD@JA@@BBBBB@@BB@DBDB@BDBBB@BBBB@@F@B@@FFHJFFDDDFFHC@BDD@@@BA@BC@DJ@BBB@@DH@@@@BB@B@@DD@DHB@@@BBB@BBBBBA@@@B@B@@@AD@@@@DA@@AD@@DA@@AB@BB@BABBDDDFHJHLBD@BBHBD@BBBBFDDBD@BDBDBJJ@@@@DBFDFFB@PJFDHFDB@@DFb`LL@@PNFFFDBD^ZJHBDBBB@FELHGHFDTRXRNJTRDDNJJH`Z@@BBBDBBBFBBAD@@@DBB@BDFDH@BBDFLBB@BBBB@DBBBBBDJABYREFVR@BAB@@MLb\\@@EI@@`UBBDBFDBBFDDDDBLFhhlQ]bMPGbMLCFA`MºgRKVI@EGMFkBID_RkRqXkHQR{BUDOBSH[AGDC@A@A@AACAC@ICEAEACL@LAAIZADHBBBDHBL@BAF@BqDC@A@C@MEA@AA@@EGGICCCC@@@A@CBAA@HQGA@@LYJYCAICGAGAKAQEAFBBFBFB@@F@BB"]],"encodeOffsets":[[[123118,34915]],[[123130,34908]]]}}],"UTF8Encoding":true});}));