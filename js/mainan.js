angular.module('starter.trans', [])
    .service('trans',function($http,sessionService,$location){

      return {
        
        transaksi: function(id){
          var response = {};
          var linknya =  'http://api.nhzcrypto.org:7776/nhz?';
          //var asudah = $location.search();
          //var okelah = 'requestType' : 'getBalance','account' : '15631880748279937004'
          $http.get(linknya, {'params' : {'requestType' : 'getAccountTransactionIds' , 'account' : sessionService.get('user')} }).success(function(data){
   
            response.datas = data.transactionIds;

          });

          return response;

        },
        
        }
    })



