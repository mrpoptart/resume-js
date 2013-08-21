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
            strArray[i] = "###\n _/|\\`,SeniorFul-tackWbPgm805217@.hp:wHsyMdVEO9Lfv3%xADzTIjJ6CKQYXGNB;R'qZ4".charAt(parseInt(ltr,36));
        }
        return strArray.join('');
    }

	String.prototype.pad = function (count, pre, symbol, txt) {
		symbol = symbol || " ";
		pre = pre && true;
		txt = '';
		while ((this + txt).length < count) {
			txt += symbol;
		}
		if (pre) {
			return txt + this;
		} else {
			return this + txt;
		}
	};
    String.prototype.center = function(symbol,txt)
    {
        symbol=symbol||" ";
        txt = " "+this+" ";
        while(txt.length < wid)
        {
            txt = txt.length%2==0 ? txt + symbol:symbol+txt;
        }
        return txt;
    };
    String.prototype.box = function(txt)
    {
        txt="+" + bar("-").slice(1,-1) + "+\n",
            textArray = this.split("\n");
        while(textArray.length)
        {
            txt+="|"+textArray.shift().center().slice(1,-1)+"|\n";
        }
        return txt+"+" + bar("-").slice(1,-1) + "+";
    };
    function header(txt)
    {
        return bar("=") +"\n"+ txt.center("=")+"\n"+bar("=")+decode('33');
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
    function separate(t1, t2, spaces)
    {
        spaces=" ";
        var joined=t1+spaces+t2;
        while(joined.length<wid)
        {
            spaces+=" ";
            joined=t1+spaces+t2
        }
        return joined;
    }
    function paragraph(title,txt,txtArray,line,tmp)
    {
        txtArray = txt.split(" ");
        txt=line='';
        while(txtArray.length>0)
        {
            tmp=txtArray.shift();
            if(line.length+tmp.length>wid)
            {
                txt+=line+"\n";
                line=tmp;
            }
            else
            {
                line += tmp;
            }
            line+=" ";
        }
        return title.center("-")+"\n"+txt+line+decode('33');
    }

	function job(company, startDate, endDate, title, description, ret) {
		ret = bar('-') + "\n";
		ret += separate(company, startDate + "-" + endDate) + "\n";
		ret += paragraph(title, description);
		return ret;
	}

	/**
	 * Outputs the array of strings provided into the number of columns
	 * provided
	 * @param number the number of columns into which to organize the data
	 * @param textArray an array of strings to place into columns
	 * @param i placeholder for used var
	 * @return {String} returns a formatted string
	 */
	function columns(number, textArray, i, j, ret) {
		textArray.sort();
		var colWidths = "".pad(number).split('');
		for (i = 0; i < textArray.length; i ++)
		{
			if(textArray[i].length > colWidths[i % number])
			{
				colWidths[i % number] = textArray[i].length;
			}
		}
		ret="";
		//for each row
		for(i = 0; i<textArray.length; i += number )
		{
			var row = "";
			//for each column
			for(j = i; j<i+number && j<textArray.length; j++)
			{
				var count = colWidths[j % number];
				row+= textArray[j].pad(count, false) + " | ";
			}
			ret += row.slice(0,-3)+"\n";
		}
		return ret+"\n";
	}
    console.log(
			(decode('4444554455544444444444444444444444444444444555555444444444444444445534446447644655544555545555445555445555444446455556555445555445554464634464675646455486455564554964554964554844464556464554864554964548646434646446464656464644646564646564646464644646555646464646564644556464436564465685555656444855a46855a56564656446555556564656855a46855565644434444444444444444446555564444444444444444444444444446555564444444444433bcdefg4hijjkblmno4pcq4rgfsgmttcg3uvwkxywkxyzv3tfgsmdcdscj10stmej11nft312ll13146615151511tfgsmdcdscj11nft')).box() + decode('33')
        +header(decode('pfgo416e17lfg18'))
        +job(decode('bm18419c1aem61be1acf1css'),
        decode('1dnl4xvv1e'),decode('rgc17cdl'),
        decode('1fcm1a41cdsedccg'),
        decode('refdccgc1a4l12c4ngcmlefd4md1a4tmedlcdmdnc4f1g4tmd184edlcgdmj4lffj17a4qff17leds4i17cg413gf1ainle1hel1841ivv1j114rgf1ainc1a4c1klcd17eqjc4m1a41ggmtc15fgo4ed41lnlefd17nge13l4mjjf15eds41gfg412es12cgk1afjjmg417mjc171141fcm1a4m4lcmt4f1g41gfig4md1a4nfd17e17lcdlj1841acje1hcgc1a413gf1ainl174fd417n12c1aijc41512ejc4eddf1hmleds4dc154e1acm174nfd17lmdlj181141mc1hcjf13c1aa41afnitcdlc1aa4md1a4c1hmdscje1nc1a4qc17l413gmnlenc1741512cgc4dfdc4c1ke17lc1a114refdccgc1a4l12c4m1af13lefd4f1g4161o191fw4md1a413gf1he1ac1a4qc17l413gmnlenc4gcnfttcd1amlefd174qfl124edlcgdmjj184md1a41gfg4ni17lftcg1711'))
        +job(decode('1c1b1c1da41pdn11'),
        decode('hcq4xvvu'),
        decode('1dnl4xvv1e'),
        decode('bcdefg41mc1hcjf13cg'),
        decode('1le1ac1a4ed4l12c4nfdnc13limje1nmlefd4md1a4c1kcnilefd4f1g4mjj41gmncl174f1g4hjm17124md1a4hjc1k41ac1hcjf13tcdl1141le1ac1a4m174tmd184m174u413cf13jc415fgoeds4fd41ae1hcg17c413gf1qcnl171141mc1hcjf13c1a4sff1a413gmnlenc4md1a413gfnc17174et13gf1hctcdl1741gfg4m4sgf15eds4nft13md1811419cl41acm1ajedc174md1a4nfd17e17lcdlj18413gf1ainc1a4mnnigmlc4c17letmlc1711'))
        +job(decode('pfg1a17pfgl1241mc17olf134riqje1712eds'),
        decode('1rmd4xvvx'),decode('1mcn4xvvu'),
        decode('hfid1acg61d15dcg'),
        decode('1d1hcg17m154md1a4me1ac1a4ed4l12c4ngcmlefd4f1g4dc15415cq17elc17a4dc1517jcllcg17a4qgfn12igc17a4sgm1312en17a4tmdimj17a4md1a4tfgc11419mdmsc1a4i134lf41ge1hc413cf13jc4ml4fdnc4lf413gf1ainc4nfd17e17lcdla415cjjkfgsmde1nc1a41amlm41gfg415cq17elc174md1a4tmdimj17114b13cnemje1nc1a4ed41c1kncj413gfsgmttedsa4lcn12denmj415geledsa4md1a4l12c41afnitcdlmlefd4f1g4nft13jenmlc1a4lcn12denmj4nfdnc13l1711'))
        +job(decode('1o12c4renojcqmjj4blfgc'),
        decode('19mg4xvv1s'),decode('1mcn4xvyy'),
        decode('hfid1acg'),
        decode('1tfdnce1hc1aa417fignc1a41gid1aeds41gfga4md1a4qiejl4md4fdjedc417lfgc4ed4m4den12c4tmgocl11419fdelfgc1a417lfno4jc1hcj17a413gf1gel4tmgsed17a4md1a4qi1ascl1741512ejc4edngcm17eds417mjc174xvv1j413cg418cmg4idlej417fj1a4ed4xvyy11'))
		+header(decode('1fmdsimsc1741udf15d')) 
		+columns(9, [decode('df1ac111q17'), decode('1qm1hm17nge13l'), decode('1q1vicg18'), "CSS", decode('161o191f'), "AS2", "AS3", decode('r18l12fd'), "PHP", decode('191wb1v1f'), decode('191x191f'), decode('1rbh1f')])
		+header(decode('rgfsgmt1741udf15d')) 
		+columns(5, [decode('1l1afqc4r12flf1712f13'), decode('1l1afqc4hjm1712'), decode('1l1afqc41pjji17lgmlfg'), decode('1cnje1317c'), decode('19b41d1g1genc'), decode('1pdlcjje1r41p1acm'), "OSX", decode('ped1af1517'), decode('1fedi1k61f1l19r'), decode('191wb1v1f'), decode('191x191f'), decode('1rbh1f')])
		+header(decode('be1ac4rgf1qcnl17'))
		+paragraph(decode('1ymjjcgi17'),decode('12ll131466smjjcgi1711nft31l417elc4lf41712mgc4smjjcgec17415el124tijle13jc4nfdlgeqilfg17114pgellcd4ed41zf1ac111q174i17eds4hfgc1hcga41c1k13gc1717a4md1a41rm1ac415el124m4191wb1v1f4qmnocd1a11419ijle13jc4ed17lmdnc17412f17lc1a4fd41meselmj1dncmd41mcqemd11'))
		+paragraph(decode('1ymte1g18'),decode('12ll131466smte1g1811tfgsmdcdscj11nft31l4171817lct4lf4occ134lgmno4f1g4sfmj174md1a4gc15mg1a174lf4qff17l413gf1ainle1hel1811420iejl4ed4r16r61tf1ac1psdelcg415el124md41l13mn12c416f17l4md1a4191wb1v1f4qmnocd1a11416f17lc1a4fd4m413ge1hmlc417cg1hcg11'))
		+header(decode('16fqqec17'))
		+columns(6, [decode('pff1a15fgoeds'), decode('1tjm1717en41tmg17'), decode('1ogm1hcj'), decode('1tgf17171gel'), decode('1tffoeds'), decode('pgeleds') ])
        +header(decode('1tf1hcg41fcllcg'))
        +paragraph(decode('1o1f211m2214'),
        decode('1p4lg184lf4qc4l12c4oed1a4f1g413gfsgmttcg41p415fij1a4n12ff17c41gfg4t184f15d4lcmt1141p417cj1gk17lmgl4md1a4jcmgd415cjj1141p4gcmje1nc4l12ml4nfg13fgmlc4nijligc4e174fdj184m174sff1a4m174l12c413jmnc418fi4tmoc4ela4md1a41p415mdl4lf4tmoc4el4m15c17ftc1141p415mdl4lf4occ134sgf15eds415el12417i1313fgl41ggft417tmgl413cf13jca4md1a41p415mdl4lf4nftc4lf415fgo4c1hcg1841am18415el124cmscg412f13c4ed4t18412cmgl11'))
        +paragraph(decode('p121841cdsedccg174pejj4pmdl4lf4pfgo415el12419c14'),
        decode('1l174cdsedccg17a415c41gmnc41ae1g1genijl4n12mjjcdsc174c1hcg1841am18kkel231741512ml415c4jf1hc4mqfil4fig41qfq17114pc415mdl4lf415fgo415el12413cf13jc41512f415mdl4lf415fgo415el124i17a41512f415ejj4m17o424ic17lefd174md1a413gfsgmt4ed415m18174l12ml4tmoc417cd17c4lf4l12c4nft13md181141ffdc422mdscg413gfsgmttcg17417fj1hc413gfqjct174lf1am18a4qil412igl4l12c4lcmt4lftfggf151141p1g415c4nfjjmqfgmlc4md1a4nfttidenmlc415cjja415c4nmd417fj1hc41ae1g1genijl413gfqjct174ed415m18174l12ml4mgc4sff1a41gfg4c1hcg18fdc4ml4l12c4nft13md18114pc23gc4jffoeds41gfg4lcmt4tctqcg174l12ml4qmjmdnc415fgo4md1a413jm184qfl124ml415fgo4md1a412ftca4md1a41p41af4l12ml11'))
        +paragraph(decode('p1218419mdmscg174pejj4pmdl4lf4pfgo415el12419c14'),
        decode('1wfi23gc41gmneds413gc1717igc41ggft4qfmg1a4tctqcg174lf41acje1hcg4mtm1neds4l12eds174fd4letc4md1a4lf4cd17igc4l12ml4l12c4lcmt415fgo17415cjj4lfscl12cg1141wfi4dcc1a413cf13jc41512f4odf1541512cd4lf41713cmo4i134mqfil413gfqjct17a4md1a41512f4lmoc4edelemle1hckkm417cj1gk17lmglcg1141p231hc4gid4t184f15d4qi17edc1717c17417innc17171gijj18a4qil415mdlc1a4lf4nfdlgeqilc4lf417ftcl12eds4sgcmlcg4l12md4t1817cj1g4md1a41gfni174fd4l12c413mgl41p41af4qc17l1141p4nfttidenmlc4c1klgctcj18415cjja41512en12412cj13174qfl124t184lcmt4lf4id1acg17lmd1a41512ml41p23t41afedsa4qil4mj17f4tmdmsctcdl4lf4id1acg17lmd1a415121841p23t41afeds4el11'))
        +paragraph(decode('p121841c1hcg18fdc41cj17c4pejj4pmdl4lf4pfgo415el12419c14'),
        decode('20ceds413mgl4f1g4m4nft13md184e174tfgc4l12md41qi17l4qceds4md4cdsedccg1141wfig4nft13md18417lmglc1a41ggft4m417tmjj4e1acm415el124mtm1neds413cf13jc4md1a4df15418fi23gc4sgf15edsa4qil4nmilefi17j18kknijligc4tcmd174m4jfl4lf418fig4lcmt1141p4sf4fil4f1g4t18415m184lf4tmoc4l12c413jmnc41p415fgo4md4c1hcd4tfgc4m15c17ftc413jmnc1141p231hc41713fd17fgc1a419f1hctqcg41age1hc17a4ni13nmoc4qmoeds4nft13clelefd17a4simnmtfjc4nffof1g1g17a413fl4jino17a413i1712ki134njiq17a4md1a41p415gflc417f1gl15mgc4lf4fgsmde1nc4gid174lf41pdk1zk1dil4jfds4qc1gfgc425e13k1tmg41ae1a4el1141p4gcmje1nc4l12ml4nfg13fgmlc4nijligc4e174fdj184m174sff1a4m174l12c413jmnc418fi4tmoc4ela4md1a41p415mdl4lf4tmoc4el4m15c17ftc11'))
        +paragraph(decode('p12ml41p23t41fffoeds4hfg14'),
        decode('1l4nft13md18415el124m4nijligca413cf13jc41512f4nmgca417f1gl15mgc4l12ml4dcc1a17412cj134lf4scl4qcllcga4qil412m174m413ig13f17c4df151141p415mdl4lf4nfdlgeqilc4lf417ftcl12eds4jmgscg4l12md4t1817cj1ga4qfl124ml4t184nft13md184md1a415el124f13cdk17fignc413gf1qcnl171141p415mdl4lf4occ134sgf15eds415el12417i1313fgl41ggft417tmgl413cf13jca4md1a41p415mdl4lf4nftc4lf415fgo4c1hcg1841am18415el124m417tejc4fd4t1841gmnc1141p415mdl4lf417lm184jmlc4qcnmi17c41p4qcjec1hc4ed41afeds4sff1a415fgo4md1a4qcnmi17c41p4gcmjj184sfl4edlf4l12c4sgff1hc4ml4264r191141ljj4f1g4l12c4fl12cg4i17imj4l12eds174m1313j18412cgca4lffa4jeoc412cmjl124nmgca4m41acncdl4qi17edc1717413jmda41he17efd41gfg4l12c41giligc4md1a4mjj4l12mla4qil41geg17l4l12eds231741geg17l11'))
	);
	
})();