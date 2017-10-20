$(function(){

    
    $("#message_submit").click(function(){
        let time = new Date();
        time = time+'';
        time = time.split(' ');
        let author = $('#author').val();
        let email = $('#email').val();
        let write = $('#write').val();
        
        AppendToboard(author,email,write,time);

    });

    function AppendToboard(author,email,write,time)
    {
        $("<span/>", {
            'class':'author_name',
            "id": author,
            "text":'留言者:'+author+'\n'
          }).appendTo(".board");
        $("<span/>", {
            'class':'author_email',
            "id": 'author_email',
            "text":'e-mail:'+email
          }).appendTo(".board");
        $("<p/>", {
            'class':'author_message',
            "id": 'author_write',
            "text":'內容:'+write
          }).appendTo(".board");
        $("<p/>", {
            'class':'message_time',
            "text":'time:'+time[4]
          }).appendTo('.board');
        $("<div/>", {
            "class": 'message_div',
          }).appendTo(".board");

    }

})    
