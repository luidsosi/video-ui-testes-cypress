describe('To Do list UI', () => {

    // it('Should return true when title component was correct', () => {
    //     cy.visit('/')

    //     cy.contains('To-Do List Component!').should('to.have.length', 1)
    // })

    it('Should remove a one task', () => {
        cy.visit('/')

        cy.get('[data-cy=btn-remove-0]').click()

        cy.get('[data-cy=table-tasks-row]').should('to.have.length', 1)
    })

    it('Should remove a two tasks', () => {
        cy.visit('/')

        cy.get('[data-cy=btn-remove-1]').click()

        cy.get('[data-cy=table-tasks-row]').should('to.have.length', 1)

        cy.get('[data-cy=btn-remove-0]').click()

        cy.get('[data-cy=table-tasks-row]').should('to.have.length', 0)
    })

})