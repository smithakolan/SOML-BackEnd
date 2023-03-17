const fs = require('fs');

/**
 * Method: getRanking
 * Desc : gets ranking for AI LLMs
 */
let getRanking = () => {

    return new Promise((resolve, reject) => {


        fs.readFile('./src/service/ai_ranking.json', 'utf8', (error, data) => {
            if (error) {
                console.error(error);
                return;
            }
            const jsonData = JSON.parse(data);
            let result = {};
            result.data = jsonData;
            result.statusCode = 200;

            resolve(result)
        })



    });
}

module.exports = {
    getRanking
}