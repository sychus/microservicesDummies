const {
    send
} = require('micro');
const query = require('micro-query');

module.exports = async (request, response) => {
    const q = query(request);
    let resultado = 0;
    switch (q.op) {
        case 'suma':
            {
                resultado = parseInt(q.valor1) + parseInt(q.valor2)
            }
            break;
        case 'resta':
            {
                resultado = parseInt(q.valor1) - parseInt(q.valor2)
            }
            break;
        default:
            resultado = 0
    }
    send(response, 200, resultado);

}