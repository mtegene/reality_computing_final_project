AFRAME.registerComponent('mover', {
  init: function() {

    var socket = new WebSocket("wss://rapid-fountain.glitch.me/");

    socket.onmessage = function (evt) {
      var msg = JSON.parse(evt.data);

      if (msg[0] === "broadcast")
      {
        var pos = (msg[2]).postion;
        var dir = (msg[2]).quaternion;
        
        this.el.setAttribute("position", {x: pos[0], y: pos[1], z: pos[2]});

        var theObject3D = document.querySelector('#camparent').object3D;
        theObject3D.quaternion = dir
      }
    };

    //socket.send(JSON.stringify(["register", "vive"]));
  }
});