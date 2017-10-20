$(function(){
    $("#message_submit").click(function(){
    
        $('#message_form').submit();
    })

    function AppendToboard(data)
    {
        $("<span/>", {
            'class':'author_name',
            "id": author,
            "text":'留言者:'+data.author_name+'\n'
          }).appendTo(".board");
        $("<span/>", {
            'class':'author_email',
            "id": 'author_email',
            "text":'\ne-mail:'+data.author_email
          }).appendTo(".board");
        $("<p/>", {
            'class':'author_message',
            "id": 'author_write',
            "text":'內容:'+data.author_write
          }).appendTo(".board");
        $("<div/>", {
            "class": 'message_div',
          }).appendTo(".board");

    }

    function author_check(author){
        if(author==""){
            return false;
        }else{
        return true
        }
    }


})    
