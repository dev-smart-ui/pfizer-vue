const analyticsScrollHandler = (evt, el) => {
  let holderHeight = el.clientHeight;
  let holderScrollTop = el.scrollTop;
  let holderScrollHeight = el.scrollHeight;
  let scrollHolder = holderHeight + holderScrollTop;
  if (scrollHolder > holderScrollHeight - 100) {
    if (this.analyticSender == false) {
      let question = Number(this.id) + Number(1);
      let btnName = "TYK_Q" + question + "_AI_Scroll";
      gtag("event", "tyk_journey", {
        button_name: btnName,
        action: "Scroll",
        value: 1,
      });
      this.analyticSender = true;
    }
  }
};

app.component("additional-info-1", {
  props: ["id"],
  data() {
    return {
      analyticSender: false,
      data: window.AD1,
    };
  },
  methods: {
    handleScroll: (evt, el) => analyticsScrollHandler(evt, el),
  },
  template: `    
    <div style="height: 100%;position: relative;overflow: hidden;">  
        <div class="title"><h3 v-html="data.title"></h3></div>
        <div class="modal-content" v-scroll="handleScroll">
        <div><h4 v-html="data.mainSubtitle"></h4></div>
           <div class="modal-img">
           <img src="app/images/additional-1-1.jpg" alt="chart_1" style="height: 518px"/>
           </div>
           <p class="bullet" v-html="data.bullet1"></p>
           <ul v-html="data.totalPopulationList"></ul>
           <p class="bullet" v-html="data.bullet2"></p>
           <div class="modal-images">
           <div class="left">
           <h4 v-html="data.subtitle"></h4>
           <div class="modal-img">
           <img src="app/images/additional-1-2.png" alt="chart_2" style="height: 800px" />
           </div>
           </div>
           <div class="right">
           <h4 style="text-align: left;text-transform: uppercase;" v-html="data.subtitle1"></h4>
           <div class="modal-img">
           <img src="app/images/additional-1-3.png" alt="chart_3" style="height: 800px" />
           </div>
           </div>
           </div>
           <p class="bullet" v-html="data.bullet3"></p>
           <p class="bullet" v-html="data.bullet4"></p>
           <div class="small">
           <p v-html="data.smallText"></p>
           </div>
        </div>
    </div>
  `,
});

app.component("additional-info-2", {
  props: ["id"],
  data() {
    return {
      analyticSender: false,
      data: window.AD2,
    };
  },
  methods: {
    handleScroll: (evt, el) => analyticsScrollHandler(evt, el),
  },
  template: ` 
 <div style="height: 100%;position: relative;overflow: hidden;">
 <div class="title"><h3 v-html="data.title"></h3></div>
 <div class="modal-content" v-scroll="handleScroll">
 <div class="modal-images">
        <div class="left">
            <div class="modal-img">
                <img src="app/images/additional-2-1.png" alt="chart_1" style="height: 650px" />
            </div>
        </div>
        <div class="right">
            <div class="modal-img">
                <img src="app/images/additional-2-2.jpg" alt="chart_2" style="height: 650px" />
            </div>
        </div>
      <p class="bullet" v-html="data.bullet1"></p>
      <ul v-html="data.totalPopulationList"></ul>
      <p class="bullet" v-html="data.bullet2"></p>
      <ul v-html="data.totalPopulationList2"></ul>
      <p class="bullet" v-html="data.bullet3"></p>
      <div class="small">
        <p v-html="data.smallText"></p>
      </div>
    </div>
    </div>
</div>
</div>
  `,
});

