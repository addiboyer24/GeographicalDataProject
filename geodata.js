$(document).ready(function(){
    
    var i = 0; 
    var j = -1;
    dataArray = new Array();
    
    d3.csv("WRP_national.csv", function(data){
        
       if(i % 5!= 0){
            dataArray[j].push(data);
            i+=1;
        }
        else{
            dataArray.push(new Array());
            i+=1;
            j+=1;
            dataArray[j].push(data);
        }
       
    });
    
    $("#test").click(function(){
        console.log(dataArray);
        dataArray.forEach(function(d){
            d.forEach(function(e){
                console.log(e.name);
                e.chrstgen = e.chrstgen.replace(/,/g,"");
                e.pop = e.pop.replace(/,/g,"");
                
                console.log(parseInt(e.chrstgen)/parseInt(e.pop)*100);
                
                
    });
                
               
                
                
                                });
        
        
                                });
    
});


