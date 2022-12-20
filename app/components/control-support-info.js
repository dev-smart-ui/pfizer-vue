app.component('supporting-info', {
     props: ['id'],
     data() {
         return {
            questionsList: [window.Q1, window.Q2, window.Q3, window.Q4],

         }
     },
     template: `      
        <div class="q-info-holder">
            <h4>Supporting information</h4>
            <div v-html='questionsList[id].supportInfo'></div>            
        </div>
     `
 })


