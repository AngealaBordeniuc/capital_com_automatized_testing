import {handleModalWindowSignUp} from "../../helpers/modal_SignUp";
import {threeStepsToStartTrading} from "../../helpers/threeSteps";

export class OurOfficesPage {
  constructor(page) {
    this.page = page;
  }
  
  async verifyThreeStepsOurOffices(userState) {   
    await threeStepsToStartTrading(this.page, userState);   
  }
}
