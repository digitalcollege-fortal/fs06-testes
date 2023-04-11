describe('Buscar CEP', () => {
    beforeEach(() => {
        cy.visit('https://alessandrofeitoza.github.io/endereco-via-cep');
    });

    it('Buscar CEP valido', () => {
        cy.get('#cep').type('60352590').blur();

        cy.wait(3000);

        cy.get('#logradouro').invoke('val')
            .then(v => {
                expect(v).to.equal('Rua Barca Velha');
            });

        cy.get('#cidade').invoke('val')
            .then(value => {
                expect(value).to.equal('Fortaleza');
            });

        cy.get('#numero').should('be.focus');
    });

    it('Buscar CEP valido, testando se o input logradouro perde o focos', () => {
        cy.get('#cep').type('60352590').blur();

        cy.wait(3000);

        cy.get('#logradouro').should('not.be.focus');
    });

    it('Buscar CEP invalido', () => {
        cy.get('#cep').type('xxxxxxxxx').blur();

        cy.wait(3000);

        cy.get('#logradouro').should('be.empty');
    });
    
    it('Buscar CEP inexistente', () => {
        cy.get('#cep').type('99999999').blur();

        cy.wait(3000);

        cy.get('#logradouro').invoke('val')
            .then(value => {
                expect(value).to.equal('undefined');
            });
    });
})
