// 這裡，我們要做的是，引用EventEmitter的建構函式去觸發行為，這裡就必須要用到繼承方法
var emitter = require('events').EventEmitter;
// import inherits()
var util = require('util');

function LoopProcessor(num) {
  var me = this;
  setTimeout(function(){
    for (var index = 1; index <= num; index++) {
      me.emit('BeforeProcess', index);
      console.log('Processing number: ' + index);
      me.emit('AfterProcess', index);
    }
  }, 2000);
  return this;
}


// 'LoopProcessor' inherits 'emitter' class
util.inherits(LoopProcessor, emitter);
var loop = new LoopProcessor(3);
loop.on('BeforeProcess', function(data) {
  console.log('About to start the process for' + data);
});

loop.on('AfterProcess', function(data) {
  console.log('Complete' + data);
})
