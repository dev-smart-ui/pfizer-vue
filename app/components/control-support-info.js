app.component("supporting-info", {
  props: ["id"],
  data() {
    return {
      questionsList: [window.Q1, window.Q2, window.Q3, window.Q4],
      data: window.BASE_INFO,
    };
  },
  template: `      
        <div class="q-info-holder">
            <h4>{{ data.supportingInfo }}</h4>
            <div v-html='questionsList[id].supportInfo'></div>            
        </div>
     `,
});
