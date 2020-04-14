import DataModel from './data.js';

const data = new DataModel();
class SevereImpact {
    constructor(){
      this.currentlyInfected2,
      this.infectionsByRequestedTime2,
      this.severeCasesByRequestedTime2,
      this.casesForICUByRequestedTime2,
      this.hospitalBedsByRequestedTime2,
      this.casesForICUByRequestedTime2,
      this.casesForVentilatorsByRequestedTime2,
      this.dollarsInFlight2
    }
        
      estimatecurrentlyInfected2() {
        const { reportedCases } = data;
        let currentlyInfected2 = 0;
    
        currentlyInfected2 = reportedCases * 50;
    
        return currentlyInfected2;
      };
    
      
    
      estimateProjectedInfections2() {
        const { currentlyInfected2 } = this.currentlyInfected2;
        let infectionsByRequestedTime2 = 0;
        infectionsByRequestedTime2 = currentlyInfected2 * 1024;
    
    
        return infectionsByRequestedTime2;
      };
    
    
      
    
      estimateSevereCasesByRequstedTime2() {
        const { infectionsByRequestedTime2 } = this.infectionsByRequestedTime2;
        let severeCasesByRequestedTime2 = 0;
    
        const multiply = infectionsByRequestedTime2 * 20;
    
        severeCasesByRequestedTime2 = multiply / 100;
    
    
        return severeCasesByRequestedTime2;
      };
    
      
    
      estimateHospitalBedsByRequstedTime2() {
        const { severeCasesByRequestedTime2 } = this.severeCasesByRequestedTime2;
        let hospitalBedsByRequestedTime2 = 0;
    
        hospitalBedsByRequestedTime2 = severeCasesByRequestedTime2 / data.totalHospitalBeds;
    
    
        return hospitalBedsByRequestedTime2;
      };
    
    
      
    
      estimateCasesForICUByRequatedTime2() {
        const { infectionsByRequestedTime2 } = this.infectionsByRequestedTime2;
        let casesForICUByRequestedTime2 = 0;
    
        const multiply = infectionsByRequestedTime2 * 15;
        casesForICUByRequestedTime2 = multiply / 100;
    
    
        return casesForICUByRequestedTime2;
      };
    
      
    
      estimatecasesForVentillatorsByRequestedTime2() {
        const { infectionsByRequestedTime2 } = this.infectionsByRequestedTime2;
        let casesForVentilatorsByRequestedTime2 = 0;
    
        const multiply = infectionsByRequestedTime2 * 5;
        casesForVentilatorsByRequestedTime2 = multiply / 100;
    
    
        return casesForVentilatorsByRequestedTime2;
      };
    
      
    
      estimateDollarsInflight2() {
        const { infectionsByRequestedTime } = this.infectionsByRequestedTime2;
        let dollarsInFlight2 = 0;
    
        dollarsInFlight2 = infectionsByRequestedTime2 * 0.65 * 1.5 * 30;
    
    
        return dollarsInFlight2;
      };


      bindOnEstimatesChanged(callback) {
        this.onEstimatesChanged = callback
      }
  }
  export default SevereImpact;
  