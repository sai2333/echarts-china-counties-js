(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('江州区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"451402","properties":{"name":"江州区","cp":[107.353437,22.405325],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@AB@@A@ABCBAAAACBA@@FAB@@BBAB@BA@ADA@C@@BA@@@AA@@A@ACAACA@ACAACAA@@AAEAA@C@@@@BAB@@A@ABAA@@AA@A@@@@AA@@A@@@A@A@A@A@@@A@A@A@@BA@A@AAA@@@@@A@A@AAA@@@AC@@AA@AA@A@@@ABA@CBC@A@C@ABA@A@@B@BBD@B@D@B@B@B@BB@BD@@@BCBABBBA@@F@@@@@@BB@@@@@B@@BB@@@@@B@B@@A@@@@@@BA@@@@BA@@BA@A@@@A@@@@B@BABADA@@@CBAB@@@@A@A@@@@@ABABCBAB@@@BA@@BA@@@@@A@BA@ABABAB@@@@AA@@ABAG@AB@BABA@@@@@A@@BA@@B@@A@A@A@@B@@@@A@@@A@@@ABCBAB@@@@@D@@AB@@AAA@AA@@@AA@@@@A@@@AA@A@@@C@A@A@ABA@AAA@AB@BCBCF@@BBAB@@A@@BA@@@A@AE@AAAC@GBKAIAM@G@CHBB@BBDCDBB@B@B@@B@@B@@B@BB@@@@ADB@@BB@@@B@BA@@B@@B@@@@@B@B@@B@@@@BBB@DABDFABAB@BAB@BA@BBADB@AB@B@@A@@@@@BB@B@BA@@@@@@B@@@@@@A@@@@@AB@@BB@@@@@@B@@B@@A@@@@@@@@@AB@@BB@B@@@BB@@B@@B@@@@BBB@BB@BADA@@B@@A@@B@B@DBD@B@@@@@@B@@@BA@@BB@@@B@BB@BB@BBB@@@@B@BBB@@@@AB@DA@@@AB@@A@@@AB@@A@@@BB@@@BA@@@@B@B@@B@@@AB@B@@@B@D@BAB@@@B@@B@@@@B@@@BB@@BB@B@D@B@@@@B@B@@@@BBB@@@@BB@BA@@@BB@BB@BA@@@@BB@@BBB@@@BB@@@@@@BB@BA@@@@@@@AB@@@@@@@@@B@@@@@@@@@B@@B@@BB@BB@@BB@B@B@@@@BA@@B@@@BB@@@BB@@@@@B@@@B@@BB@@@@@B@@A@@@AA@@@B@@@@@B@@@@@B@@@B@B@@B@B@@@@@@B@B@@@B@@B@B@@@@B@@ABCD@BAB@@@B@@@B@BAB@@@@B@B@@ABB@@@BB@@@B@B@@B@@@@@@@BAA@B@@A@A@AB@@@@@@A@@@@@A@@@@D@B@@@@@@A@@@A@@@@@@@@B@@B@@@@@A@@@A@A@A@@B@BA@@@@@A@@@@@@@@B@@@@@B@@AAA@@C@@@@A@A@A@ADA@@B@@A@A@C@AA@@AAA@EACCBCAAGCCACAICCAA@@B@@CBGF@@B@@B@BAB@BAD@D@D@BADADADABADIDEBEBE@A@C@G@AAA@@@CCA@@A@@ACAA@AAC@@AAA@A@ABA@ADAB@D@B@B@H@B@BA@@@C@A@ACA@CA@@C@E@@BGD@@A@@@@A@@DEBA@A@@B@@@BABA@ABA@A@@A@A@A@@AA@AACAAA@@AA@A@@@@AA@A@A@@A@@A@@BA@AB@@@BA@@BA@ABA@@@A@AAAA@@@@@@AA@@A@@A@@@A@@AA@@@@@@@A@@@A@@@A@A@A@@@A@@@AB@@@@A@@BA@AD@B@B@B@D@B@BAB@@@BAB@@@B@@B@BB@@@B@@BB@@B@@BB@BBA@@BAB@B@DAD@P@D@B@BBD@BBDDDBBDF@@BBAB@BABCD@B@B@D@BBD@@BD@B@@@@@B@@C@A@@@@B@@@B@B@@@BB@FBDBDBBB@@BB@@@B@@BB@@DBB@D@DA@@D@B@@@@@BB@DB@BBBB@@@BBB@@@B@BBB@BBBD@B@B@B@B@D@@BB@@BBBBBB@BBBBBB@BB@AB@F@BBB@BAB@BCD@B@B@B@@BBHDBBB@@DBD@B@@@BA@@BA@A@GAC@EAAB@@A@@DBB@BDFBH@B@D@B@@E@A@AAA@@A@@AA@@AA@@A@@@@@@@AB@AA@A@AB@@@@@@A@AB@@@AAB@AAB@@A@@A@@ABA@@@AAA@@@A@@B@@AAA@E@@@AA@@A@@@@@@B@@A@@B@@@@AB@@@B@@A@@@AA@AA@C@@@A@@BA@@@@B@B@@@B@@A@A@A@@@AAA@@@@@@AAABA@@@@@CA@@@A@@@CA@@BE@@A@AA@A@@C@@@ABA@AAA@A@@@@BA@AB@@@BA@@@@B@B@@@@@B@@@@A@@BAB@@AB@@@@@B@BA@@B@B@@A@AB@BB@@B@@A@@@@BAAAB@@A@@@@@@@ABAB@BABAB@B@@@BB@@@BB@@AB@@A@A@@@@BA@AB@@AB@@AB@@BBABBBBB@@AB@@B@@B@@AB@B@B@@ABA@@@@B@@BB@D@@@@@@@@@@@BBB@B@@BB@@B@BB@@@@B@@@@BBBBF@@BB@B@B@B@BABBBC@@BA@A@A@AAA@@@A@@@@DA@@@@BAB@@A@@BB@BB@B@@@B@B@B@B@B@@@B@@BBB@@B@B@BAD@BA@BBAB@@AB@@CD@@CB@@@B@BA@@BA@@BABBBAB@B@@@@AB@@ABAB@@@B@B@@@B@@A@AB@@@@@@AA@@A@@B@@BB@@@@@B@@A@@@C@EBA@@@@AA@@@@A@@@@@@A@@@C@A@A@@@A@@@AB@BAB@D@B@B@@B@B@@@B@@@B@BA@AB@@@@@B@B@B@@@@@B@B@@@B@DA@BB@@@B@B@@@@BB@BBDB@@@@BA@@B@B@BB@@DBBB@@@BBB@@@@@@BB@@@D@@@@BBB@B@@BA@@D@@B@@B@@A@@@@@@@@@@B@B@@@@@@B@ABAB@B@@DB@B@@@D@@@@@BA@@@AB@@@B@BBB@@B@@BB@@@BBB@@@BA@@@BBB@@BAB@@@@B@@@@@B@BB@B@B@@@@B@@BB@B@@@@@B@@@BB@@@B@@BB@@BB@@@@BB@@@@@@AB@@@@@@A@AB@@@@@B@BB@@@@FB@BB@B@@@@@@B@@@BB@@@B@@@@@B@BB@@BB@B@@B@D@DAB@B@BBB@B@@@@@@@@@B@@B@@@DB@@@@@@@DBDD@@AB@@@DBB@@@B@@DDB@@@D@@@B@@@B@D@BB@@DAD@@ABB@@@@@BB@B@@@D@@@AC@ABABA@ABB@@B@B@@B@@@@@@@B@@@@B@@@A@@BB@@@@@B@@B@@A@B@@BB@B@@@BABB@@B@DFBBB@@@B@@BBBAB@@AB@@@BA@A@@@@B@B@B@@@BA@A@@@@BAB@B@@B@@B@@B@@BB@@@B@@@@B@@@@B@@@B@B@@DB@@B@@@BA@@@BB@BB@@@@B@D@B@@B@@@@B@B@B@D@@@B@@@D@B@BA@@B@@@DAB@@@DB@DA@@B@B@@@B@D@@@@BB@BB@@@B@@DBDAB@B@@ABAAA@@@AA@@@@A@C@@BAB@@ABABA@@@A@@AC@@@@BABAB@@@B@@@BB@B@@BBB@@@B@@@@BBB@@B@@@B@@@@BB@@B@@B@FBB@@@@@@DB@@B@@B@@BB@@@BAB@B@B@B@@@B@@@BBBBBBBAB@B@@@@@B@B@@BB@@@@@B@@ABBB@B@@@B@B@@@@B@@B@@BBBDBB@BB@@BAB@D@@@@@@A@@BA@@BA@@AA@@A@@@AA@@@@@C@@@@@A@@@@@A@A@@@@@@@A@@@A@@@A@@@@@A@@@A@@@A@@@@A@CAA@A@A@EAA@@A@@@@A@@@@B@@@D@B@@@B@@AD@@A@@@C@AA@A@@AA@A@@@@@AB@@C@@@@@AAA@@@@A@@A@@@A@@@A@A@@AAA@@AA@@@A@AA@@A@@BA@@A@@A@A@@AA@A@AC@@@A@@@AAABC@EB@DADC@ABA@A@C@ABA@A@CAA@A@@@@A@A@@BAB@@A@@A@@@@CA@@A@@@BAB@@AB@AC@A@@@@@AAA@@@ABABA@A@@B@BA@@@A@A@@BABCAA@A@@BC@ABABA@A@@@A@@BC@AA@AC@A@@@ABC@@@CAC@A@@BAB@DC@@@AAC@@BABA@A@A@@B@BAD@@@B@@ABABCBA@A@@BA@AAC@@@ABA@A@@BAB@@@D@B@@@BAB@@@B@DA@A@@B@@@@@BA@@B@@A@@@@@AB@B@B@B@B@@@B@@@BA@@BAB@@@@@BB@@@@@@B@BA@@B@@A@@BBB@@@@BB@@@@B@@DB@@B@@AB@@A@@B@@@B@@@B@@@B@@B@@B@@@@@B@@@@A@@B@B@@BB@@@@@B@@@DBB@B@@@@@B@B@@B@B@@@@BB@@BB@A@AB@B@@B@@B@B@@@@E@A@@BA@@@@@A@ABA@@@A@AA@AA@@@@@A@@@AAAB@A@@A@@AA@AB@B@@AB@@A@@A@@AB@@@@@@ADBBD@B@@DB@@B@@@B@@BBB@B@@@B@@@@@BB@@@BB@@@B@@CD@B@@@BBBBD@@BBB@BB@AB@@A@A@@@@@@BAB@@@BAB@@B@BB@@B@@@B@B@@@@BDB@@B@BBD@B@D@B@@@@B@B@@BBB@B@@BB@BBBBB@@D@@B@BA@@BABA@@@A@AA@@AAA@@AA@@@A@@B@@@DB@@B@@@B@@@@@@DB@@BB@@@@@@@B@B@BBB@B@@B@@@B@@B@B@@@B@@@BA@AB@@AB@@A@@@A@@BA@AB@B@@A@@@A@ABA@@@A@AB@@@B@@A@AB@@@@@@A@@@CBA@@AA@@@A@@@@@@A@@@@AA@@AB@A@@A@@@@@AB@@BD@@@@@B@@C@@@@BC@@@A@@B@B@B@@@@@B@@A@BD@@@BB@@@@B@B@@BB@B@@BB@B@@BBB@BBBA@@@@BB@@B@B@@BAB@@BB@@@B@D@@@B@@BB@@@@@BAB@@@B@B@@@@@B@@@@@BBB@@@@@B@B@ACBAA@@A@A@AB@ACB@BA@@@AD@@BBBB@@BB@B@B@B@@BB@D@@AB@@BD@@BBD@BDB@@BBB@BA@@@ABA@@@@BAB@@ABABA@A@@@AAAA@@C@@@@B@B@B@BA@A@@BBB@@ABC@A@A@@A@A@@@@AAA@@@A@@BAB@BBFAB@@AB@@@@A@@@CD@@@@BBB@B@B@D@@@B@@@D@@BAB@B@@@B@@@B@@@@BB@@@B@@@@@BABA@ABA@@@@@@DAD@@@BAB@B@@BB@BB@@@B@@B@@FB@@B@B@B@B@@BAB@BBB@BB@@@BBBB@B@@D@@@BB@BB@@@B@B@@B@@@BBB@BBBB@@@DB@@A@@BA@@@DBDDD@DB@@DBBB@AB@@BB@@@BB@@B@@@B@@@@@DAB@B@@BB@@B@@B@@@@BA@@B@@@@@BDDB@@@B@@@@BB@@B@@@@BBBA@@BB@@B@@@@@BB@@BB@@@B@@@@@BBB@@D@BBB@B@@BB@@@BAB@B@BB@@B@BABA@@B@B@@AD@B@BA@@BA@ABBD@@@B@@@@B@@@@@@@B@@@@BB@@B@B@@@@@@B@BB@@B@@BB@@B@@BB@@@BBABABA@@BBB@@@@@BBB@@BB@@@@B@@@@B@@@@@@@DAD@D@B@@E@A@ED@BC@CBABCDABCB@@@@ABAB@@@B@@@DBB@@BBB@B@B@@@D@FBDB@@@B@@BB@@B@BAB@B@@B@@@DAD@BA@BBBB@B@DBB@@B@B@B@@@BA@@BA@C@AB@@@BABB@@@ABA@A@AD@B@B@BAB@B@@@B@@AB@@BB@@AB@@A@@B@B@@@@BA@AB@B@B@BA@A@A@@D@D@@BB@B@@@B@@@BB@BBAFBB@B@B@BAB@@BBBD@BF@@BBB@BDBD@@B@@B@@DA@ABABBB@BAB@@@BBDDBB@BD@BB@BBBD@@@DAB@@@BABABA@C@A@CBA@@DB@@DCBA@@B@BAB@@CA@BABAB@BB@B@@BBB@BBDD@B@@DD@@BB@DB@FBB@DB@@BBADBD@@ADB@@@BBBB@B@@BBB@@BBBBABB@BBBBB@DED@@ABA@A@ABGDA@AB@D@BBBBDAFABA@@BAFGD@@BB@B@BBD@D@@@B@BBB@B@B@B@B@B@DBB@BBBB@BABAD@B@BA@ABABADA@BDCB@BAFBB@BBAD@BBB@DBD@B@BAD@B@BBB@B@FC@@DA@@@@BA@@B@@A@AB@@AB@@@@A@@@@B@BB@@B@@@@@BB@@B@B@@@@@B@B@B@@@@@B@B@@@BB@@@BB@@@@@DBHB@@@@BB@@@B@@B@BBB@B@@B@@@BB@@@B@@@@@BA@@@B@@BA@@B@BB@@B@BBBAD@BB@@@BA@BB@BB@@BB@@@B@@@@@BB@A@@BB@@@AD@@@@BB@@AB@B@@@B@@AB@B@D@BB@ABB@BB@D@BA@@@@B@@B@AB@B@@@BB@@@@BA@@@B@@B@@@B@D@@@B@B@B@@@BB@@@BA@BBBB@@DDABAB@BA@@@@B@@A@AB@@@BA@DD@@DB@B@@@B@B@BCBAD@@@B@BBD@BA@@@@@ABA@@@@B@B@@@@BA@@B@BBBBB@BB@@BAB@B@@@B@B@@@@@F@B@@@B@B@BB@@@BB@@@@BB@@@BB@@BA@B@AB@@BB@BBBB@@@@B@BB@@B@B@@@B@@@B@B@@@D@@BB@B@@@BBD@@BB@@B@@@BBB@@BB@@B@@@B@@@@@B@@@@@BBBAD@@@@@@@BA@BBA@@B@@@B@BBB@BA@@B@B@B@B@D@@@@A@@B@@@@@B@BAB@BBB@D@B@B@B@ABB@@@B@B@D@@@BA@AB@@@@AB@B@@A@AAA@A@@@@@A@@@@@@@A@A@AB@@@@@@@@A@@@@B@@@@A@A@@@@B@@@@A@@B@@@@@BA@@@@BA@@@@@C@AB@@A@A@AB@@A@@BA@@@A@@@@@A@@@A@CB@@ABA@@@@@A@@@C@@@AAAB@@A@BBA@@D@B@@@BAB@@A@@@ABA@@@@@C@@BA@CB@@AB@@AD@@BB@B@@BBA@BH@@@D@@B@@@BB@DB@@@@BB@B@@@@B@B@BA@@BB@@B@B@B@@@B@FA@AB@@AB@DA@A@@B@@C@@FCBA@@@@@CA@@@BA@A@A@A@AB@@C@A@@@A@AB@BA@ABA@@BA@@@A@@@A@A@AB@A@AACC@A@@BA@A@@AA@@@@@@A@A@@AA@@A@@AACA@@AA@AB@@AB@AA@A@@AAAA@A@@@A@C@@@AB@BA@AAA@@A@@CA@@@AAA@A@BE@@B@@AB@AA@@@A@@BAB@@@DAB@@@B@@AB@@ABA@@@@B@B@@@B@@@@@@AB@@A@A@A@@@@@C@@@@@AB@@A@@BA@@@A@@BAB@@AB@@CB@@A@@@@@AA@@A@@@@@A@@@A@@@@AA@@@AA@@A@@B@@A@@@@@A@A@A@A@@@@@@B@@@@@@A@A@@@@BB@@BA@AB@@@B@@@A@@AB@B@@@@@B@@@@@@A@@@A@@B@B@@A@@@@@@@A@A@@DA@@DCD@BA@@B@D@@ABC@@@@@@AAAA@A@A@@DAB@@AB@@@BA@@@@@AA@@@@@@AA@@@@@A@@A@A@@@ABA@A@@B@B@@@@AB@@@@A@A@A@@B@@@@A@@A@AA@@B@@@@A@@@A@@@A@A@@@AB@@@@A@@BABA@A@@B@DBB@B@BBHO@AAA@A@A@AAAA@@C@@AB@AA@AC@@@A@@@@B@@@BA@@B@BA@@B@@A@BBA@AB@BAB@B@B@@@BBD@B@B@B@BADA@@B@@@@CB@B@@@B@@@BA@AB@BABBB@BBB@@@B@B@@AB@@@B@B@@AB@B@B@@ABA@BB@B@@AB@@AB@ACB@B@@@BA@A@@BAB@BB@A@A@@@A@@AA@@@A@C@@BA@@@ADAA@@ABAB@@@@A@AB@BA@AB@@@@AAA@A@@BA@AB@@C@@@@A@C@A@ABC@@@AA@AA@@@AB@B@B@@@@@@A@A@@@@@AB@@C@@AA@@@@@@@A@@@AACA@@AB@@@B@@A@@@A@AAAA@@ABA@@@AB@@@B@@CAAA@@A@@AA@A@A@AAADABA@A@AA@@@@AAAB@BA@ABA@AAA@@@A@AB@CA@AC@@@A@@AAABAC@@@A@@@@@AAAA@@AA@AAAA@@@@AA@@@A@@B@B@D@B@DABADA@ABABC@A@@@A@A@AAA@@C@AAA@C@ABCACA@A@A@ABABA@@AABA@@@@BABA@A@@AA@@@@@@@AA@@@@AA@AB@AA@@AA@@@@CAC@@AAC@C@@@@@ABA@A@@B@@AAA@@@AAA@@@@@@AA@@@@@AAAA@AA@AAA@CAAB@B@B@@A@@AACAA@@@C@AA@AA@@@A@CA@AAA@@A@A@@AA@AAAA@@@AC@@AAAB@@A@@A@A@@@@@A@@AA@@@@AAA@@A@A@@BA@AFAB@@@BB@@B@@B@@@@BBB@BA@@B@@AB@@@@@AA@ABCB@@BB@@A@G@A@@@@@A@@@A@@B@@@B@@A@@@@B@BB@@DA@AB@BA@A@@@AA@AABA@C@@@@A@EAC@AA@AGAEBB@@B@@@BA@A@@AA@@@AA@@@@ABAAA@@AA@@@AB@@A@A@@ABA@AA@@AA@@A@@ABC@@@ABA@@BABA@@@@A@@@A@@@@AB@AA@@AA@@AACA@@A@@@ABC@@@AAAA@@@ABAB@@A@@@AB@A@@AA@A@@AA@AAAB@AC@@AAC@@A@@@@AA@@@AA@@BA@@B@B@@A@A@@@A@@@A@A@@@@BAB@@AA@A@@C@@@AB@AC@@@ABAA@@ADB@BB@B@BAD@D@ACA@@A@@@AB@B@B@B@BA@A@@BABA@A@@@ABB@@FBH@BBBDBBBB@@ABBB@B@BB@@@BA@@BAB@@@@@B@B@@@B@BA@A@AA@@A@A@A@AAAC@@@A@@@@@@@AA@@AA@GE@ACAAB@AA@A@BA@@AAA@AA@AA@@@A@@@ABAB@@E@A@@B@C@@AAA@@@@AAB@BA@ABA@@@@@AB@@@B@@@@A@@AA@@@A@A@AAAAA@@A@@AA@AA@@@@EA@A@CCA@@BAB@@AD@@@BA@C@C@A@BA@A@ACCA@AAAAA@AG@A@ADCBABAB@FCBA@@BA@ABA@CBA@A@A@AC@A@EB@BABA@AB@@A@A@@@@BAAA@@@A@AA@@CAC@@AA@@AA@A@@AA@C@A@AA@@A@EA@AA@ACAAA@AAAAAAA@@A@@CA@AA@ABAB@BEB@BAACBC@@CBA@A@@KMAA@AAAB@BAB@B@BAFC@@B@@@BBBB@@BA@@@AAA@ACAA@CAA@A@AAA@@A@@@@@A@AB@@AB@@A@AAC@@@@EAAA@AAAAA@@A@@@@@A@@BAD@BADABCDEHCB@B@B@@A@@@@@A@CK@AACACA@@CBEBABCDCHEFABABA@C@AAC@AAACACAE@@@@A@@@AB@@@AA@AAA@@@@@A@@B@@B@@@@@@B@@@@@BA@A@A@AB@@@BABAB@BB@@B@@@@C@@@A@A@AB@@@@AB@@B@@@AB@AAA@@@A@@@B@AB@@A@@@@AAA@@@@BA@@BB@@@@B@@AAA@@BABC@@@AB@@@@A@A@@B@@@@A@@@A@@B@@A@@BA@@DBB@BABABA@@D@@@BA@@@B@@@BA@A@@@@B@@@@B@DAB@@A@@@@AAAA@@BA@@@@B@@@@BB@@@@@@A@A@@@@@@BBBA@@@A@@A@@AB@@@D@@@B@B@@A@@BADBB@B@@@DABAB@B@@@B@@@@AB@B@@@B@DC@@@AB@@@@D@@B@B@B@BBB@B@@@B@@AB@@@B@@@@A@CBA@@B@@D@@B@BA@@B@@@BB@@@@@BB@@A@C@A@A@@DAB@@B@B@@BB@@@@B@@A@A@AB@@B@@@BB@B@@@BA@@AA@@@@@ABABABA@@@@B@@@DA@@@A@@@AB@@@@A@@A@@A@@@@B@@A@@@@@A@@BA@@B@B@B@@A@A@@@A@@@@@AA@@@@A@A@A@A@A@@@A@@B@B@@@B@BA@@@@BBB@@BB@@ABAB@BA@A@@B@@BBA@@BAB@@@@B@BB@@@B@@A@A@@B@B@@A@@D@BB@@B@@@B@BABA@@B@@BB@B@D@B@BB@@B@@@B@@ABC@A@@AA@@@@B@BCBA@EAI@@@AB@DEBE@AAE@ABG@CCIACA@@ABA@ADGB@BA@CBAAA@CAAAA@A@AAABE@CAA@@@A@A@A@A@@@@BC@@@A@@C@CBA@@@A@C@C@@@A@GACAA@C@BB@@AB@@AB@@CAA@@@AA@@A@@BA@@@@@@BEAA@A@@@AAA@A@CCAAACCE@ABABABA@@@A@AB@BABA@@@BBABBDA@A@@@ACCAC@@BCAABA@A@@@@@CA@D@BADBB@B@A@BA@@DABAB@@ADA@AB@AC@@BA@AAAA@A@CBDG@@BA@A@@B@@A@@@@@@@@A@@@AACB@@@@@A@@A@@@@AB@@A@@AAA@@@AA@@@C@@A@A@@@AB@@@@C@C@@@AD@B@B@BCBED@BBBC@AAAAA@@CA@AB@@ECA@A@A@@C@@@A@@@@A@A@@@E@AACBA@AA@AAACBA@A@C@A@A@A@@C@ABA@AAA@AAAA@@@@AAA@@AA@@@@@BA@AA@A@@@AAACCCAIC@@CAG@AA@@B@B@@@BAA@@@@A@@BA@@@AA@@@@A@@B@@A@@A@A@@@@A@@@@A@B@@AB@@@@@@BB@@@@@B@@A@@A@AA@@B@@@@@B@AA@@@@AA@@@@@A@A@@@AA@@@@ADE@@@AA@A@@@@A@@B@B@@@BAB@@@@@BA@@@A@@B@DC@@@AB@@@@@@@@@B@@@AA@@BA@@B@@AA@@@@@A@@AAA@CDAFE@ABCBA@ABA@ABAB@BAB@BA@@BD@BHBD@@@B@BADIBA@@ACA@@@@AAACA@@BCAAA@@@@AAAACAAA@@@AA@@A@AA@@@AAAAAAAAA@@AC@@AAAA@AAA@AA@AC@@@A@@@C@@BA@AA@@AAAAA@C@A@@@@AA@@@@@C@@@A@@@A@A@C@AAA@AAA@AA@@@@AA@@@A@CB@@AA@@AA@@@@A@A@@@CB@@A@A@A@A@@AABA@A@AA@@A@@BAB@@@@AA@@EACBC@CBA@A@A@A@CC@@AA@@AAA@@@AC@@@@@@C@A@@@CDAB@@@@A@AAA@@@E@@B@B@@@BA@@BAF@@@BBB@@BB@B@BB@@B@@DDB@@B@B@@B@BBB@@BAB@B@B@@A@@BAB@@@@AB@@@B@B@@A@@B@@@B@BADBBBBDBB@@DCBFDB@@BAB@DBBBB@@AB@@@@@B@@@B@B@B@BB@@BA@@@A@A@@AA@@@@@@B@B@B@B@B@B@@@@@@@B@@@@A@@@@@A@@@@@AAA@A@@A@@A@@B@@@B@@@@@@A@A@@@@BA@A@@A@A@@@@A@@A@@B@B@B@AABA@@@AA@BCAA@A@A@@@AA@@@@A@@@@AAA@@ABA@AAA@A@@@@@A@A@@AA@@@@ABCBCDGBC@ECG@I@EBEDCBAD@BABA@A@AAA@@@ABAACAA@EAAB@B@@AB@AAAA@E@E@I@AACAA@A@@A@@AA@B@@@@A@@A@@A@@@@@AA@@AB@AA@A@AB@@@BA@A@@@A@@@@@A@@@A@@@@A@@BA@@@@@CA@A@@@@@A@@@A@@@@@A@@@@@AA@@@@@@@@AA@A@A@@@AAAB@@A@@A@@@AA@@@@@A@@@@@@@AA@@@@@BC@A@@@@@@@A@@@A@@A@@@@@@AA@A@A@A@A@@B@@A@@@@@A@@@A@@@@@A@@@@@A@@@@A@@@A@@BA@@@A@@@AA@@@@@@@A@A@@@A@@BA@@AA@"],"encodeOffsets":[[109978,22707]]}}],"UTF8Encoding":true});}));