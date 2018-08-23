<template>
<svg style="position:absolute;z-index:0;left:0px;" ref="mysvg" viewBox="0,0,1920,1080" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <!-- <g>
        <polygon  :points="getgraphics"
        style="fill:rgb(249,215,170);
        stroke:#000000;stroke-width:0"/>
      </g> -->
      <g>
        <polygon ref="innerGraphic" :points="innerGetgraphics"
        style="fill:rgba(24,222,255,0.5);
        stroke:#18a9ff;stroke-width:1"/>
      </g>
      <circle v-for="(item,index) in circlelist" :key="index" :cx="item.cx" :cy="item.cy" :r="item.cr"
       fill="#18a9ff"/>
  </svg>
</template>
<script>
import {
  TweenMax,
  TimelineLite
} from "gsap";
export default {
  props: {
    pointCenter: {
      type: Object,
      default: function() {
        return {
          x: 247,
          y: 448
        }
      }
    },
    scale: {
      type: Number,
      default: 0.4
    },

    radiusInner: {
      type: Number,
      default: 210
    },
    //初始化百分比分数布局点数组
    point_Array: {
      type: Array,
      default: function() {
        return [

        ]
      }
    },
  },
  data: function() {
    return {
      gl_text_x: 0,
      gl_text_y: 0,
      circle1_x: 0,
      circle1_y: 100,
      circlelist: [{
        cx: 0,
        cy: 0,
        cr: 0
      }],
      svgText: [{
        text: 'e444'
      }],
      animatorPoints:this.point_Array


    }
  },
  computed: {
    innerGetgraphics: {
      get() {
        const self = this;
        let ln = this.radiusInner;
        let center_pt = {
          x: this.pointCenter.x,
          y: this.pointCenter.y
        }
        let bian = this.point_Array.length;
        let _angle = 360 / bian;
        //计算出各个点的百分比
        let percent_bian = [];
        for (let i = 0; i < this.animatorPoints.length; i++) {
          let percent = this.animatorPoints[i][0] / this.animatorPoints[i][1]
          percent_bian.push(percent)
        }
        //svg多边形绘图点数组
        let graphics_arr = [];
        for (let i = 1; i <= bian; i++) {
          let _bianchang = percent_bian[i - 1] * ln; //得出每个百分比的数值
          let _bianAngle = _angle * i; //得出每个边对应角度
          let pt = {
            x: center_pt.x + Math.sin(_bianAngle * Math.PI / 180) * _bianchang,
            y: center_pt.y + Math.cos(_bianAngle * Math.PI / 180) * _bianchang
          }
          self.circlelist.push({
            cx: pt.x,
            cy: pt.y,
            cr: (_bianchang == 0) ? 0 : 3
          })
          let format = pt.x + ',' + pt.y
          graphics_arr.push(format);
        }
        return graphics_arr.join(' ')
      },
      set(newArr) {
        const self = this;
        let ln = this.radiusInner;
        let center_pt = {
          x: this.pointCenter.x,
          y: this.pointCenter.y
        }
        let bian = this.point_Array.length;
        let _angle = 360 / bian;
        //计算出各个点的百分比
        let percent_bian = [];
        for (let i = 0; i < newArr.length; i++) {
          let percent = newArr[i][0] / newArr[i][1]
          percent_bian.push(percent)
        }
        //svg多边形绘图点数组
        let graphics_arr = [];
        if (self.circlelist.length > 1) {
          self.circlelist = [];
        }
        for (let i = 1; i <= bian; i++) {
          let _bianchang = percent_bian[i - 1] * ln; //得出每个百分比的数值
          let _bianAngle = _angle * i; //得出每个边对应角度
          let pt = {
            x: center_pt.x + Math.sin(_bianAngle * Math.PI / 180) * _bianchang,
            y: center_pt.y + Math.cos(_bianAngle * Math.PI / 180) * _bianchang
          }
          self.circlelist.push({
            cx: pt.x,
            cy: pt.y,
            cr: (_bianchang == 0) ? 0 : 3
          })
          let format = pt.x + ',' + pt.y
          graphics_arr.push(format);
        }
        return graphics_arr.join(' ')
      }
    }
  },
  methods: {
    animeStart($newPointArr) {
      const self = this;
      self.animatorPoints = self.point_Array.map((item,index)=>{
        return  [0.01, 1];

      })

      let pointers = self.point_Array.map((item,index)=>{
        return {val:$newPointArr[index][0]}
      });

      let index = 0;
      TweenMax.staggerFrom(pointers, 0.5, {
        val: 0.01,
        onUpdate: function() {
          self.animatorPoints.forEach((item,index)=>{
            self.animatorPoints[index] = [pointers[index].val,1];
          })

          self.innerGetgraphics = self.animatorPoints
        },
        ease: Linear.easeIn
      }, 0.15)
    },

  },
  mounted() {
    //this.animeStart()
  }
}
</script>
<style scoped="">
.container {
  position: relative;
  width: 10rem;
  height: 10rem;
}
</style>
