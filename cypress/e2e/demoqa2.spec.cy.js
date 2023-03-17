import DemoQA2 from "../../pageObjects/demoqa2.po";

describe('demoqa website', () => {

    beforeEach(function() {
        // executes prior each test within it block
        cy.visit('https://demoqa.com/automation-practice-form');
     })

    it('test student registration', () => {
        const page = new DemoQA2()
        page.enterfirstname(data.firstName)
        
        
    });
});


