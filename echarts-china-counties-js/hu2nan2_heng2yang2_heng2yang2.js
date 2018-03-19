(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('衡阳县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"430421","properties":{"name":"衡阳县","cp":[112.370546,26.969577],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@F@B@@@B@BAB@@A@A@A@@B@D@B@@A@@@A@A@@@ACAA@@AA@ABC@C@A@@ACECE@C@CAEAIIBEBEDEBADCBCD@BCDAFCFCDAHAH@BA@@@CLAFENAB@@CDA@KF@@OBEAKAIAAASG@@AACACCAEGBA@A@A@@AACAAE@AAAC@@AAA@AA@AA@A@@BADABA@AAAAA@@@A@A@C@C@CAABCDCBE@ABA@@BBBDBBB@@@@@BABA@@@A@C@A@A@@@E@EACC@@@AAABEBC@A@A@@AAAAAAEBC@EDABA@ABABEBA@A@C@AAA@ECECEE@CACCCCBA@I@C@AAC@E@CBE@A@E@A@KACG@ABCDCFAB@DC@ABA@IBCDAL@DG@CCAGC@EACGE@@CAEEA@A@CACCEAA@A@ACBEAEACE@IHCBE@ACC[@K@GCCCC@@E@AD@DCFE@E@CCCA@E@EBCDAFADAA@@CAC@@AAAAA@C@ABCBAD@B@BABA@A@@ACCAAACCCABCBADCDCBA@EACACBEDEF@D@BBDAJCDKHGDIBC@A@EACADAB@BC@CACAAEAEAAAACACAG@ACCAADE@AKIAA@ABGDC@A@@BAAACAKACAE@G@G@AAAC@C@AAAA@AAGACCA@@@C@@BA@@D@@BB@B@@@@ABA@A@A@ADAN@D@@CBAAACA@@@A@C@A@AA@@A@AAAAEECAE@A@AB@BAFGHEFEBE@EAC@KICA@@I@C@C@IFC@C@C@EDCBC@ADCDGDCB@DC@A@GEECCAC@CDMFGBC@CCCI@E@AC@CDGDGBCBA@GDC@C@CBCFCFEDA@CAGCCACAC@GAAAC@A@@BCB@BABC@C@C@EAAAAACACACACCA@CBC@ACCACBABAAC@AC@C@@AAE@EDAAAAACAAA@EHAF@FDH@BA@CACACEAAEAKGAAKCGC@@CAGCEAAAAACAA@@@CAA@EA@@CAABE@C@AAA@EBC@C@EAE@C@C@E@EAE@C@CBC@C@A@CBCBC@CBC@E@@@CBABC@AACAABA@@@C@IBEB@@AB@F@BADCBGDGDCBCDAFABADABA@C@AB@@@HABCHEHEFABADADAF@F@FAD@DADBDAD@@@@BBBDBBBB@BDFBBJ@DBBBDDBD@DBHDBD@FADBDDDDDDD@D@DAD@BBBBDBBB@D@H@F@D@DADADCB@D@BKB@B@@@@@@@@B@@@@@B@B@B@B@BB@@B@B@B@BBBB@@@D@B@BBB@@BBBBHHFBDBDADAFAFBF@B@HCFADBBBBBB@BDBDDF@D@F@DABCBAFBD@D@BCBCBEDAB@BABBDBBHD@B@BABC@E@ABAD@B@HAHADCDEBC@KDUFCDCD@BBDNDDD@D@D@B@@@BABADCFAH@@@F@FBDB@BDDF@@BBAH@DCFEDCDCD@BAD@F@BDFDFBDBB@B@@@@@B@BABCD@B@D@B@B@@@BBDBD@D@@@BBB@BBHBDBFFH@B@@@@B@@B@BBBBBDBBBBBBBFD@BA@@B@B@B@@BBDB@@@@B@@@@A@@B@@@B@@@@ABAB@@@@@@AA@AA@@@@@@B@@@B@@@BA@@B@B@@BD@FBB@@@B@@AB@B@@@B@B@BA@@BB@@B@@B@@@@B@@@A@@B@@@@@B@B@@A@@@A@@@AB@@@@AAAAA@@B@B@@@B@@B@B@B@@@BB@@B@@@@@@B@@BB@@@@@@AB@@A@@@@AA@@B@@@@AA@@@@@B@@@B@@BB@@@@@B@@@@BB@@@B@@@@@B@@@AB@@@BB@@@B@@B@@@B@@@@@@@C@@@@B@@@B@@@B@@@@@@@@BB@@@@@BBB@@B@@@@@BAB@@@@BBB@@@@@@BA@CB@@@B@@@AB@@BB@@@@BB@@@@DDBBBBBB@@BABA@AB@@AF@B@BB@@@BA@A@@BAB@B@B@B@B@BBB@@@B@B@BB@@@B@@@@A@@@@@@B@DBB@B@@@@AD@B@FCB@B@B@BBBB@@AB@BABAB@B@@BB@@@@BBB@B@B@BB@BBB@D@BBBBBD@B@B@HBDBDAD@DBDBBBDFBBDB@B@B@@CBC@CDADCDAF@D@H@BBDBBDBDBDBBDBDBBBBB@@BBDALAD@BCBADADCHCD@D@@@BBBB@B@BBDBBBBDAB@BA@CACCC@A@@@@DBDDDBBDDBB@DAD@DBBDBDBDAFANEDCDCBCBCBCBAB@D@HDBBB@@A@C@ABADCBA@ACAAC@ABABABADAD@D@DBD@BABEBA@CAAAC@A@A@ABAB@BABA@ABCB@FADA@@@AA@A@A@@@@G@ABC@ABAB@DADABADCBADBDBB@BBBBBB@F@BBBBBBBBB@D@BAB@BDD@B@B@DABBDBBJDFDBBBBDBD@B@DB@B@BBH@DED@DBBBDBBBADALGB@B@BB@B@DBBDBBBB@F@F@B@BBB@ABAB@DBFBBBBDBDD@BBD@DADADABADAB@@@BBBBDDDDDDDDB@BBDDDBBBBBB@BBDDBD@DAD@BBBB@BAB@DBBDBB@D@DAHADABBFFDDD@DBBAD@BAHEF@H@H@D@DAFCD@B@BB@BABBBB@BBD@F@DA@@BA@CAECE@A@AD@FB@@NBB@DBB@J@H@FBH@HBF@BBD@BAB@JEF@DABAFAD@B@F@DABABADMBAB@D@BBJDHDDBB@BA@ABA@@BBBB@B@BCF@B@BB@@@B@@@B@DA@@B@BB@@B@B@@AFCB@@BDD@@@@B@DG@ABABA@@B@B@B@F@BAB@@AB@BAB@B@B@@B@BB@@BB@BBB@DADB@AB@BAB@B@D@@@B@BA@@BA@C@@@A@@C@A@@@@@@A@@@A@@AA@@AA@ABC@A@ABA@@B@B@@A@A@A@A@@@ADABA@@BA@@D@DA@CBA@AB@BADABAB@BA@AAA@C@A@A@C@ABCDADC@@DADAD@@A@A@A@EAA@A@A@C@AB@BABAB@@A@A@@@A@AACAAACAA@AAABA@ABABABADAB@BA@@@A@AAAAA@C@A@A@A@A@@A@A@AAA@@A@C@A@@BCBC@@BCB@B@D@D@B@BB@@B@AD@@@BA@@BB@B@BADABADA@@D@BB@@BA@ABA@ADAD@D@D@@@B@D@B@D@DABAF@D@D@B@B@BAB@@ABABA@A@AA@AAAAA@CAC@A@AA@AA@BABAB@FAF@FAD@DADABA@@DAB@B@DBD@B@B@F@@@FAFAF@DAF@BCDCDABCBABABABADA@@DADADADADAD@D@B@BAFAB@D@B@BBBA@@AA@@@CAA@A@C@@@ABC@CBABABA@A@A@C@AA@@A@AB@B@B@BABADCDCBABADABCBA@A@C@C@E@C@A@@@C@AAC@AAC@A@C@A@A@A@ABABABADAFABA@ABC@CAAAA@AAACAA@C@EBA@C@CAA@AAAA@@AA@C@AAE@AAE@@@AAAAA@A@A@CDCDCDABABADAD@D@D@BADABADCDABAB@@ABBB@DDDBBBDBB@DDDBD@BBD@BADCDCBCDCBEBABCBAB@B@B@BBBDB@D@B@B@@CBA@A@C@@@ABA@@B@B@B@B@B@DCBCDE@A@@@A@C@AAAAA@A@@BABBBA@@BA@AAC@@CA@ABABA@@@@@A@A@G@K@CACCEGGAAAAAA@@AA@ADA@ABABAAE@@AA@@@A@E@A@CAI@C@A@A@@@@B@BA@BFBBBDDBBD@HBF@DBDAB@@@BABABC@CCCCA@A@A@CB@"],"encodeOffsets":[[115447,27652]]}}],"UTF8Encoding":true});}));