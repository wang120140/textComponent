<template>
  <div class="main">
    <div ref="pixicanvas"></div>
    <component :is="data_currentComponent"></component>
  </div>
</template>
<script>
import SceneReadingPart from '@/components/SceneReadingPart.vue'
import SceneClozePart from '@/components/SceneClozePart.vue'
import { SceneManager } from "./libs/EasyPIXI";
import PIXISceneClozePart from './SceneClozePart.js'
import PIXISceneReadingPart from './SceneReadingPart.js'
import { mapState, mapActions } from 'vuex'

var CanvasApp;
export default {
  name: 'main_vue',
  components: {
    SceneClozePart,
    SceneReadingPart
  },
  data() {
    return {
      data_componentsArr: ['SceneClozePart', 'SceneReadingPart'],
    }
  },
  computed: {
    ...mapState(['lessonPartPage']),
    data_currentComponent() {
      return this.data_componentsArr[this.lessonPartPage];
    }
  },
  mounted() {






    CanvasApp = new PIXI.Application({
      width: 1920,
      height: 1080,
      transparent: true
    });
    CanvasApp.view.style.position = 'absolute';
    CanvasApp.view.style.width = '100%';
    CanvasApp.view.style.height = '100%';
    CanvasApp.view.style.top = '0px';
    CanvasApp.view.style.left = '0px';
    this.$refs.pixicanvas.appendChild(CanvasApp.view);

    SceneManager.stage = CanvasApp.stage;

    SceneManager.pushScene('SceneClozePart', new PIXISceneClozePart(CanvasApp.stage))
    SceneManager.pushScene('SceneReadingPart', new PIXISceneReadingPart(CanvasApp.stage))

    //SceneManager.run('SceneClozePart');


    this.gotoPage('SceneReadingPart');

  },
  destroyed() {
    CanvasApp.destroy(true);
    PixiScene.destroy();
    PixiScene = null;
    CanvasApp = null;
  },
  methods: {
    ...mapActions(['GOTO_LESSONPART']),
    gotoPage($name) {
      let indexs = this.data_componentsArr.indexOf($name);

      this.GOTO_LESSONPART(indexs);
      SceneManager.run($name);

    }

  },


}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: beige;
}

</style>
