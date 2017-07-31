// console.log(process);

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  let cmd = data.toString().trim(); // remove the newline

  // process.stdout.write('You typed: ' + cmd);

  if (cmd === 'pwd'){
    process.stdout.write(process.env.PWD);
  }
  if (cmd === 'date'){
    let dateBoy = new Date().toString();
    process.stdout.write(dateBoy);
  }

  process.stdout.write('\nprompt > ');

});
