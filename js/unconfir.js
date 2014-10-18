angular.module('starter.untrans', [])
    .service('untrans',function($http,sessionService,$location){
      return {
        
        transaksi: function(id){
          var response = {};
          var linknya =  'http://api.nhzcrypto.org:7776/nhz?';
          //var asudah = $location.search();
          //var okelah = 'requestType' : 'getBalance','account' : '15631880748279937004'
          $http.get(linknya, {'params' : {'requestType' : 'getUnconfirmedTransactionIds' , 'account' : sessionService.get('user')} }).success(function(data){
          	//var jumlahjson= 0;
            
            response.datas = data.unconfirmedTransactionIds;
            

          });

          return response;
        },
        
        }
    });



