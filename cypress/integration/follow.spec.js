describe('Seguir', () => {
    it('Seguir', () => {
        const user = 'usuario'+(new Date()).getTime();
        const password = 'senha'+(new Date()).getTime();
        cy.visit('/register', {timeout: 10000});
        cy.get('[formcontrolname=username]').type(user);
        cy.get('[formcontrolname=email]').type(user+'@email.com');
        cy.get('[formcontrolname=password]').type(password);
        cy.get('.btn').click();
        cy.wait(10000);
        cy.visit('/profile/testecypress');
        cy.contains('Follow').click();
    });
});
