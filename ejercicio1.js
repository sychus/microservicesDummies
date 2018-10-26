const {
    send
} = require('micro');
const {
    url
} = require('url');
let visitas = {};

module.exports = (request, response) => {
    let ruta = request.url;
    // TODO
    send(response, 200, `Visitaste esta pagina: ${visitas[ruta]} veces`);

}