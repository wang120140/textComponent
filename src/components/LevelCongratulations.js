export default {
    levelK: function() {
        const self = this;

        let currText = "";
        switch (this.currentTabMedalName) {
            case '听力理解':
                let scorelisten = this.totalScoreListen;
                if (scorelisten == 25) {
                    currText = "宝贝，本级别听力测试总共5道题，你全都答对啦，你真的非常优秀，为你点赞！继续保持哦！";
                } else if (scorelisten >= 20 && scorelisten < 25) {
                    currText = "宝贝，本级别听力测试总共5道题，你答对了4道题呢，真是太棒了！再接再厉！";
                } else if (scorelisten >= 15 && scorelisten < 20) {
                    currText = "宝贝，本级别听力测试总共5道题，你答对了3道题，你对本级别的听力掌握尚可，继续努力，你可以做得更好！";
                } else {
                    currText = "宝贝，本级别听力测试总共5道题，答对3题为合格线，这次测试你暂时没有达到，你对本级别的听力掌握还有所欠缺，需要更多的练习，再多多努力哦！";
                }
                return currText;
                break;
            case '单项选择':
                let scoregrammar = this.totalScoreGrammar;
                if (scoregrammar == 25) {
                    currText = "宝贝，本级别词汇测试总共5道题，你全都答对啦，你真的非常优秀，为你点赞！继续保持哦！";
                } else if (scoregrammar >= 20 && scoregrammar < 25) {
                    currText = "宝贝，本级别词汇测试总共5道题，你答对了4道题呢，真是太棒了！再接再厉！";
                } else if (scoregrammar >= 15 && scoregrammar < 20) {
                    currText = "宝贝，本级别词汇测试总共5道题，你答对了3道题，已达到合格线。你对本级别的词汇掌握尚可，继续努力，你可以做得更好！";
                } else {
                    currText = "宝贝，本级别词汇测试总共5道题，答对3题为合格线，这次测试你暂时没有达到，你对本级别的词汇掌握还有所欠缺，需要更多的练习，再多多努力哦！";
                }
                return currText;
                break;
            case '完型填空':
                let scoresentences = this.totalScoreSentences;
                if (scoresentences == 50) {
                    currText = "宝贝，本级别句型测试总共10道题，你全都答对啦，你真的非常优秀，为你点赞！继续保持哦！";
                } else if (scoresentences >= 45 && scoresentences < 50) {
                    currText = "宝贝，本级别句型测试总共10道题，你答对了9道题，你真的非常优秀，为你点赞！继续保持哦！";
                } else if (scoresentences >= 40 && scoresentences < 45) {
                    currText = "宝贝，本级别句型测试总共10道题，你答对了8道题，成绩良好。真是太棒了！再接再厉！";
                } else if (scoresentences >= 35 && scoresentences < 40) {
                    currText = "宝贝，本级别句型测试总共10道题，你答对了7道题，已达到合格线。你对本级别的句型掌握尚可，继续努力，你可以做得更好！";
                } else if (scoresentences >= 30 && scoresentences < 35) {
                    currText = "宝贝，本级别句型测试总共10道题，你答对了6道题，已达到合格线。你对本级别的句型掌握尚可，继续努力，你可以做得更好！";
                } else {
                    currText = "宝贝，本级别句型测试总共10道题，答对5题为合格线，这次测试你暂时没有达到，你对本级别的句型掌握还有所欠缺，需要更多的练习，再多多努力哦！"
                }
                return currText;

                break;
            default:
                break;
        }
        return currText;
    },

    levelLv2: function() {

        const self = this;
        let currText = '',
            index = 0;

        switch (this.currentTabMedalName) {
            case '听力理解':
                let scorelisten = this.totalScoreListen;

                if (scorelisten == 25) {
                    currText = "宝贝，本级别听力测试总共6道题，你全都答对啦，你真的非常优秀，为你点赞！继续保持哦！";
                } else if (scorelisten >= 15 && scorelisten < 25) {
                    currText = "宝贝，本级别听力测试总共6道题，你答对了5道题，成绩良好。真是太棒了！再接再厉！";
                } else if (scorelisten >= 12 && scorelisten < 15) {
                    currText = "宝贝，本级别听力测试总共8道题，你答对了4道题，已达到合格线。你对本级别的听力掌握尚可，继续努力，你可以做得更好！";
                } else {
                    currText = "宝贝，本级别听力测试总共6道题，答对3题为合格线，这次测试你暂时没有达到，你对本级别的听力掌握还有所欠缺，需要更多的练习，再多多努力哦！";
                }
                return currText;
                break;
            case '阅读理解':
                let scorereading = this.totalScoreReading;
                if (scorereading == 34) {
                    currText = "宝贝，本级别阅读测试总共6道题，你全都答对啦，你真的非常优秀，为你点赞！继续保持哦！";
                } else if (scorereading >= 28 && scorereading < 29) {
                    currText = "宝贝，本级别阅读测试总共6道题，你答对了5道题，成绩良好。真是太棒了！再接再厉！";
                } else if (scorereading >= 22 && scorereading < 24) {
                    currText = "宝贝，本级别阅读测试总共6道题，你答对了4道题，已达到合格线。你对本级别的阅读掌握尚可，继续努力，你可以做得更好！";
                } else {
                    currText = "宝贝，本级别阅读测试总共6道题，答对3题为合格线，这次测试你暂时没有达到，你对本级别的阅读掌握还有所欠缺，再多多努力哦！";
                }
                return currText;
                break;
            case '单项选择':
                let scoregrammar = this.totalScoreGrammar;
                if (scoregrammar == 24) {
                    currText = "宝贝，本级别词汇测试总共6道题，你全都答对啦，你真的非常优秀，为你点赞！继续保持哦！";
                } else if (scoregrammar >= 20 && scoregrammar < 24) {
                    currText = "宝贝，本级别词汇测试总共6道题，你答对了5道题，成绩良好。真是太棒了！再接再厉！";
                } else if (scoregrammar >= 16 && scoregrammar < 20) {
                    currText = "宝贝，本级别词汇测试总共6道题，你答对了4道题，已达到合格线。你对本级别的词汇掌握尚可，继续努力，你可以做得更好！";
                } else {
                    currText = "宝贝，本级别词汇测试总共6道题，答对3题为合格线，这次测试你暂时没有达到，你对本级别的词汇掌握还有所欠缺，再多多努力哦！";
                }
                return currText;
                break;
            case '完型填空':
                let scoresentences = this.totalScoreSentences;
                if (scoresentences >= 24) {
                    currText = "宝贝，本级别句型测试总共6道题，你全都答对啦，你真的非常优秀，为你点赞！继续保持哦！";
                } else if (scoresentences >= 20 && scoresentences < 24) {
                    currText = "宝贝，本级别句型测试总共6道题，你答对了5道题，成绩良好。真是太棒了！再接再厉！";
                } else if (scoresentences >= 16 && scoresentences < 20) {
                    currText = "宝贝，本级别句型测试总共6道题，你答对了4道题，已达到合格线。你对本级别的句型掌握尚可，继续努力，你可以做得更好！";
                } else {
                    currText = "宝贝，本级别句型测试总共6道题，答对3题为合格线，这次测试你暂时没有达到，你对本级别的句型掌握还有所欠缺，再多多努力哦！";
                }
                return currText;

                break;
            default:
                break;
        }
        return currText;

    },


    levelLv4: function() {

        const self = this;
        let currText = '';
        switch (this.currentTabMedalName) {
            case '听力理解':
                let scorelisten = this.totalScoreListen;


                if (scorelisten == 24) {
                    currText = "宝贝，本级别听力测试总共8道题，你全都答对啦，你真的非常优秀，为你点赞！继续保持哦！！";
                } else if (scorelisten >= 21 && scorelisten < 24) {
                    currText = "宝贝，本级别听力测试总共8道题，你答对了7道题，成绩良好。真是太棒了！再接再厉！";
                } else if (scorelisten >= 18 && scorelisten < 21) {
                    currText = "宝贝，本级别听力测试总共8道题，你答对了6道题，已达到合格线。你对本级别的听力掌握尚可，继续努力！";
                } else {
                    currText = "宝贝，本级别听力测试总共8道题，答对5题为合格线，这次测试你暂时没有达到，你对本级别的听力掌握还有所欠缺，需要更多的练习，再多多努力哦！";
                }
                return currText;
                break;
            case '阅读理解':
                let scorereading = this.totalScoreReading;
                if (scorereading == 28) {
                    currText = "宝贝，本级别阅读测试总共9道题，你全都答对啦，你真的非常优秀，为你点赞！继续保持哦！";
                } else if (scorereading >= 24 && scorereading < 28) {
                    currText = "宝贝，本级别阅读测试总共9道题，你答对了8道题，你真的非常优秀，为你点赞！继续保持哦！";
                } else if (scorereading >= 21 && scorereading < 24) {
                    currText = "宝贝，本级别阅读测试总共9道题，你答对了7道题，成绩良好。真是太棒了！再接再厉！";
                } else if (scorereading >= 18 && scorereading < 21) {
                    currText = "宝贝，本级别阅读测试总共9道题，你答对了6道题，已达到合格线。你对本级别的阅读掌握尚可，继续努力，你可以做得更好！";
                } else {
                    currText = "宝贝，本级别阅读测试总共9道题，答对5题为合格线，这次测试你暂时没有达到，你对本级别的阅读掌握还有所欠缺，需要更多的练习！";
                }
                return currText;
                break;
            case '单项选择':
                let scoregrammar = this.totalScoreGrammar;
                if (scoregrammar == 24) {
                    currText = "宝贝，本级别词汇测试总共8道题，你全都答对啦，你真的非常优秀，为你点赞！继续保持哦！";
                } else if (scoregrammar >= 21 && scoregrammar < 24) {
                    currText = "宝贝，本级别词汇测试总共8道题，你答对了7道题，成绩良好。真是太棒了！再接再厉！";
                } else if (scoregrammar >= 18 && scoregrammar < 21) {
                    currText = "宝贝，本级别词汇测试总共8道题，你答对了6道题，已达到合格线。你对本级别的词汇掌握尚可，继续努力，你可以做得更好！";
                } else {
                    currText = "宝贝，本级别词汇测试总共8道题，答对5题为合格线，这次测试你暂时没有达到，你对本级别的词汇掌握还有所欠缺，需要更多的练习，再多多努力哦！";
                }
                return currText;
                break;
            case '完型填空':
                let scoresentences = this.totalScoreSentences;
                if (scoresentences == 24) {
                    currText = "宝贝，本级别句型测试总共8道题，你全都答对啦，你真的非常优秀，为你点赞！继续保持哦！";
                } else if (scoresentences >= 21 && scoresentences < 24) {
                    currText = "宝贝，本级别句型测试总共8道题，你答对了7道题，成绩良好。真是太棒了！再接再厉！";
                } else if (scoresentences >= 18 && scoresentences < 21) {
                    currText = "宝贝，本级别句型测试总共8道题，你答对了6道题，已达到合格线。你对本级别的句型掌握尚可，继续努力，你可以做得更好！";
                } else {
                    currText = "宝贝，本级别句型测试总共8道题，答对5题为合格线，这次测试你暂时没有达到，你对本级别的句型掌握还有所欠缺，需要更多的练习，再多多努力哦！";
                }
                return currText;

                break;
            default:
                break;
        }
        return currText;

    }
}