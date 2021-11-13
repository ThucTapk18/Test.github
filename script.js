
function makeid() {
    
    var length = document.getElementById("len").value;
    var result           = '';
    var result2 	 = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var number = '0123456789';
    var numberLength = number.length;
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ )
 {

     result  += characters.charAt(Math.floor(Math.random() * charactersLength)); 
     result2  += number.charAt(Math.floor(Math.random() * numberLength)); 
	 
    }  
	
    document.getElementById("randomString").innerHTML = result; 
    
    document.getElementById("randomNumber").innerHTML = result2;
	
	 
}

