app.component('indicator-correct', {
    props: ['item'],
    data() {
        return {
            statusControl: false,
            widthIndicator: 882,
            indicatorGrid: this.item.indicatorGrid,
            basePosPercent: this.item.correctPosPercent,
            startSectorPainted: 2000,
            sectorPainted: 0,
            isActive: false,
            controlLeft: 0,
            controlTop: 0,
            baseInfo: window.BASE_INFO

        }
    },
    mounted() {
        this.startPos()
    },
    methods: {
        startPos() {
            var widthCss = this.widthIndicator;
            this.controlLeft = widthCss * this.basePosPercent;
            this.sectorPainted = sectorPaintedFN(this.controlLeft, widthCss, this.startSectorPainted)
            this.controlTop = controlTopFN(this.controlLeft, widthCss);
        },
        editorGridSize() {
            if (this.curentGridSize == '%') {
                return this.curentGridSize
            } else if (this.curentGridSize == 'day' || this.curentGridSize == 'year') {
                if (this.item.controlBaseData == '1') {
                    return ' ' + this.curentGridSize
                } else {
                    return ' ' + this.curentGridSize + 's'
                }
            }
        },
    },
    template: `      
       <div style="height: 100%;"  >
           <div class="q-circle-bg q-circleCorrect-bg">
               <svg viewBox="0 0 388 388">
                   <circle cx="194" cy="194" r="169" stroke="#000000" stroke-width="19" fill-opacity="0" style="stroke-dashoffset: 1717px;"></circle>
               </svg>
           </div>
           <div class="q-circle-sector q-circleCorrect-sector" >
               <svg viewBox="0 0 388 388" >               
                   <circle cx="194" cy="194" ref="controlRad" r="169" stroke="#000000" stroke-width="19" fill-opacity="0" 
                   v-bind:style="{ 'stroke-dashoffset': sectorPainted + 'px'}" ></circle>                   
               </svg>
           </div>
           <div class="control-corners">
               <div class="control-corner-left"></div>
               <div class="control-corner-right"></div>
           </div>
           <div class="control-w controlCorrect-w"  >
               <div class="control" v-bind:style="{ left: controlLeft + 'px', top: controlTop + 'px'}"></div>
           </div>
           <div class="control-current-data" >
                <template v-if="item.id == 1"> 
                    <div class="data">{{ item.indicatorCorrect }}</div>
                </template>
                <template v-else> 
                    <div class="data">{{ item.indicatorCorrect }}</div>
                </template>
                <p v-html="item.answerText"></p>
                <div class="answer-icon-check"><span>{{ baseInfo.correctAnswer }}</span></div>   
            </div>
       </div>
    `
})
