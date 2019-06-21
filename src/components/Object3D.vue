<template>
</template>

<script>
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
export default {
  data() {
    return {
      character: undefined,
      mixer: undefined
    }
  },
  props: {
    path: String
  },
  mounted(){
    var loader = new GLTFLoader();
    loader.load(this.path, (data)=> {
      var gltf = data;
      var object = gltf.scene;
      var animations = gltf.animations;
      this.character = object.children[0];
      if (animations && animations.length) {
        var i = void 0;
        this.mixer = new THREE.AnimationMixer(object);
        for (i = 0; i < animations.length; i++) {
          this.mixer.clipAction(animations[i]).play();
        }
      }
      this.$parent.scene.add(this.character);
    });
  },
  methods: {
    update(delta){
      if(this.mixer !== undefined)this.mixer.update(delta);
    },
    mycharacter(){
      return this.character;
    }
  }
}
</script>
<style scoped>
</style>
