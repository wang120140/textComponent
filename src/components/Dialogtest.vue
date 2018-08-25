<template>
    <div>
        <div class="noshow">
            <button @click="NoDialogButtonControl">
                没有按钮的对话框
            </button>
            <!--  属性介绍 自己在属性中安需填写
            NoDialogShow :控制对话框是否显示
            imgbg: 是在没有按钮对框框中的主题图片
            topStyle: 是调整对话框的顶部的位置
            leftStyle: 是调整对话框左部的位置
            @closeNoDialog: 是左上角的控制按钮的显示和关闭  -->
            <no-dialog 
                v-if="NoDialogShow"
                :imgbg='imgbgNo'
                :NoTopStyle='TopStyleNo'
                :NoLeftStyle='LeftStyleNo'
                @closeNoDialog='NoDialogClose'
                >
                真棒！已经完成了part1的测试，再接再厉
            </no-dialog>
        </div>

        <div>
            <button @click="OneDialogButtonControl">
                有一个按钮的对话框
            </button>
            <!-- 属性介绍  这里面的有一个按钮的弹窗有三个 基本都符合要求 如需修稿可以在组件中修改
            OneDialogShow :控制一个按钮的对话框是否显示
            OneTopStyle   :控制一个按钮对话框的顶部的位置
            OneLeftStyle : 控制一个按钮对话框的左部的位置
            CenterButtonMsg : 按钮的名称
            OneButtonCenter : 点击按钮的时候触发的事件
            closeOneDialog : 一个按钮的对话框显示和关闭 -->
            <one-dialog 
                v-if="OneDialogShow"
                :OneTopStyle='TopStyleOne'
                :OneLeftStyle='LeftStyleOne'
                :CenterButtonMsg='CenterButtonMsgOne'
                @OneButtonCenter='OneButtonCenterEvent'
                @closeOneDialog='OneDialogClose'
            >   
                <!-- 这里填写头部信息 -->
                <div slot="OneHeader">你真棒</div>
                <!-- 这里填写主题信息 -->
                恭喜你，已经完成了测试的所有的题目快去查看你的测试报告吧!
            </one-dialog>
        </div>

        <div>
            <button @click="TwoDialogButtonControl">
                有两个按钮的对话框
            </button>
            <!-- 属性介绍  项目中弹出有两个按钮的对话框中有两个 目前封装的基本上符合要求
            TwoDialogShow  控制两个按钮的对话框是否显示
            two-left-style 控制两个按钮对话框的左部位置
            two-top-style  控制两个按钮对话框的右部位置
            TwoButtonLeft  点击左按钮触发的事件
            TwoButtonRight 点击右按钮触发的事件
            closeTwoDialog 两个按钮的对话框显示和关闭     -->

            <two-dialog 
                v-if="TwoDialogShow"
                :two-top-style="TopStyleTwo"
                :two-left-style="LeftStyleTwo"
                :left-button-msg="LeftButtonMsgTwo"
                :right-button-msg="RightButtinMsgTwo"
                @TwoButtonRight='TwoButtonRightEvent'
                @TwoButtonLeft='TwoButtonLeftEvent'
                @closeTwoDialog='TwoDialogClose'>
                <!-- 这里填写主题内容 -->
                您还没有答完，确认退出考试吗？退出后您的答题记录清零
            </two-dialog>
        </div>
        <div>
            <button @click="DialogButtonControl">
                综合对话框
            </button>
            <!-- 这里不知道烦什么的邪乎区分大小写 -->
            <Dialog 
                v-if="DialogShow"
                :headerimgbg="headimgbg"
                :top-style="TopStyleDialog"
                :left-style="LeftStyleDialog"
                :ButtonMsg='ButtonMsgDialog'
                @ButtonCenter='ButtonCenterEvent'
                @ButtonRight='ButtonRightEvent'
                @ButtonLeft='ButtonLeftEvent'
                @closeDialog='DialogClose'   
                >
                <div slot="Header">继续做题 </div>
                主题信息
                </Dialog>

        </div>
        
    
    </div>
</template>

<script> 

    //需要什么对话框  就从中引对话框  需要什么的样式的可以在组件中直接修改
    import NoDialog from   '../components/summaryComponet/NoDialog.vue'  
    import OneDialog from  '../components/summaryComponet/OneDialog.vue'
    import TwoDialog from  '../components/summaryComponet/TwoDialog.vue'
    import Dialog from     '../components/summaryComponet/Dialog.vue'
    export default {
        components: {
            NoDialog,
            OneDialog,
            TwoDialog,
            Dialog
        },
        data () {
            return {
                //以下没有按钮对话框需要的属性值
                NoDialogShow:false,
                imgbgNo:'../../../static/imgs/summary/dialogNobg.jpg', //这个地址相对于对话框的相对位置来查找建议使用@
                TopStyleNo:'-10px',
                LeftStyleNo:'-10px',
                //没有按钮的对话框的属性值结束
                //以下是一个按钮对话框需要的属性值
                OneDialogShow:false,
                TopStyleOne:'-10px',
                LeftStyleOne:'-10px',
                CenterButtonMsgOne:'查看测试报告',
                //一个按钮的对话框需要的属性值结束
                //以下两个按钮的对话框需要的属性值
                TwoDialogShow:false,
                TopStyleTwo:'-10px',
                LeftStyleTwo:'-10px',
                LeftButtonMsgTwo:'坚持退出',
                RightButtinMsgTwo:'继续答题',
                //两个按钮的对话框结束
                //综合对话框的开始 
                DialogShow:false,
                headimgbg:'',
                TopStyleDialog:'-4px',
                LeftStyleDialog:'-4px',
                ButtonMsgDialog:['坚持退出0','继续做题']


            }
        },
        methods: {
            //以下是没有按钮的对话框的方法
            NoDialogButtonControl(){ //是父组件中控制的按钮
                this.NoDialogShow = !(this.NoDialogShow)
            },
            NoDialogClose(){  //子组件事件
                this.NoDialogShow = false;
            },
            //没有按钮的对话框的方法结束
            //一个按钮的对话框的方法开始
            OneDialogButtonControl(){
                this.OneDialogShow= !(this.OneDialogShow)
            },
            OneDialogClose(){
                this.OneDialogShow= false;
            },
            OneButtonCenterEvent(){
                this.OneDialogShow= false;
                console.log('这里填写你点击鼠标触发的事件')
            },
            //一个按钮的对话框的方法结束
            //两个按钮的对话框的方法开始
            TwoDialogButtonControl(){
                this.TwoDialogShow = !(this.TwoDialogShow);
            },
            TwoDialogClose(){
                this.TwoDialogShow = false;
            },
            TwoButtonRightEvent(){
                this.TwoDialogShow = false;
                console.log('这里写右按钮事件...')
            },
            TwoButtonLeftEvent(){
                this.TwoDialogShow = false;
                console.log('这里写左按钮事件....')
            },
            //两个按钮的对话框的方法结束
            //对话框的方法的开始
            DialogButtonControl(){ 
                this.DialogShow=!(this.DialogShow);
            },
            DialogClose(){
                this.DialogShow = false;
            },
            ButtonCenterEvent(){
                this.DialogShow = false;
                console.log('这是填写一个按钮的对话框的事件')
            },
            ButtonRightEvent(){
                this.DialogShow = false;
                console.log('这里填写两个按钮的对话框的右按钮事件')
            },
            ButtonLeftEvent(){
                this.DialogShow = false;
                console.log('这里填写两个按钮的对话框的左按钮事件')
            }

        },
        mounted() {
           
           
        },

    }
</script>

<style scoped>
    .noshow{
        position: relative;


    }
</style>