const index = require('../public/javascript/main.js')
const assert = require('chai').assert
const check_email_reg = /^[A-Za-z]+(\.)?[A-Za-z]+@(([a-zA-Z0-9]+)(\.){1})+[A-Za-z0-9]+$/
const check_name_reg = /^[A-Za-z]+\.?[A-Za-z]+$/
// describe('request_test',()=>{
//     it('shoule return true by true email', (done) => {
//     request(index)
//     .post('/')
//     .send(true_req)
//     .expect(200)
//     .end((err,res)=>{
//         done();
//     });
// });
// })

describe('test_email',()=>{
    it('shoule return true by true email', () => {
        assert( index.email_check('yo.chen@104.com.tw')==true , 'should be true email');
        
      })
      it('shoule return false by false name', () => {
        assert( index.email_check('..@104.com.tw')==false , 'should be false email');        
      })        
})

describe('test_name',()=>{
    it('shoule return true by true name', () => {
        assert( index.name_check('yo.chen')==true , 'should be true name');
        assert( index.name_check('yochen')==true , 'should be true name');
        assert( index.name_check('yo')==true , 'should be true name');
      })
    it('shoule return false by false name', () => {
        assert( index.name_check('yo..')==false ,'should be false name yo..')
        assert.isFalse(index.name_check('..yo'))
        assert( index.name_check('..')==false ,'should be false name ..')   
      })
    
})

