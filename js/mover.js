/*AFRAME.registerComponent('rcwaypoint', {
  schema: {
    triggerrad: {type: 'number', default: 1.0}
  },

  init: function() {
    // make us clickable
    var self = this;
    this.el.addEventListener('click', function (evt) {
      //this.setAttribute('material', 'color', COLORS[randomIndex]);
      var pos = self.el.getAttribute("position");
      var parent = document.querySelector('#camparent');
      parent.components.walker.walk_to(pos);
      //parent.setAttribute("position", {x: pos.x, y: 0.0, z: pos.z});
    });
  },

  update: function() {
    // nothing to do
  }
});*/

AFRAME.registerComponent('mover', {
  init: function() {//do nothing
    //this.tar = new THREE.Vector3();
    //this.limit = new THREE.Vector3();
    //this.time = 0.0;
    //this.start = new THREE.Vector3();
    this.intial_pos = new THREE.Vector3();
    this.previous_pos = new THREE.Vector3();
  },

  tick: function() {
    
    /*if (this.time < 1.0)
    {
      this.time += (1.0/60.0);
      var alpha = this.time; //ease_function(time);
      var new_x = alpha * this.tar.x + (1 - alpha)*this.start.x;
      var new_y = alpha * this.tar.y + (1 - alpha)*this.start.y;
      var new_z = alpha * this.tar.z + (1 - alpha)*this.start.z;
      this.el.setAttribute("position", {x: new_x, y: new_y, z: new_z});
    }*/
    var curpos = this.ele.getAttribute("position");
    var change_x = curpos.x - previous_pos.x;
    var change_y = curpos.y - previous_pos.y;
    var change_z = curpos.z - previous_pos.z;
    this.el.setAttribute("position", {x: curpos.x + change_x, y: curpos.y + change_y, z: curpos.z + change_z});

    //this.el.setAttribute("position", {x: this.tar.x, y: 0.0, z: this.tar.z});
  },

  /*walk_to: function(pos) {
    //var tar = this.el.getAttribute("target");
    //var tar = pos;
    this.tar.set(pos.x, pos.y, pos.z);
    var ourpos = this.el.getAttribute("position");
    this.start.set(ourpos.x, ourpos.y, ourpos.z);
    this.time = 0.0;
    //var start = this.pos;
    //this.el.setAttribute("position", {x: this.tar.x, y: 0.0, z: this.tar.z});
    //self.setAttribute("target", pos);
    //cubic function 3t^2 - 2t^3
  },*/

  update: function() {}
});