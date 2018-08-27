<template>  
    <swiper  class='scene0' ref='mySwiper' :style="scene0Bg" :options="swiperOption" >
        
        <swiperSlide class='scene1' :style='scene1Bg'>
                <!-- 这个是一左面部分 -->
               
                
                <div class='defaultSco'>击败了{{defaultScore}}</div>
                <div class='userinfoband'>
                    <div class='username'>{{userName}}</div>
                    <div class ='score'>  {{score}}分</div>
                </div>
                <!-- 这个是右面部分 -->
                <ul class='proBox' v-if='proBoxShow'> 
                    <li v-for="(item,index) in getContent" :key=index>
                        <p class='progMsg'>{{item.content}}{{item.totalScore}}分 :对{{item.Right}}题，错{{item.Wrong}}题 </p>                       
                        <Percent-bar
                            :width='3.07'
                            :height='0.40'
                            :innerHeight='0.35'
                            :color='item.darkClr'
                            :currentNum='item.score'
                            :totalNum='item.totalScore'   
                        >
                        </Percent-bar>
                    </li>
                </ul> 
                <!-- 这个是下面部分 -->
                <ul class='scene1Sum'>
                    <li v-if="score<=60">
                        <p>60分以下推荐报名--AE英语直播班Level 1课程（剑少一级难度）</p>
                    </li>
                    <li v-else-if="score<=90">
                        <p>60-90分推荐报名--AE英语直播班Level 2课程（剑少一级难度）</p>
                    </li>
                    <li v-else-if='score>=90'>
                        <P>90以上推荐报名--AE英语直播班Level 3课程（剑少二级难度）</P>
                    </li>    
                </ul>

        </swiperSlide>
        <swiperSlide class='scene2' :style='scene2Bg' >
                         <div class="radarArea" :style="radarPicture" >
                         </div>
                         <radar-graphic 
                                ref="RadarGraphic" 
                                :point_Array="point_arry" 
                                :pointCenter="radarCentre">       
                        </radar-graphic>
                            <div class="medals" >
                                <ul>
                                    <MedalLabel v-for="(item,index) in getContent" 
                                                :key="index" 
                                                :medaltext="item.content" 
                                                :medalSelected='item.Sele'
                                                :lightClr="item.lightClr"
                                                :darkClr="item.darkClr"
                                                 @click.native="onClickSelect(index)" 
                                                >
                                    </MedalLabel> 
                                </ul>   
                        </div>
                        <div class="congratulationList textClr">
                            {{getContraText()}}
                        </div> 
                   
        </swiperSlide>
        <swiper-slide class='scene3' :style='scene3Bg'>
            <Radarechart  v-if='showradar' ref='RadarEchart'  class='scene3Radar'></Radarechart>        
        </swiper-slide> 
    </swiper>
    
</template>

