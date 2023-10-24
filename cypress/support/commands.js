/* eslint-disable no-undef */
Cypress.Commands.add('login', ({ username, password }) => {
    cy.request('POST', 'http://localhost:3001/api/login', {
        username, password
    }).then(({ body }) => {
        localStorage.setItem('loggedPlayersAppUser', JSON.stringify(body))
        cy.visit('http://localhost:3000')
    })
})

Cypress.Commands.add('createPlayer', ({ playerName, nation, position, team, rating }) => {
    cy.request({
        url: 'http://localhost:3001/api/players',
        method: 'POST',
        body: { playerName, nation, position, team, rating },
        headers: {
            'Authorization': `bearer ${JSON.parse(localStorage.getItem('loggedPlayersAppUser')).token}`
        }
    })

    cy.visit('http://localhost:3000')
})