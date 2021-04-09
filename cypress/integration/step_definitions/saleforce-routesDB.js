
const portfolios = require('../../fixtures/requests-portfolios-polos.json');

describe('Acessar BD e realizar operaçoes', () => {
    const portfolioCodePolos = portfolios.portfolioCodePolos;
	portfolioCodePolos.forEach((portfolioCodeRoute) => {
    
        it('Deve retornar valores numericos', () => {
            expect(portfolioCodeRoute).to.be.not.null
            expect(portfolioCodeRoute).to.be.an('number')
        })

    })
})
