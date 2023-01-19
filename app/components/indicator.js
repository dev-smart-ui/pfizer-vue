app.component("indicator", {
  props: ["item"],
  data() {
    return {
      statusControl: false,
      widthIndicator: 882,
      indicatorGrid: this.item.indicatorGrid,
      // basePosPersent: this.item.basePosPersent,
      startSectorPainted: 2000,
      sectorPainted: 0,
      isActive: false,
      controlLeft: 0,
      controlTop: 0,
      // controlCurentData:  this.item.controlBaseData,
      currentGridSize: this.item.gridSize,

      dimX: "",
      data: window.BASE_INFO,
    };
  },
  mounted() {
    this.startPos();
  },
  methods: {
    startPos() {
      var widthCss = this.widthIndicator;
      this.controlLeft = widthCss * this.item.basePosPercent;
      this.sectorPainted = sectorPaintedFN(
        this.controlLeft,
        widthCss,
        this.startSectorPainted
      );
      this.controlTop = controlTopFN(this.controlLeft, widthCss);
      /************/
      let R = radiusFN(widthCss);
      let curentLendth = widthCss - this.controlLeft;
      let angelFullTriangel =
        (2 * Math.asin(widthCss / (2 * R)) * 180) / Math.PI;
      let okrL = (Math.PI * R * angelFullTriangel) / 180; // lendth okruznost
      let yTriangel =
        R -
        verticalHordaFN(R, widthCss, widthCss) -
        (R - verticalHordaFN(R, widthCss, curentLendth));
      let curentHorda = Math.sqrt(
        curentLendth * curentLendth + yTriangel * yTriangel
      );
      let radCurent = (2 * Math.asin(curentHorda / (2 * R)) * 180) / Math.PI;
      let curOkrL = (Math.PI * R * radCurent) / 180; // lendth okruznost
      this.item.controlBaseData = Math.round(
        this.indicatorGrid - (curOkrL * this.indicatorGrid) / okrL
      );
      /************/
      //this.item.controlBaseData = Math.round(this.indicatorGrid * this.controlLeft / widthCss) ;
      this.$emit("selectedData", this.item.controlBaseData);
    },

    mouseEnter() {
      this.statusControl = true;
    },
    mouseLeave() {
      this.statusControl = false;
    },
    updateControlTouch(event) {
      let curentPos = event.touches[0].clientX;
      this.updateControl(curentPos);
    },
    updateControlMous(event) {
      let curentPos = event.clientX;
      this.updateControl(curentPos);
    },
    updateControl(curentPos) {
      if (this.statusControl == true) {
        let obj = this.$refs["controlW"];
        let objSet = obj.getBoundingClientRect();
        let posStart = objSet.x;
        var widthCss = this.widthIndicator;
        let posFinish = Number(posStart) + Number(widthCss);
        if (curentPos < posStart || curentPos > posFinish) {
        } else {
          this.controlLeft = curentPos - posStart;
          this.sectorPainted = sectorPaintedFN(
            this.controlLeft,
            widthCss,
            this.startSectorPainted
          );
          this.controlTop = controlTopFN(this.controlLeft, widthCss);
          /************/
          let R = radiusFN(widthCss);
          let curentLendth = widthCss - this.controlLeft;
          let angelFullTriangel =
            (2 * Math.asin(widthCss / (2 * R)) * 180) / Math.PI;
          let okrL = (Math.PI * R * angelFullTriangel) / 180; // lendth okruznost
          let yTriangel =
            R -
            verticalHordaFN(R, widthCss, widthCss) -
            (R - verticalHordaFN(R, widthCss, curentLendth));
          let curentHorda = Math.sqrt(
            curentLendth * curentLendth + yTriangel * yTriangel
          );
          let radCurent =
            (2 * Math.asin(curentHorda / (2 * R)) * 180) / Math.PI;
          let curOkrL = (Math.PI * R * radCurent) / 180; // lendth okruznost
          this.item.controlBaseData = Math.round(
            this.indicatorGrid - (curOkrL * this.indicatorGrid) / okrL
          );
          /************/
          //this.item.controlBaseData = Math.round(this.indicatorGrid * this.controlLeft / widthCss) ;
          this.$emit("selectedData", this.item.controlBaseData);
        }
      }
    } /* updateControl /*/,

    editorGridSize() {
      if (this.currentGridSize == "%") {
        return this.currentGridSize;
      } else if (this.currentGridSize === "day") {
        return this.item.controlBaseData === 1 ? this.data.day : this.data.days;
      } else if (this.currentGridSize === "year") {
        return this.item.controlBaseData === 1
          ? this.data.year
          : this.data.years;
      }
    },
  },
  template: `      
        <div style="height: 100%;"  @mouseup = "mouseLeave" @touchend = "mouseLeave">
            <div class="out-circle-bg">
                <svg viewBox="0 0 388 388">
                    <circle cx="194" cy="194" r="169" stroke="#000000" stroke-width="19" fill-opacity="0" style="stroke-dashoffset: 1717px;"></circle>
                </svg>
            </div>
           
            <div class="q-circle-bg">
                <svg viewBox="0 0 388 388">
                    <circle cx="194" cy="194" r="169" stroke="#000000" stroke-width="19" fill-opacity="0" style="stroke-dashoffset: 1717px;"></circle>
                </svg>
            </div> 
            <div class="q-circle-sector" >
                <svg viewBox="0 0 388 388" >
                    <circle cx="194" cy="194" ref="controlRad" r="169" stroke="#000000" stroke-width="19" fill-opacity="0" 
                    v-bind:style="{ 'stroke-dashoffset': sectorPainted + 'px'}" ></circle>
                </svg>
            </div>
            <div class="control-corners">
                <div class="control-corner-left"></div>
                <div class="control-corner-right"></div>
            </div>
            <div class="control-w" ref="controlW" :class="{ 'active': isActive }"  
                @touchmove ="updateControlTouch" @mousemove="updateControlMous">
                <div class="control" @mousedown = "mouseEnter"  @touchstart = "mouseEnter" v-bind:style="{ left: controlLeft + 'px', top: controlTop + 'px'}"></div>
            </div>            
            <div class="control-current-data" >
                <div class="data">{{ item.controlBaseData }}{{ editorGridSize() }}</div>                
            </div>           
        </div>
     `,
});
