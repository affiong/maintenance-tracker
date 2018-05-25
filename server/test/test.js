import mocha from 'mocha';
import chai from 'chai';
import chaiHtpp from 'chai-http';
import apiRoutes from '../routes/index';
import app from '../app';

chai.use(chaiHtpp);
chai.should();
describe('ReQuests', () => {
  describe('GET /requests', () => {
    it('it should get all logged request', (done) => {
      chai.request(app) //starts the server
        .get('/api/v1/users/requests') //sends a get request to the endpoint
        .end((error, res) => { // checks for error and responds
          res.should.have.status(200); // checks tht responds have sttus of 200
          done();
        });
    });

    it('it should get single request with id', (done) => {
      const id = '3';
      chai.request(app)
        .get(`/api/v1/users/requests/${id}`)
        .end((error, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it('it should return error message when a wrong id is sent', (done) =>{
      const id = '5';
      chai.request(app)
        .get(`/api/v1/users/requests/${id}`)
        .end((error, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  describe('POST /requests', () => {
    it('it should create a new request if all fields are supplied', (done) =>{
      const request = {            
        UserID: "1",
        Name: "Affiong",
        Email: "unoaffiong@gmail.com",
        Phone: "07038960562",
        address: "Obanikoro",
        Description: "Appliance",
        Request: "repair",
        Message: "blocked kitchen sink"
      };
      chai.request(app)
        .post('/api/v1/users/requests/')
        .send(request)
        .end((error, res) =>{
          res.should.have.status(201);
          done();
      });
    });
    it('it should not create a new request if all fields are not supplied', (done) =>{
      const request = {
        UserID: "2",
        Name: "Bankole",
        Email: "bankole24g@gmail.com",
        Phone: "07066960562",
        address: "ikeja",
        Description: "Automobile",
        Request: "",
        
      
      };
      chai.request(app)
          .post('/api/v1/users/requests/')
          .send(request)
          .end((error, res) =>{
            res.should.have.status(404);
            done();
      });
    });
  });

  describe('Put /requests', () =>{
    it('it should update request if all fields are filled', (done) =>{
      const request = {
        UserID: "2",
        Name: "Bankole",
        Email: "bankole24g@gmail.com",
        Phone: "07066960562",
        address: "ikeja",
        Description: "Automobile",
        Request: "repair",
        Message: "break dics"
      };
      chai.request(app)
          .put('/api/v1/users/requests/2')

          .send(request)
          .end((error, res) =>{
            res.should.have.status(201);
            done();
      });
    });
  });
  it('it should not update request if a filled is empty', (done) =>{
    const request = {
      UserID: "2",
      Name: "Bankole",
      Email: "bankole24g@gmail.com",
      Phone: "07066960562",
      address: "ikeja",
      Description: "Automobile",
      Request: "repair",
      Message: ""
    };
    chai.request(app)
        .put('/api/v1/users/requests/2')

        .send(request)
        .end((error, res) =>{
          res.should.have.status(422);
          done();
    });
  });

});

