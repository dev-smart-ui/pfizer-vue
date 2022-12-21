app.component("additional-info", {
  props: ["id"],
  data() {
    return {
      additionalInfoList: [],
      analyticSender: false,
      data: {
        additional_id: "",
        additional_title: "",
        additional_content: "",
      },
    };
  },
  mounted() {
    this.additionalInfo();
  },
  methods: {
    handleScroll: function (evt, el) {
      let holderHeight = el.clientHeight;
      let holderScrollTop = el.scrollTop;
      let holderScrollHeight = el.scrollHeight;
      let scrolHolder = holderHeight + holderScrollTop;
      if (scrolHolder > holderScrollHeight - 100) {
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
    },
    additionalInfo: function () {
      var th = this;
      fetch("/processing.php?action=additional_info" + th.id)
        .then((response) => {
          return response.json();
          // console.log(variable_test);
          // th.data = variable_test;
        })
        .then((body) => {
          th.data = body.data;
          this.additionalInfoList = {
            id: th.data.additional_id,
            title: th.data.additional_title,
            content: th.data.additional_content,
          };
          // console.log(this.additionalInfoList);
        });
    },
  },
  async created() {
    await this.additionalInfo();
  },

  template: `    
    <div style="height: 100%;position: relative;overflow: hidden;">  
        <div class="title"><h3>{{ additionalInfoList.title }}</h3></div>
        <div class="modal-content" v-scroll="handleScroll">
            <div class="content" v-html='additionalInfoList.content'>                   
            </div>
        </div>
    </div>
  `,
});
