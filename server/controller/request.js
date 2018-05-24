import requestdb from '../db';

/**
 * @exports
 * @class Request
 * @classdesc
 */
class Request {
    /**
     * @method getRequest
     * @param {object} req //takes in a request parameter
     * @param {object} res // takes in a responds parameter
     * @returns {array} 
    */
     static getRequest(req, res) {
      return res.status(200).send({
        success: true,
        message: 'Get all Request successfully',
        requestdb
      });

    }
}
export default Request;