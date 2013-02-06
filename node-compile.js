var compressor = require('node-minify');

function minify(type)
{
    new compressor.minify({
        type: type,
        fileIn: 'resume.js',
        fileOut: 'resume-min-gcc.js',
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
}

minify("gcc");
minify("uglifyjs");
minify("yui-js");