describe('Testando se o login funciona', () => {
    beforeEach(() => {
        cy.visit('https://instagram.com');
    });

    it('Senha incorreta', () => {
        cy.get('button').contains('Log In').click();

        let nome = 'alessandrofeitozaxxxxxx';

        cy.get('[name="username"]').type(nome);

        cy.get('[name="password"]').type('12345678{enter}');

        cy.wait(4000);

        cy.contains('Sua senha está incorreta');
    });
})
