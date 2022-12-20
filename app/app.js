//const { createApp } = Vue
const app = Vue.createApp({
    data() {
        return {
            front: true,
            screen: false,
            pageEnd: false,
            loading: false,
            leftCountQiestion: 3,
            /**********/
            questionsList: [],
            curentQuestionData: 0,
            curentQuestionPosition: 0,
            curentQuestion: 0,
            questionStatus: true,
            controlSelectedData: 0,
            curentGridSize: '',
            supportInfo: false,
            qOpacity: false,
            /**********/
            additionalModal: false,
            referencesModal: false,
            /**********/
            pagesModal: false,
            pageStudyDesign: false,
            pageSafetyProfile: false,
            pagePI: false,
            /**********/
            timer: false,
            timerOn: false,
            timerTimeout: null,
            timerIndicator: 30,
            timerInterval: null,
            /**********/
            startPull: false,
            slStatus: false,
            slIndicatorLeft: '150',
            /**********/
            questionFinish: false,
            slFinishLeft: 500,
            slFinishStatus: false,
            /**********/
            navigation: false,
            pageLogo: false,
        }
    },
    /*********************************************************************************/
    components: {},
    /*********************************************************************************/
    mounted() {
        this.beginApp()
        this.getDataFromWindow();
    },
    /*********************************************************************************/
    watch: {
        timerIndicator(time) {
            if (time === 0) {
                this.reloadApp()
            }
        }
    },
    /*********************************************************************************/
    destroyed() {
        this.stopTimer()
        this.stopTimeOut()
    },
    /*********************************************************************************/
    methods: {
        toFormData: function (obj) {
            var form_data = new FormData();
            for (var key in obj) {
                form_data.append(key, obj[key]);
            }
            return form_data;
        },

        beginApp() {
            gtag('event', 'tyk_screen_view', {
                'app_name': 'TYK UEG',
                'screen_name': 'ScreenSaver',
            });

            var formData = new FormData();
            formData.append('event', 'tyk_screen_view');
            formData.append('app_name', 'TYK UEG');
            formData.append('screen_name', 'ScreenSaver');
            axios.post("vendor/analytics.php?action=tykscreenview", formData)
                .then(response => {
                    if (response.data.error) {
                        console.log(response.data.message)
                    } else {
                    }
                });
        },
        clickApp() {
            this.startTimer(true)
        },
        editorGridSize(curent) {
            if (this.questionsList[curent].gridSize == '%') {
                return this.questionsList[curent].gridSize
            } else if (this.questionsList[curent].gridSize == 'day' || this.questionsList[curent].gridSize == 'year') {

                if (this.controlSelectedData == '1') {
                    return ' ' + this.questionsList[curent].gridSize
                } else {
                    return ' ' + this.questionsList[curent].gridSize + 's'
                }
            }
        },
        getDataFromWindow() {
            const dataList = [window.Q1, window.Q2, window.Q3, window.Q4];

            this.questionsList = [...dataList];
        },
        loadApp() {
            this.leftCountQiestion = 3;
            this.front = false;
            this.screen = true;
            this.startPull = true;
            this.curentQuestion = 0;
            this.controlSelectedData = this.questionsList[this.curentQuestion].indicatorBase
            this.curentGridSize = this.editorGridSize(0)
            this.curentQuestionData = this.questionsList[0].indicatorBase
            this.curentQuestionPosition = this.questionsList[0].basePosPersent
            this.navigation = true
            this.pageLogo = true
            /**********************/
            gtag('event', 'tyk_journey', {
                'button_name': 'TYK_START_Button',
                'action': 'Click',
                'value': 1,
            });

            var formData = new FormData();
            formData.append('event', 'tyk_journey');
            formData.append('button_name', 'TYK_START_Button');
            formData.append('action', 'Click');
            formData.append('value', '1');
            axios.post("vendor/analytics.php?action=tykjourney", formData)
                .then(response => {
                    if (response.data.error) {
                        console.log(response.data.message)
                    } else {
                    }
                });
        },
        endApp() {
            this.reloadApp()

            /*******************/
            gtag('event', 'tyk_journey', {
                'button_name': 'TYK_CLOSE_SESSION_Button',
                'action': 'Click',
                'value': 1,
            });

            var formData = new FormData();
            formData.append('event', 'tyk_journey');
            formData.append('button_name', 'TYK_CLOSE_SESSION_Button');
            formData.append('action', 'Click');
            formData.append('value', '1');
            axios.post("vendor/analytics.php?action=tykjourney", formData)
                .then(response => {
                    if (response.data.error) {
                        console.log(response.data.message)
                    } else {
                    }
                });

        },
        logoFn() {
            this.reloadApp()
        },
        loadPull() {
            this.startPull = false;
            this.startTimer(true)
        },
        resetFn(curentQuestion) {
            this.questionsList[curentQuestion].controlBaseData = this.curentQuestionData
            this.questionsList[curentQuestion].basePosPersent = this.curentQuestionPosition
            this.$refs.child1.startPos();
            /**********************/
            let question = Number(curentQuestion) + Number(1)
            let btnName = 'TYK_Q' + question + '_RESET_Button';
            gtag('event', 'tyk_journey', {
                'button_name': btnName,
                'action': 'Click',
                'value': 1,
            });

            var formData = new FormData();
            formData.append('event', 'tyk_journey');
            formData.append('button_name', btnName);
            formData.append('action', 'Click');
            formData.append('value', '1');
            axios.post("vendor/analytics.php?action=tykjourney", formData)
                .then(response => {
                    if (response.data.error) {
                        console.log(response.data.message)
                    } else {
                    }
                });

        },
        ansverFn(curentQuestion, ansver) {
            setTimeout(() => {
                this.supportInfo = true
                this.questionStatus = false
                this.curentGridSize = this.editorGridSize(curentQuestion)
            }, 300);
            /*******/
            let question = Number(curentQuestion) + Number(1)
            let btnName = 'TYK_Q' + question + '_ANSWER_Button';
            gtag('event', 'tyk_journey', {
                'button_name': btnName,
                'action': 'Click',
                'value': 1,
            });

            var formData = new FormData();
            formData.append('event', 'tyk_journey');
            formData.append('button_name', btnName);
            formData.append('action', 'Click');
            formData.append('value', '1');
            axios.post("vendor/analytics.php?action=tykjourney", formData)
                .then(response => {
                    if (response.data.error) {
                        console.log(response.data.message)
                    } else {
                    }
                });

            /****************/
            let qType = 'Slider';
            if (curentQuestion == 0) { //answer 1
                var qName = 'Question One';
                var aUnit = 'days';
                var correctValue = '3';
                var inputValue = ansver;
            } else if (curentQuestion == 1) {//answer 2
                var qName = 'Question Two';
                var aUnit = 'percentage';
                var correctValue = '35';
                var inputValue = ansver;
            } else if (curentQuestion == 2) {//answer 3
                var qName = 'Question Three';
                var aUnit = 'years';
                var correctValue = '7,8';
                var inputValue = ansver;
            } else if (curentQuestion == 3) {//answer 4
                var qName = 'Question Four';
                var aUnit = 'percentage';
                var correctValue = '83';
                var inputValue = ansver;
            }
            gtag('event', 'tyk_answers', {
                'action': 'submit',
                'question_name': qName,
                'answer_type': qType,
                'answer_unit': aUnit,
                'answer_correct_value': correctValue,
                'answer_input_value': inputValue,
            });

            var formData = new FormData();
            formData.append('event', 'tyk_answers');
            formData.append('action', 'submit');
            formData.append('question_name', qName);
            formData.append('answer_type', qType);
            formData.append('answer_unit', aUnit);
            formData.append('answer_correct_value', correctValue);
            formData.append('answer_input_value', inputValue);

            axios.post("vendor/analytics.php?action=tykanswers", formData)
                .then(response => {
                    if (response.data.error) {
                        console.log(response.data.message)
                    } else {
                    }
                });

        },
        selectedDataFn(data) {
            this.controlSelectedData = data
        },
        /** modals **/
        startPullFn() {
            this.closeModalFn()
            this.startPull = true
            /**********************/
            gtag('event', 'tyk_screen_view', {
                'app_name': 'TYK UEG',
                'screen_name': 'Tip',
            });

            var formData = new FormData();
            formData.append('event', 'tyk_screen_view');
            formData.append('app_name', 'TYK UEG');
            formData.append('screen_name', 'Tip');
            axios.post("vendor/analytics.php?action=tykscreenview", formData)
                .then(response => {
                    if (response.data.error) {
                        console.log(response.data.message)
                    } else {
                    }
                });
        },
        studyDesignFn() {
            this.closeModalFn()
            this.pagesModal = true
            this.pageStudyDesign = true
            gtag('event', 'tyk_screen_view', {
                'app_name': 'TYK UEG',
                'screen_name': 'StudyDesign',
            });

            var formData = new FormData();
            formData.append('event', 'tyk_screen_view');
            formData.append('app_name', 'TYK UEG');
            formData.append('screen_name', 'StudyDesign');
            axios.post("vendor/analytics.php?action=tykscreenview", formData)
                .then(response => {
                    if (response.data.error) {
                        console.log(response.data.message)
                    } else {
                    }
                });

        },
        safetyProfileFn() {
            this.closeModalFn()
            this.pagesModal = true
            this.pageSafetyProfile = true
            gtag('event', 'tyk_screen_view', {
                'app_name': 'TYK UEG',
                'screen_name': 'SafetyProfile',
            });

            var formData = new FormData();
            formData.append('event', 'tyk_screen_view');
            formData.append('app_name', 'TYK UEG');
            formData.append('screen_name', 'SafetyProfile');
            axios.post("vendor/analytics.php?action=tykscreenview", formData)
                .then(response => {
                    if (response.data.error) {
                        console.log(response.data.message)
                    } else {
                    }
                });
        },
        PIFn() {
            this.closeModalFn()
            this.pagesModal = true
            this.pagePI = true
            /**********************/
            gtag('event', 'tyk_screen_view', {
                'app_name': 'TYK UEG',
                'screen_name': 'PrescriptionInformation',
            });

            var formData = new FormData();
            formData.append('event', 'tyk_screen_view');
            formData.append('app_name', 'TYK UEG');
            formData.append('screen_name', 'PrescriptionInformation');
            axios.post("vendor/analytics.php?action=tykscreenview", formData)
                .then(response => {
                    if (response.data.error) {
                        console.log(response.data.message)
                    } else {
                    }
                });
        },
        additionalFn(curentQuestion) {
            this.closeModalFn()
            this.additionalModal = true
            /*******/
            let question = Number(curentQuestion) + Number(1)
            let btnName = 'TYK_Q' + question + '_AI_Button';
            gtag('event', 'tyk_journey', {
                'button_name': btnName,
                'action': 'Click',
                'value': 1,
            });

            var formData = new FormData();
            formData.append('event', 'tyk_journey');
            formData.append('button_name', btnName);
            formData.append('action', 'Click');
            formData.append('value', '1');
            axios.post("vendor/analytics.php?action=tykjourney", formData)
                .then(response => {
                    if (response.data.error) {
                        console.log(response.data.message)
                    } else {
                    }
                });

        },

        referencesFn(curentQuestion) {
            this.closeModalFn()
            this.referencesModal = true
            /****************/
            let question = Number(curentQuestion) + Number(1)
            let btnName = 'TYK_Q' + question + '_REFERENCE_Button';
            gtag('event', 'tyk_journey', {
                'button_name': btnName,
                'action': 'Click',
                'value': 1,
            });

            var formData = new FormData();
            formData.append('event', 'tyk_journey');
            formData.append('button_name', btnName);
            formData.append('action', 'Click');
            formData.append('value', '1');
            axios.post("vendor/analytics.php?action=tykjourney", formData)
                .then(response => {
                    if (response.data.error) {
                        console.log(response.data.message)
                    } else {
                    }
                });
        },
        closeModalFn() {
            this.startPull = false
            this.additionalModal = false
            this.referencesModal = false
            this.pagesModal = false
            this.pageStudyDesign = false
            this.pageSafetyProfile = false
            this.pagePI = false
        },
        closeAdditionalModalFn() {
            this.closeModalFn()
        },
        closeReferencesModalFn() {
            this.closeModalFn()
        },
        closePagesModalFn() {
            this.closeModalFn()
        },

        nextQuestionFn(curentQuestion) {
            this.qOpacity = true
            if (this.questionsList.length == curentQuestion + 1) {
                setTimeout(() => {
                    this.questionFinish = true
                    this.supportInfo = false
                    this.questionStatus = false
                    this.qOpacity = false
                    /****************/
                    let question = Number(curentQuestion) + Number(1)
                    let btnName = 'TYK_Q' + question + '_RESULTS_Button';
                    gtag('event', 'tyk_journey', {
                        'button_name': btnName,
                        'action': 'Click',
                        'value': 1,
                    });

                    var formData = new FormData();
                    formData.append('event', 'tyk_journey');
                    formData.append('button_name', btnName);
                    formData.append('action', 'Click');
                    formData.append('value', '1');
                    axios.post("vendor/analytics.php?action=tykjourney", formData)
                        .then(response => {
                            if (response.data.error) {
                                console.log(response.data.message)
                            } else {
                            }
                        });

                }, 600);
            } else {
                setTimeout(() => {
                    this.qOpacity = false
                    this.curentQuestion = Number(curentQuestion) + 1
                    this.supportInfo = false
                    this.questionStatus = true
                    this.leftCountQiestion = this.questionsList.length - this.curentQuestion - 1
                    this.curentQuestionData = this.questionsList[curentQuestion + 1].controlBaseData
                    this.curentQuestionPosition = this.questionsList[curentQuestion + 1].basePosPersent
                    /*******/
                    let question = Number(curentQuestion) + Number(1)
                    let btnName = 'TYK_Q' + question + '_NEXT_Button';
                    gtag('event', 'tyk_journey', {
                        'button_name': btnName,
                        'action': 'Click',
                        'value': 1,
                    });

                    var formData = new FormData();
                    formData.append('event', 'tyk_journey');
                    formData.append('button_name', btnName);
                    formData.append('action', 'Click');
                    formData.append('value', '1');
                    axios.post("vendor/analytics.php?action=tykjourney", formData)
                        .then(response => {
                            if (response.data.error) {
                                console.log(response.data.message)
                            } else {
                            }
                        });

                }, 600);
            }
        },

        /**************************************/
        /**************************************/
        sFinishEnter() {
            this.slFinishStatus = true
        },
        sFinishLeave() {
            this.slFinishStatus = false
            if (this.slFinishLeft <= 250) {
                this.slFinishLeft = 0
            } else if (this.slFinishLeft >= 750) {
                this.slFinishLeft = 1000
            } else {
                this.slFinishLeft = 500
            }
        },
        sFinishUpdateTouch(event) {
            let curentPos = event.touches[0].clientX;
            this.slFinishUpdate(curentPos)
        },
        sFinishUpdateMous(event) {
            let curentPos = event.clientX;
            this.slFinishUpdate(curentPos)
        },
        slFinishUpdate(curentPos) {
            var widthCss = 1000;
            if (this.slFinishStatus == true) {
                let obj = this.$refs['controlF']
                let objSet = obj.getBoundingClientRect()
                let posStart = objSet.x
                let posFinish = Number(posStart) + Number(widthCss);
                if (curentPos < posStart || curentPos > posFinish) {
                } else {
                    this.slFinishLeft = curentPos - posStart;

                }
            }
        },


        /**************************************/
        finishPull() {
            gtag('event', 'tyk_journey', {
                'button_name': 'TYK_FINISH_Button',
                'action': 'Click',
                'value': 1,
            });

            var formData = new FormData();
            formData.append('event', 'tyk_journey');
            formData.append('button_name', 'TYK_FINISH_Button');
            formData.append('action', 'Click');
            formData.append('value', '1');
            axios.post("vendor/analytics.php?action=tykjourney", formData)
                .then(response => {
                    if (response.data.error) {
                        console.log(response.data.message)
                    } else {
                    }
                });

            /*******************/
            gtag('event', 'tyk_screen_view', {
                'app_name': 'TYK UEG',
                'screen_name': 'Congratulation',
            });

            var formData = new FormData();
            formData.append('event', 'tyk_screen_view');
            formData.append('app_name', 'TYK UEG');
            formData.append('screen_name', 'Congratulation');
            axios.post("vendor/analytics.php?action=tykscreenview", formData)
                .then(response => {
                    if (response.data.error) {
                        console.log(response.data.message)
                    } else {
                    }
                });
            /*******************/
            let qType = 'Option';
            var qName = 'Questionnair Results';
            var aUnit = 'Selection';
            var correctValue = 'N/A';
            if (this.slFinishLeft == 0) {
                var inputValue = 'Not Changed';
            } else if (this.slFinishLeft == 500) {
                var inputValue = 'Somewhat improved';
            } else if (this.slFinishLeft == 1000) {
                var inputValue = 'Greatly improved';
            }
            gtag('event', 'tyk_answers', {
                'action': 'submit',
                'question_name': qName,
                'answer_type': qType,
                'answer_unit': aUnit,
                'answer_correct_value': correctValue,
                'answer_input_value': inputValue,
            });

            var formData = new FormData();
            formData.append('event', 'tyk_answers');
            formData.append('action', 'submit');
            formData.append('question_name', qName);
            formData.append('answer_type', qType);
            formData.append('answer_unit', aUnit);
            formData.append('answer_correct_value', correctValue);
            formData.append('answer_input_value', inputValue);

            axios.post("vendor/analytics.php?action=tykanswers", formData)
                .then(response => {
                    if (response.data.error) {
                        console.log(response.data.message)
                    } else {
                    }
                });

            /*******************/
            this.reloadApp()
            this.front = false
            this.pageEnd = true;
        },
        /**************************************/
        startTimerFn() {
            this.timerInterval = setInterval(() => {
                this.timerIndicator--
            }, 1000)
        },
        stopTimer() {
            clearInterval(this.timerInterval)
        },
        startTimeOut() {
            this.timerTimeout = setTimeout(() => {
                this.timer = true
                this.stopTimer()
                this.startTimerFn()
            }, 120000);  //   5000
        },
        stopTimeOut() {
            clearTimeout(this.timerTimeout)
        },
        startTimer(timer) {
            this.timerOn = timer;
            this.timerIndicator = 30
            this.stopTimer()
            this.stopTimeOut()
            if (this.front != true) {
                if (this.timerOn == true) {
                    this.stopTimer()
                    this.startTimeOut()
                } else {
                    this.timer = false
                    this.stopTimer()
                    this.stopTimeOut()
                }
            }
        },
        hideTimer() {
            this.timer = false
            this.startTimer(true)
        },
        reloadApp() {
            this.supportInfo = false
            this.timer = false
            this.front = true
            this.screen = false
            this.navigation = false
            this.pageLogo = false
            this.startPull = false
            this.questionFinish = false
            this.pageEnd = false;
            this.curentQuestion = 0
            this.questionStatus = true
            this.slFinishLeft = 500,
                this.leftCountQiestion = 3
            this.closeModalFn()
            this.startTimer(false)
        },


    } /* methods /*/
})


// Registering a global custom directive`v-focus`
app.directive('scroll', {
    // When the anchored element is mounted in DOM...
    mounted(el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                el.removeEventListener('scroll', f);
            }
        };
        el.addEventListener('scroll', f);
    }
})


