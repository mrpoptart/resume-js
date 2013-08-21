(function(){function k(c){return j("=")+"\n"+c.center("=")+"\n"+j("=")+"\n\n"}function j(c,a){for(a="";a.length<l;)a+=c;return a}function h(c,a,b,d,e){b=a.split(" ");for(a=d="";0<b.length;)e=b.shift(),d.length+e.length>l?(a+=d+"\n",d=e):d+=e,d+=" ";return c.center("-")+"\n"+a+d+"\n\n"}function m(c,a,b,d,e){var g=j("-")+"\n";a=a+"-"+b;b=" ";for(var f=c+b+a;f.length<l;)b+=" ",f=c+b+a;g+=f+"\n";return g+=h(d,e)}function n(c,a,b){a.sort();var d="".pad(c).split("");for(b=0;b<a.length;b++)a[b].length>d[b%
c]&&(d[b%c]=a[b].length);var e="";for(b=0;b<a.length;b+=c){for(var g="",f=b;f<b+c&&f<a.length;f++)g+=a[f].pad(d[f%c],!1)+" | ";e+=g.slice(0,-3)+"\n"}return e+"\n"}String.prototype.center=function(c){c=c||" ";for(var a=" "+this+" ";a.length<l;)a=0==a.length%2?a+c:c+a;return a};String.prototype.pad=function(c,a,b){b=b||" ";for(var d="";(this+d).length<c;)d+=b;return a?d+this:this+d};String.prototype.box=function(){for(var c="+"+j("-").slice(1,-1)+"+\n",a=this.split("\n");a.length;)c+="|"+a.shift().center().slice(1,
-1)+"|\n";return c+"+"+j("-").slice(1,-1)+"+"};var l=79,p="Morgan Engel's Resume\n805-215-2170\nmorganengel@gmail.com".box()+"\n\n"+k("Generic Cover Letter")+h("TL;DR:","I try to be the kind of programmer I would choose for my own team. I self-start and learn well. I realize that corporate culture is only as good as the place you make it, and I want to make it awesome. I want to keep growing with support from smart people, and I want to come to work every day with eager hope in my heart.")+h("Why Engineers Will Want to Work with Me:",
"As engineers, we face difficult challenges every day--it's what we love about our jobs. We want to work with people who want to work with us, who will ask questions and program in ways that make sense to the company. Lone Ranger programmers solve problems today, but hurt the team tomorrow. If we collaborate and communicate well, we can solve difficult problems in ways that are good for everyone at the company. We're looking for team members that balance work and play both at work and home, and I do that.")+
h("Why Managers Will Want to Work with Me:","You're facing pressure from board members to deliver amazing things on time and to ensure that the team works well together. You need people who know when to speak up about problems, and who take initiative. you need a self-starter. I've run my own businesses successfully, but wanted to contribute to something greater than myself and focus on the part I do best. I communicate extremely well, which helps both my team to understand what I'm doing, but also management to understand why I'm doing it.")+
h("Why Everyone Else Will Want to Work with Me:","Being part of a company is more than just being an engineer. Your company started from a small idea with amazing people and now you're growing, but cautiously--culture means a lot to your team. I go out of my way to make the place I work an even more awesome place. I've sponsored Movember drives, cupcake baking competitions, guacamole cookoffs, pot lucks, push-up clubs, and I wrote software to organize runs to In-N-Out long before Zip-Car did it. I realize that corporate culture is only as good as the place you make it, and I want to make it awesome.")+
h("What I'm Looking For:","A company with a culture, people who care, software that needs help to get better, but has a purpose now. I want to contribute to something larger than myself, both at my company and with open-source projects. I want to keep growing with support from smart people, and I want to come to work every day with a smile on my face. I want to stay late because I believe in doing good work and because I really got into the groove at 4 PM. All of the other usual things apply here, too, like healthcare, a decent business plan, vision for the future and all that, but first thing's first.")+
k("Work History")+m("Say Media/VideoEgg","Oct 2009","Present","Lead Engineer","Pioneered the creation and maintenance of many internal tools, boosting user productivity 300%. Produced extensible ad framework in Actionscript allowing for higher-dollar sales. Lead a team of four and consistently delivered products on schedule while innovating new ideas constantly. Developed, documented, and evangelized best practices where none existed.")+m("EVEO, Inc.","Feb 2008","Oct 2009","Senior Developer","Aided in the conceptualization and execution of all facets of Flash and Flex development. Aided as many as 8 people working on diverse projects. Developed good practice and process improvements for a growing company. Met deadlines and consistently produced accurate estimates.")+
m("WordsWorth Desktop Publishing","Jan 2002","Dec 2008","Founder/Owner","Oversaw and aided in the creation of new websites, newsletters, brochures, graphics, manuals, and more. Managed up to five people at once to produce consistent, well-organized data for websites and manuals.")+m("The Pickleball Store","Mar 2006","Dec 2011","Founder","Conceived, sourced funding for, and built an online store in a niche market. Monitored stock levels, profit margins, and budgets while increasing sales 200% per year until sold in 2011.")+
k("Languages Known")+n(9,"node.js javascript jQuery CSS HTML AS2 AS3 Python PHP MYSQL MXML JSFL".split(" "))+k("Programs Known")+n(5,"Adobe Photoshop;Adobe Illustrator;Eclipse;MS Office;IntelliJ Idea;OSX;Windows;Linux/LAMP;MYSQL;MXML;JSFL".split(";"));console.log(p)})();