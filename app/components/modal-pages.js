app.component("study-design", {
  data() {
    return {
      analyticSender: false,
      data: window.STUDY_DESIGN,
    };
  },
  template: `    
        <div style="height: 100%;position: relative;overflow: hidden;">  
            <div class="title"><h3 v-html="data.title"></h3></div>
            <div class="modal-content" >
                <div class="content">  
                    <div class="modal-img" style="padding-top: 3px;"><img src="app/images/designe-1.jpg"></div>
                    <p v-html="data.subtitle"></p>                 
                        <p class="bullet" style="color: #e90649;" v-html="data.bullet1"></p>
                        <p class="bullet" v-html="data.bullet2"></p>
                        <p class="bullet" v-html="data.bullet3"></p>
                        <p class="bullet" v-html="data.bullet4"></p>
                    <div class="small">  
                        <p v-html="data.smallText1"></p>
                        <p v-html="data.smallText2"></p>
                    </div>                   
                </div>    
        </div>
    `,
}),
  app.component("safety-profile", {
    data() {
      return {
        data: window.SAFETY_PROFILE,
      };
    },
    template: `     
        <div style="height: 100%;position: relative;overflow: hidden;">  
            <div class="title"><h3 v-html="data.title"></h3></div>
            <div class="modal-content">
                <div class="content">
                        <p v-html="data.subtitle"></p>
                        <br/>
                        <div class="attention">
                            <div class="middle"><p v-html="data.attention"></p></div>
                        </div>
                        <br/><br/>
                        <p><strong style="font-size: 1.1em;">{{data.adverseReactions}}</strong></p>
                        <p class="bullet" v-html="data.adverseReactionsBullet"></p>
                        <br/>
                        <div class="modal-img"><img src="app/images/additional-3-1.jpg"></div>
                        <br/>
                        <p><strong style="font-size: 1.1em;">{{data.usePatients}}</strong></p>
                        <p class="bullet" v-html="data.usePatientsBullet"></p>
                        <br/>
                        <div class="modal-img"><img src="app/images/additional-3-2.jpg"></div>
                        
                        <div class="modal-img"><img src="app/images/additional-3-3.jpg"></div>
                        <br/>
                        <p><strong style="font-size: 1.1em;">{{data.hepaticImpairment}}</strong><br/></p>
                            <p class="bullet" v-html="data.hepaticImpairmentBullet"></p>
                            <p><strong style="font-size: 1.1em;">{{data.usePregnancy}}</strong><br/></p>
                            <p class="bullet" v-html="data.usePregnancyBullet1"></p>
                        <p class="bullet" v-html="data.usePregnancyBullet2"></p>
                            <p><strong style="font-size: 1.1em;">{{data.VTE}}</strong><br/></p>    
                            <p class="bullet" v-html="data.VTE_Bullet1"></p> 
                            <p class="bullet" v-html="data.VTE_Bullet2"></p>
                            <br/>
                        <div class="attention">
                            <div class="middle"><p v-html="data.attention2"></p></div>
                        </div>
                        <br/><br/>
                        <p><strong style="font-size: 1.1em;color: #ff0148;">{{data.limitations}}</strong></p>
                            <p class="bullet" v-html="data.limitationsBullet1"></p>    
                            <p class="bullet" v-html="data.limitationsBullet2"></p>    
                            <p class="bullet" v-html="data.limitationsBullet3"></p>    
                            <p><strong style="font-size: 1.1em;color: #ff0148;">{{data.dataSources}}</strong></p>
                            <p class="bullet" v-html="data.dataSourcesBullet1"></p>    
                            <p class="bullet" v-html="data.dataSourcesBullet2"></p>    
                            <p class="bullet" v-html="data.dataSourcesBullet3"></p>
                            <div class="modal-images">
                            <div class="left">       
                                <div class="modal-img"><img src="app/images/additional-3-4.jpg"></div>
                            </div>
                            <div class="right">       
                                <div class="modal-img"><img src="app/images/additional-3-5.png"></div>
                            </div>
                        </div>
                        <div class="small"> 
                            <p v-html="data.smallText"></p>
                        </div> 
                    
                        <br/>
                        <div class="title title-bg" style="height: auto;">
                        <h3 style="line-height: 1.2; font-size: 1.7em;" v-html="data.oralSurveillanceTitle"></h3>
                        </div>
                        <p style="font-size: 1.05em;color: #ff0148;" v-html="data.oralSurveillanceSubtitle"></p>
                        <div class="modal-images">
                            <div class="left"  style="width: 40%;">
                                <p class="bullet" style="padding-right: 20px;" v-html="data.oralSurveillanceBullet1"></p>  
                                <p class="bullet" style="padding-right: 20px;" v-html="data.oralSurveillanceBullet2"></p>       
                                <div class="modal-img"><img src="app/images/sp-3-1.jpg"></div>
                            </div>
                            <div class="right" style="width: 60%;">       
                                <div class="modal-img"><img src="app/images/sp-3-2.jpg"></div>
                            </div>
                        </div>
                        <div class="small"> 
                            <p v-html="data.smallText1"></p>                                         
                            <p v-html="data.smallText2"></p>
                        </div>
                </div>
        </div>
        
    `,
  }),
  app.component("p-i", {
    data() {
      return {
        data: window.PI,
      };
    },
    template: `    
        <div style="height: 100%;position: relative;overflow: hidden;">  
            <div class="title"><h3 v-html="data.title"></h3></div>
            <div class="modal-content">
                <div class="content">  
                    <div class="pi-top">                        
                        <div class="left">
                            <p v-html="data.leftSubtitleText"></p>   
                        </div>
                        <div class="right">
                            <div class="item item1">
                                <img src="app/images/pi-qr-1.png">
                                <p v-html="data.textUnderQrCenter"></p>
                            </div>
                            <div class="item item2">
                                <img src="app/images/pi-qr-2.png">
                                <p v-html="data.textUnderQrRight"></p>
                            </div>
                        </div>                        
                    </div>
                    <div class="pi-content">
                        <p v-html="data.content"></p>
                    </div>                
                </div>
            </div>
        </div>
    `,
  });
