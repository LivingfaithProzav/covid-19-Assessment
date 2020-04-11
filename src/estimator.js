
/* const ImpactEstimator = (data) => {
    const input = data;
    return {
        data: input,
        impact: {},
        severeImpact: {}
    }
}; export default ImpactEstimator;
*/

 

function chain () {
    let data ={ periodType: "days", timeToElapse: 58,   reportedCases: 674,   population: 66622705,   totalHospitalBeds: 1380614,
        name: "Africa",       avgAge: 19.7,       avgDailyIncomeInUSD: 5,       avgDailyIncomePopulation: 0.71  }; 
    let impact ={};
    let severeImpact = {};

    impact.currentlyInfected = function estimateCurrentlyInfected () {
        const reportedCases = data.reportedCases;
        var currentlyInfected = 0;
   
        currentlyInfected = reportedCases * 10;
   
       return currentlyInfected;
    }
   
   severeImpact.currentlyInfected = function estimateSevereCurrentlyInfected () {
        const reportedCases = data.reportedCases;
        var severeCurrentlyInfected = 0;
   
        currentlyInfected = reportedCases * 50;
   
       return severeCurrentlyInfected;
    }
    
    impact.infectionsByRequestedTime =  function estimateProjectedInfections () {
        let currentlyInfected = impact.currentlyInfected;
        var infectionsByRequestedTime = 0;
        infectionsByRequestedTime = currentlyInfected * 512;
   
       return infectionsByRequestedTime;
    }
   
    severeImpact.infectionsByRequestedTime = function estimateSevereProjectedInfections () {
        let currentlyInfected = severeImpact.currentlyInfected;
        var severeInfectionsByRequestedTime = 0;
        severeInfectionsByRequestedTime = currentlyInfected * 1024;
   
   
      return severeInfectionsByRequestedTime;
   }
    
   
    impact.severeCasesByRequestedTime = function estimateSevereCases () {
        let infectionsByRequestedTime = impact.infectionsByRequestedTime;
        var severeCasesByRequestedTime = 0;

        severeCasesByRequestedTime = infectionsByRequestedTime / 100 * 15;
   
   
       return severeCasesByRequestedTime;
    }
   
    severeImpact.moreSevereCasesByRequestedTime = function estimateMoreSevereCases () {
        let infectionsByRequestedTime = severeImpact.infectionsByRequestedTime;
        var moreSevereCasesByRequestedTime = 0;

        moreSevereCasesByRequestedTime = infectionsByRequestedTime / 100 * 15;
   
   
      return moreSevereCasesByRequestedTime;
   }
   
   impact.hospitalBedsByRequestedTime = function estimateBedSpaceAvailability () {
    let severeCasesByRequestedTime = impact.severeCasesByRequestedTime;
    var hospitalBedsByRequestedTime = 0;

    hospitalBedsByRequestedTime = severeCasesByRequestedTime / data.totalHospitalBeds;
   
   
       return hospitalBedsByRequestedTime;
   }
   
    severeImpact.hospitalBedsByRequestedTime2 = function estimateBedSpaceAvailability2 () {
        let moreSevereCasesByRequestedTime = severeImpact.moreSevereCasesByRequestedTime;
    var hospitalBedsByRequestedTime2 = 0;

    hospitalBedsByRequestedTime2 = moreSevereCasesByRequestedTime / data.totalHospitalBeds;
   
   
   
        return hospitalBedsByRequestedTime2;
    }
   
    
    impact.casesForICUByRequestedTime = function estimateCasesForICU () {
        let infectionsByRequestedTime = impact.infectionsByRequestedTime;
        var casesForICUByRequestedTime = 0;

        casesForICUByRequestedTime = infectionsByRequestedTime / 100 * 5;
   
   
       return casesForICUByRequestedTime;
    }
   
    severeImpact.severeCasesForICUByRequestedTime = function estimateSevereCasesForICU () {
        let infectionsByRequestedTime = impact.infectionsByRequestedTime;
        var severeCasesForICUByRequestedTime = 0;

        severeCasesForICUByRequestedTime = infectionsByRequestedTime / 100 * 15;
   
   
      return severeCasesForICUByRequestedTime;
   }
   
    impact.casesForVentilatorsByRequestedTime = function estimateCasesForVentillators () {
        let infectionsByRequestedTime = impact.infectionsByRequestedTime;
        var casesForVentilatorsByRequestedTime = 0;

        casesForVentilatorsByRequestedTime = infectionsByRequestedTime / 100 * 2;
   
   
       return casesForVentilatorsByRequestedTime;
    }
   
    severeImpact.severeCasesForVentilatorsByRequestedTime = function estimateSevereCasesForVentillators () {
        let infectionsByRequestedTime = impact.infectionsByRequestedTime;
        var severeCasesForVentilatorsByRequestedTime = 0;

        severeCasesForVentilatorsByRequestedTime = infectionsByRequestedTime / 100 * 5;
   
   
      return severeCasesForVentilatorsByRequestedTime;
   }
   
    impact.dollarsInFlight = function estimateDollarsInflight () {
        let infectionsByRequestedTime = impact.infectionsByRequestedTime;
        var dollarsInFlight = 0;
   
        dollarsInFlight = infectionsByRequestedTime * 0.65 * 1.5 * 30; 

       return dollarsInFlight;
    }
   
    severeImpact.dollarsInFlight2 = function estimateDollarsInflight2 () {
        let infectionsByRequestedTime = severeImpact.infectionsByRequestedTime;
        var dollarsInFlight2 = 0;
   
        dollarsInFlight2 = infectionsByRequestedTime * 0.65 * 1.5 * 30; 
   
   
      return dollarsInFlight2;
   }
   


    return { data, impact, severeImpact };
};


