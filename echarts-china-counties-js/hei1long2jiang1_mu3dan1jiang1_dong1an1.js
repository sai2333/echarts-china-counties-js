(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('东安区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"231002","properties":{"name":"东安区","cp":[129.626641,44.58136],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@AD@@AB@@AD@@AF@@@@@@A@@@@@ADB@B@BBD@DBB@B@BBB@@@@@BA@@@@@AB@@ABCBA@@BCBA@@@@@@@A@@B@@ABBB@B@@@@@@@FB@@BBD@@@B@BBD@BB@@@@@@@@@@F@B@JAACCGAA@A@@@@@@@A@@@@DADAJFJDH@DAD@DA@@@A@@AEAA@A@CAA@A@@BA@A@@@@@@@@@@BA@ABC@CBA@@@@BA@BD@B@@@@@@@@@DCBA@@BC@ADE@A@@BA@@BAB@D@F@F@BBB@@@BA@@@@@@@AB@@@@A@@BABABA@@BABA@@@AB@BABA@@B@@@@@B@B@BAB@B@@AB@@@BAB@B@@@B@B@@AB@@AB@BA@@@@@A@@BA@@BA@A@A@A@AB@@@@A@@@ABA@@@AB@@A@@BA@AB@@@D@D@BA@@B@B@BABA@@DCB@BA@ABAB@BCBC@@BCB@@AB@@@BAB@@@BA@@B@B@@@BA@@@@B@@AB@BA@@DABABA@@B@@A@@B@@@B@@@B@@@@@@@B@@@@@B@@B@@@@B@@@B@B@B@@AB@B@@A@A@@B@@A@@B@BA@@BA@@B@@@BA@@B@B@B@B@@@B@@A@@B@B@@AB@B@B@@@B@@@@AB@@@@@@@BA@@@@@@B@DA@@@@B@@@B@@@@@B@B@@@@@B@@@B@@@B@@@BAB@B@BAB@B@@@BA@@B@@AB@@@@@BA@@@@@A@@@@BA@A@@@@@A@@@@@A@A@@@AB@@A@@@AB@@AB@@A@@BA@@@@BAB@@AB@B@@@B@B@BA@@B@@AB@@@BA@@BAB@@ADABAB@B@DA@@D@B@B@B@@BB@@@@A@@B@@@@AB@@@@@@AB@@@BA@@B@@AB@@@@@@A@@B@@@@A@@B@BA@@BAD@BAB@DADADAB@B@@AB@B@@AB@@@B@B@BA@@@@B@@A@@@@@AB@@AB@B@@A@@B@@@@@B@@AB@B@B@@AB@@@BAB@BA@@B@@@B@BAB@B@B@@@B@@@B@@@BA@@@@BA@@@@@AB@@@@A@@@@@A@@@A@@@A@A@@@A@@@@AA@@@AA@@@@@@A@@@@@ABA@@@@@ABA@A@AB@@A@@BA@A@A@@BA@@@@AA@@@@AA@@A@@@AA@@C@AA@@@@A@@A@@@@@A@@@A@@@@@@BA@@B@@@@@@AB@@ABA@ABA@@@A@@B@@CBA@@D@BAB@B@BAB@@@B@@@B@B@J@@@D@BABB@@BD@@BB@@BB@BB@BB@BBBBB@B@B@BBB@@@@BB@@B@B@B@BB@@B@@@@B@BAB@@AD@@AB@B@BB@@DBB@BBFBBB@@BBBBBB@BD@@@@@@B@D@B@@@B@@@B@@@BA@@B@@@@@@@@@B@@@B@@@B@@@B@@@B@@@B@BA@@B@@AB@@@B@@@BAB@D@@@@BB@@@B@@@B@@@@@@A@@@@@AA@@A@@@A@A@A@A@A@@AA@A@@@AAA@A@@@A@A@AB@@A@@@A@@@@@A@@@@AAA@@AA@@@@A@@@A@@AAB@AA@A@@@A@@AA@@@A@@@@@A@@B@@@BA@@@@BA@@BAB@@ABA@@BA@@@@@AB@@@@AB@B@B@B@B@B@@@D@B@@AB@B@@@B@@@BA@@BA@@@@B@B@BAB@@AB@@AB@@AB@BAB@@@BABAB@@@B@BAB@BA@@DAB@@@B@BA@@BABA@ABCBABA@ABA@A@@B@BABABA@AB@BABABA@@BABADABABABA@@@@B@B@@@BAB@BABAB@BABABAB@BA@@BA@@BABABA@ABADCBA@@@@BA@@BA@@B@BA@@@@@@BAB@@AB@@A@@B@BADADAFC@@B@BAD@BAB@B@B@D@B@D@BAB@B@DADABABABAB@@@B@@@B@@@B@B@@@B@@AB@@@@@BABA@@@@B@@AB@@@@AB@@@@A@@B@BA@@B@@@BA@@@AA@A@A@@@A@AA@@A@@@@@AA@@A@@@A@@AA@@@@@AA@@@AA@@@B@@A@A@@BA@@@@@A@@BA@C@@@A@@@@@AACA@@A@@@@@@AA@@@@A@A@A@AA@@A@@@@@@@A@@@@BA@@@@@@B@@@D@B@B@DAB@D@@@@A@@BA@A@@@@@@@AA@@@@@@@A@@@A@AA@@A@@@@@@AA@@AA@@A@AA@@AA@@@AA@@AAAAA@@AA@@@@A@AA@@@@@A@@@@@A@@@@@@BA@@@@@@@@BAB@@@B@B@@@B@@@@@BA@@@ABA@@@A@A@@BC@A@@@@@@@ABA@@B@@A@@@A@@@A@@@@AA@A@@@@A@@@AA@@A@A@AA@@A@@@CCCAAA@@@@@@@A@@@@@@@@AA@@AAAAC@AACA@@CA@AAAAAAA@AA@@A@@AA@@AA@@@AAA@@@AA@A@@@@@@@DA@@@A@@A@@@@@@A@@@@@@@A@@@@@@AA@@A@@@@@@ABC@@B@@AA@BC@@@A@AAB@@@@AA@@@A@ABA@@@AA@@@@A@@B@@AA@@C@@A@@@@A@A@@AA@AA@@@@A@@A@AA@A@AA@@@A@@A@@@AA@C@A@AAA@@B@AA@AAAA@@A@A@@@A@A@@A@AA@@AA@@A@@A@@@A@@A@@@@@A@@@AA@AAA@@@A@@AA@@A@@A@A@@@@@A@A@@@A@A@A@@@A@@@@@@AA@@AA@@AA@@@CA@@A@A@A@A@@@A@@@A@A@@@@@AB@@@@@B@@A@@@ABA@@BA@@B@B@B@@@@AB@@AB@@A@@@@@A@@@A@@@A@ABA@@@C@@@A@@@A@A@A@@@A@@@A@AA@@C@A@A@ABA@A@@@A@A@@@A@A@A@@@@@AB@A@@A@@AC@@@A@@AA@A@EBC@CBEAE@E@A@@@EBEBCB@@@@A@A@@@A@AA@@@@A@A@AA@@A@AA@@A@AA@@AAA@@A@@@@A@A@@@AB@@A@CBA@CBA@GD@@@BA@AB@@@@AB@B@@B@@BBB@@FD@@@@@BB@@B@BA@@B@@AB@@ABABCB@@AB@@@@AB@@AB@@@BAB@@@B@@A@@BA@CBABA@@@@@@@@B@@@@@B@@@DCDABABA@@BCBA@@BA@@BABAB@@@B@B@@@D@B@@@@@D@B@D@B@B@B@@@B@FBB@@@BAB@@ABAB@BA@@B@B@B@@@B@B@B@B@@@D@BBBBBBBB@BBB@BB@@@@BBBB@@@@@D@@@B@@@@EDCBCD@BA@ABABAB@@ABABABC@@@A@@@@B@@@@@@@@@@BD@@B@BDDDBD@B@DBB@@@B@B@@@B@@@@AB@@@B@@@@B@B@D@D@@@B@@B@@@BBB@F@F@B@BA@EDCBA@@B@@A@@BABA@@@CBC@@@A@A@ABA@A@A@ABC@A@A@@B@BA@ABA@AB@@A@A@ABAAA@A@C@A@A@A@C@AAABA@C@ABA@ABCB@BA@ABA@A@ABA@@BA@@BAB@@A@C@A@C@A@ABA@A@ABC@@BA@A@A@@BA@@BA@EDCBCDA@ABABA@ABA@ABA@A@@@@BCBAB@@ABA@@@A@@B@@AB@@A@AB@@@B@@@B@BA@ABCB@@ABABA@AB@@@@A@@@AB@@A@@BA@A@@@@@@@A@@@A@AAA@@@CBA@@@ABEBA@CBA@ABA@@BA@@@@@ABAB@BA@@BAB@BABA@ADA@ABAB@BA@ABAB@B@@AB@@C@ABAB@@C@@BA@@@A@@BA@ADCBAB@BA@A@@BA@@@@BA@@@@@@B@@BD@D@B@B@BAB@BA@ABA@CBC@EBGDEBGDA@A@@@ABA@AB@BA@@BA@@BAB@BA@ABA@ABABA@@@CDA@A@@@@@A@@BA@@@@@@@A@@@@B@@@@@@@@@B@@@B@B@@@B@@@@@@AB@@@@A@@BA@AB@@A@@@A@A@AA@@AAA@CAA@@@A@A@A@A@AAA@C@@@A@A@@@A@AAA@A@@@A@@@A@A@@@A@@@A@A@AB@@A@A@@BA@AAA@@@A@A@@BAAA@CBA@AB@@ABA@@BA@A@CBABA@@@A@A@A@AA@@A@A@@@A@@@A@A@@@A@AB@@ABAB@B@B@@@@@B@BBB@BBB@BBD@B@B@B@B@@@BA@ABC@A@ABC@CDA@@BAB@@@@@@B@BB@@BB@@@B@@AB@@ABA@A@A@AA@@A@@@A@@@A@@@AB@BA@AB@@AB@B@BAB@@@B@B@B@DAF@D@B@B@B@BABB@@@@F@D@@AB@D@@@B@D@@@BBDDBBBBBDDBBBBDDBBBB@@BB@@@BBBB@BBBB@@@@BB@@BBB@@B@@@@DF@@BD@@B@@B@@@@@@@@@B@@@@@@@BABA@A@@@A@@@@@C@A@A@A@A@@@@@A@@B@@@@@D@@@@@@@BL@F@B@J@D@JB@BHBDDB@BBHHBB@@BB@B@@@@BB@B@@@D@@@B@B@B@@@B@@@B@@AB@@AB@@ADAB@B@@@@AB@BAB@@AB@@AB@@AD@@@@"],"encodeOffsets":[[132729,45652]]}}],"UTF8Encoding":true});}));