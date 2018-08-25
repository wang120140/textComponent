<template>
    <transition
        enter-active-class="animated flipInX"
        leave-active-class="animated flipOutX"
        :duration='3200'
        name='modal'
    >
        <div class='modal-mask' :style="{top:TwoTopStyle,left:TwoLeftStyle}">
            <div class='modal-wrapper'>
                <div @click="closeDialog" class='closeImg'></div>
                <div class='modal-container'>
                    <div class='modal-body'>
                        <slot></slot>
                    </div>
                    <div class='modal-footer' >
                            <span   @mouseover="ButRigOver($event)"  @mouseout="BtnRigOut()"  :class="{'btn':btnRigCont}"   @click='ButtonLeft'>{{LeftButtonMsg}}</span>
                            <span   @mouseover="BtnLeftOver()"       @mouseout="BtnLeftOut()"  :class="{'btn':btnLeftCont}"  @click='ButtonRight'>{{RightButtonMsg}}</span>
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
                btnRigCont:false,
                btnLeftCont:true,
            }
        },
        props: {
            TwoTopStyle:{
                style:String
            },
            TwoLeftStyle:{
                style:String
            },
            RightButtonMsg:{
                style:String
            },
            LeftButtonMsg:{
                style:String
            },
        },
        methods:{
            closeDialog(){ //上箭头关闭对话框效果
                this.$emit('closeTwoDialog')
            },
            ButtonRight(){ //右按钮触发事件
                this.$emit('TwoButtonRight')
            },
            ButtonLeft(){ //左按钮触发事件
                this.$emit('TwoButtonLeft')
            },
            ButRigOver($event){ //鼠标进入右按钮
                console.log('右鼠标样式进入...')
                this.btnRigCont=true;
                this.btnLeftCont=false;
            },
            BtnRigOut(){ //鼠标离开右按钮
                console.log('右鼠标样式离开...')
                
            },
            BtnLeftOver(){ //鼠标进入左按钮
                console.log("左鼠标样式进入...")
                this.btnLeftCont=true;
                this.btnRigCont=false;
            },
            BtnLeftOut(){//鼠标离开左按钮
              console.log('左鼠标样式离开...')  
            }
        },
    }
   
</script>

<style scoped>
    .btn{
        background-color: aqua;
    }
    .modal-mask{
        position: fixed;
        background:rgba(0,0,0,0.1);
        width:100%;
        height: 100%;
        z-index:2018;
        /* top:-10px;
        left:-10px; */
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
    .modal-body{
        margin-top:5%;
        font-size: .5rem;
    }
    .modal-footer{
        margin-top: .825rem;
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