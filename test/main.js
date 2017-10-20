const index = require('../index.js')
const assert = require('chai').assert

describe('check',()=>{

    it('shoule return 1', () => {
        assert(index.email_check(1) === 1);
      })


})