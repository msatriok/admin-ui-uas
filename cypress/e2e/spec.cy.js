describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="form"]').should("exist")

    cy.get('input#email')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Enter your email')
      .type('admin@store.com').should('have.value', 'admin@store.com')

    cy.get('input#password')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Enter your password')
      .type('123456').should('have.value', '123456') 
      
    cy.get('[data-testid="submit"]').click()

    cy.get('div.home')
            .should('be.visible')

        cy.get('div.sidebar')
        .should('be.visible') 

        cy.wait(3000);

        cy.get('[data-testid="category"]').click()
    
        cy.url().should('include', '/categories')
    
        cy.wait(2000);
        
        cy.get('div.mydatatableTitle').contains('CATEGORIES')

        cy.get('[data-testid="add-new"]').click();
    
        cy.url().should('include', '/categories/new');
    
        cy.wait(2000);
    
        cy.get('input#name')
          .type('Appetizer');
    
        cy.wait(1000);
        
        cy.get('div.right')
        cy.get('button[type="submit"]').click();
    
        cy.wait(1000);
    
        cy.get('.MuiDataGrid-virtualScrollerRenderZone').should('be.visible');
    
        cy.contains('.MuiDataGrid-row', 'Appetizer').as('appetizerRow');
    
        cy.wait(1000);
    
        cy.get('@appetizerRow').should('exist');
    
        cy.wait(500);
    
        cy.get('@appetizerRow').within(() => {
          cy.get('span.myDeleteButton').click();
        });
    
        cy.contains('.MuiDataGrid-row', 'Appetizer').should('not.exist');
    
        cy.reload();
    
        cy.get('.MuiDataGrid-virtualScrollerRenderZone').should('be.visible');
  })
})