class View {
    
    constructor() { 
        // The root element
    this.app = this.getElement('#root')

    // The title of the app
    this.title = this.createElement('h1')
    this.title.textContent = 'Covid-19 Estimator'

    // The form, with a [type="text"] input, and a submit button
    this.form = this.createElement('form')
    this.label1 = this.createElement('label', 'reportedCases')
    this.label1.for = 'reportedcases'
    this.label1.text = 'Reported Cases'
    this.br1 = this.createElement('br')
    this.input1 = this.createElement('input', 'reportedCases')
    this.input1.type = 'number'
    this.input1.placeholder = 'Add ReportedCases'
    this.input1.name = 'reportedCases'
    this.input1.id = 'data-reportedCases'

    this.label2 = this.createElement('label', 'population')
    this.label2.for = 'population'
    this.label2.text = 'Population'
    this.br2 = this.createElement('br')
    this.input2 = this.createElement('input', 'population')
    this.input2.type = 'number'
    this.input2.placeholder = 'Add Population'
    this.input2.name = 'population'
    this.input2.id = 'data-population'

    this.label3 = this.createElement('label', 'totalHospitalBeds')
    this.label3.for = 'totalHospitalBeds'
    this.label3.text = 'Total Hospital Beds'
    this.br3 = this.createElement('br')
    this.input3 = this.createElement('input', 'totalHospitalBeds')
    this.input3.type = 'number'
    this.input3.placeholder = 'Add Total Hospital Beds'
    this.input3.name = 'totalHospitalBeds'
    this.input3.id = 'data-totalHospitalBeds'

    this.label4 = this.createElement('label', 'timeToElapse')
    this.label4.for = 'timeToElapse'
    this.label4.text = 'Time To Elapse'
    this.br4 = this.createElement('br')
    this.input4 = this.createElement('input', 'timeToElapse')
    this.input4.type = 'number'
    this.input4.placeholder = 'Add Time To Elapse'
    this.input4.name = 'timeToElapse'
    this.input4.id = 'data-timeToElapse'

    this.select = this.createElement('select')
    this.select.id = 'periodType'
    this.option1 = this.createElement('option')
    this.option1.value = 'months'
    this.option2 = this.createElement('option')
    this.option2.value = 'weeks'
    this.option3 = this.createElement('option')
    this.option3.value = 'days'


    this.submitButton = this.createElement('button')
    this.submitButton.textContent = 'Submit'


    //Append the options to the sellect
    this.select.appendChild(this.option1, this.option2, this.option3)

     // Append the labels, br, inputs, select and submit button to the form
    this.form.append(this.label1, this.br1, this.input1, this.label2, this.br2, this.input2,
        this.label3, this.br3, this.input3, this.label4, this.br4, this.input4, this.select, this.submitButton)   
   


        // Create Display for the Impact Estimates
        this.header = this.createElement('h2')
        this.header.id = 'impactEstimate'
    this.impactEstimator = this.createElement('div')
    this.label5 = this.createElement('label', 'currentlyInfected')
    this.label5.for = 'currentlyInfected'
    this.label5.text = 'Currently Infected Persons: &nbsp &nbsp &nbsp'
    this.span5 = document.createElement('span')
    this.span5.id = 'currentlyInfected'
    this.br5 = this.createElement('br')
   
    this.label6 = this.createElement('label', 'infectionByRequestedTime')
    this.label6.for = 'infectionByRequestedTime'
    this.label6.text = 'Infection By Requested Time: &nbsp &nbsp &nbsp'
    this.span6 = document.createElement('span')
    this.span6.id = 'infectionByRequestedTime'
    this.br6 = this.createElement('br')

    this.label7 = this.createElement('label', 'severeCasesByRequestedTime')
    this.label7.for = 'severeCasesByRequestedTime'
    this.label7.text = 'Severe Cases By Requested Time: &nbsp &nbsp &nbsp'
    this.span7 = document.createElement('span')
    this.span7.id = 'severeCasesByRequestedTime'
    this.br7 = this.createElement('br')


    this.label8 = this.createElement('label', 'hospitalBedsByRequestedTime')
    this.label8.for = 'hospitalBedsByRequestedTime'
    this.label8.text = 'Hospital Beds By Requested Time: &nbsp &nbsp &nbsp'
    this.span8 = document.createElement('span')
    this.span8.id = 'hospitalBedsByRequestedTime'
    this.br8 = this.createElement('br')

    
    this.label9 = this.createElement('label', 'casesForICUByRequestedTime')
    this.label9.for = 'casesForICUByRequestedTime'
    this.label9.text = 'Cases for ICU By Requested Time: &nbsp &nbsp &nbsp'
    this.span9 = document.createElement('span')
    this.span9.id = 'casesForICUByRequestedTime'
    this.br9 = this.createElement('br')
    

    this.label10 = this.createElement('label', 'casesForVentillatorByRequestedTime')
    this.label10.for = 'casesForVentillatorByRequestedTime'
    this.label10.text = 'Cases for Ventillator By Requested Time: &nbsp &nbsp &nbsp'
    this.span10 = document.createElement('span')
    this.span10.id = 'casesForVentillatorByRequestedTime'
    this.br10 = this.createElement('br')

    this.label11 = this.createElement('label', 'dollarsInFlight')
    this.label11.for = 'dollarsInFlight'
    this.label11.text = 'Dollars In Flight: &nbsp &nbsp &nbsp'
    this.span11 = document.createElement('span')
    this.span11.id = 'dollarsInFlight'
    this.br11 = this.createElement('br')


    this.impactEstimator.appendChild(this.header, this.label5, this.span5, this.br5, this.label6, this.span6, this.br6, this.label7,
        this.span7, this.br7, this.label8, this.span8, this.br8, this.label9, this.span9, this.br9,
        this.label10, this.span10, this.br10, this.label11, this.span11, this.br11)

        // Create Display for the SevereImpact Estimates
        this.header2 = this.createElement('h2')
        this.header2.id = 'severeImpactEstimate'
        this.severeImpactEstimator = this.createElement('div')
        this.label12 = this.createElement('label', 'currentlyInfected')
        this.label12.for = 'currentlyInfected'
        this.label12.text = 'Currently Infected Persons: &nbsp &nbsp &nbsp'
        this.span12 = document.createElement('span')
        this.span12.id = 'currentlyInfected2'
        this.br12 = this.createElement('br')
       
        this.label13 = this.createElement('label', 'infectionByRequestedTime')
        this.label13.for = 'infectionByRequestedTime'
        this.label13.text = 'Infection By Requested Time: &nbsp &nbsp &nbsp'
        this.span13 = document.createElement('span')
        this.span13.id = 'infectionByRequestedTime2'
        this.br13 = this.createElement('br')
    
        this.label14 = this.createElement('label', 'severeCasesByRequestedTime')
        this.label14.for = 'severeCasesByRequestedTime'
        this.label14.text = 'Severe Cases By Requested Time: &nbsp &nbsp &nbsp'
        this.span14 = document.createElement('span')
        this.span14.id = 'severeCasesByRequestedTime2'
        this.br14 = this.createElement('br')
    
    
        this.label15 = this.createElement('label', 'hospitalBedsByRequestedTime')
        this.label15.for = 'hospitalBedsByRequestedTime'
        this.label15.text = 'Hospital Beds By Requested Time: &nbsp &nbsp &nbsp'
        this.span15 = document.createElement('span')
        this.span15.id = 'hospitalBedsByRequestedTime2'
        this.br15 = this.createElement('br')
    
        
        this.label16 = this.createElement('label', 'casesForICUByRequestedTime')
        this.label16.for = 'casesForICUByRequestedTime'
        this.label16.text = 'Cases for ICU By Requested Time: &nbsp &nbsp &nbsp'
        this.span16 = document.createElement('span')
        this.span16.id = 'casesForICUByRequestedTime2'
        this.br16 = this.createElement('br')
        
    
        this.label17 = this.createElement('label', 'casesForVentillatorByRequestedTime')
        this.label17.for = 'casesForVentillatorByRequestedTime'
        this.label17.text = 'Cases for Ventillator By Requested Time: &nbsp &nbsp &nbsp'
        this.span17= document.createElement('span')
        this.span17.id = 'casesForVentillatorByRequestedTime2'
        this.br17 = this.createElement('br')
    
        this.label18 = this.createElement('label', 'dollarsInFlight')
        this.label18.for = 'dollarsInFlight'
        this.label18.text = 'Dollars In Flight: &nbsp &nbsp &nbsp'
        this.span18 = document.createElement('span')
        this.span18.id = 'dollarsInFlight2'
        this.br18 = this.createElement('br')
      
        this.severeImpactEstimator.appendChild(this.header2, this.label12, this.span12, this.br12, this.label113, this.span113, this.br13, this.label14,
            this.span14, this.br14, this.label15, this.span15, this.br15, this.label16, this.span16, this.br16,
            this.label17, this.span17, this.br17, this.label18, this.span18, this.br18)

    // Append the title, form, and the estimator to the app
    this.app.append(this.title, this.form, this.impactEstimator, this.severeImpactEstimator)

    }
         
