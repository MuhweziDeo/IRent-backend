import chai from 'chai';
import chaiHttp from 'chai-http';
import chaiSpies from 'chai-spies';

chai.use(chaiSpies);
chai.use(chaiHttp);
const expect = chai.expect;

export  default chai;
export { expect };
