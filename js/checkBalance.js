angular.module('starter.saldo', [])
.factory('saldo',function($http,sessionService){
return{
balance:function(scope){
//scope.kirim = sessionService.get('user');
var $promisee=$http.post('data/balance.php?get=a',{"data" : sessionService.get('user')}); //send data to user.php
var $promisea=$http.post('data/balance.php?get=b',{"data" : sessionService.get('user')}); //send data to user.php
var $promiseb=$http.post('data/balance.php?get=c',{"data" : sessionService.get('user')}); //send data to user.php
$promisee.then(function(msga){
	var idcardnya= msga.data;
	if (idcardnya) scope.result=msga.data;

	
})
$promisea.then(function(msgb){
	var idcardnyb= msgb.data;
	if (idcardnyb) scope.resultb=msgb.data;

})

$promiseb.then(function(msgc){
	var idcardnyc= msgc.data;
	if (idcardnyc) scope.resultc=msgc.data;

});

}
 }
}) 