        // Create an element with an optional CSS class
        createElement(tag, className) {
          const element = document.createElement(tag)
          if (className) element.classList.add(className)
      
          return element
        }
      
        // Retrieve an element from the DOM
        getElement(selector) {
          const element = document.querySelector(selector)
      
          return element
        }
        
                 
          
         get _formData() {
            var elements = document.getElementById("myForm").elements;
            var obj ={};
            for(var i = 0 ; i < elements.length ; i++){
                var item = elements.item(i);
                obj[item.name] = item.value;
            }
        }

                   
          _resetForm() {
            document.getElementById('myForm').reset();
          }
          
          bindformData(handleUpdate) {
            this.form.addEventListener('submit', event => {
              event.preventDefault()
          
              if (this._formData) {
                handleUpdate(this._formData)
                this._resetForm()
              }
            })
          }
          
         

          displayEstmates(impact, severeImpact) {

        let h1 = this.getElement('#impactEstimate')
        let headertext = document.createTextNode('IMPACT ESTIMATES')
        h1.appendChild(headertext);

        let impactCurrentlyInfected = impact.estimateCurrentlyInfected();
        let span5 = this.getElement('#currentlyInfected');
        span5.innerHTML += impactCurrentlyInfected;

        let impactInfectionsByRequestedTime = impact.estimateInfectionsByRequestedTime();
        let span6 = this.getElement('#infectionsByRequestedTime');
        span6.innerHTML += impactInfectionsByRequestedTime;

        let impactSevereCasesByRequestedTime = impact.estimateSevereCasesByRequestedTime();
        let span7 = this.getElement('#severeCasesByRequestedTime');
        span7.innerHTML += impactSevereCasesByRequestedTime;

        let impactHospitalBedsByRequestedTime = impact.estimateHospitalBedsByRequestedTime();
        let span8 = this.getElement('#hospitalBedsByRequestedTime');
        span8.innerHTML += impactHospitalBedsByRequestedTime;

        let impactCasesForICUByRequestedTime = impact.estimateCasesForICUByRequestedTime();
        let span9 = this.getElement('#casesForICUByRequestedTime');
        span9.innerHTML += impactCasesForICUByRequestedTime;

        let impactCasesForVentillatorByRequestedTime = impact.estimateCasesForVentilatorByRequestedTime();
        let span10 = this.getElement('#casesForVentillatorByRequestedTime');
        span10.innerHTML += impactCasesForVentillatorByRequestedTime;

        let impactDollarsInFlight = impact.estimateDollarsInFlight();
        let span11 = this.getElement('#dollarsInFlight');
        span11.innerHTML += impactDollarsInFlight;



        let h2 = this.getElement('#severeImpactEstimate')
        let headertext2 = document.createTextNode(' SEVERE IMPACT ESTIMATES')
        h2.appendChild(headertext2);

        let severeImpactCurrentlyInfected = SevereImpact.estimateCurrentlyInfected2();
        let span12 = this.getElement('#currentlyInfected2');
        span12.innerHTML += severeImpactCurrentlyInfected;

        let severeImpactInfectionsByRequestedTime = severeImpact.estimateInfectionsByRequestedTime2();
        let span13 = this.getElement('#infectionsByRequestedTime2');
        span13.innerHTML += severeImpactInfectionsByRequestedTime;

        let severeImpactSevereCasesByRequestedTime = severeImpact.estimateSevereCasesByRequestedTime2();
        let span14 = this.getElement('#severeCasesByRequestedTime2');
        span14.innerHTML += severeImpactSevereCasesByRequestedTime;

        let severeImpactHospitalBedsByRequestedTime = severeImpact.estimateHospitalBedsByRequestedTime2();
        let span15 = this.getElement('#hospitalBedsByRequestedTime2');
        span15.innerHTML += severeImpactHospitalBedsByRequestedTime;

        let severeImpactCasesForICUByRequestedTime = severeImpact.estimateCasesForICUByRequestedTime2();
        let span16 = this.getElement('#casesForICUByRequestedTime2');
        span16.innerHTML += severeImpactCasesForICUByRequestedTime;

        let severeImpactCasesForVentillatorByRequestedTime = severeImpact.estimateCasesForVentilatorByRequestedTime2();
        let span17 = this.getElement('#casesForVentillatorByRequestedTime2');
        span17.innerHTML += severeImpactCasesForVentillatorByRequestedTime;

        let severeImpactDollarsInFlight = severeImpact.estimateDollarsInFlight2();
        let span18 = this.getElement('#dollarsInFlight2');
        span18.innerHTML += impactDollarsInFlight;





           
  
          }
      
  }
  export default View;