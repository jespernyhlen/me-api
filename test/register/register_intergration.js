process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app.js');

chai.should();

chai.use(chaiHttp);

describe('Register', () => {
    describe('POST /register', () => {
        it('should have status 401 with no user information', done => {
            let user = {};

            chai.request(server)
                .post('/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(401);

                    // res.body.data.type.should.be.a('string', 'success');
                    // res.body.data.token.should.be.a('string');
                    // res.body.data.token.should.have.lengthOf.above(30);

                    done();
                });
        });
    });
});
