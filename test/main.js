const index = require('../index.js')
const assert = require('chai').assert
const check_email_reg = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
const true_email = 'yo@104.com.tw'
const false_email = 'yo104.com.tw'

describe('test_email',()=>{
    it('shoule return true by true email', () => {
        assert( index.email_check(true_email)==true , 'should be true email');
      })

    it('shoule return false by false email', () => {
        assert( index.email_check(false_email)==false ,'should be false email' );
      })
})

process.exitCode

