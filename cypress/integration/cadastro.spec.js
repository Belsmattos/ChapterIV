/// <reference types="cypress"  />

var Chance = require('chance') //importa
var chance = new Chance() // nova instancia do chance


// mocha -> test Runner

// describe, context, it

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app/')
        
        // Inputs de texto -> type
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email()) 
        // input[name=firstName]
        // input[name=lastName]
        // textarea[name=adress]
        // input[name=emailAdress]
        
        // Inputs radio / checkboxes -> check
        cy.get('input[value=n]').check()
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')

        // Inputs do tipo combobox / select -> select
        cy.get('select#countries').select('Dinamarca', { force: true })
        cy.get('select#years').select('2006', { force: true })
        cy.get('select#months').select('Janeiro', { force: true })
        cy.get('select#days').select('8', { force: true })

        //inputs de senha -> type
        cy.get('input#firstpassword').type('Alunos@2021')
        cy.get('input#secondpassword').type('Alunos@2021')

        //inputs de tipo button -> click
        cy.contains('Finalizar cadastro').click()

        // Asserçoes - validações
        // espero que a minha aplicação seja direcionada para a listagem
        // como sei se isso acontece? atraves da:
        //url
        // deve conter (traduzir para o ingles) 'listagem' 
        // should contain listagem
        cy.url().should('contain', 'listagem')

    });
});