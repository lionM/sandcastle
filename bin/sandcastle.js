#!/usr/bin/env node

var sandcastle = require('../lib'),
  argv = require('optimist').argv,
  mode = argv._.shift(),
  crypto = require('crypto');

var cwdMd5 = crypto.createHash('md5').update( process.cwd() ).digest('hex');
var socketPath = '/tmp/sandcastle_'+ cwdMd5 +'.sock';

switch (mode) {
  case 'sandbox':
    (new sandcastle.Sandbox({
        socket: (argv.socket || socketPath)
    })).start();
    break;
  default:
    console.log('Usage sandcastle <command>\n\n\
      \t<sandbox>\tstart a sandbox server\n\
      \t\t--socket=[path to socket file]\n\
    ')
}