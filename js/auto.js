angular.module('starter.auto', [])
    .service('UserService',function($http,sessionService,$location){
      return {
        balancenhz: function(id){
          var response = {};
          var linknya =  'http://nhz.nicebitco.in:7776/nhz?';  
          $http.get(linknya, {'params' : {'requestType' : 'getBalance' , 'account' : sessionService.get('user')} }).success(function(data){
          var  dataget = data.balanceNQT;
          if (isNaN(dataget))
          {
            response.datas = '0';
          }
          else
          {
            response.datas = data.balanceNQT/100000000;
          }
          });
          return response;
        },
        guaranted: function(id){
          var response = {};
          var linknya =  'http://nhz.nicebitco.in:7776/nhz?';
          $http.get(linknya, {'params' : {'requestType' : 'getBalance' , 'account' : sessionService.get('user')} }).success(function(data){
            
             var  dataget = data.guaranteedBalanceNQT;
            if (isNaN(dataget))
          {
            response.datas = 0;
          }
          else
          {
            response.datas = data.guaranteedBalanceNQT/100000000;
          }
          });
          return response;
        },
        unconf: function(id){
          var response = {};
          var linknya =  'http://nhz.nicebitco.in:7776/nhz?';
          $http.get(linknya, {'params' : {'requestType' : 'getBalance' , 'account' : sessionService.get('user')} }).success(function(data){
            
             var  dataget = data.unconfirmedBalanceNQT;
            if (isNaN(dataget))
          {
            response.datas = 0;
          }
          else
          {
            response.datas = data.unconfirmedBalanceNQT/100000000;
          }
          });
          return response;
        },
        efective: function(id){
          var response = {};
          var linknya =  'http://nhz.nicebitco.in:7776/nhz?';
          $http.get(linknya, {'params' : {'requestType' : 'getBalance' , 'account' : sessionService.get('user')} }).success(function(data){
            
             var  dataget = data.effectiveBalanceNHZ;
            if (isNaN(dataget))
          {
            response.datas = 0;
          }
          else
          {
            response.datas = data.effectiveBalanceNHZ;
          }
          });
          return response;
        },
        forged: function(id){
          var response = {};
          var linknya =  'http://nhz.nicebitco.in:7776/nhz?';
          $http.get(linknya, {'params' : {'requestType' : 'getBalance' , 'account' : sessionService.get('user')} }).success(function(data){
             var  dataget = data.forgedBalanceNQT;
            if (isNaN(dataget))
          {
            response.datas = 0;
          }
          else
          {
            response.datas = data.forgedBalanceNQT/100000000;
          }
          });
          return response;
        },
        assets: function(id){
          var response = {};
          var linknya =  'http://nhz.nicebitco.in:7776/nhz?';
          $http.get(linknya, {'params' : {'requestType' : 'getAccount' , 'account' : sessionService.get('user')} }).success(function(data){
             var assetsstat = data.assetBalances;

             if (!assetsstat)
             {
             response.datas = 0;
              }
              else{
                response.datas = data.assetBalances.length;
              }
          });
          return response;
        },
        version: function(id){
          var response = {};
          var linknya =  'http://nhz.nicebitco.in:7776/nhz?';
          $http.get(linknya, {'params' : {'requestType' : 'getState'}}).success(function(data){
             response.datas = data.version ;

          });
          return response;
        },

        
        }
    });


