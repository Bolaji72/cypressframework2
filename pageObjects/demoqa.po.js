class DemoQA {

    enterfirstName (args){
        const field =cy.get('#firstName');
        field.clear();
        field.type(args);
        return this;
    }

    enterlastName (args){
        const field =cy.get('#lastName');
        field.clear();
        field.type(args);
        return this(args);
    }

}

export default DemoQA;