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

    /**
   * @method createRequest
   * @param {object} req
   * @param {object} res
   * @return {array} Returns a list of request
   */
  static createRequest(req, res) {
    // adding request to the requestdb
    let allDbs = requestdb;
    for (let i = 0; i < allDbs.length; i++) {
    if(!req.body.Name || !req.body.Email || !req.body.Phone || !req.body.address || !req.body.Description || !req.body.Request || !req.body.Message){
      return res.status(404).send({
        message: "All field as not completed",
        success:false,
      })
     }
     else{
      allDbs[i].Name = req.body.Name;
      allDbs[i].Email = req.body.Email;
      allDbs[i].Phone = req.body.Phone;
      allDbs[i].address = req.body.address;
      allDbs[i].Description = req.body.Description;
      allDbs[i].Request = req.body.Request;
      allDbs[i].Message = req.body.Message;
     }

    requestdb.push({
      id: requestdb[requestdb.length - 1].id + 1,
    });
    return res.status(201).send({
      Message: 'Request was added successfully',
      request: req.body,
      success: true
    });
  }
  }
}
export default Request;