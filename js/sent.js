angular.module('starter.sent', [])
    .factory('SentBalance',function($http,$stateParams,$cordovaBarcodeScanner,sessionService,$location){
      return {
        sent:function(nhz,scope,list){
          var response = {};
          var linknya =  'http://nhz.nicebitco.in:7776/nhz?';
          var idpub = sessionService.get('pubid');
          var pwd = nhz.pwd;
          var statsent = $stateParams.stat;

          if (pwd != sessionService.get('aliasnama')) {
            var kamu = "Wrong password";
            scope.OnSubmit = false;
            toastr.warning(kamu);
          }else
          {
          if (statsent == "add") {
          
          var $promise=$http({
                              method : 'POST',
                              url : linknya,
                              params : {'requestType': 'sendMoney','secretPhrase':nhz.pwd,'recipient':scope.penerima,'amountNQT':nhz.jumlah*100000000,'feeNQT': scope.counter*100000000,'deadline':'1440','publicKey':idpub} }).success(function(data){
              response.hasil = data.errorDescription;
              response.move = data.transaction;
            });
          //return response;
          $promise.then(function(msg){
          var uid=response.hasil;
          var move = response.move;
          if (!uid) {
              $location.path('app/cekid/'+move);
              scope.OnSubmit = false;
              toastr.success('Sent Success'); 
          }
          else {
              //scope.hasildata = uid; 
              toastr.warning(uid); 
              scope.OnSubmit = false;   
            } 
          });
          }
          else if (statsent == "idnum") {
          $http.get(linknya, {'params' : {'requestType' : 'getAccount' , 'account' : nhz.penerima} }).success(function(data){
            var penerima = data.accountRS;
            var ErrorReport = data.errorDescription;
            if (!ErrorReport) {

          var $promise=$http({
                              method : 'POST',
                              url : linknya,
                              params : {'requestType': 'sendMoney','secretPhrase':nhz.pwd,'recipient':penerima,'amountNQT':nhz.jumlah*100000000,'feeNQT': scope.counter*100000000,'deadline':'1440','publicKey':idpub} }).success(function(data){
              response.hasil = data.errorDescription;
              response.move = data.transaction;
            });
          //return response;
          $promise.then(function(msg){
          var uid=response.hasil;
          var move = response.move;
          if (!uid) {
              $location.path('app/cekid/'+move);
              scope.OnSubmit = false;
              toastr.success('Sent Success'); 
          }
          else {
              //scope.hasildata = uid;    
              toastr.warning(uid); 
              scope.OnSubmit = false;
            } 
          });
  
            }
            else{
              scope.hasildata = ErrorReport;
              toastr.warning(ErrorReport); 
              scope.OnSubmit = false;
            }
          })
          }
          else if (statsent == "alias") {
          $http.get(linknya, {'params' : {'requestType' : 'getAlias' , 'aliasName' : scope.penerima }}).success(function(data){
            var penerima = data.accountRS;
            var ErrorReport = data.errorDescription;
            if (!ErrorReport) {

          var $promise=$http({
                              method : 'POST',
                              url : linknya,
                              params : {'requestType': 'sendMoney','secretPhrase':nhz.pwd,'recipient':penerima,'amountNQT':nhz.jumlah*100000000,'feeNQT': scope.counter*100000000,'deadline':'1440','publicKey':idpub} }).success(function(data){
              response.hasil = data.errorDescription;
              response.move = data.transaction;
            });
          //return response;
          $promise.then(function(msg){
          var uid=response.hasil;
          var move = response.move;
          if (!uid) {
              $location.path('app/cekid/'+move);
              scope.OnSubmit = false;
               toastr.success('Sent Success'); 
          }
          else {
               toastr.warning(uid); 
              scope.OnSubmit = false;  
              
            } 
          });
  
            }
            else{
              toastr.warning(ErrorReport); 
              scope.OnSubmit = false;
            }
          })
          }
        }
        }
        }
    })
