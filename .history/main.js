window.onload=function(){
    document.getElementById('btn').addEventListener
    ('click' , getResponse);
    
    function getResponse(){
        fetch('http://localhost:8888/api/v1/wallets')
        .then(function(res){
            return res.json();
    
        })
        .then(function(datas){
           console.log(datas);
           
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
    
    // FilePicker
    picker.addEventListener("click" , getFilepkr);
    var item= ''
    function getFilepkr(){
        fetch('http://localhost:8888/api/v1/filepicker?type=file')
        .then(function(res){
            return res.json();
    
        })
        .then(function(datas){
           console.log(datas);
            item = datas.payload.items_picked;
            console.log(item)
            
        
           
        })
        .catch(function(err){
            console.log(err);
        });
    
    }

     //Unpacker
      unpack.addEventListener("click" , function(){
       
        console.log(formData)
        var formData = 
           { data : item[0] }
        
     fetch("http://localhost:8888/api/v1/unpack" ,{
         method: "post" ,
         body: JSON.stringify(formData)  
         
        })
        .catch(console.error);
   
  });


 }
