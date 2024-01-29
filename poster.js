AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.createPoster();
      
    },

createPoster: function(item){
    const entityEl = document.createElement('a-entity')
    entityEl.setAttribue('visible', true);
    entityEl.setAttribute('geometry', {
        primitive:'plane',
        width: 20,

    })
}