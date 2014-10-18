function TodoCtrl($scope) {
    $scope.total = function(){
      //var fee = jumlah;
        //return $scope.jumlah * 8;
        
        var fee = $scope.jumlah;
              
          if (fee <= "1499") {
          hasilfee ='1';
                  
            
          }
          else if(fee >= "1500" && fee < "2500"){
            hasilfee='2';
                    
            
          }
          else if(fee > '2499' && fee < "3500"){
            hasilfee='3';
                    
            
          }
          else if(fee > '3499' && fee < "4500"){
            hasilfee='4';
                    
            
          }
          else if(fee > '4499' && fee < "5500"){
            hasilfee='5';
                    
            
          }
          else if(fee > '5499' && fee < "6500"){
            hasilfee='6';
                    
            
          }
          else if(fee > '6499' && fee < "7500"){
            hasilfee='7';
                    
            
          }
          else if(fee > '7499' && fee < "8500"){
            hasilfee='8';
                     
          }
                    else if(fee > '8499' && fee < "9500"){
            hasilfee='9';
                     
          }
                    else if(fee > '9499' && fee < "10000"){
            hasilfee='10';
                     
          }
          else if (fee > "9999")
          {
            hasilfee= Math.floor(fee/1000);
          }

          return hasilfee;
          

    };
}