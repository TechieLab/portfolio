'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

// *base.js*

// This file contains the most basic functionality for server Socket.io
// functionality.

exports.default = function (io) {

  io.sockets.on('connect', function (socket) {

    console.log('a user connected');

    socket.on('disconnect', function () {

      console.log('a user disconnected');
    });
  });
};
//# sourceMappingURL=base.js.map