<script>  
    import { swiper, swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'  //这句话注意在组件中没有用到 ....在试着改善...
    import { mapState,mapGetters} from 'vuex'
    import LevelCongratulations from "./LevelCongratulations"
    import PercentBar from './summaryComponet/PercentBar.vue' 
    import MedalLabel from './summaryComponet/MedalLabel.vue'//这个是标签组件
    import RadarGraphic from './summaryComponet/RadarGraphic.vue'//这个是雷达图组件
    import Radarechart from './summaryComponet/Radarechart.vue' //这个EhartRadar组件的
    import Dialog from './summaryComponet/Dialog.vue'
    export default{
        components:{
            swiper,
            swiperSlide, 
            PercentBar,
            RadarGraphic,
            MedalLabel,
            Radarechart ,
         },
        data () {
             return {
                 mySwiper:{},
                 swiperOption: {
                    notNextTick: true,
                    pagination: '.swiper-pagination',
                    resistanceRatio: 0,
                    direction: 'vertical',
                    keyboard : true,     
                    mousewheel: true,
                    grabCursor:true,
                    setWrapperSize:true,
                    effect : 'coverflow',
                    zoom : true, 
                },

                userName:'小朋友',
                score:0,
                LowScore:[],
                defaultScore:'10%', 
                proBoxShow:true,
                getContent:[
                    {content:'听力理解', totalScore:25,score:0, Right:0,Wrong:0,Sele:true, lightClr:'pink',darkClr:'#EF5461'},
                    {content:'单项选择', totalScore:25,score:0, Right:0,Wrong:0,Sele:false,lightClr:'pink',darkClr:'#9AC62A'},
                    {content:'完型填空', totalScore:25,score:0, Right:0,Wrong:0,Sele:false,lightClr:'pink',darkClr:'#EFD325'},
                    {content:'阅读理解', totalScore:25,score:0, Right:0,Wrong:0,Sele:false,lightClr:'pink',darkClr:'#8791FD'},
                ],
                listenScoreData:0,
                grammarScoreData:0,
                readingScoreData:0,
                sentenceScoreData:0,
               
                showradar:false,
                point_arry: [
                     [0.1,1],
                     [0.1,1],
                     [0.1,1],
                     [0.1,1]
                 ],
                 dialogShow0:false,   
             }
         },     
        computed:{
            ...mapState(['scorePartListen','scorePartReading','scorePartSentences','scorePartGrammar','ScoreAll']),
            //几个背景图
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
                },
                radarPicture() {
                    return {
                        background: 'url("static/imgs/summary/radar2.png") no-repeat',
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center center',
                    }
                },
            //几个背景图结束
            //计算各个成绩
                totalScoreListen(){
                    let listen;
                    if(this.scorePartListen.length>0){
                        listen =  this.scorePartListen.reduce((cur,prev)=>{
                        return Number(cur)+Number(prev);
                        })
                    }else{
                        listen = 0;
                    };
                    return listen;
                },
                totalScoreGrammar(){
                    let grammar;
                    if(this.scorePartGrammar.length>0){
                        grammar =  this.scorePartGrammar.reduce((cur,prev)=>{
                        return Number(cur)+Number(prev);
                        })
                    }else{
                        grammar = 0;
                    };
                    return grammar;

                },
                totalScoreReading(){
                    let reading;
                    if(this.scorePartReading.length>0){
                        reading =  this.scorePartReading.reduce((cur,prev)=>{
                        return Number(cur)+Number(prev);
                        })
                    }else{
                        reading = 0;
                    };
                    return reading;
                },
                totalScoreSentences(){
                    let sentences;
                    if(this.scorePartSentences.length>0){
                        sentences =  this.scorePartSentences.reduce((cur,prev)=>{
                        return Number(cur)+Number(prev);
                        })
                    }else{
                        sentences = 0;
                    }
                    return sentences;
                },         
            //计算各个成绩和结束
            radarCentre() {
                return {
                    x: 642,
                    y: 445        
                }
            },
           
            currentTabMedalName:function(){
                let index=0,self=this;
                 this.getContent.forEach(function(items ,inde){
                         items.Sele&&(index = inde)
                 });
                return self.getContent[index].content;
            }
         },
/**************************computed结束**************************************** */   
         methods:{  
            dialogShow(){
                    this.dialogShow0 = !(this.dialogShow0);
            },         
            onClickSelect(index){
                    [...this.getContent].forEach((ele ,index,arr)=>{
                        this.getContent[index].Sele=false;
                    });
                    this.getContent[index].Sele=true;
                   
                    },
            getContraText(){
                    const self = this;
                    let levels ='Lv2';
                    switch (levels){
                        case 'K':
                        return LevelCongratulations.levelK();
                        break;
                        case 'Lv2':
                        return LevelCongratulations.levelLv2.call(self); //有点小疑问？？？
                        //return LevelCongratulations.levelLv2();
                        break;
                        case 'Lv4':
                        return LevelCongratulations.levelLv4();
                        break;
                        default:
                        break;
                    }
                } 
         },
        
         mounted:function(){
             const self= this; 
             //对swiper 条进行翻转判断      
                this.mySwiper = this.$refs.mySwiper.swiper;  
                this.mySwiper.on('transitionEnd', (event) => {
                    if(this.mySwiper.activeIndex===0){
                        this.proBoxShow=true;
                    }
                    if (this.mySwiper.activeIndex === 1) {        
                    this.$refs.RadarGraphic.animeStart(this.point_arry);  
                    this.showradar=0
                    this.proBoxShow=false;
                    
                    // if(  self.s1==undefined){ console.log(self.s1)}else
                    // { console.log(self.s1);
                    //     window.clearTimeout(self.s1);  
                    // }  以后修改....
                    // // (self.s1!=undefined) && (window.clearTimeout(self.s1));   
                    }
                    if(this.mySwiper.activeIndex === 2){ 
                        let that = this; 
                        this.showradar=1; 
                        this.proBoxShow=false; 
                              console.log('1')      
                       window.onresize=()=>{
                                console.log('2')
                            that.showradar=0;
                            
                           self.s1=window.setTimeout(()=>{
                                console.log("定时器触发了....")
                                that.showradar=1
                            },0)
                        }   
                    }      
                })
            //成绩总和以及比例
                let         listen=self.totalScoreListen,
                            grammar=self.totalScoreGrammar,
                            reading=self.totalScoreReading,
                            sentences=self.totalScoreSentences;

                self.score = listen+grammar+reading+sentences;
                self.LowScore=self.ScoreAll.filter(function(item){   
                    return self.score<=item;
                })
                    self.defaultScore=(100-Math.ceil((self.LowScore.length/self.ScoreAll.length)*100))+'%';
                    self.getContent[0].score=listen;
                    self.getContent[1].score=grammar;
                    self.getContent[2].score=sentences;
                    self.getContent[3].score=reading;
                    [self.scorePartListen,self.scorePartReading,self.scorePartSentences,self.scorePartGrammar].map((item,key)=>{
                    self.getContent[key].Right=(item.filter((items)=>{
                        return items>0
                    })).length;
                    self.getContent[key].Wrong=item.length-self.getContent[key].Right;
                })     
            //成绩部分结束
            //雷达图的点的分析
                self.point_arry=[ 
                    [grammar/self.getContent[1].totalScore,1],
                    [listen/self.getContent[0].totalScore,1],
                    [sentences/self.getContent[3].totalScore,1],
                    [reading/self.getContent[2].totalScore,1],
                ]
            //雷达图的点分析结束          
         },
         destroyed:function(){
             window.clearTimeout(self.s1);
           
         }
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
        font-size: 0.32rem;
         color: #9a592a;
         margin: 0;
         padding: 0;
    } 
    ul{
        list-style:none;
    }
   /********************第一个scene1开始*******************************/
   .defaultSco{
       position: absolute;
       top:2.5rem;
       left:3.5rem;
       font-size: .75rem;
       color: #9a592a;
   } 
    .scene1{
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-wrap:wrap;
 
    }
    .scene1Lef{ 
        width: 50%;
        height: 70%;
       
    }
    .scene1 .userinfoband {
        position: absolute;
        width: 4.95rem;
        height: 1.65rem;
        left: 3.6rem;
        top: 7.26rem;     
  }
   .scene1 .userinfoband .username {
        position: relative;
        color: white;
        font-size: 0.46rem;
        width: 2.6rem;
        left: 1.7rem;
        text-align: center;
        top: 0.1rem;
        line-height: 0.65rem;
  }

  .scene1 .userinfoband .score {
        position: relative;
        color: white;
        font-size: 0.46rem;
        width: 2.15rem;
        left: 1.7rem;
        text-align: center;
        top: 0.43rem;
        line-height: 0.48rem;

  }
    .progMsg{
        padding: 0;
        margin: 0.1rem;
    }
   .proBox{
    position: absolute;
    width: 5.21rem;
    height: 4.95rem;
    right: 4.1rem;
    top: 3.2rem;
    font-size: .32rem;
    text-align: justify;
    line-height:0.47rem;
    font-family: "Microsoft Ya Hei";
    box-sizing: border-box;
    padding-top:0.4rem;
    padding-left:0.2rem;
    padding-right:0.28rem;
    word-break: break-all;
    overflow: hidden;
    
   }
   .scene1Sum{
    position: absolute;
    width:50% ;
    top:8rem;
    left: 3.2rem;
   }
   .scene1Sum p{
       width:50%;
   }
