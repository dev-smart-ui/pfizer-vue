app.component('references', {
    props: ['id'],
    data() {
        return {
            questionsList: [window.Q1, window.Q2, window.Q3, window.Q4],
            current: 0,
        }
    },
    mounted() {
        this.referenceFn()
    },
    methods: {
        referenceFn() {
            if (this.id == 0) {
                this.current = 0
            } else if (this.id == 1) {
                this.current = 1
            } else if (this.id == 2) {
                this.current = 2
            } else if (this.id == 3) {
                this.current = 3
            }
        },
    },
    template: `    
     <div style="height: 100%;position: relative;overflow: hidden;">  
         <div class="title"><h3>References</h3></div>
         <div class="modal-content">
             <div class="content" v-html='questionsList[current].references'>                   
             </div>
         </div>
     </div>
   `
})


