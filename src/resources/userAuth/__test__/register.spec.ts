import chai from 'chai'
import chaiHttp from 'chai-http'
import Chai from '../../../chia';
import { app } from '../../../app'
const expect = chai.expect;
import db from '../../../database/models'
import UserService from '../../../services/user.service';
import {mockUser} from "./login.spec";

chai.use(chaiHttp);
const prefix = '/api/v1/';

describe('/register endpoint', () => {
  after(() => {
    db.UserModel.destroy({ truncate: true, cascade: false })
  });
  it('should test register user endpoint', done => {
    chai
      .request(app)
      .post(`${prefix}users/register`)
      .send({
        username: 'anyatibrian',
        email: 'anyatizibrian@gmail.com',
        password: '1234567',
      })
      .end((errors, res) => {
        expect(res.status).to.equal(201)
        expect(res.body.message).to.be.equal(
          'user has been successfully created',
        );
        expect(res.body).to.be.an('object');
        done()
      })
  });
  it('should test registered user already exist endpoint', done => {
      // Chai.spy.on(UserService, 'checkUserExists', () => mockUser);
    chai
      .request(app)
      .post(`${prefix}users/register`)
      .send({
        username: 'anyatibrian',
        email: 'anyatizibrian@gmail.com',
        password: '1234567',
      })
      .end((errors, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.error).to.be.equal(
          'user with anyatizibrian@gmail.com already exist',
        );
        done()
      })
  })
});
