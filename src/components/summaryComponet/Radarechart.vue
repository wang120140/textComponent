<template>
        <div class='chart'>
            <div class='mu'>
            <div id='myChartRadar' ></div>
            </div>
            <div id='myChartBar'   :style="{width:'6.25rem',height:'6rem'}"></div>
            
        </div>        
        
</template>
<script>
    let echarts = require('echarts/lib/echarts')
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    
    require('echarts/lib/chart/bar')
    require('echarts/lib/chart/radar')
    import { mapState,mapGetters} from 'vuex' 
    export default {
      name:'hello',
        data(){
            return {
                    msg:'尝试在vue中使用echarts',       
                    RadarCont:1,
                };
        },
        computed: {
            ...mapState(['scorePartListen','scorePartReading','scorePartSentences','scorePartGrammar','ScoreAll']),
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

        },
        watch:{
            option(){
                 this.drawLine();
            }
        },
        mounted(){ 
            this.RadarCont && this.drawLine(); 
         
        },
      methods: {
        drawLine(){
            
            let that = this;
            let myChart = echarts.init(document.getElementById('myChartBar'));
            myChart.setOption({
                title:{
                    text:'Echart--vue 测试使用',
                    textStyle:{
                        fontSize: .625+'rem',
                    },
                },
                xAxis:{
                    data:['听力理解','单项选择','完型填空','阅读理解',]
                },
                yAxis:{max:30},
                series:[{
                    name:'销量',
                    type:'bar',
                    data:[that.totalScoreListen,that.totalScoreGrammar,that.totalScoreReading,that.totalScoreSentences]
                }],
            })
                
            let myChartRadar = echarts.init(document.getElementById('myChartRadar'));
           
            myChartRadar.setOption(
                  {
                        title: {
                            text: 'Echart-vue测试雷达图',
                            textStyle:{
                                fontSize: .625+'rem',
                            },
                        },
                        tooltip: {},
                        radar: {
                            shape: 'circle',
                            center:['50%','50%'],
                            name: {
                                
                                fontSize:0.425+'rem',
                                textStyle: {
                                    color:'#ff0',
                                    backgroundColor: '#999',
                                    borderRadius: 8,
                                    padding: [3, 5],
                                    
                                }
                            },
                            axisLine:{
                                show:true,
                                symbol:['none' ,'arrow'],
                                symbolSize:[0.625+'rem',0.8+'rem'],
                                lineStyle:{
                                    color:'',     
                                }
                            },  
                            nameGap:5,
                            indicator: [
                                { name: '听力', max: 25, color:'#333'},
                                { name: '完型', max: 25 ,color:'#333'},
                                { name: '阅读', max: 25 ,color:'#333'},
                                { name: '单项', max: 25, color:'#333'}, 

                            ]
                        },
                        series: [{   
                            type: 'radar',
                            areaStyle:{
                                color:"#8BE2E1",
                                opacity:0.5
                            },
                            data : [
                                {
                                    value : [that.totalScoreListen,that.totalScoreGrammar,that.totalScoreReading,that.totalScoreSentences],
                                },       
                            ]
                        }],
                        animationThreshold:3000,
                        animationDuration:1000,
                        animationEasing:'bounceIn',
                    }
            );
            
        }  
      }
        
    }
</script>

<style scoped>
    .chart{
        display: flex;
    }
    .mu{
        width:6rem;
        height: 6rem;
    }
    #myChartRadar{
       border: 1px solid blue;
       overflow: hidden; 
       width:100%;
       height:100%;
    }
</style>