describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('ivysaur can be clicked', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
  
})

// describe('Pokemon ivysaur', function() {
//   it('ivysaur page is open', function() {
//     cy.visit('http://localhost:5000')
//     cy.contains('ivysaur').click()
//     cy.visit('http://localhost:5000/pokemon/ivysaur')
  
//   })
  
// })
