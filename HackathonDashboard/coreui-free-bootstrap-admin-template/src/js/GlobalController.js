app=angular.module('myApp');

globe='1'
app.controller("Called",function($scope,$window){
   
    $scope.list = [
					{
						"name" :'All', 
						 "id"  : '1'
					},


						{ "name" : 'Polaris',
						   "id"	 : '2'
						},

                    {
                        "name" : 'Dnac',
                         "id"  : '3'   
                    },

                    {
                        "name" : 'EngIT',
                         "id"  : '4'
 
                    }    

				];
//console.log("Checking here"+dataService.getId());
/*if($window.localStorage.getItem('get_item')!=null)
{
    console.log('mai yaha hu')
    $scope.dataService=$window.localStorage.getItem('get_item');
}
else
{
    console.log("mai yahahahah")
    $scope.dataService=$scope.list[0].id;
}*/
if($window.localStorage.getItem('get_item')!=null)
{
    console.log('mai yaha hu')
    var x=$window.localStorage.getItem('get_item');
    console.log(x)
    console.log(x-1)
    $scope.dataService=$scope.list[x-1];
}
else
{
    console.log("mai yahahahah")
    $scope.dataService=$scope.list[0];
}
  


   $scope.Test = function(id)
         {
            //alert(id);
             
         //    $scope.Id = id;
           
             console.log("In here");
             console.log($scope.dataService);
             console.log("In controller 1 "+$scope.dataService.id);
             //globe = $scope.dataService.id;
             $window.localStorage.setItem("get_item",$scope.dataService.id);
        $window.location.reload()


         }
     });

exports.globe = globe