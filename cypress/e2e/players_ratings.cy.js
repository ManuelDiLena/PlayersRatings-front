/* eslint-disable no-undef */

// npm run test: e2e -- Comand por test e2e --
describe('Players Ratings App', function() {
    beforeEach(function() {
        cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`)
        const user = {
            name: 'Manuel Di Lena',
            username: 'dilenman',
            password: 'dilenman'
        }
        cy.request('POST', `${Cypress.env('BACKEND')}/users/`, user)
        cy.visit('')
    })

    // Test to open the app in the browser
    it('Front page can be opened', function() {
        cy.contains('Players Ratings')
    })

    // Test to login to the app
    it('Login form can be opened', function() {
        cy.contains('Login').click()
        cy.get('#username').type('dilenman')
        cy.get('#password').type('dilenman')
        cy.get('#btnLogin').click()

        cy.contains('Manuel')
    })

    // Test to create new players
    describe('When logged in', function() {
        beforeEach(function() {
            cy.login({ username: 'dilenman', password: 'dilenman' })
        })

        it('A new player can be created', function() {
            cy.contains('New Player')
            cy.get('#outlined-name').type('Cypress Player')
            cy.get('#outlined-nation').type('Nation')
            cy.get('#outlined-position').click()
            cy.contains('GK').click()
            cy.get('#outlined-team').type('Team')
            cy.get('#outlined-rating').type('100')
            cy.contains('Add Player').click()
            
            cy.contains('Cypress Player')
        })
    })

    // Test to generate a failed login
    it('Login fails with wrong password', function() {
        cy.contains('Login').click()
        cy.get('#username').type('dilenman')
        cy.get('#password').type('wrong')
        cy.get('#btnLogin').click()

        cy.contains('Sign In')
    })
})