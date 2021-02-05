//setObject3D reference
//https://aframe.io/docs/1.1.0/core/entity.html#setobject3d-type-obj
'use strict';

//this component will allow the box to be able to change colours
AFRAME.registerComponent('color-change', {
    schema: {
  
    },
    init: function () {
  
      //local reference to entity and set property value
      const colorChange = this;
      colorChange.player = document.querySelector('#player');
      colorChange.chameleon = document.querySelector('#chameleon');

    colorChange.el.addEventListener('click', function() {
        var sceneEl = document.querySelector('a-scene');
    })

    //randomly changes colour
    colorChange.el.addEventListener('click', (e) => {
        colorChange.el.setAttribute('material', {color:'rgb(' + 
            Math.floor(Math.random() * 255) + ',' + 
            Math.floor(Math.random() * 255) + ',' + 
            Math.floor(Math.random() * 255) + ')'});
        console.log('colour changed');
    })

}
})