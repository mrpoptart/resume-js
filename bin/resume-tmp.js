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
            strArray[i] = "###\nMorgan Eel'sRum805-217@i.chtp:/wGCvLT;DIybkdfz,WAjqYxBNOZF4PHSV93%J6KQX".charAt(parseInt(ltr,36));
        }
        return strArray.join('');
    }

	String.prototype.pad = function (count, pre, symbol) {
		symbol = symbol || " ";
		pre = pre && true;
		var txt = '';
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
        var txt="+" + bar("-").slice(1,-1) + "+\n",
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
    function separate(t1, t2)
    {
        var spaces=" ";
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

	function job(company, startDate, endDate, title, description) {
		var ret = bar('-') + "\n";
		ret += separate(company, startDate + "-" + endDate) + "\n";
		ret += paragraph(title, description);
		return ret;
	}

	function columns(number, textArray, i) {
		textArray.sort();
		var colWidths = "".pad(number).split('');
		for (i = 0; i < textArray.length; i ++)
		{
			if(textArray[i].length > colWidths[i % number])
			{
				colWidths[i % number] = textArray[i].length;
			}
		}
		var ret="";
		//for each row
		for(i = 0; i<textArray.length; i += number )
		{
			var row = "";
			//for each column
			for(var j = i; j<i+number && j<textArray.length; j++)
			{
				var count = colWidths[j % number];
				row+= textArray[j].pad(count, false) + " | ";
			}
			ret += row.slice(0,-3)+"\n";
		}
		return ret+"\n";
	}
    var wid = 79,
        ret=decode('456789ab97cdefagcfhic3jklmnolmnopk3i56789c97cdq7i8rdst5i3uvvwxyyzzzsi56789c97cdst5i').box() + decode('33')
        +header(decode('10c9c6rta11512c6a13cvvc6'))
        +paragraph(decode('14131516gx'),
        decode('17av618av5a19cavuca1ar91ba51caw65768iic6a17az5hd1batu55fca1c56ai18a5z9avc8isa17afcd1cmfv86va891badc869azcddsa17a6c8dr1dcavu8vat56w568vcathdvh6carfa59d18a8fa7551ba8favucawd8tca185hai81acarv1ea891ba17az89vav5ai81acarva8zcf5icsa17az89vav5a1accwa765zr97azrvuafhww56va1c65iafi86vawc5wdc1ea891ba17az89vav5at5icav5az561aac12c618a1b818azrvuac87c6au5wcar9ai18auc86vs'))
        +paragraph(decode('1fu18ab97r9cc6fa1frdda1f89vav5a1f561aazrvua4cx'),
        decode('1gfac97r9cc6f1eazca1c8tca1br1c1crthdvatu8ddc97cfac12c618a1b818mmrvefazu8vazcad512ca8195hva5h6a1h519fsa1fcaz89vav5az561aazrvuawc5wdcazu5az89vav5az561aazrvuahf1eazu5azrdda8f1aa1ihcfvr59fa891baw65768iar9az818favu8vai81acafc9fcav5avucat5iw8918sa1359cag897c6aw65768iic6faf5d12caw6519dcifav51b8181ea19hvauh6vavucavc8iav5i5665zsa171cazcat5dd819568vca891bat5iih9rt8vcazcdd1eazcat89af5d12ca1br1c1crthdvaw6519dcifar9az818favu8va86ca7551ba1c56ac12c61859ca8vavucat5iw8918sa1fce6cad551ar97a1c56avc8iaici19c6favu8va198d89tcaz561aa891bawd818a195vua8vaz561aa891bau5ic1ea891ba17a1b5avu8vs'))
        +paragraph(decode('1fu18a48987c6fa1frdda1f89vav5a1f561aazrvua4cx'),
        decode('1j5he6ca1c8tr97aw6cffh6ca1c65ia195861baici19c6fav5a1bcdr12c6a8i81dr97avur97fa59avrica891bav5ac9fh6cavu8vavucavc8iaz561afazcddav57cvuc6sa1j5ha9cc1bawc5wdcazu5a1a95zazuc9av5afwc81aahwa8195hvaw6519dcif1ea891bazu5av81acar9rvr8vr12cmm8afcd1cmfv86vc6sa17e12ca6h9ai18a5z9a19hfr9cffcfafhttcff1chdd181ea19hvaz89vc1bav5at59v6r19hvcav5af5icvur97a76c8vc6avu89ai18fcd1ca891ba1c5thfa59avucaw86va17a1b5a19cfvsa17at5iih9rt8vcac1kv6cicd18azcdd1eazurtuaucdwfa195vuai18avc8iav5ah91bc6fv891bazu8va17eia1b5r971ea19hva8df5ai8987cic9vav5ah91bc6fv891bazu18a17eia1b5r97arvs'))
        +paragraph(decode('1fu18ab12c61859cabdfca1frdda1f89vav5a1f561aazrvua4cx'),
        decode('1lcr97aw86va51ca8at5iw8918arfai56cavu89a1hhfva19cr97a89ac97r9cc6sa1j5h6at5iw8918afv86vc1ba1c65ia8afi8ddar1bc8azrvua8i81dr97awc5wdca891ba95za185he6ca765zr971ea19hvat8hvr5hfd18mmthdvh6caic89fa8ad5vav5a185h6avc8isa17a75a5hva51cai18az818av5ai81acavucawd8tca17az561aa89ac12c9ai56ca8zcf5icawd8tcsa17e12cafw59f56c1ba4512ci19c6a1b6r12cf1eathwt81aca1981ar97at5iwcvrvr59f1ea7h8t8i5dcat551a51c1cf1eaw5vadht1af1eawhfumhwatdh19f1ea891ba17az65vcaf51cvz86cav5a56789r1dca6h9fav5a179m1mm1nhvad597a19c1c56ca1orwm1186a1br1barvsa17a6c8dr1dcavu8vat56w568vcathdvh6carfa59d18a8fa7551ba8favucawd8tca185hai81acarv1ea891ba17az89vav5ai81acarva8zcf5ics'))
        +paragraph(decode('1fu8va17eia13551ar97a1p56x'),
        decode('1gat5iw8918azrvua8athdvh6c1eawc5wdcazu5at86c1eaf51cvz86cavu8va9cc1bfaucdwav5a7cva19cvvc61ea19hvau8fa8awh6w5fca95zsa17az89vav5at59v6r19hvcav5af5icvur97ad867c6avu89ai18fcd1c1ea195vua8vai18at5iw8918a891bazrvua5wc9mf5h6tcaw651hctvfsa17az89vav5a1accwa765zr97azrvuafhww56va1c65iafi86vawc5wdc1ea891ba17az89vav5at5icav5az561aac12c618a1b818azrvua8afirdca59ai18a1c8tcsa17az89vav5afv818ad8vca19ct8hfca17a19cdrc12car9a1b5r97a7551baz561aa891ba19ct8hfca17a6c8dd18a75var9v5avuca765512ca8va1qa1r4sa1gdda51cavuca5vuc6ahfh8davur97fa8wwd18auc6c1eav551eadr1acauc8dvuat86c1ea8a1bctc9va19hfr9cffawd891ea12rfr59a1c56avuca1chvh6ca891ba8ddavu8v1ea19hva1cr6fvavur97efa1cr6fvs'))
        +header(decode('1f561aa1srfv5618'))
        +job(decode('1t818a4c1br8y1ur1bc5b77'),
        decode('1ntvankk1v'),decode('1r6cfc9v'),
        decode('13c81bab97r9cc6'),
        decode('1rr59cc6c1bavucat6c8vr59a891bai8r9vc989tca51cai8918ar9vc698dav55df1ea1955fvr97ahfc6aw651bhtvr12rv18a1wkk1xsa1r651bhtc1bac1kvc9fr19dca81ba1c68icz561aar9a1gtvr59ft6rwva8dd5zr97a1c56aur7uc6m1b5dd86af8dcfsa13c81ba8avc8ia51ca1c5h6a891bat59frfvc9vd18a1bcdr12c6c1baw651bhtvfa59aftuc1bhdcazurdcar995128vr97a9czar1bc8fat59fv89vd18sa16c12cd5wc1b1ea1b5thic9vc1b1ea891bac12897cdr1dc1ba19cfvaw68tvrtcfazuc6ca959cac1krfvc1bsa1rr59cc6c1bavuca81b5wvr59a51ca1s14413la891baw6512r1bc1ba19cfvaw68tvrtca6ct5iic91b8vr59fa195vuar9vc698dd18a891ba1c56athfv5ic6fs'))
        +job(decode('b1ub1n1ea179ts'),
        decode('1pc19ankkj'),
        decode('1ntvankk1v'),
        decode('1tc9r56a16c12cd5wc6'),
        decode('1gr1bc1bar9avucat59tcwvh8dr1d8vr59a891bac1kcthvr59a51ca8dda1c8tcvfa51ca1pd8fua891ba1pdc1ka1bc12cd5wic9vsa1gr1bc1ba8fai8918a8fajawc5wdcaz561ar97a59a1br12c6fcaw651hctvfsa16c12cd5wc1ba7551baw68tvrtca891baw65tcffariw6512cic9vfa1c56a8a765zr97at5iw8918sa4cva1bc81bdr9cfa891bat59frfvc9vd18aw651bhtc1ba8tth68vcacfvri8vcfs'))
        +job(decode('1f561bf1f56vua16cf1av5wa1rh19drfur97'),
        decode('1y89ankkn'),decode('16ctankkj'),
        decode('1p5h91bc6y1nz9c6'),
        decode('1n12c6f8za891ba8r1bc1bar9avucat6c8vr59a51ca9czazc19frvcf1ea9czfdcvvc6f1ea1965tuh6cf1ea768wurtf1eai89h8df1ea891bai56csa48987c1bahwav5a1cr12cawc5wdca8va59tcav5aw651bhtcat59frfvc9v1eazcddm56789r1dc1ba1b8v8a1c56azc19frvcfa891bai89h8dfs'))
        +job(decode('14uca1rrt1adc198dda1tv56c'),
        decode('486ankk1z'),decode('16ctankoo'),
        decode('1p5h91bc6'),
        decode('1159tcr12c1b1eaf5h6tc1ba1ch91br97a1c561ea891ba19hrdva89a59dr9cafv56car9a8a9rtucai861acvsa459rv56c1bafv5t1aadc12cdf1eaw651crvai867r9f1ea891ba19h1b7cvfazurdcar9t6c8fr97af8dcfankk1xawc6a18c86ah9vrdaf5d1bar9ankoos'))
		+header(decode('13897h87cfa2095z9')) 
		+columns(9, [decode('951bcs1hf'), decode('1h8128ft6rwv'), decode('1h21hc618'), "CSS", decode('1s14413'), "AS2", "AS3", decode('1r18vu59'), "PHP", decode('41j1t2113'), decode('422413'), decode('1y1t1p13')])
		+header(decode('1r65768ifa2095z9')) 
		+columns(5, [decode('1g1b519ca1ru5v5fu5w'), decode('1g1b519ca1pd8fu'), decode('1g1b519ca17ddhfv68v56'), decode('btdrwfc'), decode('41ta1n1c1crtc'), decode('179vcddr1ya171bc8'), "OSX", decode('1fr91b5zf'), decode('13r9h1ky131g41r'), decode('41j1t2113'), decode('422413'), decode('1y1t1p13')]);
	console.log(ret)
	
})()