'use strict';

const io = require('socket.io-client');
// connect to school channel
const schoolChannel = io.connect('http://localhost:3000/school');
// join student room
schoolChannel.emit('join', 'student');
// function that emits a submission every second
function sendSubmission(){
  let lab = Math.floor(Math.random() * 100);
  schoolChannel.emit('submission', `Lab ${lab}`);
}

setInterval(() => sendSubmission(), 1000);