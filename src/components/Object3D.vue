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

      let cangeClip=(num)=>{
        // this.mixer.stopAllAction();//使ってすべてのアニメーションを一旦ストップ
        const anime = this.mixer.clipAction(animations[num]);
        // anime.setLoop(THREE.LoopOnce)//ループを無効
        // anime.clampWhenFinished = true;//最後のフレームでアニメーションが終了
        anime.play();
      }

      this.character = object.children[0];
      if (animations && animations.length) {
        var i = void 0;
        this.mixer = new THREE.AnimationMixer(object);
        for (i = 0; i < animations.length; i++) {
          // this.mixer.clipAction(animations[i]);
          cangeClip(i);
        }
      }
      this.$parent.scene.add(this.character);
    });
  },
  methods: {
    update(delta){
      if(this.mixer !== undefined)this.mixer.update(delta);
    },
    myCharacter(){
      return this.character;
    },
    myMixer(){
      return this.mixer;
    }
  }
}
</script>
<style scoped>
</style>
