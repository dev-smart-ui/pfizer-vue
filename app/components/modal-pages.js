
// safety-data 
//safety-profile
app.component('study-design', {
    data() {
        return {  
            analiticSender: false       
        }
    },     
    template: `    
        <div style="height: 100%;position: relative;overflow: hidden;">  
            <div class="title"><h3>OCTAVE CLINICAL PROGRAMME TRIAL DESIGN<sup>1&ndash;8</sup></h3></div>
            <div class="modal-content" >
                <div class="content">  
                    <div class="modal-img" style="padding-top: 3px;"><img src="app/images/designe-1.jpg"></div>
                    <p><strong>Efficacy and safety established in 3 large, multicentre, randomised, double-blind, placebo-controlled phase 3 studies and an open-label study of patients with moderate to severe UC<sup>7</sup></strong></p>                 
                    
                        <p class="bulet" style="color: #e90649;"><strong>The primary efficacy endpoint in the OCTAVE Induction 1 and 2 trials was remission at week 8, and in the OCTAVE Sustain trial, it was remission at week 52<sup>1,2</sup></strong></p>
                        <p class="bulet">The recommended dose for maintenance treatment is XELJANZ 5 mg BID. When induction treatment is complete, the dosage should be decreased from 10 mg BID to 5 mg BID<sup>7</sup></p>
                        <p class="bulet">Patients who completed one of the OCTAVE Induction studies but did not achieve clinical response, or patients who completed or withdrew early due to treatment failure on XELJANZ 5 mg BID or placebo in the maintenance study, were eligible for the open-label extension study. OCTAVE Open is a safety and tolerability study<sup>4,7</sup></p>
                        <p class="bulet">Patients were assessed using the Mayo scale, a tool for evaluating disease activity in patients with UC that is composed of 4 subscores (stool frequency, rectal bleeding, endoscopic findings, and Physician’s Global Assessment), each with a range of 0 to 3 (higher scores indicate more severe disease)<sup>3,4</sup></p>
                   
                    <div class="small">  
                        <p>
                            <sup>a</sup>The total number of patients does not include those who received XELJANZ 15 mg BID. There were 16 patients in OCTAVE Induction 1 and 6 patients in OCTAVE Induction 2 receiving XELJANZ 15 mg BID.<sup>8</sup> <strong> 15 mg BID dose is not an approved dose for XELJANZ.<sup>7</sup></strong> 
                            <br/><sup>b</sup>Responders/clinical response was defined as patients with a decrease from induction-trial baseline in the total Mayo score of ≥3 points and ≥30%, with an accompanying decrease in the subscore for rectal bleeding of ≥1 point or absolute subscore for rectal bleeding of 0 or 1.<sup>1</sup>
                            <br/><sup>c</sup>Treatment failure was defined as an increase in OCTAVE Sustain baseline total Mayo score of ≥3 points, plus an increase in rectal bleeding subscore and endoscopic subscore of ≥1 point and an absolute endoscopic subscore ≥2 after at least 8 weeks of maintenance therapy.<sup>3</sup>
                            <br/><sup>d</sup>Remitters/remission was defined as patients with a total Mayo score ≤2 with no individual subscore >1 <strong style="text-decoration: underline;">and</strong> a rectal bleeding subscore of 0.<sup>3</sup>
                            <br/><sup>e</sup>Efficacy outcomes were assessed in the maintenance remission subpopulation (n=163) and safety was assessed in patients who received ≥1 dose of XELJANZ 5 mg BID in OCTAVE Open (n=175 [163 patients in the maintenance remission subpopulation and 12 patients receiving XELJANZ 5 mg as protocol deviations]).<sup>5</sup>
                            <br/><sup>f</sup>Patients who completed one of the OCTAVE Induction studies (UC-I or UC-II) but did not achieve clinical response.<sup>3</sup>
                        </p>
                        <p>
                            <strong>1.</strong> Sandborn WJ, et al. <em>N Engl J Med</em>. 2017;376:1723&ndash;1736. 
                            <strong>2.</strong> Sandborn WJ, et al. <em>N Engl J Med</em>. 2017;376:1723&ndash;1736 [Supplementary appendix]. 
                            <strong>3.</strong> Colombel JF, et al. <em>Clin Gastroenterol Hepatol</em>. 2022;20:116&ndash;125.e5. 
                            <strong>4.</strong> Colombel JF, et al. <em>Clin Gastroenterol Hepatol</em>. 2022;20:116&ndash;125.e5 [Supplementary appendix]. 
                            <strong>5.</strong> Sandborn WJ, et al. <em>Aliment Pharmacol Ther</em>. 2022;55:464&ndash;478. 
                            <strong>6.</strong> ClinicalTrials.gov. NCT01470612 (accessed 17 August, 2022). 
                            <strong>7.</strong> XELJANZ (tofacitinib citrate) Summary of Product Characteristics. Brussels, Belgium: Pfizer Ltd; July 2022. 
                            <strong>8.</strong> Sandborn WJ, et al. <em>Clin Gastroenterol Hepatol</em>. 2019;17:1541&ndash;1550.
                        </p>
                    </div>                   
                </div>
            </div>
        </div>
    `
}),



