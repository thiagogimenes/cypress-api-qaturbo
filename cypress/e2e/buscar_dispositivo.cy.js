describe('Funcionalidade para cadastro, busca, alteração e remoção de material', () => {

    it('Deve buscar dispositivo com sucesso', () => {

        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objects/1"
        }).then((resposta) => {
            expect(resposta.status).to.equal(200)
            expect(resposta.body.id).to.equal('1')
            expect(resposta.body.name).to.equal('Google Pixel 6 Pro')
        })
    });

    it('Deve deve cadastrar um dispositivo com sucesso', () => {

        cy.request({
            method: "POST",
            url: "https://api.restful-api.dev/objects",
            body: {
                "name": "Meu Celular",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }
        }).then((resposta) => {
            expect(resposta.status).to.equal(200)
            expect(resposta.body.name).to.equal('Meu Celular')
            expect(resposta.body.id).not.empty
        }).wrap(id)
        console.log(id)
    });

    it('Deve alterar um dispositivo cadastrado', () => {
        // todo
        /*
        https://api.restful-api.dev/objects/7

                    {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 2049.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
                "color": "silver"
                }
            }
        */
    });

    it('Deve deletar o dispositivo cadatrado', () => {
        // todo 
        /*
        https://api.restful-api.dev/objects/6

            {
            "message": "Object with id = 6, has been deleted."
            }
        */
    });

});