
app.component('control-grid-day', {
   // props: ['dd'],
    data() {
        return {
         
        }
    },
    template: `      
        <transition name="controlGrid">
            <div class="control-grid-holder control-grid-days">                                                       
                <div class="control-grid-item control-grid-item-0"><span>0</span></div>
                <div class="control-grid-item control-grid-item-1"><span>1</span></div>
                <div class="control-grid-item control-grid-item-2"><span>2</span></div>
                <div class="control-grid-item control-grid-item-3"><span>3</span></div>
                <div class="control-grid-item control-grid-item-4"><span>4</span></div>
                <div class="control-grid-item control-grid-item-5"><span>5</span></div>
                <div class="control-grid-item control-grid-item-6"><span>6</span></div>
                <div class="control-grid-item control-grid-item-7"><span>7</span></div>
                <div class="control-grid-item control-grid-item-8"><span>8</span></div>
                <div class="control-grid-item control-grid-item-9"><span>9</span></div>
                <div class="control-grid-item control-grid-item-10"><span>10</span></div>
                <div class="control-grid-item control-grid-item-11"><span>11</span></div>
                <div class="control-grid-item control-grid-item-12"><span>12</span></div>
                <div class="control-grid-item control-grid-item-13"><span>13</span></div>
                <div class="control-grid-item control-grid-item-14"><span>14</span></div>
                <div class="control-grid-item control-grid-item-15"><span>15</span></div>
            </div>
        </transition>
    `
})

app.component('control-grid-persent', {
    // props: ['dd'],
     data() {
         return {
          
         }
     },
     template: `      
         <transition name="controlGrid">
             <div class="control-grid-holder control-grid-persent">                                                       
                 <div class="control-grid-item control-grid-item-0"><span>0</span></div>
                 <div class="control-grid-item control-grid-item-1"><span>10</span></div>
                 <div class="control-grid-item control-grid-item-2"><span>20</span></div>
                 <div class="control-grid-item control-grid-item-3"><span>30</span></div>
                 <div class="control-grid-item control-grid-item-4"><span>40</span></div>
                 <div class="control-grid-item control-grid-item-5"><span>50</span></div>
                 <div class="control-grid-item control-grid-item-6"><span>60</span></div>
                 <div class="control-grid-item control-grid-item-7"><span>70</span></div>
                 <div class="control-grid-item control-grid-item-8"><span>80</span></div>
                 <div class="control-grid-item control-grid-item-9"><span>90</span></div>
                 <div class="control-grid-item control-grid-item-10"><span>100</span></div>
             </div>
         </transition>
     `
 })

 app.component('control-grid-years', {
    // props: ['dd'],
     data() {
         return {
          
         }
     },
     template: `      
         <transition name="controlGrid">
             <div class="control-grid-holder control-grid-years dd">                                                       
                 <div class="control-grid-item control-grid-item-0"><span>0</span></div>
                 <div class="control-grid-item control-grid-item-1"><span>1</span></div>
                 <div class="control-grid-item control-grid-item-2"><span>2</span></div>
                 <div class="control-grid-item control-grid-item-3"><span>3</span></div>
                 <div class="control-grid-item control-grid-item-4"><span>4</span></div>
                 <div class="control-grid-item control-grid-item-5"><span>5</span></div>
                 <div class="control-grid-item control-grid-item-6"><span>6</span></div>
                 <div class="control-grid-item control-grid-item-7"><span>7</span></div>
                 <div class="control-grid-item control-grid-item-8"><span>8</span></div>
                 <div class="control-grid-item control-grid-item-9"><span>9</span></div>
                 <div class="control-grid-item control-grid-item-10"><span>10</span></div>
             </div>
         </transition>
     `
 })
 