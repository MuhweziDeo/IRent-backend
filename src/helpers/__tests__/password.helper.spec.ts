import * as bcrypt from 'bcrypt';
import chia, {expect} from '../../chia';
import {hashPassword, verifyPassword} from '../password.helper';
import {string} from "@hapi/joi";

describe('PasswordHelper', () => {
   it('should hash password',  async () => {
    const hash = await hashPassword('password');
    expect(hash.length).to.be.greaterThan(1);
   });

   it('should compare hash password', async () => {
       const hashed = await hashPassword('password');
       const verified = await verifyPassword('password', hashed);
       expect(verified).to.equal(true);
   })
});
