(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('阿坝县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"513231","properties":{"name":"阿坝县","cp":[101.706655,32.902459],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CAC@ECA@E@E@CCCC@AAA@CAC@C@GBG@@@A@A@A@G@@@AAE@AAA@AA@AEACCCACACAE@@@A@@AC@AAA@@@A@@AC@CICICC@CAABDJBFGLINELEJGJEFCBGCIAK@CAIAG@EFABEBA@A@EAEAA@E@CAEBEDCBA@A@EAMACACACA@@AA@B@B@BADCBCDA@CDCBCDAFCDEDQBEBED@DCJCDCFABADEFGDCBCBGBE@GBEBCBEDEBADADADCDEFC@E@E@CAECC@CCGAECCAEACACCECCAAACACECEEECACAEAK@C@G@CBCBE@EDEDAF@DCFC@E@CCCACAECCCCCECECCAECEEEAE@ECEAGAK@CBODCBMDQFIDE@GBMBCBE@EDGBIDCBCBCDCBCFABCHABELAJAF@DAFAD@LBJ@FAF@D@DADALCHCFIJCBI@EBGAEAGCKCEAOAEAI@KCEAG@EAE@C@G@GBMFCBCDEDEDENAFCFAD@H@F@JAH@DBD@PBN@DJLDDBDFHBDAHADCDGHABIHEDCBE@GDCDEFCDABCDADKR@DADAHAHAD@FAFAFAFAF@HAHADAF@FCFCDGJABADEFEBCDEDABGFEDEBABGBCBK@CGCDAD@L@JFFHHJDH@LBLAN@JBFDFDFHDHJHFFHDH@FDFFHHNTDFDFFFJHJJHHDHBHBLBN@JBHBHAH@JCHAHBDBFDFJFBD@DEFCFAFBDFRDJBJBJDH@FCDGDIFEDCD@H@HBHBLCFADEDEDIBKDCDCFEHCDIFGDCDGH@@EHCBEBIBGDCDEBGDMB@@WBG@CBGFGB@DBFHNFJ@HADCF@BBFHRBHAFAFED@B@BDHBFAFAJCH@J@BBB@F@@B@B@@AB@B@BB@@B@DAHADCB@D@FBB@B@DAD@DAB@F@BAD@B@F@B@B@B@D@F@@@B@D@F@B@B@B@BB@@@BB@@@@BABEDADEHAB@BBD@BABGJAB@BAD@B@D@D@BBDBDDHBBB@JD@B@B@B@FAF@BBDBBBD@@@@@B@@CB@@AB@@@D@@A@A@OAA@AB@@@B@BBD@B@BA@@@EDABEBCBA@@@GAA@@@CB@@ABA@@@A@CAA@@@@@CBA@@B@@BBBBBF@DBLADELAD@B@DBDDDDDBDDDD@BBDAB@DAD@BBBBBBD@DBB@BD@B@D@DAFAD@D@DADCFADCBGBCBABCDCJ@B@BBBFDBD@FBBBDBB@DADABA@AB@BE@E@G@A@@@@@@BBDB@@B@@AB@@CDA@@@@B@BBBBB@@AB@@@@MBA@@@ABABCDAB@B@F@B@BAB@B@@@BJDBBBD@BBB@F@@@@ABA@ABA@A@@@C@CAC@IAA@@@@@@@BD@@AB@BCDABCB@B@@@@BDHHDB@B@@@@AD@@@BDJFF@@BB@@ABABAB@B@B@B@@BBBBBBD@FBHBDBDDBBB@FB@@BB@DB@@BB@D@DAD@B@@BB@BD@@@B@B@@@DABAB@BA@CB@@@@BBDD@@DBB@L@D@DAB@B@BBBBBB@BAD@@@BBB@BAB@@ABBB@DBB@@BBD@BBB@BBDBBB@@BBBB@BD@BBBAD@F@FABAB@BBHBB@B@@A@@@ABA@A@E@C@ABABAAA@A@A@@@@B@B@DBB@B@F@BABBB@B@@@@F@BDJDHBB@BB@HB@@@@BC@@BA@@BAB@D@BAD@FCFADCB@B@DB@@BAB@BBB@BBB@BAB@D@BBB@BBDB@BB@@ABA@@@@B@B@D@BBBBBB@@B@B@@@@@BA@ABA@@B@BAD@H@D@B@B@BADAB@BAB@DBB@B@@@BABCBADA@@BCFGBCBCBA@ABA@@FAF@FA@@D@D@B@B@BADEBA@@@A@A@AAA@AAAA@@ADA@@@A@@@E@A@ABAD@D@DCBADCBABA@@BE@EB@BA@@@AB@@ABAAABABABCF@BABADGFABA@A@A@A@E@C@EBABAFC@ADEBABAD@F@DADABC@ABC@CBC@ABCBCBCBABA@AB@B@DBBBFDD@DB@B@DAD@J@B@FAH@D@D@DBB@BDDBB@BCJ@DADAD@DBD@BADABCBCB@BBBDBDDB@BDBHDDDDFFD@DBB@HABBL@F@D@DBDDDBDBD@D@DAD@HCDADAPAF@F@FBD@DAJCD@B@D@LFD@DBB@B@FCBAHGFGBCDGBA@ABADADADAD@BABCBCBC@G@ABABABAD@D@B@D@BABABA@CBI@@BAH@D@DAB@DADADABA@ABCBADALADADCBC@ABCDCDABCBADABADAB@DABADAD@BCFEBEFEDEHEDCFED@BABGBABADAF@B@BABABC@ABCBADADCDAFABC@A@CBADAD@FBB@BBBD@FBBFHDFDBDDBDDBBJBBBFBBDBDDDBD@BB@@BBADAF@F@JAFAFEL@BABFBD@JBFDBBHDHFFDFFDDDD@BBDBBADADGRAB@D@B@@JDDDHBDBHBD@FFBBBBB@FAD@BBB@@DBDHFDBBB@BBJBDDDDH@DDD@BBF@D@D@DADAB@DBBBBDBDBB@BDDDDDDD@BBDADADAFCHEFCBEBCBCBABE@A@EBABAHABCDCBEBI@E@I@E@E@C@C@AAC@C@A@CBCFCDEDABC@CBIFCDEFELCB@BADBDBH@D@DBDBDBDBF@F@DBHBFBFBDDHBH@F@DBF@D@HBFDBB@DBBBBDDBBBBD@FBDBDBBDDBBDDBDDFBD@@BDBDDBBDBDBBBD@D@DBDBHBBDBDBJBHBD@BBFBB@HAD@DBD@@BBBBB@@@@B@BBB@@@BA@@BB@@D@@@@@DAB@B@B@@@@@BA@@B@B@@@@@B@@A@@@@B@@B@@B@B@B@@B@@BBB@@BDA@@B@@@B@@BD@B@BAB@B@B@@DB@@@DBB@@ABBB@B@@B@BB@B@B@@@@AAA@@B@BB@@@@@B@@@@D@@@@B@BB@@BB@@@B@@@@@@A@@@@@B@@@B@@C@A@ABA@ABAB@F@B@JBPBF@BDHBFBHBHAL@H@F@H@J@F@DFH@BBD@DAF@B@FADABABABC@A@C@BFADBDBBFBDDDDFFBB@BB@BBBADAB@D@F@J@DBDA@CDCBCBAB@FCB@B@@@BDBB@@FBLFB@PBBB@@@F@BBBBD@DBB@DA@CFAB@@@BDD@B@BCF@BBDBDBDBB@B@F@BBB@@HDBBDDBBBD@B@A@DHEDCB@DGDC@@DCFADADAFCHCFAFAD@HADCBA@AAE@ACE@A@ABCDCDAF@PEBABABCBABABC@CBCBCBEBAAC@@@EACAEACCCCGAAAC@C@ABE@AFEDCB@@A@AGM@A@C@GBABG@ADGDCBCBADAHALCF@DADABCBC@CAIAECIAE@CBADCFCLAVAAC@AACC@G@AAA@AAAAAA@ACBCBA@C@A@AAAACAAACCAAAACC@@@ADEBA@A@CAAAC@CAEAGAACAE@EC@CAC@AAAAA@@AAC@EAAAAAAAAACAEEAAACACCIAE@M@C@C@C@ACAAEEGAC@C@C@ABC@E@CACAGAC@A@A@ABCBADEBA@C@CAAAAMAAAE@GBC@CA@@AACGCGACAACAAAEAAACAECCAE@CAAAAA@CAI@AACAAACAC@CAAAA@@A@@BAB@BABA@ADABABGJA@@BABAFA@@@@E@@@ABAAA@@@@GC@AA@GBCA@@A@@@C@A@E@A@@AAAAAACACAAA@A@EAEAGAA@A@A@A@@@AC@AAE@@DCB@@@BC@A@A@CAEAE@@BA@AFGB@FCBCDCBADADCBA@A@ABABA@A@C@@@@@@BB@BBBBBDBFDB@B@@@BADCBCDAFCDCHEDAD@DADAJCF@BABC@A@A@C@ADC@CBC@CBCFGFEBC@ABECKAGAIBC@EBG@ACE@C@G@EACCKACAAECEACAE@AA@ADK@EBA@CBABADANCB@DADEDAFAF@FAJ@DADABABCHADB@BB@DDFDBFDBDH@F@B@BBB@DDBDH@DBBBDDBFBBBFDFD@BBB@BBBDBD@D@D@F@DBDBFDHF@@BBDDBDBDBDFLDHBFBJ@HBB@BDDB@HAL@BBB@FBBBBBBABA@AB@B@@@B@B@FDLDRHHHNDLAFAHATKXCB@V@l@\\FDDDBBB@@B@DB@@B@B@@A@@@@@A@@@A@@BAB@@@B@B@BB@@BB@@@B@@@D@DAD@B@BDBFC@BB@@DAB@B@@@BB@B@B@B@@B@BCD@BBBJBBB@BABG@A@AB@D@BDB@BA@EB@BBBJBHFD@BB@B@BCD@BB@DB@@@BCB@HED@B@BB@DBBDDB@@@@@BAD@@BB@@DBD@B@B@BB@B@BA@@BA@CAA@AB@@@B@@@@B@B@B@B@B@@B@@@B@@ABA@@BA@@BB@@B@BB@AB@@@@A@A@A@@@AB@BB@@BB@@BA@@@A@A@A@@@A@AB@@@@@BBBB@B@B@B@BB@@@B@BA@@B@B@@BBB@B@BB@BB@B@DB@BB@@B@@ABCBA@@B@B@@BB@B@@A@@BA@AB@@@B@B@@BBDEB@D@DBB@@@@C@AA@C@@@@CA@@@@A@@DA@@DAB@BA@A@ACA@@@@BABAF@B@BAB@@ABA@@B@DCBAHAD@DAD@B@@AB@B@B@B@BBBA@@@A@CBA@@DCHMBC@AAE@ABALODEDCJCDA@ALEB@J@D@BCBADAD@DBD@DAFGBCDAF@DDD@B@B@BDHHDF@BAH@DADDFBF@@AB@FCNAFAFABDF@BAFAJCF@BDNCFED@FA@@BCDADADBTBDBD@BBDD@D@D@D@@ABADCB@@AB@BABA@CBCBADADEBC@C@C@C@CEQ@C@A@EDBDB`LHBBA@ECECCBG@@D@BBD@B@D@JDJDB@B@BAAE@A@ADC@EBEBABBDA@@@CHABA@A@@D@B@@@HCDAFE@@BBDF@@B@DAB@B@FFJD@D@@CBAD@D@@FBNB@@JKH@FAFCDAB@BA@C@A@C@E@C@CBCBCBCFEBAB@DAD@DBFBB@BAH@BAH@D@DAFCHEFABAD@D@DABBB@DBAF@F@FBDBBH@B@BBDFDBBBHBBCLKFAXGLCXCPGLGDADAJAPCNCB@JELAJAB@FABBD@DBDBB@BFAB@@@BCD@DBBBD@@DAB@BB@DA@C@AD@D@HBBB@FCB@ABADCF@BB@DAB@B@@BABAB@BB@BBFAB@BCBAD@@@BF@@D@LBH@HCBE@EAACAC@E@C@CCCCAE@ABCD@B@FBHJJDB@JCBCBC@GAEAAGAMAAAAA@A@ABAFCHAH@B@DBBDBFDDD@D@@@BA@@AEAECAECAA@CBEBAFCB@J@B@H@DA@A@CAAC@IBC@AA@ABCB@JCDABC@C@CBCFAD@@BBD@B@BBF@DFFDBFAFC@CCCEECCAA@AFAFBFBHBDAB@CAAACCAA@AGCGGGKAEIIMGECIAIAGAGCGCECGCGECGEEGECCEECEEGGEGEGGEGEGAGAEAOCKCOAIAEAE@C@GBGBG@AAE@AAGAGAGCE@ECGAEAI@EAEACAE@UBEAE@GAG@E@EAE@OCEEEOMECGECCAE@C@AAEGMIOEEEEIGQQEEEECIAE@CBCBG@EBG@EAMAEACEKEGKMECGEGECGECGCGCQGMCQAMGECECAECEKSIMGCGAEAGBEBSDCBGBGBIBGBKAQCI@KAKASEKCICGCE@MDK@KCCEAADIDOFCFCBEACAIEI@CBCJOPYFEBCCGCCCAECEAAA@ACAIEC@@CBEBGDMBAFCBADABC@CBABABAB@B@DBBBBBBBB@BB@@DGB@@@B@DDB@FCPODCBAB@D@B@D@B@B@DAD@F@D@D@D@DADABC@ABCBA@EBC@CDCDGBA@C@EAECK@EBG@IDGAGKIEEBCDKBCAC@CDE@EAA@EHAJEDABEDCBAFA@@@AAG@ABCFANG@EBEBEBC@E@EBEBAAA@AC@@@A@C@@@A@@@A@AA@A@A@@A@A@ABA@A@CAA@A@A@AECACAA@@AAAAAAAAC@@AEA@A@C@ABABAB@BA@CBAEAO@GAC@CCCAACACBABGNCD@DBF@BAH@D@DAD@DADCFAHAF@F@DAJADABC@A@CACAACCCAC@CAAA@A@C@IBC@G@@ACIAE@CFCBE@E@CAC@E@@AE@C@ECE@AAE@AA@E@GAAA@BA@AB@BAHADGFADEDADIDEHQNGFGHABADCFADBHAJ@DADABGJ@@A@EBC@EFCBGBC@A@ECA@C@C@CBIDEDGBCBE@K@E@EAEAC@C@CDCB@B@@BFBBHDBB@BAD@D@BBD@B@BABABCBCDBB@FADAHADCBGNAB@DDDCD@HADCFA@ACAABAAAEACAABABA@A@KBE@C@C@GCCAACEE@E@K@AAAECAA@CC@CAAACCAE@AC@CAAACECAEOCEAECEAAA@@AA@A@@BABABCBABEBABA@@@@@@EBIBCAA@CBE@CGCCBCBCBEDGFCDCDCDA@E@@BA@A@CFA@CDCD@@AB@AA@AA@AAA@ACGEG@CAA@CEECCAAAAECAA@AA@AAEEAACAAA@AAACKAEA@@CAA@@@AAC@AAC@A@ABA@ABA@ABA@C@@@A@A@@AC@A@C@A@AAAAC@A@A@AAAAA@A@C@AA@AC@A@C@A@AAA@CAAAGAC@A@C@C@CAAAA@AAA@G@A@C@AAG@E@E@C@A@EBG@AAC@E@C@ABADEB@@AFCDCBGACC@EEGGGAEAEBE@CEEEGGECCCCGWMEACC@I@IBQ@GCGMQAEAEAEBA@@CAIAE@EJILABCCCECAE@EDINEHEDGDEHGLEFEBEAECIGKCIAABA@@B@BA@CDOHADCBGFA@EB"],"encodeOffsets":[[104193,33149]]}}],"UTF8Encoding":true});}));