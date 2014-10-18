angular.module('starter.controllers', [])

.controller('LoginCtrl', ['$scope','loginService','sessionService', function ($scope,loginService,sessionService) {
  $scope.msgtxt=sessionService.get('aliasnama');
  $scope.dataget=sessionService.get('loginget');
  $scope.noticedata=sessionService.get('notice');
  $scope.noticedata2=sessionService.get('notice2');
  

  $scope.login=function(user){
    loginService.login(user,$scope); //call login service
  };
}])
.controller('LogoutCtrl', function($scope,$ionicModal,loginService) {
  $scope.txt='';
  $scope.logout=function(){
    loginService.logout(); //call login service
  };
   $ionicModal.fromTemplateUrl('templates/slsent.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeSent = function() {
    $scope.modal.hide();
  };

  $scope.SelectSent = function() {
    $scope.modal.show();
  };

})

.controller('ExampleController', ['$scope', function($scope) {
       $scope.list = [];
       //$scope.text = 'hello';
      
     }])
.controller('KirimUang', ['$scope', 'UserService','SentBalance','sessionService', function($scope,UserService,SentBalance,sessionService,nhz) {
  
  toastr.options = {
                positionClass: 'toast-bottom-full-width',
            };
             $scope.gift = function() {
          // $scope.list.push(this.text);
           $scope.penerima = $scope.pene;
           //console.log($scope.pe);
       };
 //$scope.result.txt;
 //var respone = {};

//alert($scope.penerima)
//$scope.penerima= '';
//$scope.pe = $scope.penerima;
//$scope.pe = $scope.penerima;
 $scope.scan= function() {
          cordova.plugins.barcodeScanner.scan(
            function (result) {
              alert(result.text);
                $scope.pene = result.text;
                $scope.penerima = $scope.pene;
            }, 
            function (error) {
              alert("Scanning failed: " + error);
            }
          );
        };
        
//$scope.penerima;
//$scope.list.push(this.text);
     //  $scope.penerima = $scope.mantap;
  //$scope.penerima=0;
$scope.invalidNotification = false;
$scope.OnSubmit = '';
  var kamu = $scope.hasildata = '';

  $scope.puberor=sessionService.get('erorpubid');
  $scope.kirimuang=sessionService.get('pubid2');

        $scope.change = function(nhz) {
         var fee = nhz.jumlah;
          if (fee > 0 && fee < 1499) {
          $scope.counter =1;
          }

          else if(fee == 0){
            $scope.counter=0;
          }
          else if(fee > 1499 && fee < 2500){
            $scope.counter=2;
          }
          else if(fee > 2499 && fee < 3500){
            $scope.counter=3;
                    
            
          }
          else if(fee > 3499 && fee < 4500){
            $scope.counter=4;
                    
            
          }
          else if(fee > 4499 && fee < 5500){
            $scope.counter=5;
                    
            
          }
          else if(fee > 5499 && fee < 6500){
            $scope.counter=6;
                    
            
          }
          else if(fee > 6499 && fee < 7500){
            $scope.counter=7;
                    
            
          }
          else if(fee > 7499 && fee < 8500){
            $scope.counter=8;
                     
          }
                    else if(fee > 8499 && fee < 9500){
            $scope.counter=9;
                     
          }
                    else if(fee > 9499 && fee < 10000){
            $scope.counter=10;
                     
          }
          else if (fee > 9999)
          {
            $scope.counter= Math.floor(fee/1000);
          }
          else{
            $scope.counter= "";
          }
        };
  $scope.sent=function(nhz){
    SentBalance.sent(nhz,$scope);
    //console.log(asu)
    //console.log($scope.hasildata = '');
  }
}])
.controller('transaksid', function($scope,transs) {
  
$scope.transdetails = transs.cektid();
//console.log($stateParams.idtx);
           $scope.fullHash = transs.cektid();
           $scope.confirmations = transs.cektid();
           $scope.signatureHash = transs.cektid();
           $scope.amountNQT = transs.cektid();
           $scope.recipientRS = transs.cektid();
           $scope.feeNQT = transs.cektid();
           $scope.senderRS = transs.cektid();
           $scope.signature = transs.cektid();
})


.controller('autoCtrl', function($scope, $ionicModal, $timeout,UserService,sessionService) {
$scope.refresh=function(){
  $scope.oke1 = UserService.balancenhz();
$scope.oke2 = UserService.guaranted();
$scope.oke3 = UserService.unconf();
$scope.oke4 = UserService.forged();
$scope.$broadcast("scroll.refreshComplete");
  }

 var Pubkey = sessionService.get('pubid');
  //console.log('asuuu');
  if (!Pubkey) {
    $scope.PublicKey = 'You dont have a Public key please make a transaction first';
    console.log($scope.kirimuang)
  }else
  {
    $scope.PublicKey = sessionService.get('pubid');
  };
  $scope.qrcode = sessionService.get('user');
    $scope.oke1 = UserService.balancenhz();
$scope.oke2 = UserService.guaranted();
$scope.oke3 = UserService.unconf();
$scope.oke4 = UserService.forged();
$scope.oke5 = UserService.assets();
$scope.oke6 = UserService.version();
$scope.oke7 = UserService.efective();
$scope.walletme = sessionService.get('wallet');
$scope.accid = sessionService.get('user');

$scope.toggle = false;
 $ionicModal.fromTemplateUrl('templates/detail.tpl.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeInfo = function() {
    $scope.modal.hide();
  };

  $scope.detailInfo = function() {
    $scope.modal.show();
  };
})
 .controller('datasent', function($scope, $stateParams) {
       $scope.$routeParams = $stateParams;
   })

.controller('transaksi', function($scope,trans,sessionService) {
  $scope.refresh=function(){
    $scope.tranc = trans.transaksi();
    $scope.$broadcast("scroll.refreshComplete");
  }
  
$scope.tranc = trans.transaksi();
})

.filter("reverse", function(){
    return function(arr){
      return (arr || []).slice().reverse(); // Create a copy of the array and reverse the order of the items
    };
})

.controller('untransaksi', function($scope,untrans,sessionService) {
  
$scope.untranc = untrans.transaksi();
//console.log(untrans.transaksi())

})
;
