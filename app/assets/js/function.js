

function verticalHordaFN(R, widthCss, cLeft ){
    let m = Math.sqrt((R * R) - (widthCss - (cLeft * 2)) * (widthCss - (cLeft * 2)) / 4);
    return m;
}
function radiusFN(widthCss){
    let m = (widthCss * widthCss / 4 + 168) / (2* 168)
    return m;
}

function controlTopFN(cLeft, widthCss){
    let R = radiusFN(widthCss);// (widthCss * widthCss / 4 + 168) / (2* 168)    
    //let nHight = R - Math.sqrt((R * R) - (widthCss - (cLeft * 2)) * (widthCss - (cLeft * 2)) / 4);
    let nHight = R - verticalHordaFN(R, widthCss, cLeft)
    return nHight;
}



function sectorPaintedFN(controlLeft, widthCss, startSectorPainted){
    let m = controlLeft * 100 / widthCss          
    let t = 279 * m / 100
    let sector = startSectorPainted - t  
    return sector;
}

function timerSlideMove(event, ){
    let m = controlLeft * 100 / widthCss          
    let t = 279 * m / 100
    let sector = startSectorPainted - t  
    return sector;
}
/*
function timerIntervalFn(data, ){
    setInterval(() => {               
        let h = k-1
        this.timerIndicator = h
        k = h              
      }, 1000  ); 
    return sector;
}
*/
