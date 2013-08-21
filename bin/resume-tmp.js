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
            strArray[i] = "###\nThe RsumofMrganEl805-217@i.ctp:/wGCvL;DIybkdz,WA'jqYxBNOZF4PHSV93%J6KQX".charAt(parseInt(ltr,36));
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
	 *
	 * @param number
	 * @param textArray
	 * @param i placeholder for used var
	 * @return {String}
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
    console.log(decode('4567869ab67cd7ecfghi7jig6k3lmnopqnopqrm3bcfghi6ig6ksgbhtkuvcb35wwxyzz101010ubcfghi6ig6kuvcb').box() + decode('33')
        +header(decode('116i6ftv712c136f7146ww6f'))
        +paragraph(decode('41415168y'),
        decode('177wf187wc71967w5671ati1b7cd7xfcgfhbb6f717710cak1b7v5cc967dcf7b187c10i7w6hbu717796kdo9whfw7hi1b7k6hfi7106kku7177f6hkt1c67w5hw7vcfxcfhw67vakwaf67t97cik187h97gcc1b7h97w567xkhv6718ca7bh1a67tw1d7hi1b717710hiw7wc7bh1a67tw7h1069cb6u717710hiw7wc71a66x7gfc10tig710tw579axxcfw7dfcb79bhfw7x6cxk61d7hi1b717710hiw7wc7vcb67wc710cf1a76136f1871bh18710tw576hg6f75cx67ti7b18756hfwu'))
        +paragraph(decode('1e5187jigti66f971etkk71ehiw7wc71ecf1a710tw57e6y'),
        decode('1f976igti66f91d71067dhv671btddtvakw7v5hkk6ig6976136f1871bh18ootw1g97105hw71067kc1367h19caw7caf71hc199u71e6710hiw7wc710cf1a710tw57x6cxk67105c710hiw7wc710cf1a710tw57a91d7105c710tkk7h91a71ia69wtci97hi1b7xfcgfhb7ti710h1897w5hw7bh1a6796i967wc7w567vcbxhi18u714ci678hig6f7xfcgfhbb6f979ck1367xfc19k6b97wc1bh181d719aw75afw7w567w6hb7wcbcffc10u717d71067vckkh19cfhw67hi1b7vcbbaitvhw67106kk1d71067vhi79ck13671btddtvakw7xfc19k6b97ti710h1897w5hw7hf67gcc1b7dcf76136f18ci67hw7w567vcbxhi18u71e61gf67kcc1atig7dcf7w6hb7b6b196f97w5hw719hkhiv6710cf1a7hi1b7xkh18719cw57hw710cf1a7hi1b75cb61d7hi1b71771bc7w5hwu'))
        +paragraph(decode('1e5187ehihg6f971etkk71ehiw7wc71ecf1a710tw57e6y'),
        decode('1jca1gf67dhvtig7xf699af67dfcb719chf1b7b6b196f97wc71b6kt136f7hbh1ctig7w5tig97ci7wtb67hi1b7wc76i9af67w5hw7w567w6hb710cf1a97106kk7wcg6w56fu71jca7i661b7x6cxk67105c71aic1071056i7wc79x6h1a7ax7h19caw7xfc19k6b91d7hi1b7105c7wh1a67titwthwt136ooh796kdo9whfw6fu7171g1367fai7b187c10i719a9ti6996979avv699dakk181d719aw710hiw61b7wc7vciwft19aw67wc79cb6w5tig7gf6hw6f7w5hi7b1896kd7hi1b7dcva97ci7w567xhfw71771bc71969wu7177vcbbaitvhw6761kwf6b6k187106kk1d7105tv5756kx9719cw57b187w6hb7wc7ai1b6f9whi1b7105hw7171gb71bctig1d719aw7hk9c7bhihg6b6iw7wc7ai1b6f9whi1b7105187171gb71bctig7twu'))
        +paragraph(decode('1e5187j136f18ci67jk9671etkk71ehiw7wc71ecf1a710tw57e6y'),
        decode('1l6tig7xhfw7cd7h7vcbxhi187t97bcf67w5hi71ha9w7196tig7hi76igti66fu71jcaf7vcbxhi1879whfw61b7dfcb7h79bhkk7t1b6h710tw57hbh1ctig7x6cxk67hi1b7ic10718ca1gf67gfc10tig1d719aw7vhawtca9k18oovakwaf67b6hi97h7kcw7wc718caf7w6hbu7177gc7caw7cd7b18710h187wc7bh1a67w567xkhv6717710cf1a7hi76136i7bcf67h1069cb67xkhv6u7171g13679xci9cf61b7ec136b196f71bft13691d7vaxvh1a6719h1atig7vcbx6wtwtci91d7gahvhbck67vcc1acdd91d7xcw7kav1a91d7xa95oax7vka1991d7hi1b717710fcw679cdw10hf67wc7cfghit1c67fai97wc717io1mo1naw7kcig7196dcf671otxo12hf71bt1b7twu7177f6hkt1c67w5hw7vcfxcfhw67vakwaf67t97cik187h97gcc1b7h97w567xkhv6718ca7bh1a67tw1d7hi1b717710hiw7wc7bh1a67tw7h1069cb6u'))
        +paragraph(decode('1e5hw7171gb714cc1atig71pcfy'),
        decode('1f7vcbxhi18710tw57h7vakwaf61d7x6cxk67105c7vhf61d79cdw10hf67w5hw7i661b9756kx7wc7g6w7196ww6f1d719aw75h97h7xafxc967ic10u717710hiw7wc7vciwft19aw67wc79cb6w5tig7khfg6f7w5hi7b1896kd1d719cw57hw7b187vcbxhi187hi1b710tw57cx6io9cafv67xfc1h6vw9u717710hiw7wc71a66x7gfc10tig710tw579axxcfw7dfcb79bhfw7x6cxk61d7hi1b717710hiw7wc7vcb67wc710cf1a76136f1871bh18710tw57h79btk67ci7b187dhv6u717710hiw7wc79wh187khw67196vha967177196kt61367ti71bctig7gcc1b710cf1a7hi1b7196vha967177f6hkk187gcw7tiwc7w567gfcc1367hw71q71reu71fkk7cd7w567cw56f7a9ahk7w5tig97hxxk18756f61d7wcc1d7kt1a6756hkw57vhf61d7h71b6v6iw719a9ti6997xkhi1d713t9tci7dcf7w567dawaf67hi1b7hkk7w5hw1d719aw7dtf9w7w5tig1g97dtf9wu'))
        +header(decode('1ecf1a71st9wcf18'))
        +job(decode('1th187e61bthz1ut1b6cjgg'),
        decode('1nvw7pmm1v'),decode('1rf696iw'),
        decode('146h1b7jigti66f'),
        decode('1rtci66f61b7w567vf6hwtci7hi1b7bhtiw6ihiv67cd7bhi187tiw6fihk7wcck91d719cc9wtig7a96f7xfc1bavwt13tw1871wmm1xu71rfc1bav61b761kw6i9t19k67h1b7dfhb610cf1a7ti71fvwtci9vftxw7hkkc10tig7dcf75tg56fo1bckkhf79hk69u7146h1b7h7w6hb7cd7dcaf7hi1b7vci9t9w6iwk1871b6kt136f61b7xfc1bavw97ci79v561bak67105tk67tiic13hwtig7i6107t1b6h97vci9whiwk18u7166136kcx61b1d71bcvab6iw61b1d7hi1b7613hig6kt1c61b71969w7xfhvwtv6971056f67ici6761kt9w61bu71rtci66f61b7w567h1bcxwtci7cd71s4e14n7hi1b7xfc13t1b61b71969w7xfhvwtv67f6vcbb6i1bhwtci9719cw57tiw6fihkk187hi1b7dcf7va9wcb6f9u'))
        +job(decode('j1uj1n1d717ivu'),
        decode('1p6197pmml'),
        decode('1nvw7pmm1v'),
        decode('1t6itcf7166136kcx6f'),
        decode('1ft1b61b7ti7w567vciv6xwahkt1chwtci7hi1b761k6vawtci7cd7hkk7dhv6w97cd71pkh957hi1b71pk61k71b6136kcxb6iwu71ft1b61b7h97bhi187h97l7x6cxk6710cf1atig7ci71bt136f967xfc1h6vw9u7166136kcx61b7gcc1b7xfhvwtv67hi1b7xfcv6997tbxfc136b6iw97dcf7h7gfc10tig7vcbxhi18u7e6w71b6h1bkti697hi1b7vci9t9w6iwk187xfc1bav61b7hvvafhw6769wtbhw69u'))
        +job(decode('1ecf1b91ecfw5716691awcx71ra19kt95tig'),
        decode('1yhi7pmmp'),decode('166v7pmml'),
        decode('1pcai1b6fz1n10i6f'),
        decode('1n136f9h107hi1b7ht1b61b7ti7w567vf6hwtci7cd7i6107106199tw691d7i6109k6ww6f91d719fcv5af691d7gfhx5tv91d7bhiahk91d7hi1b7bcf6u7ehihg61b7ax7wc7dt1367x6cxk67hw7civ67wc7xfc1bav67vci9t9w6iw1d7106kkocfghit1c61b71bhwh7dcf7106199tw697hi1b7bhiahk9u'))
        +job(decode('45671rtv1ak619hkk71twcf6'),
        decode('ehf7pmm1z'),decode('166v7pmqq'),
        decode('1pcai1b6f'),
        decode('12civ6t1361b1d79cafv61b7dai1btig7dcf1d7hi1b719atkw7hi7cikti679wcf67ti7h7itv567bhf1a6wu7ecitwcf61b79wcv1a7k6136k91d7xfcdtw7bhfgti91d7hi1b719a1bg6w97105tk67tivf6h9tig79hk697pmm1x7x6f7186hf7aiwtk79ck1b7ti7pmqqu'))
		+header(decode('14higahg69720ic10i')) 
		+columns(9, [decode('ic1b6u1h9'), decode('1hh13h9vftxw'), decode('1h21a6f18'), "CSS", decode('1s4e14'), "AS2", "AS3", decode('1r18w5ci'), "PHP", decode('e1j1t2114'), decode('e22e14'), decode('1y1t1p14')])
		+header(decode('1rfcgfhb9720ic10i')) 
		+columns(5, [decode('1f1bc19671r5cwc95cx'), decode('1f1bc19671pkh95'), decode('1f1bc196717kka9wfhwcf'), decode('jvktx96'), decode('e1t71nddtv6'), decode('17iw6kkt1y7171b6h'), "OSX", decode('1eti1bc109'), decode('14tia1kz141fe1r'), decode('e1j1t2114'), decode('e22e14'), decode('1y1t1p14')])
	);
	
})()