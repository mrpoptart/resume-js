var fs = require("fs");
var compressor = require('node-minify');
var source = [];
var types=["gcc","uglifyjs","yui-js"];

fs.readFile('resume.js', "utf8", function(err, data){
    //pull out all "+\n" from the various broken strings. We could have left these as simple
    //long strings, but it's easier to read them this way.
    data = data.replace(/"\s*\+\s*\n\s*"/g,"");
    //replace everything in double quotes with the output of the included function.
    data = data.replace(/".+?"/g, function(str){
        if(str.length<6)
        {
            return str;
        }

        //pull out the quotes
        str=str.slice(1,-1);

        //split every letter into an array
        var strArray = str.split("");

        //for each letter
        for(var l=0; l<strArray.length; l++)
        {
            var ltr = strArray[l];

            //if it's a backslash, we should join it with the next letter.
            if(ltr=="\\")
            {
                ltr += strArray.splice(l+1,1);
            }

            //if we haven't found this letter yet in our optimized array
            if(source.indexOf(ltr)==-1)
            {
                //add it to the optimized array
                source.push(ltr);
            }
            //we need to pad the optimized array to guarantee the first few characters
            //aren't used anywhere in our system. This allows us to find a 1 or 2 and know
            //that it's indicating that we're in the second-order numerals, not just using
            //number 1 or 2 of the array.
            //get the index number for our letter and convert it to a base-36 number. Replace
            //the original letter with it.
            //the purpose of this is obfuscation. It makes the resume output code look less like
            //copy and paste and more like actual code.
            strArray[l] = (source.indexOf(ltr)+3).toString(36);
        }
        //the decode method will be called for each set of letters.
        return "decode('"+strArray.join("")+"')";
    });

    //replace the placeholder for our optimized letter array
    data=data.replace("replaceableSource", "\"###"+source.join('')+"\"");

    //write the temporary output
    fs.writeFile('bin/resume-tmp.js', data, function(err){
        for(var t in types)
        {
            minify(types[t]);
        }
    });
})
function minify(type)
{
    var fileout = 'bin/resume-min-'+type+'.js';

    //minify the temporary file.
    new compressor.minify({
        type: type,
        fileIn: 'bin/resume-tmp.js',
        fileOut: fileout,
        callback: function(err){
            if(err)
            {
                console.log("Error with "+type+": "+err);
            }
            else
            {
                console.log(this.type + " successfully compiled to " +fileout+".");
            }
        }
    });
}