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
      getRequest (req, res) {
      return res.status(200).send({
        success: true,
        message: 'Successful',
        requestdb
      });

    }

    /**
   * @method createRequest
   * @param {object} req
   * @param {object} res
   * @return {array} Returns a list of request
   */
   createRequest(req, res) {
    // addS request to the requestdb
    let allDbs = requestdb;
    for (let i = 0; i < allDbs.length; i++) {
    //if(!req.body.Name  && !req.body.Email && !req.body.Phone && !req.body.address && !req.body.Description && !req.body.Request && !req.body.Message){
    if (req.body === "") {
      return res.status(404).send({
        message: "All fields are required",
        success:false,
      });
    }
    if(req.body.Name === "" || req.body.Email==="" || req.body.Phone ==="" || req.body.address ==="" || req.body.Description ==="" || req.body.Request ==="" || req.body.Message===""){
      return res.status(404).send({
        message: "All fields are required",
        success:false,
      });
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

 /**
     * @method getRequestById
     * @param {object} req //takes in a request parameter
     * @param {object} res // takes in a responds parameter
     * @returns {array} 
    */
   getRequestById(req, res) {
    
    let allDbs = requestdb;
    for (let i = 0; i < allDbs.length; i++) {
        if (req.params.id === allDbs[i].UserID) {
          res.status(200).send({
            request: allDbs[i],
            success: true,
            message: "Successful"
          })
        }
      }
      return res.status(404).send({
            success:false,
            message: "couldn't find user id"
          })
}
/**
     * @method modifyRequestById
     * @param {object} req //takes in a request parameter
     * @param {object} res // takes in a responds parameter
     * @returns {array} 
    */
    modifyRequestById(req, res) {
    let allDbs = requestdb;
     for (let i = 0; i < allDbs.length; i++) {
       if(req.params.id === allDbs[i].UserID){
        // if(!req.body.Name && !req.body.Email && !req.body.Phone && !req.body.address && !req.body.Description && !req.body.Request && !req.body.Message)
        if(req.body.Name === "" || req.body.Email==="" || req.body.Phone ==="" || req.body.address ==="" || req.body.Description ==="" || req.body.Request ==="" || req.body.Message===""){
         return res.status(422).send({
           message: "All field are required",
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
        return res.status(201).send({
         message:"successfully updated..",
         meal: allDbs[i],
         success: true
       });
       }
     }
 }
}
export default Request;