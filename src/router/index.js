import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main.vue'
import Boot from '@/components/boot.vue'
//iron90 用于测试用  
import Summary from '@/components/summary.vue'
import Dialogtest from '../components/Dialogtest.vue'
import Summary0 from '../components/summaryComponet/Summary0.vue'
//iron90 用于测试结束

Vue.use(Router)

export default new Router({
    routes: [
        //iron90 test my component 
        {
            path: '/summary0',
            name: 'summary0',
            component: Summary0
        },
        {
            path: '/summary',
            name: 'summary',
            component: Summary
        },
        {
            path: '/dialog',
            name: 'dialog',
            component: Dialogtest
        },
        //iron90 test my component over 
        {
            path: '/',
            name: 'boot',
            component: Boot
        },
        {
            path: '/main',
            name: 'main',
            component: Main
        }
    ]
})