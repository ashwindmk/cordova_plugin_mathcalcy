var exec = require('cordova/exec');

module.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MathCalcy', 'coolMethod', [arg0]);
};

module.exports.add = function() {
    exec(success, error, 'MathCalcy', 'add', [arg0]);
};
