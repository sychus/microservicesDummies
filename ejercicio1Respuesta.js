const {
    send
} = require('micro');
const {
    url
} = require('url');
let visitas = {};

module.exports = (request, response) => {
    let ruta = request.url;
    if (ruta !== '/favicon.ico') {
        if (visitas[ruta]) {
            visitas[ruta] = visitas[ruta] + 1;
            console.log('entra a caso gral: ', visitas[ruta]);
        } else {
            visitas[ruta] = 1
            console.log('entra a caso base: ', visitas[ruta]);
        }
    }
    send(response, 200, `Visitaste esta pagina: ${visitas[ruta]} veces`);

}