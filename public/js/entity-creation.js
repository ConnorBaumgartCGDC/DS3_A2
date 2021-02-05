//setObject3D reference
//https://aframe.io/docs/1.1.0/core/entity.html#setobject3d-type-obj
'use strict';

//this component will make the ball appear/disappear
AFRAME.registerComponent('entity-creation', {
  schema: {

  },
  init: function () {

    //local reference to entity and set property value
    const Context_AF = this;
    Context_AF.sphere = document.querySelector('#sphere');
     
    //spawn/despawn sphere
    Context_AF.el.addEventListener('click', function() {
      
      var sceneEl = document.querySelector('a-scene');
      var i = 0;

      sceneEl.querySelectorAll('a-entity').forEach(el => {
        if(el.getAttribute('id') == 'sphere')
        {
          console.log('SPHERE BEGONE');

          sceneEl.removeChild(el);
          i++;
        }
      });

      if(i == 0)
      {
      console.log('LET THERE BE SPHERE')

      var entityEl = document.createElement('a-entity');
      // Do `.setAttribute()`s to initialize the entity.
      entityEl.setAttribute('id', 'sphere')
      entityEl.setAttribute('position', '0, 2, -2');
      entityEl.setAttribute('geometry', 'primitive:sphere; radius:1');
      entityEl.setAttribute('material', 'color:blue');
      sceneEl.appendChild(entityEl);



        // entityEl.pickedUp = false;

        // entityEl.el.addEventListener('click', function() {
        //   if(entityEl.pickedUp == true) {
        //     //release
        //     entityEl.el.sceneEl.object3D.attach(Context_AF.el.object3D);
        //     entityEl.pickedUp = false;
        //   }
        //   else {
        //     //pick up
        //     entityEl.sphere.object3D.attach(entityEl.el.object3D);
        //     entityEl.pickedUp = true;
        //   }
        // })
      }
    })
  }

  
});