var fs = require("fs");
var compressor = require('node-minify');
var source = [];

function minify(type)
{
    fs.readFile('resume.js', "utf8", function(err, data){
        var data = data.replace(/".+?"/g, function(str){
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
                strArray[l] = source.indexOf(ltr).toString(36);
            }
            return "decode('"+strArray.join("")+"')";
        });
        data=data.replace("replaceableSource", "\""+source.join('')+"\"");
        console.log(data);
        fs.writeFile('resume-tmp.js', data, function(err){
            new compressor.minify({
                type: type,
                fileIn: 'resume-tmp.js',
                fileOut: 'resume-min-'+type+'.js',
                callback: function(err){
                    if(err)
                    {
                        console.log("Error with "+this.type+": "+err);
                    }
                    else
                    {
                        console.log(this.type + " successfully compiled.");
                    }
                }
            });
        });
    });
}

minify("gcc");
minify("uglifyjs");
minify("yui-js");