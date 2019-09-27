process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app.js');

chai.should();

chai.use(chaiHttp);

describe('Reports', () => {
    describe('GET /reports', () => {
        it('should have status 200', done => {
            chai.request(server)
                .get('/reports')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    res.body.data.should.be.an('array');

                    done();
                });
        });
        it('should have status 200', done => {
            chai.request(server)
                .get('/reports/week/1')
                .end((err, res) => {
                    res.should.have.status(200);

                    done();
                });
        });

        it('should have response with properties kmom and text', done => {
            chai.request(server)
                .get('/reports/week/1')
                .end((err, res) => {
                    res.body.data.should.have.a.property('kmom');
                    res.body.data.should.have.a.property('text');

                    done();
                });
        });
    });

    describe('POST /reports/week/1', () => {
        let token;

        it('login to get token', done => {
            let user = {
                email: 'jeppe_nyhlen@hotmail.com',
                password: 'hejhej'
            };

            chai.request(server)
                .post('/login')
                .send(user)
                .end((err, res) => {
                    token = res.body.data.token;

                    done();
                });
        });
        it('should have status 201 with token', done => {
            let toUpdate = {
                kmom: '1',
                text: 'Updated text'
            };

            chai.request(server)
                .post('/reports/update')
                .set('x-access-token', token)
                .send(toUpdate)
                .end((err, res) => {
                    res.should.have.status(201);

                    // res.body.data.type.should.be.a('string', 'success');
                    // res.body.data.token.should.be.a('string');
                    // res.body.data.token.should.have.lengthOf.above(30);

                    done();
                });
        });
    });
});
