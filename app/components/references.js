const reference1  = `  
    <ol>
        <li><span>Sandborn WJ, et al. <em>N Engl J Med.</em> 2017;376:1723–1736.</span></li>
        <li><span>Sandborn WJ, et al. <em>N Engl J Med.</em> 2017;376:1723–1736 [Supplementary appendix].</span></li>
        <li><span>Hanauer S, et al. <em>Clin Gastroenterol Hepatol.</em> 2019;17:139–147.</span></li>
        <li><span>XELJANZ (tofacitinib citrate) Summary of Product Characteristics. Brussels, Belgium: Pfizer Ltd; July 2022.</span></li>
    </ol> 
`;
const reference2  = `
    <ol>
        <li><span>Sandborn WJ, et al. <em>N Engl J Med.</em> 2017;376:1723–1736.</span></li>
        <li><span>Sandborn WJ, et al. <em>Clin Gastroenterol Hepatol.</em> 2022;20:591–601.e8.</span></li>
        <li><span>XELJANZ (tofacitinib citrate) Summary of Product Characteristics. Brussels, Belgium: Pfizer Ltd; July 2022.</span></li>
        <li><span>Sandborn WJ, et al. <em>N Engl J Med.</em> 2017;376:1723–1736. [Supplementary appendix].</span></li>
    </ol>
`;

const reference3  = `
 <ol>
    <li><span>Sandborn WJ, et al. <em>Am J Gastroenterol.</em> 2021;116:S360. Abstract S777.</span></li>
    <li><span>Burmester GR, et al. <em>RMD Open.</em> 2021;7:e001595.</span></li>
    <li><span>Sandborn WJ, et al. <em>Clin Gastroenterol Hepatol.</em> 2022;20:591–601.e8.</span></li>
    <li><span>XELJANZ (tofacitinib citrate) Summary of Product Characteristics. Brussels, Belgium: Pfizer Ltd; July 2022.</span></li>
    <li><span>Sandborn WJ, et al. <em>Aliment Pharmacol Ther.</em> 2022;55:464-478.</span></li>
    <li><span>Sandborn WJ, et al. <em>N Engl J Med.</em> 2017;376:1723–1736. </span></li>    
    <li><span>Ytterberg SR, et al. <em>N Engl J Med.</em> 2022;386:316–326.</span></li>
    <li><span>Ytterberg SR, et al. <em>N Engl J Med.</em> 2022;386:316–326 [Supplementary appendix].</span></li>
 </ol>
`;

const reference4  = `
    <ol>
        <li><span>Colombel JF, et al. <em>Clin Gastroenterol Hepatol.</em> 2022;20:116–125.e5.</span></li>
        <li><span>XELJANZ (tofacitinib citrate) Summary of Product Characteristics. Brussels, Belgium: Pfizer Ltd; July 2022.</span></li>
    </ol>
`;
 
 function referencesListFn(id, q_id, title, content){
    return {id, q_id, title, content}
 }

 const referenceArr = [
    referencesListFn( // question 1
        '0',
        '1',
        'References',
        reference1,      
    ),
    referencesListFn( // question 2
        '1',
        '2',
        'References',
        reference2,        
    ),
    referencesListFn( // question 3
        '2',
        '3',
        'References',
        reference3,      
    ),  
    referencesListFn( // question 4
        '3',
        '4',
        'References',
        reference4,      
    ),
 ]
 
 app.component('references', {   
    props: ['id'],
    data() {
        return {
            referenceList: referenceArr, 
            curent: 0,        
        }
    },
    mounted() { 
        this.referenceFn()   
    }, 
    methods: {
        referenceFn(){           
            if(this.id == 0){
                this.curent = 0
            } else if(this.id == 1){
                this.curent = 1
            } else if(this.id == 2){
                this.curent = 2              
            } else if(this.id == 3){               
                this.curent = 3
            }           
        },        
    }, 
   template: `    
     <div style="height: 100%;position: relative;overflow: hidden;">  
         <div class="title"><h3>{{ referenceList[curent].title }}</h3></div>
         <div class="modal-content">
             <div class="content" v-html='referenceList[curent].content'>                   
             </div>
         </div>
     </div>
   `
 })
 
 
 