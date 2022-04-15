window.onload=function(){
    document.getElementById('btn').addEventListener
    ('click' , getResponse);
    
    function getResponse(){
        fetch('http://localhost:8888/api/v1/wallets')
        .then(function(res){
            return res.json();
    
        })
        .then(function(datas){

            
            var output = "";
            if(datas.status == "success"){
                datas.payload.map((wallet) =>{
                   output +=  `<li>${wallet.balance}</li>`
                })
            }
            document.getElementById('output').innerHTML = output;
            
        })
        .catch(function(err){
            console.log(err);
        });
    
    }  
  }