app.component('study-design', {
    data() {
        return {
            analyticSender: false,
            data: window.STUDY_DESIGN,
        }
    },
    template: `    
        <div style="height: 100%;position: relative;overflow: hidden;">  
            <div class="title"><h3 v-html="data.title"></h3></div>
            <div v-html='data.info'></div>      
            </div>
        </div>
    `
}),


    app.component('safety-profile', {
        data() {
            return {
                data: window.SAFETY_PROFILE
            }
        },
        template: `     
        <div style="height: 100%;position: relative;overflow: hidden;">  
            <div class="title"><h3 v-html="data.title"></h3></div>
            <div v-html="data.info"></div>
        </div>
        
    `
    }),

    app.component('p-i', {
        data() {
            return {
                data: window.PI
            }
        },
        template: `    
        <div style="height: 100%;position: relative;overflow: hidden;">  
            <div class="title"><h3 v-html="data.title"></h3></div>
            <div v-html="data.info"></div>
        </div>
    `
    })



