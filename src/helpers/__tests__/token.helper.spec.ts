import * as jwt from 'jsonwebtoken';
import * as tokeHelper from '../token.helper';
import chia, {expect} from "../../chia";



describe('Token Helper', () => {
    it('create access token', async () => {
        chia.spy.on(jwt, 'sign', returns => 'token');
        const token = await tokeHelper.createToken({username: 'username'});
        expect(token).to.be.a('string');
    });
});
