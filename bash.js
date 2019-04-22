const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

const done = output => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};

process.stdin.on('data', data => {
  let cmds = data
    .toString()
    .trim()
    .split(' ');

  if (cmds[0] === 'pwd') {
    pwd();
  } else if (cmds[0] === 'ls') {
    ls(done);
  } else if (cmds[0] === 'cat') {
    cat(cmds[1]);
  } else if (cmds[0] === 'curl') {
    curl(cmds[1]);
  } else {
    process.stdout.write('\nprompt > ');
  }
});
module.exports = done;
