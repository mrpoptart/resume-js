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
            strArray[i] = "### +-\n|=MorganEel'sRum805217@i.chtp:/wGCvLT;DIybkdfz,WAjqYxBNOZF4PHSV93%J6".charAt(parseInt(ltr,36));
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
    console&&console.log(decode('6')+decode('9abcde3fecghij3kgjlmg6nop5qrp5qrso6mabcdegecghtcmduhvwam6xyyz101111121212vmabcdegecghvwam').box() + decode('66')
        +header(decode('13gegbuw314a15gb316gyygb'))
        +paragraph(decode('17161819k10'),
        decode('1a3yb1b3ya31cg3yxg31due1e3a1f3zbacbdmmgb31a312alh1e3wxaajg31fab3m1b3a12e3ygdmv31a3jgh1f5jydby3de1e3hgdbe312ghhv31a3bgdhu1gg3yxdy3wabzabdyg3wlhylbg3uj3aeh1b3dj3caa1e3dj3yxg3zhdwg31bal3md1dg3uy1h3de1e31a312dey3ya3md1dg3uy3d12gjamgv31a312dey3ya31dggz3cba12uec312uyx3jlzzaby31fbam3jmdby3zgazhg1h3de1e31a312dey3ya3wamg3ya312ab1d3g15gb1b31ed1b312uyx3gdcgb3xazg3ue3m1b3xgdbyv'))
        +paragraph(decode('1ix1b3fecueggbj31iuhh31idey3ya31iab1d312uyx39g10'),
        decode('1jj3gecueggbj1h312g31fdwg31eu1f1fuwlhy3wxdhhgecgj3g15gb1b31ed1b55uyij312xdy312g3ha15g3d1caly3alb31ka1cjv31ig312dey3ya312ab1d312uyx3zgazhg312xa312dey3ya312ab1d312uyx3lj1h312xa312uhh3dj1d31llgjyuaej3de1e3zbacbdm3ue312d1bj3yxdy3md1dg3jgejg3ya3yxg3wamzde1bv316aeg3kdecgb3zbacbdmmgbj3jah15g3zba1chgmj3ya1ed1b1h31cly3xlby3yxg3ygdm3yamabba12v31a1f312g3wahhd1cabdyg3de1e3wammleuwdyg312ghh1h312g3wde3jah15g31eu1f1fuwlhy3zba1chgmj3ue312d1bj3yxdy3dbg3caa1e31fab3g15gb1baeg3dy3yxg3wamzde1bv31igibg3haa1duec31fab3ygdm3mgm1cgbj3yxdy31cdhdewg312ab1d3de1e3zhd1b31cayx3dy312ab1d3de1e3xamg1h3de1e31a31ea3yxdyv'))
        +paragraph(decode('1ix1b39dedcgbj31iuhh31idey3ya31iab1d312uyx39g10'),
        decode('1malibg31fdwuec3zbgjjlbg31fbam31cadb1e3mgm1cgbj3ya31eghu15gb3dmd1guec3yxuecj3ae3yumg3de1e3ya3gejlbg3yxdy3yxg3ygdm312ab1dj312ghh3yacgyxgbv31mal3egg1e3zgazhg312xa31dea12312xge3ya3jzgd1d3lz3d1caly3zba1chgmj1h3de1e312xa3yd1dg3ueuyudyu15g55d3jgh1f5jydbygbv31ai15g3ble3m1b3a12e31cljuegjjgj3jlwwgjj1flhh1b1h31cly312deyg1e3ya3waeybu1clyg3ya3jamgyxuec3cbgdygb3yxde3m1bjgh1f3de1e31fawlj3ae3yxg3zdby31a31ea31cgjyv31a3wammleuwdyg3g1nybgmgh1b312ghh1h312xuwx3xghzj31cayx3m1b3ygdm3ya3le1egbjyde1e312xdy31aim31eauec1h31cly3dhja3mdedcgmgey3ya3le1egbjyde1e312x1b31aim31eauec3uyv'))
        +paragraph(decode('1ix1b3f15gb1baeg3fhjg31iuhh31idey3ya31iab1d312uyx39g10'),
        decode('1oguec3zdby3a1f3d3wamzde1b3uj3mabg3yxde31kljy31cguec3de3gecueggbv31malb3wamzde1b3jydbyg1e31fbam3d3jmdhh3u1egd312uyx3dmd1guec3zgazhg3de1e3ea1231balibg3cba12uec1h31cly3wdlyualjh1b55wlhylbg3mgdej3d3hay3ya31balb3ygdmv31a3ca3aly3a1f3m1b312d1b3ya3md1dg3yxg3zhdwg31a312ab1d3de3g15ge3mabg3d12gjamg3zhdwgv31ai15g3jzaejabg1e39a15gm1cgb31ebu15gj1h3wlzwd1dg31cd1duec3wamzgyuyuaej1h3cldwdmahg3waa1da1f1fj1h3zay3hlw1dj1h3zljx5lz3whl1cj1h3de1e31a312bayg3ja1fy12dbg3ya3abcdeu1gg3blej3ya31ae51p51qly3haec31cg1fabg31ruz514db31eu1e3uyv31a3bgdhu1gg3yxdy3wabzabdyg3wlhylbg3uj3aeh1b3dj3caa1e3dj3yxg3zhdwg31bal3md1dg3uy1h3de1e31a312dey3ya3md1dg3uy3d12gjamgv'))
        +paragraph(decode('1ixdy31aim316aa1duec31sab10'),
        decode('1j3wamzde1b312uyx3d3wlhylbg1h3zgazhg312xa3wdbg1h3ja1fy12dbg3yxdy3egg1ej3xghz3ya3cgy31cgyygb1h31cly3xdj3d3zlbzajg3ea12v31a312dey3ya3waeybu1clyg3ya3jamgyxuec3hdbcgb3yxde3m1bjgh1f1h31cayx3dy3m1b3wamzde1b3de1e312uyx3azge5jalbwg3zba1kgwyjv31a312dey3ya31dggz3cba12uec312uyx3jlzzaby31fbam3jmdby3zgazhg1h3de1e31a312dey3ya3wamg3ya312ab1d3g15gb1b31ed1b312uyx3d3jmuhg3ae3m1b31fdwgv31a312dey3ya3jyd1b3hdyg31cgwdljg31a31cghug15g3ue31eauec3caa1e312ab1d3de1e31cgwdljg31a3bgdhh1b3cay3ueya3yxg3cbaa15g3dy31t31u9v31jhh3a1f3yxg3ayxgb3ljldh3yxuecj3dzzh1b3xgbg1h3yaa1h3hu1dg3xgdhyx3wdbg1h3d31egwgey31cljuegjj3zhde1h315ujuae31fab3yxg31flylbg3de1e3dhh3yxdy1h31cly31fubjy3yxuecij31fubjyv'))
        +header(decode('1iab1d31vujyab1b'))
        +job(decode('1wd1b39g1eud111xu1egafcc'),
        decode('1qwy3qoo1y'),decode('1ubgjgey'),
        decode('16gd1e3fecueggb'),
        decode('1uuaeggbg1e3yxg3wbgdyuae3de1e3mdueygedewg3a1f3mde1b3ueygbedh3yaahj1h31caajyuec3ljgb3zba1elwyu15uy1b31zoo20v31uba1elwg1e3g1nygeju1chg3d1e31fbdmg12ab1d3ue31jwyuaejwbuzy3dhha12uec31fab3xucxgb51eahhdb3jdhgjv316gd1e3d3ygdm3a1f31falb3de1e3waejujygeyh1b31eghu15gbg1e3zba1elwyj3ae3jwxg1elhg312xuhg3ueea15dyuec3eg123u1egdj3waejydeyh1bv319g15ghazg1e1h31eawlmgeyg1e1h3de1e3g15decghu1gg1e31cgjy3zbdwyuwgj312xgbg3eaeg3g1nujyg1ev31uuaeggbg1e3yxg3d1eazyuae3a1f31v17916p3de1e3zba15u1eg1e31cgjy3zbdwyuwg3bgwammge1edyuaej31cayx3ueygbedhh1b3de1e31fab3wljyamgbjv'))
        +job(decode('f1xf1q1h31aewv'),
        decode('1sg1c3qoon'),
        decode('1qwy3qoo1y'),
        decode('1wgeuab319g15ghazgb'),
        decode('1ju1eg1e3ue3yxg3waewgzyldhu1gdyuae3de1e3g1ngwlyuae3a1f3dhh31fdwgyj3a1f31shdjx3de1e31shg1n31eg15ghazmgeyv31ju1eg1e3dj3mde1b3dj3n3zgazhg312ab1duec3ae31eu15gbjg3zba1kgwyjv319g15ghazg1e3caa1e3zbdwyuwg3de1e3zbawgjj3umzba15gmgeyj31fab3d3cba12uec3wamzde1bv39gy31egd1ehuegj3de1e3waejujygeyh1b3zba1elwg1e3dwwlbdyg3gjyumdygjv'))
        +job(decode('1iab1ej1iabyx319gj1dyaz31ul1chujxuec'),
        decode('21de3qooq'),decode('19gw3qoon'),
        decode('1sale1egb111q12egb'),
        decode('1q15gbjd123de1e3du1eg1e3ue3yxg3wbgdyuae3a1f3eg12312g1cjuygj1h3eg12jhgyygbj1h31cbawxlbgj1h3cbdzxuwj1h3mdeldhj1h3de1e3mabgv39dedcg1e3lz3ya31fu15g3zgazhg3dy3aewg3ya3zba1elwg3waejujygey1h312ghh5abcdeu1gg1e31edyd31fab312g1cjuygj3de1e3mdeldhjv'))
        +job(decode('17xg31uuw1dhg1cdhh31wyabg'),
        decode('9db3qoo22'),decode('19gw3qorr'),
        decode('1sale1egb'),
        decode('14aewgu15g1e1h3jalbwg1e31fle1euec31fab1h3de1e31cluhy3de3aehueg3jyabg3ue3d3euwxg3mdb1dgyv39aeuyabg1e3jyaw1d3hg15ghj1h3zba1fuy3mdbcuej1h3de1e31cl1ecgyj312xuhg3uewbgdjuec3jdhgj3qoo203zgb31bgdb3leyuh3jah1e3ue3qorrv')));
})()