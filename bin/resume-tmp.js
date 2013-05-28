(function(){
    var wid=79;
    function decode(str,i,ltr)
    {
        var strArray = str.split("");
        for(i = 0;  i<strArray.length; i++)
        {
            ltr = strArray[i];
            if(ltr == '1' || ltr == '2')
            {
                ltr += strArray.splice(i+1,1);
            }
            strArray[i] = "### +-\n|=MorganEel'sRum805217@i.cGCvLtT;D:Iybhkdfpwz,WAjqYxBNOZF4PHS/V93%J6".charAt(parseInt(ltr,36));
        }
        return strArray.join('');
    }
    String.prototype.center = function(symbol,txt)
    {
        symbol=symbol||decode('3');
        txt = decode('3')+this+decode('3');
        while(txt.length < wid)
        {
            txt = txt.length%2==0 ? txt + symbol:symbol+txt;
        }
        return txt;
    };
    String.prototype.box = function(txt)
    {
        txt =decode('4') + bar(decode('5')).slice(1,-1) + decode('46'),
            textArray = this.split(decode('6'));
        while(textArray.length)
        {
            txt+=decode('7')+textArray.shift().center().slice(1,-1)+decode('76');
        }
        return txt+decode('4') + bar(decode('5')).slice(1,-1) + decode('4');
    };
    function header(txt)
    {
        return bar(decode('8')) +decode('6')+ txt.center(decode('8'))+decode('6')+bar(decode('8'))+decode('66');
    };
    function bar(symbol,ret)
    {
        ret='';
        while(ret.length<wid)
        {
            ret+=symbol;
        }
        return ret;
    }
    function separate(t1, t2)
    {
        var spaces=decode('3');
        var joined=t1+spaces+t2;
        while(joined.length<wid)
        {
            spaces+=decode('3');
            joined=t1+spaces+t2
        }
        return joined;
    }
    function paragraph(title,txt,txtArray,line,tmp)
    {
        txtArray = txt.split(decode('3'));
        txt=line='';
        while(txtArray.length)
        {
            tmp=txtArray.shift();
            if(line.length+tmp.length>wid)
            {
                txt+=line+decode('6');
                line=tmp;
            }
            else
            {
                line += tmp;
            }
            line+=decode('3');
        }
        return title.center(decode('5'))+decode('6')+txt+line+decode('66');
    }
    function job(company, startDate, endDate, title, description, ret)
    {
        ret = bar('-')+decode('6');
        ret+=separate(company, startDate+decode('5')+endDate)+decode('6');
        ret+=paragraph(title, description);
        return ret;
    }
    console&&console.log(decode('9abcde3fecghij3kgjlmg6nop5qrp5qrso6mabcdegecghtcmduhvwam').box() + decode('66')
        +header(decode('xgegbuw3yazgb310g1111gb'))
        +paragraph(decode('12101314k15'),
        decode('16311b17311a318g31119g31aue1b3a1c31dbacbdmmgb31631ealh1b3w19aajg31cab3m173a1ee311gdmv3163jgh1c5j11db113de1b3hgdbe31eghhv3163bgdhu1fg31119d113wab1dabd11g3wlh11lbg3uj3aeh173dj3caa1b3dj31119g31dhdwg317al3md1ag3u111g3de1b31631ede11311a3md1ag3u113d1egjamgv31631ede11311a31agg1d3cba1euec31eu11193jl1d1dab1131cbam3jmdb1131dga1dhg1g3de1b31631ede11311a3wamg311a31eab1a3gzgb1731bd1731eu11193gdcgb319a1dg3ue3m17319gdb11v'))
        +paragraph(decode('1h19173fecueggbj31huhh31hde11311a31hab1a31eu111939g15'),
        decode('1ij3gecueggbj1g31eg31cdwg31bu1c1cuwlh113w19dhhgecgj3gzgb1731bd1755u11ij31e19d1131eg3hazg3d18al113alb31ja18jv31hg31ede11311a31eab1a31eu111931dga1dhg31e19a31ede11311a31eab1a31eu11193lj1g31e19a31euhh3dj1a31klgj11uaej3de1b31dbacbdm3ue31ed17j31119d113md1ag3jgejg311a31119g3wam1dde17v310aeg3kdecgb31dbacbdmmgbj3jahzg31dba18hgmj311a1bd171g318l11319lb1131119g311gdm311amabba1ev3161c31eg3wahhd18abd11g3de1b3wammleuwd11g31eghh1g31eg3wde3jahzg31bu1c1cuwlh1131dba18hgmj3ue31ed17j31119d113dbg3caa1b31cab3gzgb17aeg3d1131119g3wam1dde17v31hgibg3haa1auec31cab311gdm3mgm18gbj31119d11318dhdewg31eab1a3de1b31dhd17318a11193d1131eab1a3de1b319amg1g3de1b31631ba31119d11v'))
        +paragraph(decode('1h191739dedcgbj31huhh31hde11311a31hab1a31eu111939g15'),
        decode('1lalibg31cdwuec31dbgjjlbg31cbam318adb1b3mgm18gbj311a31bghuzgb3dmd1fuec31119uecj3ae311umg3de1b311a3gejlbg31119d1131119g311gdm31eab1aj31eghh311acg1119gbv31lal3egg1b31dga1dhg31e19a31aea1e31e19ge311a3j1dgd1a3l1d3d18al1131dba18hgmj1g3de1b31e19a311d1ag3ueu11ud11uzg55d3jgh1c5j11db11gbv316izg3ble3m173a1ee318ljuegjjgj3jlwwgjj1clhh171g318l1131ede11g1b311a3wae11bu18l11g311a3jamg1119uec3cbgd11gb31119de3m17jgh1c3de1b31cawlj3ae31119g31ddb1131631ba318gj11v3163wammleuwd11g3g1m11bgmgh1731eghh1g31e19uw19319gh1dj318a11193m17311gdm311a3le1bgbj11de1b31e19d11316im31bauec1g318l113dhja3mdedcgmge11311a3le1bgbj11de1b31e1917316im31bauec3u11v'))
        +paragraph(decode('1h19173fzgb17aeg3fhjg31huhh31hde11311a31hab1a31eu111939g15'),
        decode('1nguec31ddb113a1c3d3wam1dde173uj3mabg31119de31jlj11318guec3de3gecueggbv31lalb3wam1dde173j11db11g1b31cbam3d3jmdhh3u1bgd31eu11193dmd1fuec31dga1dhg3de1b3ea1e317alibg3cba1euec1g318l113wdl11ualjh1755wlh11lbg3mgdej3d3ha11311a317alb311gdmv3163ca3al113a1c3m1731ed17311a3md1ag31119g31dhdwg31631eab1a3de3gzge3mabg3d1egjamg31dhdwgv316izg3j1daejabg1b39azgm18gb31bbuzgj1g3wl1dwd1ag318d1auec3wam1dg11u11uaej1g3cldwdmahg3waa1aa1c1cj1g31da113hlw1aj1g31dlj195l1d3whl18j1g3de1b31631eba11g3ja1c111edbg311a3abcdeu1fg3blej311a316e51o51pl113haec318g1cabg31qu1d5ydb31bu1b3u11v3163bgdhu1fg31119d113wab1dabd11g3wlh11lbg3uj3aeh173dj3caa1b3dj31119g31dhdwg317al3md1ag3u111g3de1b31631ede11311a3md1ag3u113d1egjamgv'))
        +paragraph(decode('1h19d11316im310aa1auec31rab15'),
        decode('1i3wam1dde1731eu11193d3wlh11lbg1g31dga1dhg31e19a3wdbg1g3ja1c111edbg31119d113egg1bj319gh1d311a3cg11318g1111gb1g318l11319dj3d31dlb1dajg3ea1ev31631ede11311a3wae11bu18l11g311a3jamg1119uec3hdbcgb31119de3m17jgh1c1g318a11193d113m173wam1dde173de1b31eu11193a1dge5jalbwg31dba1jgw11jv31631ede11311a31agg1d3cba1euec31eu11193jl1d1dab1131cbam3jmdb1131dga1dhg1g3de1b31631ede11311a3wamg311a31eab1a3gzgb1731bd1731eu11193d3jmuhg3ae3m1731cdwgv31631ede11311a3j11d173hd11g318gwdljg316318ghugzg3ue31bauec3caa1b31eab1a3de1b318gwdljg3163bgdhh173ca113ue11a31119g3cbaazg3d1131s31t9v31ihh3a1c31119g3a1119gb3ljldh31119uecj3d1d1dh17319gbg1g311aa1g3hu1ag319gdh11193wdbg1g3d31bgwge11318ljuegjj31dhde1g3zujuae31cab31119g31cl11lbg3de1b3dhh31119d111g318l1131cubj1131119uecij31cubj11v'))
        +header(decode('1hab1a31uuj11ab17'))
        +job(decode('1vd1739g1bud1w1xu1bgafcc'),
        decode('1pw113qoo1y'),decode('1tbgjge11'),
        decode('10gd1b3fecueggb'),
        decode('1tuaeggbg1b31119g3wbgd11uae3de1b3mdue11gedewg3a1c3mde173ue11gbedh311aahj1g318aaj11uec3ljgb31dba1blw11uzu111731zoo20v31tba1blwg1b3g1m11geju18hg3d1b31cbdmg1eab1a3ue31iw11uaejwbu1d113dhha1euec31cab319uc19gb51bahhdb3jdhgjv310gd1b3d311gdm3a1c31calb3de1b3waejuj11ge11h1731bghuzgbg1b31dba1blw11j3ae3jw19g1blhg31e19uhg3ueeazd11uec3eg1e3u1bgdj3waej11de11h17v314gzgha1dg1b1g31bawlmge11g1b1g3de1b3gzdecghu1fg1b318gj1131dbdw11uwgj31e19gbg3eaeg3g1muj11g1bv31tuaeggbg1b31119g3d1ba1d11uae3a1c31u12910p3de1b31dbazu1bg1b318gj1131dbdw11uwg3bgwammge1bd11uaej318a11193ue11gbedhh173de1b31cab3wlj11amgbjv'))
        +job(decode('f1xf1p1g316ewv'),
        decode('1rg183qoon'),
        decode('1pw113qoo1y'),
        decode('1vgeuab314gzgha1dgb'),
        decode('1iu1bg1b3ue31119g3waewg1d11ldhu1fd11uae3de1b3g1mgwl11uae3a1c3dhh31cdwg11j3a1c31rhdj193de1b31rhg1m31bgzgha1dmge11v31iu1bg1b3dj3mde173dj3n31dga1dhg31eab1auec3ae31buzgbjg31dba1jgw11jv314gzgha1dg1b3caa1b31dbdw11uwg3de1b31dbawgjj3um1dbazgmge11j31cab3d3cba1euec3wam1dde17v39g1131bgd1bhuegj3de1b3waejuj11ge11h1731dba1blwg1b3dwwlbd11g3gj11umd11gjv'))
        +job(decode('1hab1bj1hab1119314gj1a11a1d31tl18huj19uec'),
        decode('21de3qooq'),decode('14gw3qoon'),
        decode('1rale1bgb1w1p1eegb'),
        decode('1pzgbjd1e3de1b3du1bg1b3ue31119g3wbgd11uae3a1c3eg1e31eg18ju11gj1g3eg1ejhg1111gbj1g318baw19lbgj1g3cbd1d19uwj1g3mdeldhj1g3de1b3mabgv39dedcg1b3l1d311a31cuzg31dga1dhg3d113aewg311a31dba1blwg3waejuj11ge111g31eghh5abcdeu1fg1b31bd11d31cab31eg18ju11gj3de1b3mdeldhjv'))
        +job(decode('1219g31tuw1ahg18dhh31v11abg'),
        decode('9db3qoo22'),decode('14gw3qorr'),
        decode('1rale1bgb'),
        decode('yaewguzg1b1g3jalbwg1b31cle1buec31cab1g3de1b318luh113de3aehueg3j11abg3ue3d3euw19g3mdb1ag11v39aeu11abg1b3j11aw1a3hgzghj1g31dba1cu113mdbcuej1g3de1b318l1bcg11j31e19uhg3uewbgdjuec3jdhgj3qoo2031dgb317gdb3le11uh3jah1b3ue3qorrv')));
})()