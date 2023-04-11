describe('Teste da pagina inicial do google', () => {
    it('Testando a busca', () => {
        //mãe, vá lá no site do google, acessando o endereço na url
        cy.visit('https://google.com');

        //mãe a senhora ta vendo um botão com o texto "Pesquisa google"
        cy.contains('Pesquisa Google');

        //mãe, a senhora ta vendo o campo de busca
        cy.get('[name="q"]').type('Digital College{enter}');

        cy.wait(3000);


    });
});