app.component('safety-profile', {
    data() {
        return {         
        }
    },  
    template: `     
        <div style="height: 100%;position: relative;overflow: hidden;">  
            <div class="title"><h3>XELJANZ SAFETY PROFILE IN UC</h3></div>
            <div class="modal-content">
                <div class="content">
                        <p><strong>The safety profile for XELJANZ was studied across 3 large placebo-controlled phase 3 clinical trials (2 induction and 1 maintenance) that included 1139 patients with moderate to severe UC, and an open-label safety and tolerability study<sup>1,2</sup></strong></p>
                        <br/>
                        <div class="etention">
                            <div class="middle"><p>XELJANZ offers nearly 8 years of long-term safety data in UC (median exposure: 1.7 years)<sup>3,a</sup></p></div>
                        </div>
                        <br/><br/>
                        <p><strong style="font-size: 1.1em;">Adverse reactions</strong></p>
                        <p class="bulet">In the induction and maintenance studies, the most common types of serious adverse reactions were gastrointestinal disorders and infections, and the most common serious adverse reaction was worsening of UC<sup>1</sup></p>
                        <br/>
                        <div class="modal-img"><img src="app/images/additional-3-1.jpg"></div>
                        <br/>
                        <p><strong style="font-size: 1.1em;">Use in patients over 65 years of age</strong></p>
                        <p class="bulet">Considering the increased risk of serious infections, MI, and malignancies with XELJANZ in patients over 65 years of age, XELJANZ should only be used in these patients if no suitable treatment alternatives are available<sup>1</sup></p>
                        <br/>
                        <div class="modal-img"><img src="app/images/additional-3-2.jpg"></div>
                        
                        <div class="modal-img"><img src="app/images/additional-3-3.jpg"></div>
                        <br/>
                        <p><strong style="font-size: 1.1em;">Hepatic impairment</strong><br/></p>
                            <p class="bulet">Use of XELJANZ in patients with severe hepatic impairment is not recommended<sup>1</sup></p>
                            <p><strong style="font-size: 1.1em;">Use in pregnancy</strong><br/></p>
                            <p class="bulet">There are no adequate and well-controlled studies on the use of XELJANZ in pregnant women. As a precautionary measure, the use of XELJANZ in pregnant women is contraindicated<sup>1</sup></p>
                        <p class="bulet">Women of childbearing potential should be advised to use effective contraception during treatment with XELJANZ and for at least 4 weeks after the last dose<sup>1</sup></p>
                            <p><strong style="font-size: 1.1em;">VTE</strong><br/></p>    
                            <p class="bulet">Serious VTE events, including PE (some of which were fatal) and DVT, have been observed in patients taking XELJANZ<sup>1</sup></p> 
                            <p class="bulet">A dose-dependent increased risk for VTE was observed in a large, ongoing post-marketing safety study of patients with RA who were aged 50 and older with at least one CV risk factor and treated with XELJANZ 10 mg BID vs XELJANZ 5 mg BID or TNFis. The majority of these events were serious and some resulted in death<sup>1</sup></p>
                            <br/>
                        <div class="etention">
                            <div class="middle"><p>XELJANZ 10 mg BID for maintenance treatment is not recommended in patients with UC who have known VTE risk factors,<sup>d</sup> unless there is no suitable alternative treatment available<sup>1</sup></p></div>
                        </div>
                        <br/><br/>
                        <p><strong style="font-size: 1.1em;color: #ff0148;">Limitations of overall cohort and OLE data</strong></p>
                            <p class="bulet">Pooled, post hoc analysis of studies from the UC clinical trial programme are subject to certain limitations. First, unlike ORAL Surveillance, the patient population is not limited to a high-risk population but includes all enrolled patients. Second, endpoints of interest (such as MACE and malignancy for ORAL Surveillance) were not specifically defined and adjudicated. Additionally, ORAL Surveillance was a long-term safety study (vs shorter term and designed to test efficacy). Resultant incidence rates in ORAL Surveillance differed from rates seen from pooled study data, suggesting the pooled data may be obscuring information about predictors of events given adverse rates may differ from one patient population to another and may change over time</p>    
                            <p class="bulet">OLE studies may provide useful data; however, conduct of OLE studies where both treatment and dose are known to both investigator and patient is subject to certain biases and limitations</p>    
                            <p class="bulet">Biases include, but are not limited to, patient selection (patient willingness or ineligibility to enroll, which may be due to a prior serious AE), prior treatment, volunteer, observer, initial dose or study drug, investigator/patient expectation and study duration. Limitations include, but are not limited to, AE frequencies and incidence rates subject to change over time due to patient entry/exit, dose changes influenced by both investigator and patient, dose restrictions in certain countries, the number of patients and exposure for a specific safety event possibly differing depending on the timing of censored events, and the number of observed patients with longer exposure times becoming lower</p>    
                            <p><strong style="font-size: 1.1em;color: #ff0148;">Other data sources in UC</strong></p>
                            <p class="bulet">It is important to note that the XELJANZ clinical study programme in UC was designed to evaluate the efficacy and safety of XELJANZ in adult patients with moderate to severe UC, and was not specifically designed to assess MACE and malignancy as specific endpoints. Furthermore, the data from the XELJANZ clinical study programme in UC were collected over various time periods (ie, when the studies were conducted as well as study-specific follow-up periods), across varied geographies, and using a variety of analysis methods</p>    
                            <p class="bulet">The XELJANZ clinical study programme in UC was not conducted among a population which was enriched for CV risk, as was the case with ORAL Surveillance</p>    
                            <p class="bulet">Given these data are from different study populations, have different study designs, and were not designed to assess the specific endpoints of MACE and malignancy, comparative conclusions are inappropriate and, therefore, should not be drawn from this content</p>
                            <div class="modal-images">
                            <div class="left">       
                                <div class="modal-img"><img src="app/images/additional-3-4.jpg"></div>
                            </div>
                            <div class="right">       
                                <div class="modal-img"><img src="app/images/additional-3-5.png"></div>
                            </div>
                        </div>
                        <div class="small"> 
                            <p>
                                <sup>a</sup>XELJANZ offers up to 7.8 years of safety data in UC.<sup>3</sup>
                                <br/><sup>b</sup>The rates of the four most frequent AEs occurring in the maintenance trial are listed for the 3 placebo-controlled trials, and the rates of the five most frequently reported treatment-related AEs are reported for the OLE study.<sup>2,4</sup>
                                <br/><sup>c</sup>Duration of treatment varied by patient. Median (max) study drug exposures for XELJANZ 5 mg BID and XELJANZ 10 mg BID were 4.2 (6.6) years and 1.8 (7.0) years, respectively.<sup>2</sup>
                                <br/><sup>d</sup>VTE risk factors include previous VTE, patients undergoing major surgery, immobilisation, MI (within previous 3 months), heart failure, use of combined hormonal contraceptives or hormone replacement therapy, inherited coagulation disorder, malignancy. Additional VTE risk factors such as age, obesity (BMI ≥30), diabetes, hypertension, and smoking status should also be considered. Patients should be re-evaluated periodically during XELJANZ treatment to assess for changes in VTE risk.<sup>1</sup>
                                <br/><sup>e</sup>Includes data through May 2019 cut-off from OCTAVE Open.<sup>5</sup>
                                <br/><sup>f</sup>N=1124.<sup>5</sup>
                                <br/><sup>g</sup>Composite MACE defined as any MI, stroke, or CV death.<sup>5</sup>
                                <br/><sup>h</sup>Previously reported in Mease, et al. (excludes Study A3921133) and Sandborn, et al.<sup>5</sup>
                                <br/>AE, adverse event; BID, twice daily; BMI, body mass index; CI, confidence interval; CRP, C-reactive protein; CV, cardiovascular; DVT, deep vein thrombosis; GI, gastrointestinal; 
                                <br/>HZ, herpes zoster; IR, incidence rate (unique patients with events per 100 patient-years); MACE, major adverse cardiovascular event; MI, myocardial infarction; n, number of patients in the disease cohort; n, unique number of patients with event (events are counted up to 28 days beyond the last dose or to the data cut-off date, and are included in the calculation of IR); n1, all events, including those occurring outside the 28-day risk period; NMSC, nonmelanoma skin cancer; OI, opportunistic infection; OLE, open-label extension; PE, pulmonary embolism; PY, patient-year; RA, rheumatoid arthritis; SD, standard deviation; TB, tuberculosis; TNFi, tumour necrosis factor inhibitor; UC, ulcerative colitis;<br/> VTE, venous thromboembolism.
                            </p>
                        </div> 
                    
                        <br/>
                        <div class="title title-bg" style="height: auto;">
                        <h3  style="line-height: 1.2;    font-size: 1.7em;">ORAL SURVEILLANCE: THE PRESPECIFIED NONINFERIORITY
                                CRITERION WAS NOT MET FOR THE PRIMARY COMPARISON OF
                                THE COMBINED XELJANZ DOSES WITH TNFI FOR ADJUDICATED
                                MACE AND MALIGNANCIES (EXCLUDING NMSC)<sup>6</sup></h3>
                        </div>

                        <p style="font-size: 1.05em;color: #ff0148;"><strong>Primary comparisons exceeded the prespecified noninferiority criterion of 1.8. For adjudicated MACE, the HR for the combined XELJANZ doses vs TNFi was 1.33 (95% CI 0.91–1.94). For adjudicated malignancies (excluding NMSC), the HR for the combined XELJANZ doses vs TNFi was 1.48 (95% CI 1.04–2.09).<sup>6</sup></strong></p>
                        <div class="modal-images">
                            <div class="left"  style="width: 40%;">
                                <p class="bulet" style="padding-right: 20px;">ORAL Surveillance was a randomised, open-label,
                                noninferiority, post-authorisation safety study of
                                XELJANZ in patients with RA who were ≥50 years of
                                age and with ≥1 additional CV risk factor<sup>6,7</sup></p>  
                                <p class="bulet" style="padding-right: 20px;">IRs were observed to be higher for XELJANZ compared with TNFi<sup>6</sup></p>       
                                <div class="modal-img"><img src="app/images/sp-3-1.jpg"></div>
                            </div>
                            <div class="right" style="width: 60%;">       
                                <div class="modal-img"><img src="app/images/sp-3-2.jpg"></div>
                            </div>
                        </div>
                        <div class="small"> 
                            <p>
                            <strong>The approved dose of XELJANZ for RA is 5 mg BID.<sup>1</sup></strong> Pfizer continues to work with the EMA and other regulatory agencies to update XELJANZ labelling in their respective markets based on their ongoing review of the complete ORAL Surveillance results. 
                            <br/><sup>a</sup>A 28-day treatment period was used to assess AEs, defined as the minimum of the date of last contact, or the date of the last dose of a trial treatment plus 28 days.<sup>6</sup>
                            <br/><sup>b</sup>Based on the Cox proportional hazards model.<sup>6</sup>
                            <br/><sup>c</sup>Also included are opportunistic HZ and tuberculosis events.<sup>6</sup>
                            <br/><sup>d</sup>Included are HZ adjudicated as an opportunistic infection and nonadjudicated HZ events.<sup>6</sup>
                            <br/>AE, adverse event; BID, twice daily; BMI, body mass index; CHD, coronary heart disease; CI, confidence interval; CV, cardiovascular; DVT, deep vein thrombosis; EMA, European
                                Medicines Agency; HR, hazard ratio; HZ, herpes zoster; IR, incidence rate; MACE, major adverse cardiovascular event; MI, myocardial infarction; NMSC, nonmelanoma skin cancer;
                                OI, opportunistic infection; PE, pulmonary embolism; RA, rheumatoid arthritis; SD, standard deviation; TNFi, tumour necrosis factor inhibitor; VTE, venous thromboembolism.
                            </p>                        
                                                   
                            <p>   
                                <strong>1.</strong> XELJANZ (tofacitinib citrate) Summary of Product Characteristics. Brussels, Belgium: Pfizer Ltd; July 2022. 
                                <strong>2.</strong> Sandborn WJ, et al. <em>Aliment Pharmacol Ther.</em> 2022;55:464-478.
                               <br/> <strong>3.</strong> Sandborn WJ, et al. <em>Am J Gastroenterol.</em> 2021;116:S360. Abstract S777. 
                                <strong>4.</strong> Sandborn WJ, et al. <em>N Engl J Med.</em> 2017;376:1723–1736. 
                                <strong>5.</strong> Burmester GR, et al. <em>RMD Open.</em> 2021;7:e001595.
                               <br/> <strong>6.</strong> Ytterberg SR, et al. <em>N Engl J Med.</em> 2022;386:316–326. 
                                <strong>7.</strong> Ytterberg SR, et al. <em>N Engl J Med.</em> 2022;386:316–326 [Supplementary appendix].
                            </p>
                        </div>
                </div>
            </div>
        </div>
        
    `
}),

