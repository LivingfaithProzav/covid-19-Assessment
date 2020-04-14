import input from '../api/api.json'

const input = JSON.parse(input);

class DataModel {
 
 constructor() {
      this.periodType ='',
      this.timeToElapse = 0,
      this.reportedCases = 0,
      this.population = 0,
      this.totalHospitalBeds = 0,
      this.name = '',
      this.avgAge = 0.0,
      this.avgDailyIncomeInUSD = 0,
      this.avgDailyIncomePopulation = 0.0
    }

       
   
   
   /**
   * @param {{ periodType: string; timeToElapse: number; reportedCases: number; population: number; totalHospitalBeds: number; }} input
   */
   set data(input){
    this.periodType = input.periodType;
      this.timeToElapse = input.timeToElapse;
      this.reportedCases = input.reportedCases;
      this.population = input.population;
      this.totalHospitalBeds = input.totalHospitalBeds;

     
   }
   
   /**
   * @param {{ periodType: string; timeToElapse: number; reportedCases: number; population: number; totalHospitalBeds: number; }} obj
   */
   update(obj){
      this.periodType = obj.periodType;
      this.timeToElapse = obj.timeToElapse;
      this.reportedCases = obj.reportedCases;
      this.population = obj.population;
      this.totalHospitalBeds = obj.totalHospitalBeds;

    }





  }
  export default DataModel;