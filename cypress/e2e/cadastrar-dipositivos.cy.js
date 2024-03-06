/// <reference types="cypress"/>


describe('Cadastrar dipositivo', () =>{

    it('Cadastrar dispositivo com sucesso', () =>{
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body:{
                "name": "Dispositivo do Finotti 2",
                "data": {
                   "year": 2050,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                }
             }
        })
        .then((resultado) => {
            expect(resultado.status).to.equals(200)
            expect(resultado.body.name).to.equals("Dispositivo do Finotti 2")


        })
    })
    
        
})