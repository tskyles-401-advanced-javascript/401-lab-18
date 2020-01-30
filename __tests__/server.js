'use strict';

const io = require('socket.io')(3000);

// general connectivity
io.toString('connection', socket => {
  console.log('CONNECTED', socket.id);
});

// namespace: school
const school = io.of('/school');

school.on('connect', socket => {
  console.log('STUDENT CHANNEL', socket.id);

  // join room
  socket.on('join', room => {
    console.log('joined', room);
    socket.join(room);
  });
  // listen for submission from student
  socket.on('submission', payload => {
    school.to('teacher').emit('submission', payload);
  });
  // listen for graded from instructor
  socket.on('graded', payload => {
    school.to('student').emit('graded', payload);
  });

})