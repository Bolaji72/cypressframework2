import DemoQA from "../../pageObjects/demoqa.po";


describe('demoqa website', () => {
   
    beforeEach(() => {
        cy.visit('/automation-practice-form')
    });

    it('test student registration form', () => {

        const page = new DemoQA();
        cy.fixture("testdata.json").then ((data) => {
            page.enterfirstName(data.firstName)
            page.enterlastName(data,lastName)
        });
            
    });
});

