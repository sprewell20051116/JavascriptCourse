var events = require('events');
var em = new events.EventEmitter();

em.addListener('addListener', function(data) {
  console.log('addListener Scriber: ' + data);
})

em.on('em.on', function(data) {
  console.log('em.on Subscriber: ' + data);
});


// Trigger events
em.emit('addListener', '我已經進入了 addListener 的監聽 function');
em.emit('em.on', '我已經進入了 em.on 的監聽 function');
