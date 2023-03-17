const rankingService = require('../service/rankingService');


/**
 * Method : getRanking
 * Desc   : gets ranking of AI LLMs 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
let getRanking = (request, response, next) => {



    rankingService.getRanking().then((result) => {

        response.status(result.statusCode).json(result.data);

        console.log('info: Get ranking request completed');
    });
}

module.exports = {
    getRanking
};