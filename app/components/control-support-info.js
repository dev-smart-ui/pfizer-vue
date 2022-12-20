
 const info1  = `    
    <ul>
        <li><strong>Primary endpoint:</strong> remission<sup>a</sup> rates at week 8 for XELJANZ 10 mg BID vs placebo by prior TNFi exposure at baseline:<sup>1,2</sup>
            <ul>
                <li>Total population:<sup>b</sup> 18% vs 6%, respectively</li>
                <li>TNFi-naïve patients: (OCTAVE Induction 1) <br/>25% vs 16%, respectively; (OCTAVE Induction 2) 22% vs 9%, respectively</li>
                <li>Patients with prior TNFi failure: (OCTAVE Induction 1) 11% vs 2%, respectively; (OCTAVE Induction 2) 12% vs 0%, respectively</li>
            </ul>
        </li>
        <li>XELJANZ demonstrated rapid onset, significantly reducing stool frequency<sup>c</sup> and rectal bleeding<sup>d</sup> in as early as 3 days in a post hoc analysis<sup>e</sup> of two phase 3 induction studies<sup>3</sup></li>
        <li>Post hoc analysis<sup>e</sup> in OCTAVE Induction 1 and 2: daily bowel movement data were collected from patients to calculate the Mayo stool frequency and rectal bleeding subscores. For post hoc analyses, baseline values for Mayo subscores were derived using average data from 3 of the   5 days before first dose. Change from baseline was determined based on diary data for each day during the first 15 days of therapy<sup>3</sup></li>        
    </ul>
`;
const info2  = `
<ul>
    <li><strong>Primary endpoint:</strong> XELJANZ 5 mg BID demonstrated durable remission<sup>a</sup> vs placebo at week 52, regardless of prior TNFi status at baseline<sup>1,2</sup>
        <ul>
            <li>Total population:<sup>b</sup> 34% vs 11%, respectively; P<0.001<sup>1,2</sup></li>
            <li>Patients without prior TNFi failure: 42% vs 11%, respectively; P<0.0001<sup>2</sup></li>
            <li>Patients with prior TNFi failure: 24% vs 11%, respectively; P<0.05<sup>2</sup></li>
        </ul>
    </li>
    <li><strong>Key secondary endpoint:</strong> XELJANZ 5 mg BID delivered sustained steroid-free remission<sup>c</sup> vs placebo in OCTAVE Sustain through week 52, regardless of prior TNFi status at baseline<sup>1,2</sup>
        <ul>
            <li>Total population:<sup>b</sup> 35% vs 5%, respectively; P<0.001<sup>1,2</sup></li>
            <li>Patients without prior TNFi failure: 40% vs 5%, respectively; P<0.01<sup>2</sup></li>
            <li>Patients with prior TNFi failure: 22% vs 5%, respectively<sup>2</sup></li>
        </ul>
    </li>
    <li>In a 52-week maintenance study (OCTAVE Sustain),
    patients who had completed the induction studies and
    achieved clinical response were rerandomised to
    XELJANZ 10 mg BID, XELJANZ 5 mg BID,<br/> or placebo (1:1:1
    ratio).<sup>1</sup> For patients with loss of response during
    maintenance treatment, a dosage of 10 mg BID may be
    considered and limited to the shortest duration. The
    primary endpoint was remission. Sustained corticosteroid-free remission
    among patients who were in remission at maintenance-trial
    entry was a key secondary endpoint. Patients were permitted to use stable doses
    of oral aminosalicylates, but initiation of corticosteroid
    tapering was required upon entrance to this study for
    patients who were receiving corticosteroids at baseline.
    Concomitant immunosuppressants (immunomodulators
    or biological therapies) were not permitted<sup>1-3</sup></li>
</ul>
`;
const info3  = `
<ul>
    <li>Across the XELJANZ clinical trial programme, XELJANZ offers up to      7.8 years of long-term safety data in UC (median exposure: 1.7 years)<sup>1,a</sup></li>
    <li>Cohorts analysed were: phase 3 maintenance<br/> (592 patients receiving placebo, XELJANZ 5 mg, or 10 mg BID) and overall (1157 patients receiving XELJANZ 5 mg or 10 mg BID in phase 2/phase 3/OLE studies). Proportions and IRs (unique patients with events per 100 PY of exposure) were evaluated for AEs of special interest. OIs, malignancies, MACE, and gastrointestinal perforations were adjudicated<sup>1</sup></li>
    </ul>
`;
const info4  = `
<ul>
    <li>Among patients in remission<sup>a</sup> on XELJANZ 5 mg BID at week 52 in OCTAVE Sustain, 83% (n=38) maintained remission with XELJANZ    5 mg BID up to 24 months in the OLE study<sup>b</sup> (observed data)<sup>1</sup>
        <ul>
            <li>58% (n=38) maintained remission with XELJANZ 5 mg BID up to 24 months in the OLE study<sup>b</sup> (NRI-LOCF data)<sup>1</sup></li>
        </ul>
    </li>
    <li>Patients in this treatment arm had been in remission<sup>a</sup> on XELJANZ 5 mg BID at week 52 in OCTAVE Sustain<sup>1</sup></li>
    <li>The recommended dose for maintenance treatment is XELJANZ      5 mg BID. When induction treatment is complete, the dosage should be decreased <br/>from 10 mg BID to 5 mg BID<sup>2</sup></li>
</ul>
`;


function infoListFn(id, title, content){
  return {id, title, content}
}
const infoList = [
    infoListFn(
        '0',
        'Supporting information:',
        info1,      
    ),
    infoListFn(
        '1',
        'Supporting information:',
        info2,        
    ),
    infoListFn(
        '2',
        'Supporting information:',
        info3,      
    ),
    infoListFn(
        '3',
        'Supporting information:',
        info4,      
    ),
]

app.component('supporting-info', {
     props: ['id'],
     data() {
         return {
            supportInfoList: infoList,
           
         }
     },
 
     template: `      
        <div class="q-info-holder">
            <h4>{{ supportInfoList[id].title }}</h4>
            <div v-html='supportInfoList[id].content'></div>            
        </div>
     `
 })


 