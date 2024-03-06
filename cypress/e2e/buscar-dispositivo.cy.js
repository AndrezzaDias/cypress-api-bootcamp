/// <reference types="cypress"/>


describe('Buscar dispositivos', () =>{

    it('Buscar dispositivo específicos', () =>{
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/6'
        })
        .then((resultado) => {
            expect(resultado.status).to.equals(200)
            expect(resultado.status).to.exist
            expect(resultado.body.name).to.equal("Apple AirPods")
        })
    })
    it('Buscar todos os dispositivo', () =>{
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects'
        })
        .then((resultado) => {
           resultado.body.forEach((device) =>{
            expect(device).to.have.property('id')
            expect(device).to.have.property('name')
            expect(device).to.have.property('data')
           })
        })
        


    })
    it('Buscar dispositivo inexistente', () =>{
        
    })
})