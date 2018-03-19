(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('东山区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"230406","properties":{"name":"东山区","cp":[130.317002,47.338537],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@MWs@GbiABM_LEB@JERaAEH@D@FAL@HZ@BCH@ADA@GBW@@VIDAPSNA@B@BABA@ABADA@A@A@A@A@A@A@A@@@A@A@@@@@@AA@@@@@@A@@@@@A@C@IBC@C@KBCBE@GBC@A@@@@@ODA@AA@@@@B@@A@A@A@@@A@@@AAAAAAACCAA@@@A@A@AAA@A@@AC@CAA@ABA@A@ABA@C@@@C@@BA@@DABABABAB@BABAB@BABA@C@ABC@E@AA@A@KB@@C@A@@A@@A@CA@AC@AAA@@@OAA@ABA@C@A@C@ABG@EBA@A@CBC@E@@@@@CBA@c@GB@@@@@AAA@@A@@AA@@BA@@BABA@@B@@A@A@AAA@@@A@@@AD@BA@A@C@C@@@CB@@@@A@@B@@ABA@@@@BC@A@@AA@A@@B@@A@A@@@A@AB@@ADA@@@A@A@A@@@A@AB@@AB@@AA@@@@AAA@A@@@A@@@CB@@@@AA@@AAA@A@@@A@@B@@@@@B@BA@@@C@@@AB@@@@A@@@A@@@@B@@@@@@@@AB@@@@@@@B@@A@A@B@A@A@AB@@@@AB@@A@@A@@A@@@A@@@@@@@@@@@@@@@A@@@@@@A@@A@A@@@@@@@@B@@@AA@@@@@@@@@@B@@@@@@@@@@@@A@@@@@@@AB@@@@AB@@@@B@@@@B@@@@B@@@@@@B@@@@A@@@@@A@@@@@@@@@@@A@@@@@@@@B@@A@@@@@@@@B@@@@B@@@ABA@@@@@@@AB@@A@@@@@AB@@@@@@AA@@@@@@AB@A@@AB@@@A@@A@@@@@@@@@A@@@@@BAA@@@A@@@@@@AA@@@@BA@@@A@@B@@@@@@@A@@@@A@A@@@@BAD@@@@A@@@A@@@@@A@@@@BB@@@@@A@@@A@@@A@B@@@@@@AA@@@A@AAA@AAA@@B@@A@@@A@@@AB@@@@@@ABA@@@@BA@A@A@@@A@A@@B@@@B@@@@A@@BB@@@AB@@CA@@@BA@@@AB@@@@B@@BA@B@@@@B@@@@A@A@A@@@@@A@@@@B@@@@A@@@C@@@@B@@A@@B@@@B@@@@@@ABA@A@@@@@@B@@AB@@@@@@ABA@B@@B@@@BB@@@AB@@@@@B@@@@A@@@@@@@AB@@A@@@@B@@A@@@@@AA@@@@@@A@A@@@BB@@@@@B@@@@A@A@A@@@@B@@@@@B@@A@@B@@@@A@@@A@@@@@@BA@@@BB@@@@@B@@@BA@@@A@ABA@@@A@@@A@@@@@A@@BA@@A@@@@@@A@A@@@ABA@@@@@@BA@@AAAB@B@B@ECaCDGJEQUS@S@SBO@MMEGDUHGHE]IT]BAHIVFBC[KTI_OIDKD@D[HKF@DED@FOHDHJDEJDJDLBBELFPDLFNHAFD@FIDE@T^MDc^dpC|OPSNM@@@@BB@@@@@@@B@@@AB@@@@@@A@@@@@@@@@@BA@@@@B@@@AB@@@@@@@B@@@@@B@@@B@@@@B@@B@@AAA@@@@@@B@@A@@@@B@@@@@B@@A@@@@@@@@BB@@@@@@@@@B@@@AB@@@@@@@@@@@@@@@@@B@@@@@@B@@B@@@@@@@@@@@B@@B@@@@@@@A@@@@B@@B@@@@@@@B@BB@@@@@@A@@@@@@B@@A@@@@@@@@@A@@@@BB@@@AB@@A@@@@@@BB@@@@A@B@@@@@@B@@@@@@@@B@@@@@@@@BB@@@@A@A@@@A@@@@@@@AB@@@@@@@@@@@@@B@@A@@@@B@@B@@@@B@@B@@@@A@@@@B@@@@BA@@@B@@@A@@B@@@@@@B@@@@@AB@@@@@BB@@@BB@@@@B@@@@@@@@B@@@@BB@@@@@BAB@@B@B@@@@@@@@@@B@@@@@@@@@B@@A@@@@@@AA@@@@@@B@@@@@@@@AA@@A@@@@@@@@@BB@@@@A@@@A@@@@B@@@@@@@@B@@@B@A@@@@BA@@@@@AB@@@@B@@@@@@@@@@B@@@A@@ABB@@@@@@@@@@@AB@A@@@@@@@@A@@@@@A@@@@@A@@@@B@@@@B@@@@B@@@@A@@A@@@B@@@@@@@@A@@@@@@@A@@BB@@@@@B@@@@@@@B@@@@@@@B@@@@@A@@@@B@@@@B@@@@@@@AB@@@@@@@@A@@@@@@B@@B@@@@@@@@@@B@@A@B@@@@@@@@B@@B@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@A@@B@@A@A@@@@@@@@@B@@@@@A@@B@@@@@@@@BBA@@@@@@@@@A@@@@@@@AB@@@@B@@@@@@@@@@@@@@@B@@@A@@B@@@BA@@@@@AB@@@A@@AB@@@@@@@@@@A@@@@@@B@@@@B@@@@@@@@B@@A@@B@@@B@@@@@@@@@@@B@@@@@@@B@@@@A@@@@B@@@AA@@@@@@@@B@@A@@@@@@@@@@@@@@BA@B@@B@@@@@B@@@@A@@@@B@@@@B@@@@@@@@B@@@@A@ABA@A@@B@@A@@@AB@@AB@@@@A@@@AB@@A@@@RJJEjZOJBLCHTDL@FIdAHFDEIINCEGQMNIVJXqzHFBBA@A@ADE@@@ABABE@ABA@CBE@ABA@C@ABC@ABC@BB@N@JANDH@\\HHBNHXNAZJD@H`XSX\\RADUBeJ@B@B@B@D@BFJ@B@@DBDBFD@BB@@D@@ED@@@@@BDD@@@B@B@@ADAB@B@@DBBB@@BB@BB@@B@BBB@B@BBF@@C@ABAF@@@D@B@B@@@DC@ABA@CBABB@@B@@BB@B@@CF@@BBB@D@B@@B@B@@@BAD@BAFA@FBBBBB@BB@BBB@BB@@@@@@@B@@@B@@BB@B@@@B@@AB@@EDCB@@@D@DBF@@E@@@AB@@@@A@A@AB@@C@AB@@@@B@BBB@BBBBBB@B@BBB@@@B@B@DB@@@@B@B@@AB@@@@@BCAA@A@AA@AA@@@@B@@B@@@@BB@@@B@@BB@@@B@BB@@B@@BB@@B@@BB@@@@B@@B@@B@@@@@BBBH@@@@BF@@BDBBBBDF@@BD@@B@B@JCVIFAD@B@DAD@@@@@@E@@@ABBD@B@DA@@@@@B@@@BAB@BDDB@A@ABABADABAB@@AB@B@@CDABA@@B@BBB@@BDDB@BDDBD@F@B@DBB@@DD@B@@@B@B@B@BABAFCD@B@B@FA@A@C@GAC@@@ABC@@@A@@D@@@@A@A@AAA@CBA@A@GCA@A@C@ABABCD@@C@A@EACCAA@@AAAA@@AAAC@@@@BAB@@A@@@@@@CBA@A@@AA@B@BAAAA@@A@AA@@@@AA@@@A@@@@@@AA@@BA@@AA@@@@@@B@@@@ABEAA@@AA@@@CAC@@@@A@@A@AAA@@A@A@@CAAAAA@A@A@@AC@@@@@CAA@A@A@@AC@@@C@ABC@@@C@A@AD@BAD@@@BA@@@C@@AA@A@@@C@C@@@A@AA@CA@@A@A@I@@@AAECECE@@@A@@GDCDCBA@EAE@AAGAC@@CAA@@@@@@@A@@@@@GAC@DCBABAAA@AB@@AAAACCAEEGEEACA@A@A@ECIAECCAEAC@C@A@@BAB@BA@C@A@@BADCIIEFQEFGICK@GHIC@ACCUIABUGADABWDQD]U@EKW[bm|_nC@¡Jçµ@AA@@@@@AAAA@@AA@@AAA@@@AAA@@@A@A@@@A@@@@@A@A@A@A@A@@@A@A@ABA@A@ABA@A@ABA@@@@@@BAB@B@D@@AB@B@@@@@B@BAB@@@B@@@@@B@@AD@@@B@BA@@B@D@D@B@@@@@B@B@@@B@@BB@B@D@B@D@@@B@@@B@@@B@@AB@@A@@@AB@@A@A@ABA@A@@@@B@@A@ABA@@@@BA@@B@@A@@@@BAA@@A@C@A@A@C@A@ABC@A@A@A@A@A@@@AB@@AB@@@@ABA@@@@BA@A@E@@@{VWDEFBJBHBBHDT@BBzAH@FRCFEJ@HPJPDBDADIBKAG@E@GHGN_V]JSHSTADBBBDADED@DBRBFBDFBNDJAH@RFPHXL@@D@D@FAB@B@B@DAB@@@B@BA@@B@@@BA@@@@@@BB@@@@AB@B@@AB@BABA@@B@@AB@@@BB@@@@B@@B@@B@@A@@BA@ABAB@@@@@@@B@@@B@@@@AB@@@@@B@D@@@@A@@B@@A@A@@@A@@@AB@@GFADAFAFBDBFFDL@HAFBBB@DADCBOB]JEDABAD@DLfBLBHAHCFCDIFAD@BDD`RJLFFNDHDH@FALGJAB@B@DA@AB@@@BB@@B@@B@@BB@@BD@@BB@@@@@BBB@B@@@BB@@@BBB@B@@AB@FA@@@@@@@@@@@@BB@@@@@@A@@@@B@@@@A@A@ABA@A@AAC@@@ABA@A@ABA@A@@BAB@@A@AB@@C@ABA@A@C@A@E@GCE@G@EDAFCLGZBXBJDBTFLHFHDL@JdLZTpJbIlKZa²Y@pKSrD|VrUdQi~B~O]bO^IjE@AB@@A@AE@@@@@@AHC@A@A@AA@AAA@BA@@DA@ABADE@ABC@CB@FG@@@AAAGA@A@@BADAD@B@BAAAaBUYNkOMPiVQ@CFAzCBC`FCC@@BAFADAB@DEAACC@CEBI@@@A@GAEAA@EL{AIEYYhaMIJESOQKMGLKZEMODAzQAVA\\TJEFEBCDCBA@@AA@@@A@@B@B@BA@@@A@@CA@@@A@AA@@BA@A@@@@@AAB@@AD@B@@A@@AA@@@ADI@AFAB@B@F@BAB@BA@@@AAA@@@@DA@ADA@@FAB@@ABA@@AAA@@A@@BA@@@@BA@C@@AA@@BCBA@@BBB@@AB@@@B@@@B@BAB@BA@@B@B@@A@@B@@@BAB@@@@A@@@A@@@AB@BA@@@A@@@@AAB@A@@@BAA@@@@A@@@@@AB@@A@@BBB@B@@@B@BAB@B@@@FB@@@A@@AA@@@@@A@@@@B@@@@@@@B@@A@@A@@A@@@@B@D@BB@@@@@@@C@@@AB@@AB@BA@@A@@@B@B@@@AAA@@@B@@@B@BB@@@A@@A@@A@@@@B@@BB@@B@@@@B@@AB@@@@@@@BB@@@@B@@@BABAB@@@A@@AB@BBB@B@@@@A@@@@B@@A@@AA@@@@@ACBA@A@@@@@@A@@@@B@B@@@@@@A@@@@@@B@@@B@@@AA@@A@ABA@@A@@@@BAB@@@@@A@@@AA@@A@@@BAB@@@@AA@A@@@@@@@@@B@@@B@BB@@BA@@A@@AB@BB@@@@@@B@@@D@@A@@@AB@D@@@@AA@A@@@@@A@@@B@D@@@BA@@@@@@B@@AA@AAA@@@BA@@@@@AB@@@@@@BB@@@B@B@@@@@@@@A@@AA@@@@@@BAD@@@@@BBB@@@@@@@@@@A@@@AD@B@B@@@AAB@@@@@@@BB@@@B@@BB@@BA@AB@@@@@@AA@@@@@BA@@@A@@@@B@BB@@B@@AAA@@A@ACB@@@@@B@B@@@@@AAA@@@@ABA@@C@@@@@@AD@@@CA@AB@B@@A@@@@A@A@@@@@A@@A@@D@@@@A@@@@@@B@B@@@@@@@@AA@@A@@@@D@B@@@A@A@@@@@@AB@B@@@@@@@@@@@B@@BB@@@BA@@@@B@@@@A@@BA@@B@@AAA@@B@@@B@@B@@@@@A@@@A@@@@B@@@@BABB@@@@@@@BA@@@@@BB@@@@A@@@A@A@@A@@@@@B@@@B@B@@@@@@@@@AAA@@@@@B@@@B@B@@@@@AAA@@@@@B@@ABB@@@@DD@@B@@@BB@@@@BA@@AA@@B@B@@@B@@@@A@@B@B@@@@BB@@@@AB@A@AA@A@@@@B@@BB@B@@@@AA@@A@@@AB@@@@A@@B@@@@@@D@@B@BA@@@@AA@@@@@EB@@@B@@@B@@@B@@@AA@@@AB@DB@@B@@@@@@A@A@@@AB@@@@@AA@@@A@@BAD@@@@A@@B@@A@@@@@@B@BBB@@@@AAA@@@A@@B@B@BA@@A@CACAA@@A@@A@A@@@@@BB@@@@@@@@A@CA@@@@@B@B@@A@@@C@@A@@B@@@B@A@A@@A@@@@@AA@A@ABA@@@@A@@B@@A@@A@A@@@@@@@BA@@AAA@@B@@A@A@@@@@@A@@AA@B@@@@@BA@C@@@@BB@BB@BA@@@@@AA@@C@@A@@B@@@@@AA@@@@@@@A@@A@@AA@@B@@ACA@@@A@@B@@@@A@@@@A@@@A@@A@@@@B@@@@AAA@@BA@B@A@@@A@@@A@@B@@A@AA@@@@@B@@@@@B@@AAA@@@A@@@A@A@@A@@@@B@B@B@@A@@@@A@A@@A@@@A@@BB@@@@B@@@@A@@C@@@@@BA@@@@@AA@@@@A@@BBB@@A@@A@@@@@B@BA@@@@@@A@A@@@@@B@@@@A@@@@@@B@DA@B@B@@B@@@@@BE@@BA@BD@B@@@@A@@A@@AAB@A@@@@@AC@@@AAC@@A@@@AA@AAB@@@BB@@@A@A@@@@@@A@@@A@@@A@@A@@B@@@@AB@@A@@@@@@A@@@@@@@A@A@A@@A@@B@@@B@@@@@@A@@A@@BA@A@ABA@@@A@@A@@@@@@B@@@@A@@@AB@@@B@@@AA@@@@C@@@@@B@@@@AA@@@A@@@AB@@@A@@@@@A@@@A@@A@B@@B@@A@C@@@A@@@BA@@@@A@@@A@B@@A@@@@@@A@@@@ABA@@@@@A@@AB@@@@@A@A@@A@CB@@@@@A@@@@@@CA@@@@B@B@@A@@AAA@@@D@@@BA@@AA@@AB@AA@@A@@B@BBB@@@B@@@@@AAA@@@BAB@@@@A@@@@A@AB@@A@@@@@BA@@@AA@@@AB@@@@A@AA@@B@@A@@A@@A@B@@@BA@@@@A@@@@@AA@@@@@@B@@@@@@A@@@@@AAAB@@@@B@B@@B@@CB@@@AA@@A@@@@@@ABA@A@AA@@@@AB@@BBA@@@@@@@@@C@@@@A@@AAA@@@@BBB@@@B@@@@A@BA@@@@C@A@@@@@@@BB@@@BA@@@@AA@A@A@@@A@@A@@@@A@@@@@BB@@@@A@CBOIB@@@B@BB@@B@@@BAA@A@A@@@@@@@D@BA@@A@A@@A@@@@@@D@@@B@BAB@A@@A@BA@@@@@A@@@@@@AB@@@@A@@A@@@@@@BAB@@@@A@B@@AA@@@@AAA@@A@AB@BA@@@A@@@@@@A@@@@AA@@@@BB@@A@@@A@@@@BA@A@@AD@@A@@A@A@A@@@@@DAC@CA@@@@@@B@@A@@@@D@@A@@A@^eTWJMNOVAA@@AFACA[MBCF@^EFEAEMEIASGDKKOg@a@k@m@SBID"],"encodeOffsets":[[133659,48188]]}}],"UTF8Encoding":true});}));