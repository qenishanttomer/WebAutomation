import {LoginPage} from "../pages/login_page"

let loginPage = new LoginPage()
it('Login', function(){
      loginPage.naviagteURL('https://dunzo-proxy-webpod.dunzodev.in/order')
      loginPage.clickSignIn()
      loginPage.enterUserNumber()
      loginPage.checkAcceptTC()
      loginPage.sendOTP()
      cy.wait(500)
      cy.task("queryDatabase", "9953650667").then((otp) =>
      cy.get(":nth-child(1) > .f7phya-2 > .f7phya-0").type(otp))
})

