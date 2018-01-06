$(function(){
    
    
    
    $(window).scroll(function() {
   if(Math.round($(window).scrollTop()) + $(window).height() == $(document).height()) {
      
        $.getJSON('http://jsonplaceholder.typicode.com/users', function(users){
//            console.log(users);
            
            
            /* Dla każdego użytkownika z tablicy users w pętli for stwórz zestaw znaczników: p z id, p z imieniem, p z adresem www oraz hr */ 
            
//            for ( var i = 0; i < users.length; i++) {
//                console.log(users.id);
//                var pUsers = document.createElement('div');
//                $('div').html('<p>Id: ' + users[i].id + '</p><br>' + '<p>Imię: ' + users[i].name + '</p><br>' + '<p>URL: ' + users[i].website + '</p><br><hr>'
//                );
//                $('body').append(pUsers);
//                
//                
//            }
//            
                
            users.forEach(function(element){
                var parId = document.createElement('p');
                var parName = document.createElement('p');
                var parUrl = document.createElement('p');
                
                $(parId).html('Id: ' + element.id);
                $(parName).html('Imię: ' + element.name);
                $(parUrl).html('URL: ' + element.website);
                
                $('body').append(parId);
                $('body').append(parName);
                $('body').append(parUrl);
                $('body').append('<hr>');
                
//                console.log(parId);
            });
            
            
            
        });
       
   }
       
});
       
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});