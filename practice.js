
const EventEmitter = require("events");
const event = new EventEmitter();

event.on('local', (msg) => {
    console.log(`printing value of msg ${msg}`);
});


event.emit('local', 'hey');
