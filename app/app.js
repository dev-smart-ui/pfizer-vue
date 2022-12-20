function questionsFn(
    id,
    title,
    shortInfo,
    baseDescription,
    ansverText,
    grid,
    gridSize,
    indicatorBase,
    indicatorCorect,
    indicatorGrid,
    basePosPersent,
    corectPosPersent
  ){
  return {
    id,
    title,
    shortInfo,
    baseDescription,
    ansverText,
    grid,
    gridSize,
    indicatorBase,
    indicatorCorect,
    indicatorGrid,
    basePosPersent,
    corectPosPersent
  }
}

const ansver1  = `
<sup>a</sup>Remission (primary endpoint) was defined as a total Mayo score ≤2 with no individual subscore >1 and rectal bleeding subscore of 0.<sup>2</sup> 
<br/><sup>b</sup>Includes all patients, TNFi naïve and TNFi exposed.<sup>2</sup> 
<br/><sup>c</sup>Proportion of patients with a reduction from baseline Mayo stool frequency subscore of ≥1 point excludes patients with a baseline Mayo stool frequency subscore of 0.<sup>3</sup> 
<br/><sup>d</sup>Proportion of patients with a reduction from baseline Mayo rectal bleeding subscore of ≥1 point excludes patients with a baseline Mayo rectal bleeding subscore of 0.<sup>3</sup> 
<br/><sup>e</sup>Limitations of post hoc analysis: these analyses were post hoc, and data were based on daily telephone diary entries. Onset of XELJANZ efficacy in the wider population of patients with UC may differ. XELJANZ plasma concentration may not be at steady state until 24 to 48 hours after initial dosing; therefore, these analyses should be interpreted with caution.<sup>3,4</sup>
<br/>BID, twice daily; TNFi, tumour necrosis factor inhibitor; UC, ulcerative colitis.
`;

const ansver2  = `
<strong>Maintenance treatment with XELJANZ 10 mg BID should be limited to patients who are not at increased risk for VTE, who experience a decrease in response on XELJANZ 5 mg BID, or who fail to respond to alternative treatment options <br/> (eg, TNFi therapy). XELJANZ 10 mg BID for maintenance treatment should be used for the shortest duration possible. The lowest effective dose needed to maintain response should be used.<sup>3</sup></strong>
<br/><sup>a</sup>Remission (primary endpoint) was defined as a total Mayo score ≤2 with no individual subscore >1 and rectal bleeding subscore of 0.<sup>4</sup>
<br/><sup>b</sup>Includes all patients, without and with prior TNFi failure.<sup>2</sup>
<br/><sup>c</sup>Sustained steroid-free remission was defined as being in remission and on no corticosteroids for at least 4 weeks prior to the visit at both week 24 and week 52 among those in remission at maintenance baseline.<sup>1,4</sup>
<br/>BID, twice daily; TNFi, tumour necrosis factor inhibitor; UC, ulcerative colitis; VTE, venous thromboembolism.
`;

const ansver3  = `
<sup>a</sup>Limitations of the analysis include the shorter exposure time and relatively small XELJANZ treatment groups in patients with UC compared with the larger safety database available for RA. This limits the precision and interpretation of the IRs determined for events with long latency, that is, malignancies.<sup>2</sup> An additional limitation is the source data from the OLE study. Open-label studies have inherent biases. Treatment and dose were known to investigator and patient; there was no comparator arm and the sample size was small. This analysis should be interpreted with caution while taking these considerations into account.<sup>3</sup>
<br/>AE, adverse event; BID, twice daily; IR, incidence rate; MACE, major adverse cardiovascular event; OI, opportunistic infection; OLE, open-label extension; PY, patient-year;
RA, rheumatoid arthritis; 
UC, ulcerative colitis. 
`;
const ansver4  = `
<sup>a</sup>Remission was defined as a total Mayo score ≤2 with no individual subscore >1 and a rectal bleeding subscore of 0.<sup>1</sup>
<br/><sup>b</sup>Limitations: this is a post hoc analysis of data from an OLE study of XELJANZ in a subpopulation of patients with moderate-to-severe UC meeting remission criteria following completion of the 52-week OCTAVE Sustain study.<sup>1</sup> OLE studies have inherent biases. For this analysis from the OLE study, treatment and dose were known to investigator and patient, there was no comparator arm, and the sample size was small.<sup>1</sup> This analysis should be interpreted with caution while taking these considerations into account.
<br/>BID, twice daily; n, number of patients in the maintenance remission subpopulation with the specified response within the given category; NRI-LOCF, non-responder and last observation carried forward imputation; OLE, open-label extension;<br/> UC, ulcerative colitis. 
`;


