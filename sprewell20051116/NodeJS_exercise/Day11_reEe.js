var emitter = require('events').EventEmitter;

function LoopProcessor(num) {
  var e = new emitter();
  setTimeout(function() {
    for (var index = 1; index <= num; index++) {
      // trigger event 'BeforeProcess'
      e.emit('BeforeProcess', index);
      console.log('Processing number : ' + index);
      // trigger event 'AfterProcess'
      e.emit('AfterProcess', index);
    }
  }, 2000);
  return e;
}

var loop = LoopProcessor(3);
// register event 'BeforeProcess'
loop.on('BeforeProcess', function(data) {
  console.log('About to start the process for ' + data);
});

loop.on('AfterProcess', function(data) {
  console.log('Completed processing' + data);
});
