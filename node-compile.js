var fs = require("fs");
var compressor = require('node-minify');
var source = [];

function minify(type)
{
    fs.readFile('resume.js', "utf8", function(err, data){
        data = data.replace(/"\s*\+\s*\n\s*"/g,"");
        data = data.replace(/".+?"/g, function(str){
            str=str.slice(1,-1);
            var strArray = str.split("");
            for(var l=0; l<strArray.length; l++)
            {
                var ltr = strArray[l];
                if(ltr=="\\")
                {
                    ltr += strArray.splice(l+1,1);
                }
                if(source.indexOf(ltr)==-1)
                {
                    source.push(ltr);
                }
                strArray[l] = (source.indexOf(ltr)+3).toString(36);
            }
            return "decode('"+strArray.join("")+"')";
        });
        //need to pad this by as many spaces
        data=data.replace("replaceableSource", "\"###"+source.join('')+"\"");
        fs.writeFile('bin/resume-tmp.js', data, function(err){
            var fileout = 'bin/resume-min-'+type+'.js';
            new compressor.minify({
                type: type,
                fileIn: 'bin/resume-tmp.js',
                fileOut: fileout,
                callback: function(err){
                    if(err)
                    {
                        console.log("Error with "+this.type+": "+err);
                    }
                    else
                    {
                        console.log(this.type + " successfully compiled to " +fileout+".");
                    }
                }
            });
        });
    });
}

minify("gcc");
minify("uglifyjs");
minify("yui-js");