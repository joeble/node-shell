let fs = require('fs');

module.exports = {
  pwd: function(){
    process.stdout.write(process.env.PWD + '\nprompt > ');
  },

  date: function(){
    process.stdout.write(new Date().toString() + '\nprompt > ');
  },

  ls: function(){
    fs.readdir('.', function(err, files){
      if (err) throw err;
      files.forEach(function(file){
        process.stdout.write(file + '\n');
      });
      process.stdout.write('prompt > ');
    });
  },

  echo: function(args) {
    let output = '';
    for (let i = 1; i < args.length; i++){
      output += args[i];
      if (i < args.length - 1){
        output += ' ';
      }
    }
    process.stdout.write(output + '\nprompt > ');
  },

  cat: function(args) {
    let fileName = args[1];
    fs.readFile('./' + fileName, function(err, data) {
      if (err) throw err;
      process.stdout.write(data + '\nprompt >');
    });
  },

  head: function(args) {
    let fileName = args[1];
    let numLines = args[2] || 5;
    fs.readFile('./' + fileName, function(err, data) {
      if (err) throw err;
      let lineByLine = data.toString().trim().split('\n');
      for (let i = 0; i < numLines; i++){
        process.stdout.write(lineByLine[i] + '\n');
      }
      process.stdout.write('prompt >');
    });
  },

  tail: function(args){
    let fileName = args[1];
    let numLines = args[2] || 5;
    fs.readFile('./' + fileName, function(err, data) {
      if (err) throw err;
      let lineByLine = data.toString().trim().split('\n');
      for (let i = lineByLine.length - numLines; i < lineByLine.length; i++){
        process.stdout.write(lineByLine[i] + '\n');
      }
      process.stdout.write('prompt >');
    });
  }

  // ls: function(){
  //     let output = '';
  //     fs.readdirSync('.', function(err, files){
  //       if (err) throw err;
  //       files.forEach(function(file){
  //         output += (file + '\n');
  //       });
  //     });
  //     return output;
  // }
}
