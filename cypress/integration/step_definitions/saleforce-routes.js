import Connection from '../../requests/connection.service';


describe('Acessar BD e realizar operaçoes', () => {
    it('Deve retornar valores numericos', () => {
        cy.log(Connection.run())
    })
})