const questionsList = [
  questionsFn(
    '0',
    'How rapid was the onset of XELJANZ in significantly reducing stool frequency and rectal bleeding in patients with UC in phase 3 induction studies?',
    'UC, ulcerative colitis.',
    ansver1,
    '<span>XELJANZ 10 mg BID vs placebo:<br/>Stool frequency: 29% vs 18%, respectively; P<0.01<br/>Rectal bleeding: 32% vs 20%, respectively; P<0.01</span>',
    'control-grid-day',
    'day',
    '0', //'8',
    '3 days',
    '15',
    '0', //'0.549',
    '0.17',
  ),
  questionsFn(
    '1',
    'Among patients in remission at maintenance baseline, what proportion of patients with UC on XELJANZ 5 mg BID achieved sustained steroid-free remission through week 52?',
    'BID, twice daily; UC, ulcerative colitis.',
    ansver2,
    '<span>XELJANZ vs placebo, respectively; P<0.001</span>',
    'control-grid-persent',
    '%',
    '0', //'50',
    '35% vs 5%',
    '100',
    '0', //'0.5',
    '0.33',
  ),
  questionsFn(
    '2',
    'Up to how many years does XELJANZ offer long-term<br/> safety data in UC?',
    'UC, ulcerative colitis.',
    ansver3,
    '<span>Median exposure: 1.7 years</span>',
    'control-grid-years',
    'year',
    '0', //'4',
    'Up to 7.8 years',
    '10',
    '0', //'0.38',
    '0.81',
  ),
  questionsFn(
    '3',
    'WHAT PROPORTION OF PATIENTS WITH UC WHO WERE IN REMISSION ON XELJANZ 5 MG BID AT 1 YEAR WERE ABLE TO MAINTAIN REMISSION ON XELJANZ 5 MG BID FOR A FURTHER 2 YEARS?',
    'BID, twice daily; UC, ulcerative colitis.',
    ansver4,
    '(Observed data)',
    'control-grid-persent',
    '%',
    '0', //'50',
    '83%',
    '100',
    '0', //'0.5',
    '0.865',
  )
]

