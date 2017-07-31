let commands = require('./commands');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  let cmd = data.toString().trim(); // remove the newline

  // process.stdout.write('You typed: ' + cmd);

  if (cmd === 'pwd'){
    commands.pwd();
  } else if (cmd === 'date'){
    commands.date();
  } else {

  }

  process.stdout.write('\nprompt > ');

});
