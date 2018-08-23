<template>
<div class="medal0">
    <li class="medal" @click="onClick" :style="mybackground">
      {{medaltext}}
    </li>
    <div class='percentbar_mask' :style="getmask">
      <div class="gap_w"></div>
       <div class="lightbar"></div>
       <div class="gap_w"></div>
    </div>
</div>
</template>

<script>

  import {mapState} from 'vuex'
    export default {
        props:{
          medalSelected:{
            type:Boolean,
            default:false
          },
          medaltext:{
            type:String,
            default:'听'
          },
          lightClr:{
            type:String,
            default:'#56d4fa'
          },
          darkClr:{
            type:String,
            default:'#33a8e8'
          }
        },
        data(){
          return{

          }
        },
      computed:{
        ...mapState(['answerDataArr']),
          mybackground(){
            if(this.medalSelected){
              return{
                background:"linear-gradient(to bottom,"+this.lightClr+ " 0%,"+this.darkClr+" 80%,"+this.darkClr+" 100%)"
              }
            }
            return{
              background:"#bcbcbc"
            }
          },
          getmask(){
            return{
              width:2.05,
              top:'0.04rem',
              left:'0.056rem',
              height:.62+'rem',
              borderRadius:2.05/2+'rem',
            }
          }
      },
      methods:{
        onClick(){

          this.$emit("CLICKED",this.medaltext);
        }
      }
    }
</script>

<style scoped>
.medal0{
  position: relative;
}
.percentbar_mask{
   
    position: absolute;
    top:0;
    left:0;
    margin-left: 0.1rem;
    width:2.05rem;
    height:.3rem;
    border-radius: .05rem;
    background:-webkit-gradient(linear, center top, center bottom, from(rgba(0,0,0,0)), to(rgba(111,111,111,0.4)),color-stop(42%, rgba(0,0,0,0)));
}
.lightbar{
    display: flex;
    position: relative;
    top:-0.04rem;
    width:80%;
    margin-left: 0.2rem;
    border-top:1px solid white;
    height:0.2rem;
    transform: scaleY(0.12);
    background:rgba(255,255,255,0.8);
    z-index: 999;
  }
  .gap_w{
    width: 0.1rem;
  }
.medal{
  cursor: pointer;
  position: relative;
  width:2.05rem;
  height:.62rem;
  margin: 0 0.17rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom-left-radius:0.5rem;
  border-bottom-right-radius: 0.5rem;
  font-size:0.38rem;
  text-align: center;
  line-height: .63rem;
  margin-bottom:0.2rem;
  color:white;
}
 
</style>