/*********************第一个scene1结束**************************/
/********************第一个scene2开始*******************************/ 
    .scene2{
        display: flex;
        justify-content:center;
        position: relative;
        text-align: center;
        box-sizing: border-box;
    }
   .radarArea {
        position: absolute;
        width: 4.9rem;
        height: 4.9rem;
        left: 3.95rem;
        top: 2rem;
    }
    .scene2 .medals {
    position: absolute;
    width: 5.2rem;
    height: 1.6rem;
    right: 3.7rem;
    top: 2rem;
    box-sizing: border-box;
  }
  .scene2 .medals ul{
    padding: 0;
    margin: 0;
    position: relative;
    display: flex;
    flex-direction:row ;
    flex-wrap:wrap;
  }
.scene2 .congratulationList {
    position: absolute;
    width: 5.21rem;
    height: 2.95rem;
    right: 3.8rem;
    top: 3.8rem;
    font-size: .32rem;
    text-align: justify;
    line-height:0.47rem;
    font-family: "Microsoft Ya Hei";
    box-sizing: border-box;
    padding-top:0.4rem;
    padding-left:0.2rem;
    padding-right:0.28rem;
    word-break: break-all;
  }
  .textClr {
    color: #9a592a;
  }
/*********************第一个scene2结束**************************/
/********************第一个scene3开始*******************************/ 
    .scene3{
        position: relative;
        text-align: center;
        box-sizing: border-box;
    }
    .scene3Radar{
        position: absolute;
        top:1.875rem;
        left:2.8125rem;
    }
</style>
