'use strict';

const io = require('socket.io-client');
// connect to school channel
const schoolChannel = io.connect('http://localhost:3000/school');
// join teacher room
schoolChannel.connect('join', 'teacher');
// grade assigments that are recieved
schoolChannel.on('submission', payload => {
  let grade = Math.floor(Math.random() * 10);
  schoolChannel.emit('graded', {assignment:`${payload}`, grade:`${grade}`});
});