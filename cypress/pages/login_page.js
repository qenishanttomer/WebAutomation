export class LoginPage {

    loginPage_signin = '.GmqgG > .sc-1gu8y64-0'
    loginPage_usernumber = '.f7phya-0'
    loginPage_acceptterm = '.ifgrmg-0'
    loginPage_sendOTP = '.sc-1115q80-0'

    naviagteURL(baseurl){
        cy.visit(baseurl)
    }
    clickSignIn(){
        cy.get(this.loginPage_signin).click()
    }
    enterUserNumber(){
        cy.get(this.loginPage_usernumber).type('9953650667')
    }
    checkAcceptTC(){
        cy.get(this.loginPage_acceptterm).click()
    }
    sendOTP(){
        cy.get(this.loginPage_sendOTP).click();
    }
}