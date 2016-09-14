AFRAME.registerComponent('circle', {
  schema: {
    radius: {
      min: 0,
      default: 1,
    }
  },
  
  init() {
    let {el} = this;
    
    this.children = el.getChildEntities();
    
    el.addEventListener('child-attached', event => {
      if(event.detail.el.parentNode === el) {
        this.children.push(event.detail.el);
        this.update();
      }
    });
  },
  
  update() {
    let {data, children} = this;
    let count = children.length;
    
    children.forEach((child, index) => {
      let position = child.getComputedAttribute('position');
      let r = index * (2 * Math.PI) / count;
      child.setAttribute('position', {
        x: position.x + data.radius * Math.cos(r),
        y: position.y,
        z: position.z + data.radius * Math.sin(r)
      });
      child.setAttribute('rotation', {
        x: 0,
        y: -90 + 360 * index/count,
        z: 0,
      });
    });
  }
})