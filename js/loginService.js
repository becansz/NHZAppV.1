angular.module('starter.loginService', [])
.factory('loginService',function($http,$location,sessionService){
return{
login:function(user,scope){
var linknya =  'http://api.nhzcrypto.org:7776/nhz?';
var dataget = sessionService.get('user');
var response ={};
var $promise=$http({
					method : 'POST',
                    url : linknya,
                    params : {'requestType' : 'getAccountId' , 'secretPhrase' : user.akun }
                }).success(function(data){
            response.datas = data.accountId;
            response.dataku = data.errorDescription;
            response.datak = data.accountRS;
            
          });
$promise.then(function(msg){
var uid=response.dataku;
 if (uid != "Unknown alias") {
 	sessionService.set('user',response.datas);
 	sessionService.set('wallet',response.datak);
 	sessionService.set('aliasnama',user.akun);
 	//sessionService.set('pwd',user.akun);
 	sessionService.set('loginget','true');
 	$location.path('/app/balance');
 	var  pubid = {};
 	$http.get(linknya, {'params' : {'requestType' : 'getAccount' , 'account' : sessionService.get('user')} }).success(function(data){
            pubid.datas = data.publicKey;
            pubid.datakku = data.errorDescription;
            if (data.errorDescription=="Unknown account") {
            	sessionService.set('pubid2', "true");
            	sessionService.set('erorpubid', "You are not allow to sent money because don't have a public key. please make transactionscope fisrt in wallet localhost");	
            }else{
            sessionService.set('pubid', data.publicKey);
        }
          });


 }
 else
 {
 	scope.msgtxt='eror login';
 	$location.path('/app/login');
 }
});
},
logout:function(scope){
	sessionService.destroy('user');
	sessionService.destroy('loginget');
	sessionService.destroy('notice');
	sessionService.destroy('notice2');	
	sessionService.destroy('aliasnama');
	sessionService.destroy('wallet');
	sessionService.destroy('erorpubid');
	sessionService.destroy('pubid');
	sessionService.destroy('pubid2');
	
	
	
	
	$location.path('/app/login');
}
}
 
}) 