app.component("additional-info-3", {
  props: ["id"],
  data() {
    return {
      analyticSender: false,
      data: window.AD3,
    };
  },
  methods: {
    handleScroll: (evt, el) => analyticsScrollHandler(evt, el),
  },
  template: `
    <div style="height: 100%;position: relative;overflow: hidden;">
    <div class="title"><h3 v-html="data.title"></h3></div>
        <div class="modal-content" v-scroll="handleScroll">
            <p v-html="data.subtitle"></p>
                <br/>
                <div class="attention">
                <div class="middle">
                <p v-html="data.subtitle1"></p>
                </div>
                </div>
                <br/>
                <br/>
                <p><strong style="font-size: 1.1em;">{{ data.adverseSubtitle }}</strong></p>
                <p class="bullet" v-html="data.bullet1"></p>
                <br/>
                <div class="modal-img">
                <img src="app/images/additional-3-1.jpg" alt="chart_1" style="height: 247px" />
                </div>
                <br/>
                <p>
                <strong style="font-size: 1.2em;">{{ data.subtitle2 }}</strong>
                </p>
                <p class="bullet" v-html="data.bullet2"></p>
                <br/>
                <div class="modal-img">
                <img src="app/images/additional-3-2.jpg" alt="chart_2" style="height: 396px" />
                </div>
                <div class="modal-img">
                <img src="app/images/additional-3-3.jpg" alt="chart_3" style="height: 434px" />
                </div>
                <br/>
                <p>
                <strong style="font-size: 1.1em;">{{ data.subtitle3 }}</strong>
                <br/>
                </p>
                <p class="bullet" v-html="data.bullet3"></p>
                <p>
                <strong style="font-size: 1.1em;">{{ data.subtitle4 }}</strong>
                <br/>
                </p>
                <p class="bullet" v-html="data.bullet4"></p>
                <p class="bullet" v-html="data.bullet5"></p>
                <p>
                <strong style="font-size: 1.1em;">{{ data.subtitle6 }}</strong>
                <br/>
                </p>
                <p class="bullet" v-html="data.bullet6"></p>
                <p class="bullet" v-html="data.bullet7"></p>
                <br/>
                <div class="attention">
                <div class="middle">
                <p v-html="data.middleText"></p>
                </div>
                </div>
                <br/>
                <br/>
                <p><strong style="font-size: 1.1em;color: #ff0148;">{{ data.subtitle8 }}</strong></p>
                <p class="bullet" v-html="data.bullet8"></p>
                <p class="bullet" v-html="data.bullet9"></p>
                <p class="bullet" v-html="data.bullet10"></p>
                <p>
                <strong style="font-size: 1.1em;color: #ff0148;">{{ data.subtitle11 }}</strong>
                </p>
                <p class="bullet" v-html="data.bullet11"></p>
                <p class="bullet" v-html="data.bullet12"></p>
                <p class="bullet" v-html="data.bullet13"></p>
                <div class="modal-images">
                <div class="left">
                <div class="modal-img">
                <img src="app/images/additional-3-4.jpg" alt="chart_4" style="height: 2100px" />
                </div>
                </div>
                <div class="right">
                <div class="modal-img">
                <img src="app/images/additional-3-5.png" alt="chart_5" style="height: 1512px" />
                </div>
                </div>
                </div>
                <div class="small">
                <p v-html="data.smallText1"></p>
                </div>
                <div class="title title-bg" style="height: auto;">
                <h3 style="line-height: 1.2; font-size: 1.7em;" v-html="data.middleTitle"></h3>
                </div>
                <p style="font-size: 1.05em;color: #ff0148;" v-html="data.middleSubtitle"></p>
                <div class="modal-images">
                <div class="left" style="width: 44%;">
                <p class="bullet" style="padding-right: 20px;" v-html="data.bullet14"></p>
                <p class="bullet" style="padding-right: 20px;" v-html="data.bullet15"></p>
                <div class="modal-img"><img src="app/images/q-3-1.jpg" alt="chart_6" style="height: 534px" /></div>
                </div>
                <div class="right" style="width: 56%;"> 
                <div class="modal-img"><img src="app/images/q-3-2.jpg" alt="chart_7" style="height: 834px" /></div>
                </div>
                <div class="small">
                <p v-html="data.smallText2"></p>
                </div>
        </div>
    </div>
`,
});

app.component("additional-info-4", {
  props: ["id"],
  data() {
    return {
      analyticSender: false,
      data: window.AD4,
    };
  },
  methods: {
    handleScroll: (evt, el) => analyticsScrollHandler(evt, el),
  },
  template: `
<div style="height: 100%;position: relative;overflow: hidden;">
<div class="title"><h3 v-html="data.title"></h3></div>
<div class="modal-content" v-scroll="handleScroll">
 <div class="modal-img">
    <img src="app/images/additional-4-1.jpg" alt="chart_1" style="height: 361px" />
    </div>
    <p class="bullet" v-html="data.bullet1"></p>
    <ul v-html="data.list1"></ul>
    <p class="bullet" v-html="data.bullet2"></p>
    <p class="bullet" v-html="data.bullet3"></p>
    <div class="small">
    <p v-html="data.smallText"></p>
    </div>
</div>
</div>
  `,
});