const covid19ImpactEstimator = (data) => {
    const estimator = chain(
        // Challenge-1
        estimateCurrentlyInfected,
        estimateProjectedInfections,

        // Challenge-2
        estimateSevereCases,
        estimateBedSpaceAvailability,

        // Challenge-3
        estimateCasesForICU,
        estimateCasesForVentillators,
        estimateDollarsInflight
    );
    return estimator ({
        data,
        impact: {},
        severeImpact: {}
    });
};

export default covid19ImpactEstimator;





/* impact.currentlyInfected = estimateCurrentlyInfected();
    severeImpact.currentlyInfected = estimateSevereCurrentlyInfected();
    impact.infectionsByRequestedTime = estimateProjectedInfections(); 
    severeImpact.infectionsByRequestedTime = estimateSevereProjectedInfections();
    impact.severeCaseByRequestedTime = estimateSevereCases();
    severeImpact.severeCaseByRequestedTime = estimateMoreSevereCases(); 
    impact.hospitalBedsByRequestedTime = estimateBedSpaceAvailability();
    severeImpact.hospitalBedsByRequestedTime = estimateBedSpaceAvailability2(); 
    impact.casesForICUByRequestedTime = estimateCasesForICU();
    severeImpact.casesForICUByRequestedTime = estimateSevereCasesForICU();  
    impact.casesForVentilatorsByRequestedTime = estimateCasesForVentillators();
    severeImpact.casesForVentilatorsByRequestedTime = estimateSevereCasesForVentillators(); 
    impact.dollarsInFlight = estimateDollarsInflight();
    severeImpact.dollarsInFlight = estimateDollarsInflight2(); 
    
    



    function estimateCurrentlyInfected () {
     const reportedCases = 674;
     var currentlyInfected = 0;

     currentlyInfected = reportedCases * 10;

    return currentlyInfected;
 };

function estimateSevereCurrentlyInfected () {
     const reportedCases = 674;
     var severeCurrentlyInfected = 0;

     currentlyInfected = reportedCases * 50;

    return severeCurrentlyInfected;
 };
 function estimateProjectedInfections () {
     const infectionsByRequestedTime = 0;


    return infectionsByRequestedTime;
 };

 function estimateSevereProjectedInfections () {
    const severeInfectionsByRequestedTime = 0;


   return severeInfectionsByRequestedTime;
};
 

 function estimateSevereCases () {
     const severeCasesByRequestedTime = 0;


    return severeCasesByRequestedTime;
 };

 function estimateMoreSevereCases () {
    const moreSevereCasesByRequestedTime = 0;


   return moreSevereCasesByRequestedTime;
};

function estimateBedSpaceAvailability () {
    const hospitalBedsByRequestedTime = 0;


    return hospitalBedsByRequestedTime;
};

 function estimateBedSpaceAvailability2 () {
     const hospitalBedsByRequestedTime2 = 0;


     return hospitalBedsByRequestedTime2;
 };

 
 function estimateCasesForICU () {
     const casesForICUByRequestedTime = 0;


    return casesForICUByRequestedTime;
 };

 function estimateSevereCasesForICU () {
    const severeCasesForICUByRequestedTime = 0;


   return severeCasesForICUByRequestedTime;
};

 function estimateCasesForVentillators () {
     const casesForVentilatorsByRequestedTime = 0;


    return casesForVentilatorsByRequestedTime;
 };

 function estimateSevereCasesForVentillators () {
    const severeCasesForVentilatorsByRequestedTime = 0;


   return severeCasesForVentilatorsByRequestedTime;
};

 function estimateDollarsInflight () {
     const dollarsInFlight = 0;


    return dollarsInFlight;
 };

 function estimateDollarsInflight2 () {
    const dollarsInFlight2 = 0;


   return dollarsInFlight2;
};

    
    */



