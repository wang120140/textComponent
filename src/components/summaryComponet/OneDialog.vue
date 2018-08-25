<template>
    <transition
        enter-active-class="animated flipInX"
        leave-active-class="animated flipOutX"
        :duration='3200'
        name='modal'
    >
        <div class='modal-mask' :style='{top:OneTopStyle,left:OneLeftStyle}' >
            <div class='modal-wrapper'>
                <div @click="closeDialog" class='closeImg'></div>
                <div class='modal-container'>
                    
                    <div class='modal-header'>
                        <slot name='OneHeader'></slot>
                    </div>
                    <div class='modal-body'>
                        <slot></slot>
                    </div>
                    <div class='modal-footer' >
                            <span   
                                @mouseover="ButCenterOver($event)" 
                                 @mouseout="BtnCenterOut()"  
                                 :class="{btn:btnCenterCont}"   
                                 @click='OneButtonCenter'>{{CenterButtonMsg}}</span>     
                    </div>
                </div>
            </div>
        </div>  
    </transition>
</template>

<script>
    import animate from 'animate.css'  //如果要shi
    export default {
        data(){
            return {
                btnCenterCont:true,        
            }
        },
        props:{
            CenterButtonMsg:{
                type:String,
            },
            OneTopStyle:{
                type:String,
            },
            OneLeftStyle:{
                type:String,
            },
        },
        
        methods:{
            closeDialog(){ //上箭头关闭对话框效果
                this.$emit('closeOneDialog')
            },
            OneButtonCenter(){ //中间按钮触发事件
                this.$emit('OneButtonCenter')
            },
          
            ButCenterOver($event){ //鼠标进入右按钮
                console.log('右鼠标样式进入...')
            },
            BtnCenterOut(){ //鼠标离开右按钮
                console.log('右鼠标样式离开...')
                
            },
            
        },
    }
   
</script>

<style scoped>
    div{
        margin: 0;
        padding: 0;
    }
    
    .btn{
        background-color: aqua;
    }
    .modal-mask{
        position: fixed;
        background:rgba(0,0,0,0.1);
        width:100%;
        height: 100%;
        z-index:2018;
        
    }
    .modal-wrapper{
        border:.125rem solid blue;
        text-align:center;
        background-color: white;
        border-radius:.35rem;
        width:50%;
        height: 50%;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        background:url(../../../static/imgs/summary/dialog.png) no-repeat;
        background-size:cover;
    }
    .closeImg{
        width:0.875rem;
        height: 0.875rem;
        float:right;
        margin-right: .3125rem;
        margin-top: .3125rem;
        cursor: pointer;
        background-image: url(../../../static/imgs/summary/close.png);
        background-size:cover;
        background-repeat: no-repeat;
    }
    .modal-container{
        width:100%;
        height:100%;
        padding:.625rem;
        margin:0 auto;
        border-radius: 0.225rem;
        font-size: .125rem;
        border:.125rem solid blue;
    }
     .modal-header{
        margin-top:.3125rem;
        margin-left: 0.3125rem;
        text-align: center;
        font-size: 0.8rem;;
        font-weight: 800;
        color: #42b983;    
    }
    .modal-body{
        margin-top:5%;
        font-size: .5rem;
    }
    .modal-footer{
        margin-top: .425rem;
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