//const { createApp } = Vue
const app = Vue.createApp({
    data() {
      return {
        front: true,
        screen:  false ,
        pageEnd: false,
        loading: false,
        leftCountQiestion: 3,
        /**********/
        questionsList: questionsList,
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
      toFormData: function(obj){	var form_data = new FormData();for ( var key in obj ) {form_data.append(key, obj[key]);} return form_data;},

      beginApp(){
        gtag('event', 'tyk_screen_view', {
          'app_name': 'TYK UEG',
          'screen_name': 'ScreenSaver',
        });

        var formData = new FormData();
        formData.append('event', 'tyk_screen_view');
        formData.append('app_name', 'TYK UEG');
        formData.append('screen_name', 'ScreenSaver');
        axios.post("vendor/analytics.php?action=tykscreenview" , formData)
          .then(response => {
              if(response.data.error){console.log(response.data.message)}
              else{ }
          });
      },
      clickApp(){
        this.startTimer(true)
      },
      editorGridSize(curent) {
        if(this.questionsList[curent].gridSize == '%'){
          return this.questionsList[curent].gridSize
        } else if(this.questionsList[curent].gridSize == 'day' || this.questionsList[curent].gridSize == 'year'){

            if(this.controlSelectedData == '1'){
                return ' ' + this.questionsList[curent].gridSize
            } else {
                return ' ' + this.questionsList[curent].gridSize + 's'
            }
        }
      },
      loadApp(){
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
          axios.post("vendor/analytics.php?action=tykjourney" , formData)
            .then(response => {
                if(response.data.error){console.log(response.data.message)}
                else{ }
            });
      },
      endApp(){
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
          axios.post("vendor/analytics.php?action=tykjourney" , formData)
            .then(response => {
                if(response.data.error){console.log(response.data.message)}
                else{ }
            });

      },
      logoFn(){
        this.reloadApp()
      },
      loadPull(){
        this.startPull = false;
        this.startTimer(true)
      },
      resetFn (curentQuestion) {
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
        axios.post("vendor/analytics.php?action=tykjourney" , formData)
          .then(response => {
              if(response.data.error){console.log(response.data.message)}
              else{ }
          });

      },
      ansverFn (curentQuestion, ansver) {
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
        axios.post("vendor/analytics.php?action=tykjourney" , formData)
          .then(response => {
              if(response.data.error){console.log(response.data.message)}
              else{ }
          });

        /****************/
        let qType = 'Slider';
        if(curentQuestion == 0){ //answer 1
          var qName = 'Question One';
          var aUnit = 'days';
          var correctValue = '3';
          var inputValue = ansver;
        } else if (curentQuestion == 1){//answer 2
          var qName = 'Question Two';
          var aUnit = 'percentage';
          var correctValue = '35';
          var inputValue = ansver;
        } else if (curentQuestion == 2){//answer 3
          var qName = 'Question Three';
          var aUnit = 'years';
          var correctValue = '7,8';
          var inputValue = ansver;
        } else if (curentQuestion == 3){//answer 4
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

        axios.post("vendor/analytics.php?action=tykanswers" , formData)
          .then(response => {
              if(response.data.error){console.log(response.data.message)}
              else{ }
          });

      },
      selectedDataFn (data) {
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
          axios.post("vendor/analytics.php?action=tykscreenview" , formData)
            .then(response => {
                if(response.data.error){console.log(response.data.message)}
                else{ }
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
        axios.post("vendor/analytics.php?action=tykscreenview" , formData)
          .then(response => {
              if(response.data.error){console.log(response.data.message)}
              else{ }
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
        axios.post("vendor/analytics.php?action=tykscreenview" , formData)
          .then(response => {
              if(response.data.error){console.log(response.data.message)}
              else{ }
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
        axios.post("vendor/analytics.php?action=tykscreenview" , formData)
          .then(response => {
              if(response.data.error){console.log(response.data.message)}
              else{ }
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
        axios.post("vendor/analytics.php?action=tykjourney" , formData)
          .then(response => {
              if(response.data.error){console.log(response.data.message)}
              else{ }
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
          axios.post("vendor/analytics.php?action=tykjourney" , formData)
            .then(response => {
                if(response.data.error){console.log(response.data.message)}
                else{ }
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

      nextQuestionFn (curentQuestion) {
        this.qOpacity = true
        if (this.questionsList.length == curentQuestion + 1 ) {
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
              axios.post("vendor/analytics.php?action=tykjourney" , formData)
                .then(response => {
                    if(response.data.error){console.log(response.data.message)}
                    else{ }
                });

          }, 600);
        } else {
          setTimeout(() => {
            this.qOpacity = false
            this.curentQuestion = Number(curentQuestion) + 1
            this.supportInfo = false
            this.questionStatus = true
            this.leftCountQiestion = this.questionsList.length - this.curentQuestion -1
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
              axios.post("vendor/analytics.php?action=tykjourney" , formData)
                .then(response => {
                    if(response.data.error){console.log(response.data.message)}
                    else{ }
                });

          }, 600);
        }
      },

/**************************************/
/**************************************/
sFinishEnter() {
  this.slFinishStatus = true
},
sFinishLeave(){
  this.slFinishStatus = false
  if(this.slFinishLeft <= 250){
    this.slFinishLeft = 0
  } else if(this.slFinishLeft >= 750){
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
   if(this.slFinishStatus == true){
    let obj = this.$refs['controlF']
    let objSet = obj.getBoundingClientRect()
    let posStart = objSet.x
    let posFinish = Number(posStart) + Number(widthCss);
    if(curentPos < posStart || curentPos > posFinish){}else{
      this.slFinishLeft = curentPos - posStart;

    }
   }
 },


/**************************************/
      finishPull(){
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
          axios.post("vendor/analytics.php?action=tykjourney" , formData)
            .then(response => {
                if(response.data.error){console.log(response.data.message)}
                else{ }
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
          axios.post("vendor/analytics.php?action=tykscreenview" , formData)
            .then(response => {
                if(response.data.error){console.log(response.data.message)}
                else{ }
            });
        /*******************/
        let qType = 'Option';
        var qName = 'Questionnair Results';
        var aUnit ='Selection';
        var correctValue = 'N/A';
        if(this.slFinishLeft == 0 ){
          var inputValue = 'Not Changed';
        } else if(this.slFinishLeft == 500 ){
          var inputValue = 'Somewhat improved';
        } else if(this.slFinishLeft == 1000 ){
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

        axios.post("vendor/analytics.php?action=tykanswers" , formData)
          .then(response => {
              if(response.data.error){console.log(response.data.message)}
              else{ }
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
        }, 120000  );  //   5000
      },
      stopTimeOut() {
        clearTimeout(this.timerTimeout)
      },
      startTimer(timer){
        this.timerOn = timer;
        this.timerIndicator = 30
        this.stopTimer()
        this.stopTimeOut()
        if(this.front != true){
          if(this.timerOn == true){
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
    let f = function(evt) {
      if (binding.value(evt, el)) {
        el.removeEventListener('scroll', f);
      }
    };
    el.addEventListener('scroll', f);
  }
})


