const {
    send
} = require('micro');
let visitas = {};

module.exports = (request, response) => {
    send(response, 200, 'Holis mundis');

}