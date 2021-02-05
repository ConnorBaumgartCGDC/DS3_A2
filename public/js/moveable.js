//setObject3D reference
//https://aframe.io/docs/1.1.0/core/entity.html#setobject3d-type-obj
'use strict';

//this component will allow the box to be moveable
AFRAME.registerComponent('moveable', {
    schema: {
    },
    init: function () {
  
      //local reference to entity and set property value
      const Movement = this;
      Movement.player = document.querySelector('#player');
      Movement.box = document.querySelector('#box');

      Movement.el.addEventListener('click', function() {
          var sceneEl = document.querySelector('a-scene');
      })

      Movement.el.addEventListener('click', (e) => {
        if (Movement.pickedUp === true) {
            //release
            Movement.el.sceneEl.object3D.attach(Movement.el.object3D); //using three's "attch" allows us to retain world transforms during pickup/release
            Movement.pickedUp = false;
            console.log('box released');
            Movement.el.setAttribute('scale', '1.0 1.0 1.0');
        }
        else {
            //pick-up
            Movement.player.object3D.attach(Movement.el.object3D);
            Movement.pickedUp = true;
            console.log('box picked up');
            Movement.el.setAttribute('scale', '1.2 1.2 1.2');
        }
      })

    }
});