function chain() {
  const data = {
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614,
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  };
  const impact = {};
  const severeImpact = {};

  impact.currentlyInfected = function estimateCurrentlyInfected() {
    const { reportedCases } = data;
    let currentlyInfected = 0;

    currentlyInfected = reportedCases * 10;
    return currentlyInfected;
  };

  severeImpact.currentlyInfected = function estimateSevereCurrentlyInfected() {
    const { reportedCases } = data;
    let severeCurrentlyInfected = 0;

    severeCurrentlyInfected = reportedCases * 50;

    return severeCurrentlyInfected;
  };

  impact.infectionsByRequestedTime = function estimateProjectedInfections() {
    const { currentlyInfected } = impact;
    let infectionsByRequestedTime = 0;
    infectionsByRequestedTime = currentlyInfected * 512;

    return infectionsByRequestedTime;
  };

  severeImpact.infectionsByRequestedTime = function estimateSevereProjectedInfections() {
    const { currentlyInfected } = severeImpact;
    let severeInfectionsByRequestedTime = 0;
    severeInfectionsByRequestedTime = currentlyInfected * 1024;


    return severeInfectionsByRequestedTime;
  };


  impact.severeCasesByRequestedTime = function estimateSevereCases() {
    const { infectionsByRequestedTime } = impact;
    let severeCasesByRequestedTime = 0;

    const multiply = infectionsByRequestedTime * 15;

    severeCasesByRequestedTime = multiply / 100;
    return severeCasesByRequestedTime;
  };

  severeImpact.moreSevereCasesByRequestedTime = function estimateMoreSevereCases() {
    const { infectionsByRequestedTime } = severeImpact;
    let moreSevereCasesByRequestedTime = 0;

    const multiply = infectionsByRequestedTime * 20;

    moreSevereCasesByRequestedTime = multiply / 100;


    return moreSevereCasesByRequestedTime;
  };

  impact.hospitalBedsByRequestedTime = function estimateBedSpaceAvailability() {
    const { severeCasesByRequestedTime } = impact;
    let hospitalBedsByRequestedTime = 0;

    hospitalBedsByRequestedTime = severeCasesByRequestedTime / data.totalHospitalBeds;


    return hospitalBedsByRequestedTime;
  };

  severeImpact.hospitalBedsByRequestedTime2 = function estimateBedSpaceAvailability2() {
    const { moreSevereCasesByRequestedTime } = severeImpact;
    let hospitalBedsByRequestedTime2 = 0;

    hospitalBedsByRequestedTime2 = moreSevereCasesByRequestedTime / data.totalHospitalBeds;


    return hospitalBedsByRequestedTime2;
  };


  impact.casesForICUByRequestedTime = function estimateCasesForICU() {
    const { infectionsByRequestedTime } = impact;
    let casesForICUByRequestedTime = 0;

    const multiply = infectionsByRequestedTime * 5;
    casesForICUByRequestedTime = multiply / 100;


    return casesForICUByRequestedTime;
  };

  severeImpact.severeCasesForICUByRequestedTime = function estimateSevereCasesForICU() {
    const { infectionsByRequestedTime } = impact;
    let severeCasesForICUByRequestedTime = 0;

    const multiply = infectionsByRequestedTime * 15;
    severeCasesForICUByRequestedTime = multiply / 100;


    return severeCasesForICUByRequestedTime;
  };

  impact.casesForVentilatorsByRequestedTime = function estimateCasesForVentillators() {
    const { infectionsByRequestedTime } = impact;
    let casesForVentilatorsByRequestedTime = 0;

    const multiply = infectionsByRequestedTime * 2;
    casesForVentilatorsByRequestedTime = multiply / 100;


    return casesForVentilatorsByRequestedTime;
  };

  severeImpact.casesForVentilatorsByRequestedTime2 = function estimatecasesForVentillators2() {
    const { infectionsByRequestedTime } = impact;
    let casesForVentilatorsByRequestedTime2 = 0;

    const multiply = infectionsByRequestedTime * 5;
    casesForVentilatorsByRequestedTime2 = multiply / 100;


    return casesForVentilatorsByRequestedTime2;
  };

  impact.dollarsInFlight = function estimateDollarsInflight() {
    const { infectionsByRequestedTime } = impact;
    let dollarsInFlight = 0;

    dollarsInFlight = infectionsByRequestedTime * 0.65 * 1.5 * 30;

    return dollarsInFlight;
  };

  severeImpact.dollarsInFlight2 = function estimateDollarsInflight2() {
    const { infectionsByRequestedTime } = severeImpact;
    let dollarsInFlight2 = 0;

    dollarsInFlight2 = infectionsByRequestedTime * 0.65 * 1.5 * 30;


    return dollarsInFlight2;
  };


  return { data, impact, severeImpact };
}


const covid19ImpactEstimator = (data) => {
  const estimator = chain();
  return estimator({
    data,
    impact: {},
    severeImpact: {}
  });
};

export default covid19ImpactEstimator;
