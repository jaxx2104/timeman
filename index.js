#!/usr/bin/env node

const Chalk   = require('chalk');
const CLI     = require('clui');
const Figlet  = require('figlet');
const Bleacon = require('bleacon');

console.log(Chalk.yellow(Figlet.textSync('Timeman')));

// ビーコンID
const uuid = '8DE9BE11-2268-4015-B040-418924420612';
Bleacon.startAdvertising(uuid);