app.component('p-i', {
    data() {
        return {         
        }
    },  
    template: `    
        <div style="height: 100%;position: relative;overflow: hidden;">  
            <div class="title"><h3>Prescribing Information</h3></div>
            <div class="modal-content">
                <div class="content">  
                    <div class="pi-top">                        
                        <div class="left">
                            <p><strong>
                            Fachkurzinformation 
                            <br/>XELJANZ® 5 mg Filmtabletten
                            <br/>XELJANZ® 10 mg Filmtabletten
                            <br/>XELJANZ® 11 mg Retardtabletten
                            <br/>XELJANZ® 1 mg/ml Lösung zum Einnehmen 
                            </strong></p>   
                        </div>
                        <div class="right">
                            <div class="item item1">
                                <img src="app/images/pi-qr-1.png">
                                <p>To access the XELJANZ (tofacitinib citrate) Austrian prescribing information,<sup>1</sup> please scan this QR code</p>
                            </div>
                            <div class="item item2">
                                <img src="app/images/pi-qr-2.png">
                                <p>To access the XELJANZ (tofacitinib citrate) EU label,<sup>2</sup> please scan this QR code</p>
                            </div>
                        </div>                        
                    </div>
                    <div class="pi-content">
                        <p>
                            <strong>Qualitative und quantitative Zusammensetzung:</strong> <em>XELJANZ 5 mg Filmtabletten, XELJANZ 10 mg Filmtabletten:</em> Jede Filmtablette enthält Tofacitinibcitrat, entsprechend 5 mg bzw. 10 mg Tofacitinib. Sonstiger Bestandteil mit bekannter Wirkung: Jede Filmtablette enthält 59,44 mg bzw. 118,88mg Lactose. <em>XELJANZ 11 mg Retardtabletten:</em> Jede Retardtablette enthält Tofacitinibcitrat, entsprechend 11 mg Tofacitinib. Sonstiger Bestandteil mit bekannter Wirkung: Jede Retardtablette enthält 152,23mg Sorbitol. 
                            <em>XELJANZ 1 mg/ml Lösung zum Einnehmen:</em>  Jeder ml Lösung zum Einnehmen enthält Tofacitinibcitrat, 
                            entsprechend 1 mg Tofacitinib. Sonstige Bestandteile mit bekannter Wirkung: 
                            Jeder ml Lösung zum Einnehmen enthält 2,39 mg Propylenglycol und 0,9 mg Natriumbenzoat.
                            <strong>Liste der sonstigen Bestandteile:</strong> <em>XELJANZ 5 mg Filmtabletten,
                            XELJANZ 10 mg Filmtabletten:</em> Tablettenkern: mikrokristalline Cellulose, Lactose-Monohydrat,
                            Croscarmellose-Natrium, Magnesiumstearat. Filmüberzug: Hypromellose 6cP (E 464), Titandioxid (E 171), 
                            Lactose-Monohydrat, Macrogol 3350, Triacetin, Indigocarmin-Aluminiumsalz (E 132) (nur 10-mg-Stärke),
                            Brillantblau-FCF-Aluminiumsalz (E 133) (nur 10-mg-Stärke). <em>XELJANZ 11 mg Retardtabletten:</em> 
                            Tablettenkern: Sorbitol (E 420), Hyetellose, Copovidon, Magnesiumstearat. Filmüberzug: Celluloseacetat,
                            Hyprolose (E 463),Hypromellose (E 464), Titandioxid (E 171), Triacetin, Eisen(III)-oxid (E 172). 
                            Drucktinte: Schellack (E 904), Ammoniumhydroxid (E 527), Propylenglycol (E 1520), Eisen(II,III)-oxid (E 172). 
                            <em>XELJANZ 1 mg/ml Lösung zum Einnehmen:</em> Traubenaroma (enthält Propylenglycol [E 1520], Glycerin [E 422] 
                            und natürliche Aromen), Salzsäure, Milchsäure (E 270), Gereinigtes Wasser, Natriumbenzoat (E 211), 
                            Sucralose (E 955), Xylitol (E 967). <strong>Anwendungsgebiete:</strong> <em>XELJANZ 5 mg Filmtabletten, 
                            XELJANZ 10 mg Filmtabletten:</em> <span style="text-decoration: underline;">Rheumatoide Arthritis:</span> 
                            Tofacitinib ist in Kombination mit Methotrexat (MTX) indiziert zur Behandlung der mittelschweren bis 
                            schweren aktiven rheumatoiden Arthritis (RA) bei erwachsenen Patienten, die auf ein oder mehrere 
                            krankheitsmodifizierende Antirheumatika (DMARD, Disease-Modifying Antirheumatic Drugs) unzureichend 
                            angesprochen oder diese nicht vertragen haben (siehe Abschnitt 5.1 in der Fachinformation). 
                            Tofacitinib kann als Monotherapie gegebenwerden, wenn MTX nicht vertragen wird oder wenn eine Behandlung mit 
                            MTX ungeeignet ist (siehe Abschnitte 4.4 und 4.5 der Fachinformation). 
                            <span style="text-decoration: underline;">Psoriasis-Arthritis:</span> Tofacitinib ist in Kombination mit 
                            MTX indiziert zur Behandlung der aktiven Psoriasis-Arthritis (PsA) bei erwachsenen Patienten, die auf eine 
                            vorangegangene krankheitsmodifizierende antirheumatische (DMARD-) Therapie unzureichend angesprochen oder 
                            diese nicht vertragen haben (siehe Abschnitt 5.1 der Fachinformation). 
                            <span style="text-decoration: underline;">Ankylosierende Spondylitis:</span> 
                            Tofacitinib ist indiziert zur Behandlung erwachsener Patienten mit aktiver 
                            ankylosierender Spondylitis (AS), die auf eine konventionelle Therapie unzureichend 
                            angesprochen haben. <span style="text-decoration: underline;">Colitis ulcerosa:</span> 
                            Tofacitinib ist indiziert zur Behandlung erwachsener Patienten mit mittelschwerer bis 
                            schwerer aktiver Colitis ulcerosa (CU), die auf eine konventionelle Therapie oder
                            ein Biologikum unzureichend angesprochen haben, nicht mehr darauf ansprechen oder diese 
                            nicht vertragen haben (siehe Abschnitt 5.1 der Fachinformation). 
                            <span style="text-decoration: underline;">Juvenile idiopathische Arthritis (JIA):</span>
                            Tofacitinib ist indiziert zur Behandlung der aktiven polyartikulären juvenilen 
                            idiopathischen Arthritis (Rheumafaktor-positive [RF+] oder -negative [RF-] 
                            Polyarthritis und erweiterte Oligoarthritis) und der juvenilen Psoriasis-Arthritis 
                            (PsA) bei Patienten ab einem Alter von 2 Jahren, die auf eine vorangegangene 
                            DMARD-Therapie unzureichend angesprochen haben. Tofacitinib kann in Kombination mit
                            Methotrexat (MTX) angewendet werden oder als Monotherapie, wenn MTX nicht vertragen wird oder eine Fortsetzung der 
                            Behandlung mit MTX ungeeignet ist. XELJANZ 11 mg Retardtabletten: 
                            <span style="text-decoration: underline;">Rheumatoide Arthritis:</span> Tofacitinib ist in Kombination mit 
                            Methotrexat (MTX) indiziert zur Behandlung der mittelschweren bis schweren aktiven rheumatoiden Arthritis (RA) 
                            bei erwachsenen Patienten, die auf ein oder mehrere krankheitsmodifizierende Antirheumatika 
                            (DMARD, Disease-Modifying Antirheumatic Drugs) unzureichend angesprochen oder diese nicht vertragen haben 
                            (siehe Abschnitt 5.1 der Fachinformation). Tofacitinib kann als Monotherapie gegeben werden, wenn MTX nicht 
                            vertragen wird oder wenn eine Behandlung mit MTX ungeeignet ist (siehe Abschnitte 4.4 und 4.5 der Fachinformation). 
                            <span style="text-decoration: underline;">Psoriaris-Arthritis:</span> Tofacitinib ist in Kombination mit 
                            MTX indiziert zur Behandlung der aktiven Psoriasis-Arthritis (PsA) bei erwachsenen Patienten, die auf eine 
                            vorangegangene krankheitsmodifizierende antirheumatische (DMARD-) Therapie unzureichend angesprochen oder diese 
                            nicht vertragen haben (siehe Abschnitt 5.1 der Fachinformation). 
                            <span style="text-decoration: underline;">Ankylosierende Spondylitis:</span> Tofacitinib ist indiziert zur 
                            Behandlung erwachsener Patienten mit aktiver ankylosierender Spondylitis (AS), die auf eine konventionelle 
                            Therapie unzureichend angesprochen haben. <em>XELJANZ 1 mg/ml Lösung zum </em>
<br/><em>Einnehmen:</em> <span style="text-decoration: underline;">Juvenile idiopathische Arthritis (JIA):</span> Tofacitinib ist indiziert zur Behandlung der aktiven polyartikulären juvenilen idiopathischen Arthritis (Rheumafaktor-positiv [RF+] oder -negative [RF-] Polyarthritis und erweiterte Oligoarthritis) und der juvenilen Psoriasis-Arthritis (PsA) bei Patienten ab einem Alter von 2 Jahren, die auf eine vorangegangene krankheitsmodifizierte antirheumatische (DMARD-) Therapie unzureichend angesprochen haben. Tofacitinib kann in Kombination mit Methotrexat (MTX) angewendet werden oder als Monotherapie, wenn MTX nicht vertragen wird oder eine Fortsetzung der Behandlung mit MTX ungeeignet ist. <strong>Gegenanzeigen:</strong> 
Überempfindlichkeit gegen den Wirkstoff oder einen der in Abschnitt 6.1 der Fachinformation genannten sonstigen  
Bestandteile, aktive Tuberkulose (TB), schwerwiegende Infektionen wie z. B. Sepsis oder opportunistische 
Infektionen (siehe Abschnitt 4.4 der Fachinformation), schwere Leberfunktionsstörung (siehe Abschnitt 4.2 der Fachinformation), Schwangerschaft und Stillzeit (siehe Abschnitt 4.6 der Fachinformation). <strong>Pharmakotherapeutische Gruppe:</strong> Immunsuppressiva, selektive Immunsuppressiva, ATC-Code: L04AA29. <strong>Inhaber der Zulassung:</strong> Pfizer Europe MA EEIG, Boulevard de la Plaine 17, 1050 Brüssel, Belgien. Stand der Information: 06/2022. <strong>Rezeptpflicht/Apothekenpflicht:</strong> Rezept- und apothekenpflichtig, wiederholte Abgabe verboten. <strong>Angaben zu besonderen Warnhinweisen und Vorsichtsmaßnahmen für die Anwendung, Wechselwirkungen mit anderen Arzneimitteln und sonstigen Wechselwirkungen, Fertilität, Schwangerschaft und Stillzeit und Nebenwirkungen entnehmen Sie bitte der veröffentlichten Fachinformation.</strong>
<br/><strong>1.</strong> XELJANZ [fachkurzinformation]. Pfizer Ltd; July 2022; <strong>2.</strong> XELJANZ (tofacitinib citrate) Summary of Product Characteristics. Brussels, Belgium: Pfizer Ltd; July 2022.</p>
                    </div>                
                </div>
            </div>
        </div>
    `
})



