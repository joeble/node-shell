let commands = require('./commands');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  let cmd = data.toString().trim(); // remove the newline

  let runCMD = function(){
    if (commands[cmd]){
      return commands[cmd]();
    } else {
      return 'You typed: ' + cmd;
    }
  }
  process.stdout.write(runCMD() + '\nprompt > ');


});
