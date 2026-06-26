import {handleModalWindowSignUp} from "../../helpers/modal_SignUp";
import {threeStepsToStartTrading} from "../../helpers/threeSteps";

export class InvestorRelationsPage {
  constructor(page) {
    this.page = page;
  }
  async clickThreeStepsInvestor(userState) {     
    await threeStepsToStartTrading(this.page, userState);    
  }
  }

