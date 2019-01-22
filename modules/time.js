'use strict';

var os = require('os');
var uptime = os.uptime();

function changeTime() {
    var seconds = uptime - (hours * 3600) - (minutes * 60);
    var minutes = Math.floor((uptime - (hours * 3600)) / 60);
    var hours = Math.floor(uptime / 3600);

    if(uptime < 60) {
        console.log('Uptime is ', seconds);
    }
    else if(uptime > 60) {
        console.log('Uptime is ', minutes, ' min ' + seconds, ' sec ')
    }
    else {
        console.log('Uptime is ', hours, 'h' + minutes, ' min ' + seconds, ' sec ');
    }
}

exports.print = changeTime;