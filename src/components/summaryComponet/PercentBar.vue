<template>
  <div class="layPercentBar">
    <div style="padding-right:0.15rem;color:#9a592a;">{{pretext}}</div>
    <div class="percentbar" :style="percentbarSetting" >
      <div class="innerbar" :style="getInnerpercentbar"></div>
      <div class="percentbar_mask" :style="getmask">
        <div class="gap_w"></div>
        <div class="lightbar"></div>
        <div class="gap_w"></div>
      </div>
    </div>
    <!-- <div style="padding-left:0.15rem;color:#f75a26;font-weight:bold;">{{aftertext()}}</div> -->
  </div>

</template>
<script>
import {
  TweenMax,
  TimelineLite
} from "gsap";
// import PercentBarLevelContra from "../RoutesComponents/PercentBarLevelContra";
export default {
  name: 'hello',
  props:{

    width:{
      type:Number,
      default:2
    },
    score:{
      type:String,
      default:''
    },
    height:{
      type:Number,
      default:0.3
    },
    color:{
      type:String,
      default:'#60e2ff'
    },

    innerHeight:{
      type:Number,
      default:0.24
    },
    currentNum:{
      type:Number,
      default:1
      //这个是比例的分子
    },
    totalNum:{
      type:Number,
      default:25
      //这个是比例的分母
    },
    pretext:{
      type:String,
      default:''
    },

  },
  data () {
    return {
      rankscore:this.score,
      percentWIDTH:3
    }
  },
  computed:{

    percentBarWidth:{
      get(){
        return this.percentWIDTH;
      },
      set(value){
        this.percentWIDTH = value;
      }
    },
    getInnerpercentbar:function(){

      let _currentNum = 20;
      const self = this;
      let pers = (this.percentBarWidth/this.totalNum)*this.width*0.965;
      let cc = pers+'rem';
      return {
        width:cc,
        top:'0.04rem',
        left:'0.056rem',
        backgroundColor:self.color,
        height:self.innerHeight+'rem',
        borderTopLeftRadius: this.height/2+'rem',
        borderBottomLeftRadius: this.height/2+'rem',
        borderTopRightRadius: this.height/2+'rem',
        borderBottomRightRadius: this.height/2+'rem'
      };
    },
    getmask:function(){
      const self = this;
      let pers = (this.percentBarWidth/this.totalNum)*this.width*0.965;
      let cc = pers+'rem';
      return {
        width:cc,
        top:'0.04rem',
        left:'0.056rem',
        height:self.innerHeight+'rem',
        borderRadius:this.height/2+'rem',
        // borderTopLeftRadius: this.height/2+'rem',
        // borderBottomLeftRadius: this.height/2+'rem',
        // borderTopRightRadius: this.height/2+'rem',
        // borderBottomRightRadius: this.height/2+'rem'
      };
    },
    percentbarSetting:{
      get(){
        return {
          width:this.width+'rem',
          height:this.height+'rem',
          borderTopLeftRadius: this.height/2+'rem',
          borderBottomLeftRadius: this.height/2+'rem',
          borderTopRightRadius: this.height/2+'rem',
          borderBottomRightRadius: this.height/2+'rem',
        }
      }
    }
  },
  watch:{
    currentNum(){
      this.animate();
    }
  },
  methods:{
    // aftertext(){
    //   let levels = this.$store.state.gameSummary.whichLevel;
    //   switch (levels){
    //     case 'K':
    //       return PercentBarLevelContra.levelK.call(this);
    //       break;
    //     case 'Lv2':
    //       return PercentBarLevelContra.levelLv2.call(this);
    //       break;
    //     case 'Lv4':
    //       return PercentBarLevelContra.levelLv4.call(this);
    //       break;
    //     default:
    //       break;
    //   }
    // },
    animate(){
      const self = this;
      let termi = self.currentNum || 1;
      self.percentBarWidth = 3;
      let obj = {
        w:3
      }
      TweenMax.to(obj,0.4,{w:termi,ease:Linear.easeIn,onUpdate:()=>{
        self.percentBarWidth = obj.w;
      }})

    }
  },
  mounted(){
   this.animate()
  }
}
</script>
<style scoped="">
  .innerbar{
    position: relative;
    width:.5rem;
    height:100%;

  }
  .layPercentBar{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size:0.35rem;

  }
  .percentbar_mask{
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-direction: row;
    justify-content: center;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:.3rem;
    border-radius: .05rem;
    background:-webkit-gradient(linear, center top, center bottom, from(rgba(0,0,0,0)), to(rgba(111,111,111,0.4)),color-stop(42%, rgba(0,0,0,0)));
  }
  .gap_w{
    width: 0.1rem;
  }
  .percentbar{
    position:relative;
    background:-webkit-gradient(linear, center top, center bottom, from(#eac69a), to(#fef5df));
  }
  .lightbar{
    display: flex;
    position: relative;
    top:-0.04rem;
    width:100%;
    border-top:1px solid white;
    height:0.2rem;
    transform: scaleY(0.12);
    background:rgba(255,255,255,0.8);
    z-index: 999;
  }
  .scores{
    position: relative;
    top:0;
    font-size: 0.32rem;
    color:#f75a26;
    font-weight: bold;
    left: 3.2rem;
    top:-0.27rem;
    width:0.5rem;
    text-align: left;
  }
</style>
