
const check_email_reg = /^[A-Za-z]+(\.)?[A-Za-z]+@(([a-zA-Z0-9]+)(\.){1})+[A-Za-z0-9]+$/
const check_name_reg = /^[A-Za-z]+\.?[A-Za-z]+$/
function email_check(email){
    if(check_email_reg.test(email)==true){
        return true
    }else{
        return false
    }
}

function name_check(author){
    if(check_name_reg.test(author)==true){
        return true
    }else{
        return false
    }

}


function change_color(){
    var text_color = document.getElementById('#textboard');    
    text_color.mouseover(function() {
        text_color.addClass('hover');
    });
    text_color.mouseleave(function() {
        text_color.addClass('hover');
	});

}



module.exports = {
        email_check,
        name_check,
        change_color
      }