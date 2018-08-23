var Actions = {
	//跳转到哪一个课程模块,比如完形填空,或者听力,,,

	GOTO_LESSONPART({commit},payload){
		commit('gotoLessonPartPage',payload);

	}
}
export default  Actions;
