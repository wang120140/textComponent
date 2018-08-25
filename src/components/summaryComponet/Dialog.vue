<template>       
    <transition   
        enter-active-class="animated flipInX"
        leave-active-class="animated flipOutX"
        :duration="3200" 
        name='modle' >
        <!--这是个遮罩层-->
        <div class='modal-mask' :style='{top:TopStyle,left:LeftStyle}'>
            <!-- 内容部分开始 -->
                <div class='modal-wrapper' >
                        <!-- 头部关闭信息 -->
                    <div  @click='closeDialog'  class='closeImg'></div>
                        <!-- 主题部分盒子 -->
                    <div class='modal-container' >
                        <!-- 头部内容信息 -->
                        <div class='modal-header'>
                            <img :src="Headerimgbg" alt="">
                            <slot name ='Header'></slot>
                        </div> 
                        <!-- 主题内容部分        -->
                        <div class='modal-body'>
                            <!-- 插入主题内容 -->
                            <slot></slot> 
                        </div> 
                        <!-- 尾部按钮部分 -->
                       
                        <div class='modal-footer' v-if="buttonshow">
                                <span  :ref='index' v-for="(val,index,arr) in ButtonMsg" :key='index' @click='buttonEvent(index,arr)' @mouseover="ButCenterOver(index)"  @mouseout="BtnCenterOut(index)"  :class="{'btn':!((btnCont+index)%2)}">{{val}}</span>
                        </div>
                    </div>
                </div>
            <!--内容部分结束-->
        </div>
    </transition>
</template>
<script>

 import animate from 'animate.css'
  export default {
    name: "",
    data(){
      return {
          btnCont:1,
          bgcolorHover:true,
          buttonshow:true,
          bgcolor:{
                backgroundColor: '#1BACE6'
          },
      }
    },
    props:{
        ButtonMsg:{
          type:Array,
          default: ()=>['坚持退出','继续答题']
        },
        Headerimgbg:{
            type:String,
        },
        TopStyle:{
            type:String,
            default:()=>'-5px'
        },
        LeftStyle:{
            type:String,
            default:()=>'-5px'
        },
    },
    methods:{
      quithover(){
          this.bgcolorHover=false;
      },
      closeDialog(){
         this.$emit('closeDialog',false)
      },
      ButCenterOver(index){
          (index==0)?
           this.btnCont=2:
            this.btnCont=1;
      },
      BtnCenterOut(index){
         (index==1)&&
          (this.btnCont=1);
      },
      buttonEvent(index){
          let leng = this.ButtonMsg.length;
          if(leng==0){
              this.buttonshow=false;
          } else if(leng==1){
              this.$emit('ButtonCenter');
          }else if(leng==2){
              index?this.$emit('ButtonRight'):this.$emit('ButtonLeft')
          } else {
              return;
          }  
      },
    }
  }
</script>
 
<style scoped>
    .btn{
        background-color: #1BACE6; 
        color: #F3FBFE;  
    }
    .modal-mask{
        position: fixed;
        background: rgba(0,0,0,0.1);
        width: 100%;
        height: 100%;
        z-index: 2018;
        
    }
     .modal-wrapper{
        border:2px solid black;
        text-align: center;
        background-color: white;
        border-radius: 20px;
        width: 50%;
        height: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: url(../../../static/imgs/summary/dialog.png) no-repeat  scroll 100% 100%;
        background-size: cover;
    }
    .closeImg{
        width: 0.875rem;
        height:.875rem;
        float: right;
        margin-right: .3125rem;;
        margin-top: .3125rem;;
        cursor: pointer;
        background-image: url(../../../static/imgs/summary/close.png);
        background-size: cover;
        background-repeat: no-repeat; 
   }
   
    
   .modal-container{
        width: 100%;
        height: 100%;
        padding: .625rem;
        margin: 0 auto;
        border-radius:0.225rem;
        font-size: .125rem;
        border: 2px solid blue;
    }
    .modal-header  {
        margin-top:-.3125rem;
        margin-left: 0.3125rem;
        text-align: center;
        font-size: 0.8rem;;
        font-weight: 800;
        color: #42b983;     
    } 
    .modal-body {
        margin-top:5%;
        font-size:.5rem;; 
    }
    .modal-footer{
        margin-top:.625rem;
    }
    .modal-footer span{
        cursor: pointer;
        border-radius: .3125rem;
        width:  .825rem;
        height:  .825rem;
        margin:  .4125rem;
        font-size: .3125rem;
        padding:  .225rem .4125rem;
        border: 1px solid black;
    }
    
  
</style>