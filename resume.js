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
            strArray[i] = replaceableSource.charAt(parseInt(ltr,36));
        }
        return strArray.join('');
    }
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
        txt ="+" + bar("-").slice(1,-1) + "+\n",
            textArray = this.split("\n");
        while(textArray.length)
        {
            txt+="|"+textArray.shift().center().slice(1,-1)+"|\n";
        }
        return txt+"+" + bar("-").slice(1,-1) + "+";
    };
    function header(txt)
    {
        return bar("=") +"\n"+ txt.center("=")+"\n"+bar("=")+"\n\n";
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
        while(txtArray.length)
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
        return title.center("-")+"\n"+txt+line+"\n\n";
    }
    function job(company, startDate, endDate, title, description, ret)
    {
        ret = bar('-')+"\n";
        ret+=separate(company, startDate+"-"+endDate)+"\n";
        ret+=paragraph(title, description);
        return ret;
    }
    console&&console.log("\n"+"Morgan Engel's Resume\n805-215-2170\nmorganengel@gmail.com\nhttp://www.morganengel.com".box() + "\n\n"
        +header("Generic Cover Letter")
        +paragraph("TL;DR:",
        "I try to be the kind of programmer I would choose for my own team. I self-start and learn well. I " +
            "realize that corporate culture is only as good as the place you make it, and I want to make it " +
            "awesome. I want to keep growing with support from smart people, and I want to come to work every " +
            "day with eager hope in my heart.")
        +paragraph("Why Engineers Will Want to Work with Me:",
        "As engineers, we face difficult challenges every day--it's what we love about our jobs. We want to " +
            "work with people who want to work with us, who will ask questions and program in ways that make " +
            "sense to the company. Lone Ranger programmers solve problems today, but hurt the team tomorrow. " +
            "If we collaborate and communicate well, we can solve difficult problems in ways that are good for " +
            "everyone at the company. We're looking for team members that balance work and play both at work " +
            "and home, and I do that.")
        +paragraph("Why Managers Will Want to Work with Me:",
        "You're facing pressure from board members to deliver amazing things on time and to ensure that the " +
            "team works well together. You need people who know when to speak up about problems, and who take " +
            "initiative--a self-starter. I've run my own businesses successfully, but wanted to contribute to " +
            "something greater than myself and focus on the part I do best. I communicate extremely well, which " +
            "helps both my team to understand what I'm doing, but also management to understand why I'm doing it.")
        +paragraph("Why Everyone Else Will Want to Work with Me:",
        "Being part of a company is more than just being an engineer. Your company started from a small idea " +
            "with amazing people and now you're growing, but cautiously--culture means a lot to your team. " +
            "I go out of my way to make the place I work an even more awesome place. I've sponsored Movember " +
            "drives, cupcake baking competitions, guacamole cookoffs, pot lucks, push-up clubs, and I wrote " +
            "software to organize runs to In-N-Out long before Zip-Car did it. I realize that corporate " +
            "culture is only as good as the place you make it, and I want to make it awesome.")
        +paragraph("What I'm Looking For:",
        "A company with a culture, people who care, software that needs help to get better, but has a purpose " +
            "now. I want to contribute to something larger than myself, both at my company and with open-source " +
            "projects. I want to keep growing with support from smart people, and I want to come to work every " +
            "day with a smile on my face. I want to stay late because I believe in doing good work and because " +
            "I really got into the groove at 4 PM. All of the other usual things apply here, too, like " +
            "health care, a decent business plan, vision for the future and all that, but first thing's first.")
        +header("Work History")
        +job("Say Media/VideoEgg",
        "Oct 2009","Present",
        "Lead Engineer",
        "Pioneered the creation and maintenance of many internal tools, boosting user productivity 300%. " +
            "Produced extensible ad framework in Actionscript allowing for higher-dollar sales. Lead a team " +
            "of four and consistently delivered products on schedule while innovating new ideas constantly. " +
            "Developed, documented, and evangelized best practices where none existed. Pioneered the adoption " +
            "of HTML5 and provided best practice recommendations both internally and for customers.")
        +job("EVEO, Inc.",
        "Feb 2008",
        "Oct 2009",
        "Senior Developer",
        "Aided in the conceptualization and execution of all facets of Flash and Flex development. Aided as " +
            "many as 8 people working on diverse projects. Developed good practice and process improvements " +
            "for a growing company. Met deadlines and consistently produced accurate estimates.")
        +job("WordsWorth Desktop Publishing",
        "Jan 2002","Dec 2008",
        "Founder/Owner",
        "Oversaw and aided in the creation of new websites, newsletters, brochures, graphics, manuals, and " +
            "more. Managed up to five people at once to produce consistent, well-organized data for websites " +
            "and manuals.")
        +job("The Pickleball Store",
        "Mar 2006","Dec 2011",
        "Founder",
        "Conceived, sourced funding for, and built an online store in a niche market. Monitored stock levels, " +
            "profit margins, and budgets while increasing sales 200% per year until sold in 2011."));
})()