
import View from "./view.js";
import Impact from '../model/impact.js';
import SevereImpact from '../model/severeImpact.js';
import DataModel from '../model/data.js';

let view = new View();
let severeImpact = new SevereImpact();
let impact = new Impact();
let dataModel = new DataModel();

class Controller {
  constructor(dataModel, impact, severeImpact, view) {
    this.dataModel = dataModel,
    this.view = view,
    this.impact = impact,
    this.severeImpact = severeImpact

    // Display estimates
    this.onEstimatesChanged(this.impact, this.severeImpact)
    this.view.bindformData(this.handleUpdate)
    this.model.bindOnEstimatesChanged(this.onEstimatesChanged)
  }
  onEstimatesChanged = (impact, severeImpact) => {
    this.view.displayEstimates(impact, severeImpact)
  }

  
  handleUpdate = obj => {
    this.dataModel.update(obj)
  }
  
    

}

const app = new Controller(new DataModel(), new Impact(), new SevereImpact(), new View())









/* const covid19ImpactEstimator = (data) => {
  const estimator = chain();
  return estimator({
    data,
    impact: {},
    severeImpact: {}
  });
};

export default covid19ImpactEstimator;
 */