<template>
  <div id='stage'>
    <Object3D path='./objects/Dreyar_By_M_Aure_Boxing/Dreyar_By_M_Aure_Boxing.gltf' ref="boxing"/>
    <Object3D path='./objects/Parasite_L_Starkie_Samba_Dancing/Parasite_L_Starkie_Samba_Dancing.gltf' ref="Samba_Dancing"/>
    <Object3D path='./objects/tamane/tamane.gltf' ref="tamane"/>
    <Object3D path='./objects/Maria_W_Prop_JJ_Ong_StandingMeleeAttack/StandingMeleeAttackBackhand.gltf' ref="Maria"/>
    <Object3D path='./objects/camera/glTF/camera.gltf' ref="camera"/>
  </div>
</template>

<script>
import * as THREE from 'three';
const OrbitControls = require('three-orbit-controls')(THREE);
import Object3D from './Object3D.vue'
export default {
  components: {
    Object3D
  },
  data() {
    return {
      scene: undefined
    }
  },
  mounted(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    var clock = new THREE.Clock();

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor(0xf3f3f3, 1.0);
    renderer.gammaOutput = true;
    document.getElementById('stage').appendChild(renderer.domElement);

    this.scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(50, width / height, 1, 100);
    camera.position.set(0, 6, 12);
    var light = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(light);

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshBasicMaterial( {color: 0xebac1d, side: THREE.DoubleSide} )
    );
    plane.rotation.x = Math.PI * 0.5;
    this.scene.add(plane);

    var controls = new OrbitControls(camera, renderer.domElement);
    controls.userPan = false;
    controls.userPanSpeed = 0.0;
    controls.maxDistance = 5000.0;
    controls.maxPolarAngle = Math.PI * 0.495;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;

    var theta = 0;
    var animation =()=>{
      renderer.render(this.scene, camera);
      // controls.update();
      var delta = clock.getDelta()
      for(let i in this.$refs){
        let ref = this.$refs[i]
        let character = ref.myCharacter()
        ref.update(delta)
        if(character !== undefined){
          if(i === 'tamane'){
            character.position.set(Math.cos(theta) * 3, 0, Math.sin(theta) * 3);
            character.rotation.z = theta;
            character.rotation.z += 0.01;
          }else if(i === 'Maria'){
            character.position.set(3, 0, 0);
          }
          else if(i ==='camera'){
            camera.position.x = character.position.x;
            camera.position.y = character.position.y + 5;
            camera.position.z = character.position.z;
            camera.rotation.x = character.rotation.x;
            camera.rotation.y = character.rotation.y;
            camera.rotation.z = character.rotation.z;

            //強制的に何かを見る
            camera.lookAt(new THREE.Vector3(0,0,0));//ゼロ地点
            // lookAt('boxing')
            // lookAt('Samba_Dancing')
            // lookAt('meka')
            // lookAt('tamane')
            // lookAt('Maria')
          }
        }
      }
      theta += 0.02;
      requestAnimationFrame(animation);
    };
    animation();

    var lookAt=(id)=>{
      let _ref = this.$refs[id]
      let _character;
      if(_ref)_character = _ref.myCharacter()
      if(_character)camera.lookAt(_character.position);
    }
  }
}
</script>
<style scoped>
</style>
