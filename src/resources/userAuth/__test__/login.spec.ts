import chai, {expect} from '../../../chia';
import {app} from '../../../app';
import UserService from '../../../services/user.service';
import * as passwordHelpers from '../../../helpers/password.helper';
import * as tokenHelpers from '../../../helpers/token.helper';

const prefix = '/api/v1/';
export const mockUser = {email: 'test@test.com', username: 'test', id: 1, password: 'password', isActive: true};

describe('/login endpoint', () => {

    it('should throw user not Found error', (done) => {
        chai
            .request(app)
            .post(`${prefix}users/login`)
            .send({
                email: 'email@test.com',
                password: 'pasword'
            })
            .end((err, res) => {
                const {body: {success, message}} = res;
                expect(success).to.equal(false);
                expect(message).to.equal('User not Found');
                expect(res).to.have.status(404);
                done();
            });});

        it('should return token if user exists', (done) => {
            chai.spy.on(UserService, 'checkUserExist', () => mockUser);
            chai.spy.on(passwordHelpers, 'verifyPassword', () => true);
            chai.spy.on(tokenHelpers, 'createToken', () => 'token');
            chai
                .request(app)
                .post(`${prefix}users/login`)
                .send({
                    email: 'email@test.com',
                    password: 'pasword'
                })
                .end((err, res) => {
                    const {body: {data, token, success}} = res;
                    expect(token).to.equal('token');
                    expect(data.username).to.equal(mockUser.username);
                    expect(success).to.equal(true);
                    done();
                    chai.spy.restore();

                });
        })
    });
