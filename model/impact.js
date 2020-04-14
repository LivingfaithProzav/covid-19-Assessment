import DataModel from './data.js';

const data = new DataModel();
class Impact {
      constructor(){
      this.currentlyInfected,
      this.infectionsByRequestedTime,
      this.severeCasesByRequestedTime,
      this.hospitalBedsByRequestedTime,
      this.casesForICUByRequestedTime,
      this.casesForVentilatorsByRequestedTime,
      this.dollarsInFlight
    }
   
  
    
estimateCurrentlyInfected() {
        const { reportedCases } = data.reportedCases;
        let currentlyInfected = 0;
    
       currentlyInfected = reportedCases * 10;
       this.currentlyInfected = currentlyInfected;
        return currentlyInfected;
      };
    
      
estimateProjectedInfections() {
        let currentlyInfected  = this.currentlyInfected;
        let infectionsByRequestedTime = 0;
        
        infectionsByRequestedTime = currentlyInfected * 512;
        this.infectionsByRequestedTime = infectionsByRequestedTime;
    
        return infectionsByRequestedTime;
      };
    
      
    
    
estimateSevereCasesByRequestedTime() {
        let infectionsByRequestedTime  = this.infectionsByRequestedTime;
        let severeCasesByRequestedTime = 0;
    
         let multiply = infectionsByRequestedTime * 15;
    
       severeCasesByRequestedTime = multiply / 100;
       this.severeCasesByRequestedTime = severeCasesByRequestedTime;

        return severeCasesByRequestedTime;
      };
    
      
    
estimateHospitalbedsByRequtsedTime() {
        let severeCasesByRequestedTime = this.severeCasesByRequestedTime;
        let hospitalBedsByRequestedTime = 0;
    
        hospitalBedsByRequestedTime = severeCasesByRequestedTime / data.totalHospitalBeds;
        this.hospitalBedsByRequestedTime = hospitalBedsByRequestedTime;
    
        return hospitalBedsByRequestedTime;
      };
    
      
    
    
 estimateCasesForICUByRequstedTime() {
        let infectionsByRequestedTime = this.infectionsByRequestedTime;
        let casesForICUByRequestedTime = 0;
    
        let casesForICUByRequestedTime = (infectionsByRequestedTime * 5) / 100;
        this.casesForICUByRequestedTime = casesForICUByRequestedTime;
    
    
        return casesForICUByRequestedTime;
      };
    
     
    
estimateCasesForVentillatorsByRequestedTime() {
        let infectionsByRequestedTime = this.infectionsByRequestedTime;
        let casesForVentilatorsByRequestedTime = 0;
    
       let multiply = infectionsByRequestedTime * 2;
        casesForVentilatorsByRequestedTime = multiply / 100;
        this.casesForVentilatorsByRequestedTime = casesForVentilatorsByRequestedTime;
    
    
        return casesForVentilatorsByRequestedTime;
      };
    
      
    
estimateDollarsInflight() {
        let infectionsByRequestedTime = this.infectionsByRequestedTime;
        let dollarsInFlight = 0;
    
        dollarsInFlight = infectionsByRequestedTime * 0.65 * 1.5 * 30;
        this.dollarsInFlight = dollarsInFlight;
    
        return dollarsInFlight;
      };


      bindOnEstimatesChanged(callback) {
        this.onEstimatesChanged = callback
      }
    
      
  }
  export default Impact;