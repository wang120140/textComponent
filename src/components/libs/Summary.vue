<template>
    <swiper  class='scene0' :style="scene0Bg" :options="swiperOption" >
        <swiperSlide class='scene1' :style='scene1Bg'>
            <div class="scene2Lef">
            </div>
            <div class='scene1Rig'>
                <div class="proBox">
                    <p class='progMsg'>从数据库中动态引入信息</p>
                    <progress-bar class="prog" 
                                        width="45%"
                                        max=100
                                        min=0
                                        :value=data1
                                        :percent=percent
                                        leftBg="linear-gradient(to right, yellow, red)"
                                        bgc="#ccc" 
                                        ballBgc="red">
                    </progress-bar> 
                </div>
            </div>
            <div>
                <p>从数据库中动态引入信息</p>
            </div>
        </swiperSlide>
        <swiperSlide class='secne2' :style='scene2Bg' >
                    测试分析
        </swiperSlide>
        <swiper-slide class="scene3" :style='scene3Bg'>
                推荐课程
        </swiper-slide>
        
    </swiper>
    
</template>

<script>
    import { swiper, swiperSlide} from 'vue-awesome-swiper'
    import ProgressBar from './ProgressBar.vue'
    export default{
         data () {
             return {
                 swiperOption: {
                    notNextTick: true,
                    pagination: '.swiper-pagination',
                    resistanceRatio: 0,
                    direction: 'vertical',
                    mousewheel: true,
                },
                data1:100,
                max:200,
                min:0,
                value:40,
                percent:90,
                  
             }
         },
         components:{
            swiper,
            swiperSlide, 
            ProgressBar,
         },
         computed:{
            scene0Bg(){
                return{ 
                    background:'url("static/imgs/summary/scene0Bg.jpg") no-repeat',
                    backgroundSize: '100% 100%'
                }
            },
            scene1Bg(){
                return{
                   background:'url("static/imgs/summary/scene1Bg.jpg") no-repeat',
                   backgroundSize: '100% 100%'
                }
            },
             scene2Bg(){
                return{
                   background:'url("static/imgs/summary/scene2Bg.jpg") no-repeat',
                   backgroundSize: '100% 100%'
                }
            },
             scene3Bg(){
                return{
                   background:'url("static/imgs/summary/scene3Bg.jpg") no-repeat',
                   backgroundSize: '100% 100%'
                } 
             }
            
         },
    }
</script>

<style scoped>
    .scene0{
        position: absolute;
        height:100%;
        width: 100%;
        overflow: hidden
    }
     p{
        font-size: 0.4rem
    } 
   /********************第一个scene1开始*******************************/ 
    .scene1{
        position: relative;
        top:x; 
        box-sizing: border-box;
        display: flex;
        flex-wrap:wrap;
    }
    .scene2Lef{
        float: left;
        width: 50%;
        height: 70%;
        border: 1px solid black;
    }
    .scene1Rig{
        float: right;
        width: 50%;
        height: 70%;
        border: 1px solid black;
    }
    .progBox{
        margin: 10% 10%;
    }
   
/*********************第一个scene1结束**************************/
/********************第一个scene2开始*******************************/ 
    .scene2{
        position: relative;
       
        text-align: center;
        box-sizing: border-box;
    }
    .scene3{
        position: relative;

        text-align: center;
        box-sizing: border-box;
    }
</style>
