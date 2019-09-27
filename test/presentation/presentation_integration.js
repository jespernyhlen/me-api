process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app.js');

chai.should();

chai.use(chaiHttp);

describe('Presentation', () => {
    describe('GET /', () => {
        it('should have status 200', done => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);

                    done();
                });
        });
        it('should return object with properties name and text', done => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.body.data.should.have.a.property('name');
                    res.body.data.should.have.a.property('text');

                    done();
                });
        });
    });
});
