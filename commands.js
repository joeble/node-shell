let fs = require('fs');

module.exports = {
  pwd: function(){
    return process.env.PWD;
  },

  date: function(){
    return new Date().toString();
  },

  ls: function(){
    let output = '';

    fs.readdir('.', function(err, files){
      if(err) throw err;

      for(let i = 0; i<files.length; i++){
        console.log(files[i])
        output = output+files[i]+'\n';
      }
      // files.forEach(function(file){
      //   output = output + file + '\n';
      // });
    });
    console.log(output)
    return output;
  }
}
