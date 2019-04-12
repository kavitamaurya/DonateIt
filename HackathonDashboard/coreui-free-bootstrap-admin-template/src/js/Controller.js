
//console.log("Globe variable ki value"+globe);
app=angular.module('myApp',['ngSanitize']);

// app.service('IdTransfer',function() {

// 	var val;
// 	var updateID = function(id){
// 		val = id;
// 	}

// 	var getID = function() {
// 		return val;
// 	}
// });

// app.controller("Called", function($scope,IdTransfer) {

// 	var idVal;
// 	$scope.get = function(id)
// 		{
// 			idVal = id;
// 			IdTransfer.updateID(idVal);
// 		}
// });

// app.controller("Update", function($scope,IdTransfer) {
// 	$scope.update = IdTransfer.getID();
// 	globe = $scope.update;
// });





app.controller('getvotes',function($scope,$http,$interval,$window) {

	console.log("Updated Window value "+$window.localStorage.getItem('IdValue'));
	$scope.reload=function(){
	
		console.log("Local storage mein currently stored value "+$window.localStorage.getItem('IdValue'));
		console.log($window.localStorage.getItem('IdValue'));
		console.log(globe);
		if($window.localStorage.getItem('IdValue')!=null)
    		{
    			globe=$window.localStorage.getItem('IdValue');
    		}
	
		else
    		globe = 1;


	console.log("Globe ki value ye hai "+globe);
	$http.get('http://64.103.73.72:3000/getVotes/'+globe).then(function(response) {
		console.log(response.data.recordset[0]);
		$scope.content = response.data.recordset[0].votes;
	})

}
	$scope.reload();
	//$intervalhttp://64.103.73.72,3000);
});


app.controller('getUsers',function($scope,$http) {
	
	$http.get('http://64.103.73.72:3000/getUserCount/1').then(function(response) {
		//console.log(typeof(response.data.recordset[0].no_of_users));
		$scope.content = response.data.recordset[0].no_of_users;
		
	});
	
});


app.controller('getPostsDifference',function($scope,$http) {
	
	$http.get('http://localhost:3000/getPostsDifference/1').then(function(response) {
		//console.log(typeof(response.data.recordset[0].no_of_users));
		console.log("Inside getPostsDifference");
		$scope.content = response.data;
		console.log(response);
		
	});
	
});

app.controller('getTagDifference',function($scope,$http) {
	
	$http.get('http://localhost:3000/getTagDifference/1').then(function(response) {
		//console.log(typeof(response.data.recordset[0].no_of_users));
		console.log("Inside getTagDifference");
		$scope.content = response.data;
		console.log(response);
		
	});
	
});


app.controller('getUsersDifference',function($scope,$http) {
	
	$http.get('http://localhost:3000/getUsersDifference/1').then(function(response) {
		//console.log(typeof(response.data.recordset[0].no_of_users));
		console.log("Inside getUsersDifference ",response);
		$scope.content = response.data;
		console.log(response);
		
	});
	
});

app.controller('getVotesDifference',function($scope,$http) {
	
	$http.get('http://localhost:3000/getVotesDifference/1').then(function(response) {
		//console.log(typeof(response.data.recordset[0].no_of_users));
		console.log("Inside getVotesDifference");
		$scope.content = response.data;
		console.log(response);
		
	});
	
});

app.controller('getVisitsDifference',function($scope,$http) {
	
	$http.get('http://localhost:3000/getVisitsDifference/1').then(function(response) {
		//console.log(typeof(response.data.recordset[0].no_of_users));
		console.log("Inside DifferenceinVisits");
		$scope.content = response.data;
		console.log(response);
		
	});
	
});

app.controller('getPosts',function($scope,$http) {
	
	$http.get('http://64.103.73.72:3000/getPosts/1').then(function(response) {
		//console.log(typeof(response.data.recordset[0].posts));
		$scope.content = response.data.recordset[0].posts;
		
	});
	
});

app.controller('getBadge',function($scope,$http) {
	
	$http.get('http://64.103.73.72:3000/getBadge/1').then(function(response) {
		//console.log(typeof(response.data.recordset[0].badge_count));
		$scope.content = response.data.recordset[0].badge_count;
		
	})
	
});

app.controller('getVisits',function($scope,$http) {
	
	$http.get('http://64.103.73.72:3000/getVisits/1').then(function(response) {
		//console.log(typeof(response.data.recordset[0].No_of_unique_site_visits));
		$scope.content = response.data.recordset[0].No_of_unique_site_visits;
		
	})
	
});

app.controller('getTag',function($scope,$http) {
	
	
	$http.get('http://64.103.73.72:3000/getTag/1').then(function(response) {
		//console.log("Tags yahan hain");
		//console.log(typeof(response.data.recordset[0].tag_count));
		$scope.content = response.data.recordset[0].tag_count;
		
	})
	
});

app.controller('getTopQuestions',function($scope,$http) {
	
	//console.log("In here");
	$http.get('http://64.103.73.72:3000/getTopQuestions/1').then(function(response) {
		//console.log("Top Questions mein");
		//console.log(response.data.recordset[1]);
		$scope.content = response.data.recordset;
		
	})
	
});



app.controller('getDifferenceUserCount',function($scope,$http) {
	
	$http.get('http://localhost:3000/getDifferenceUserCount/1').then(function(response) {
		//console.log(typeof(response.data.recordset[0].no_of_users));
		console.log("Inside differenceUserCount");
		$scope.content = response.data;
		console.log($scope.content);
		
	});
	
});

app.controller('getQuestions',function($scope,$http) {
	
	//console.log("In here");
	$http.get('http://64.103.73.72:3000/getQuestions/1').then(function(response) {
		//console.log("Count Questions mein");
		////console.log(response.data.recordset[0]);
		$scope.content = response.data.recordset[0].count;
		
	})
	
});

app.controller('getTop5Titles',function($scope,$http) {
	
	//console.log("In here");
	$http.get('http://localhost:3000/getTop5Titles/1').then(function(response) {
		//console.log("Count Questions mein");
		////console.log(response.data.recordset[0]);
		$scope.content = response.data.recordset[0];
		console.log("Inside Titles ",$scope.content);

		var x = $scope.content.Body.length;
		var str = $scope.content.Body;
		var str1 = "";
		
		if( x > 100)
			 {
				for(var i = 0; i < 100; i++)
					 {
					 	str1 += str[i];
					 }

				 str1 += "...";
				$scope.content.Body = str1; 
			 }


		$scope.content1 = response.data.recordset[1];
		console.log("Inside Titles ",$scope.content1);

		var x = $scope.content1.Body.length;
		var str = $scope.content1.Body;
		var str1 = "";
		
		if( x > 100)
			 {
				for(var i = 0; i < 100; i++)
					 {
					 	str1 += str[i];
					 }

				 str1 += "...";
				$scope.content1.Body = str1; 
			 }


		$scope.content2 = response.data.recordset[2];
		console.log("Inside Titles ",$scope.content2);

		var x = $scope.content2.Body.length;
		var str = $scope.content2.Body;
		var str1 = "";
		
		if( x > 100)
			 {
				for(var i = 0; i < 100; i++)
					 {
					 	str1 += str[i];
					 }

				 str1 += "...";
				$scope.content2.Body = str1; 
			 }

		$scope.content3 = response.data.recordset[3];
		console.log("Inside Titles ",$scope.content3);

		var x = $scope.content3.Body.length;
		var str = $scope.content3.Body;
		var str1 = "";
		
		if( x > 100)
			 {
				for(var i = 0; i < 100; i++)
					 {
					 	str1 += str[i];
					 }

				 str1 += "...";
				$scope.content3.Body = str1; 
			 }

		$scope.content4 = response.data.recordset[4];
		console.log("Inside Titles ",$scope.content4);

		var x = $scope.content4.Body.length;
		var str = $scope.content4.Body;
		var str1 = "";
		
		if( x > 100)
			 {
				for(var i = 0; i < 100; i++)
					 {
					 	str1 += str[i];
					 }

				 str1 += "...";
				$scope.content4.Body = str1; 
			 }
	})
	
});

app.controller('getAnswers',function($scope,$http) {
	
	//console.log("In here");
	$http.get('http://64.103.73.72:3000/getAnswers/1').then(function(response) {
		//console.log("Count Questions mein");
		////console.log(response.data.recordset[0]);
		$scope.content = response.data.recordset[0].count;
		
	})
	
});

app.controller('getTotalReputation',function($scope,$http) {
	
	//console.log("In here");
	$http.get('http://localhost:3000/getTotalReputation').then(function(response) {
		//console.log("Count Questions mein");
		////console.log(response.data.recordset[0]);
		$scope.content = response.data.recordset[0];
		console.log("total reputation ", $scope.content);
		
	})
	
});

app.controller('getFrequentUsers',function($scope,$http) {
	
	//console.log("In here");
	$http.get('http://localhost:3000/getFrequentUsers/1').then(function(response) {
		//console.log("Count Questions mein");
		////console.log(response.data.recordset[0]);
		$scope.content = response.data.recordset;

		// $scope.content0 = response.data.recordset[0].DisplayName;
		// $scope.content1 = response.data.recordset[1].DisplayName;
		// $scope.content2 = response.data.recordset[2].DisplayName;
		// $scope.content3 = response.data.recordset[3].DisplayName;
		// $scope.content4 = response.data.recordset[4].DisplayName;
		// $scope.reputation0 = response.data.recordset[0].Total_No_of_Days_Visited;
		// $scope.reputation1 = response.data.recordset[1].Total_No_of_Days_Visited;
		// $scope.reputation2 = response.data.recordset[2].Total_No_of_Days_Visited;
		// $scope.reputation3 = response.data.recordset[3].Total_No_of_Days_Visited;
		// $scope.reputation4 = response.data.recordset[4].Total_No_of_Days_Visited;
		
	})
	
});


app.controller('getConsecutiveUsers',function($scope,$http) {
	
	//console.log("In here");
	$http.get('http://localhost:3000/getConsecutiveUsers/1').then(function(response) {
		//console.log("Count Questions mein");
		////console.log(response.data.recordset[0]);
		$scope.content = response.data.recordset;

		// $scope.content0 = response.data.recordset[0].DisplayName;
		// $scope.content1 = response.data.recordset[1].DisplayName;
		// $scope.content2 = response.data.recordset[2].DisplayName;
		// $scope.content3 = response.data.recordset[3].DisplayName;
		// $scope.content4 = response.data.recordset[4].DisplayName;
		// $scope.reputation0 = response.data.recordset[0].Total_No_of_Days_Visited;
		// $scope.reputation1 = response.data.recordset[1].Total_No_of_Days_Visited;
		// $scope.reputation2 = response.data.recordset[2].Total_No_of_Days_Visited;
		// $scope.reputation3 = response.data.recordset[3].Total_No_of_Days_Visited;
		// $scope.reputation4 = response.data.recordset[4].Total_No_of_Days_Visited;
		
	})
	
});

app.controller('getRecentUsers',function($scope,$http) {
	
	//console.log("In here");
	$http.get('http://localhost:3000/getRecentUsers/1').then(function(response) {
		//console.log("Count Questions mein");
		////console.log(response.data.recordset[0]);
		$scope.content = response.data.recordset;

		// $scope.content0 = response.data.recordset[0].DisplayName;
		// $scope.content1 = response.data.recordset[1].DisplayName;
		// $scope.content2 = response.data.recordset[2].DisplayName;
		// $scope.content3 = response.data.recordset[3].DisplayName;
		// $scope.content4 = response.data.recordset[4].DisplayName;
		// $scope.reputation0 = response.data.recordset[0].Total_No_of_Days_Visited;
		// $scope.reputation1 = response.data.recordset[1].Total_No_of_Days_Visited;
		// $scope.reputation2 = response.data.recordset[2].Total_No_of_Days_Visited;
		// $scope.reputation3 = response.data.recordset[3].Total_No_of_Days_Visited;
		// $scope.reputation4 = response.data.recordset[4].Total_No_of_Days_Visited;
		
	})
	
});

app.controller('getTotalViews',function($scope,$http) {
	
	//console.log("In here");
	$http.get('http://localhost:3000/getTotalViews').then(function(response) {
		//console.log("Count Questions mein");
		////console.log(response.data.recordset[0]);
		$scope.content = response.data.recordset[0];
		console.log("total accepted answers ", $scope.content);
		
	})
	
});

app.controller('getTotalAcceptedAnswers',function($scope,$http) {
	
	//console.log("In here");
	$http.get('http://localhost:3000/getTotalAcceptedAnswers').then(function(response) {
		//console.log("Count Questions mein");
		////console.log(response.data.recordset[0]);
		$scope.content = response.data.recordset[0];
		console.log("total accepted answers ", $scope.content);
		
	})
	
});



app.controller('getNewSignups',function($scope,$http) {
	
	//console.log("In here");
	$http.get('http://localhost:3000/getNewSignups').then(function(response) {
		//console.log("Count Questions mein");
		////console.log(response.data.recordset[0]);
		$scope.content = response.data.recordset[0];
		console.log("total accepted answers ", $scope.content);
		
	})
	
});


app.controller('getUserswhologgedinToday',function($scope,$http) {
	
	//console.log("In here");
	$http.get('http://localhost:3000/getUserswhologgedinToday').then(function(response) {
		//console.log("Count Questions mein");
		////console.log(response.data.recordset[0]);
		$scope.content = response.data.recordset;
		console.log("users who logged in today ", $scope.content);
		
	})
	
});

app.controller('getTop10Questions',function($scope,$http) {
	
	//console.log("In here");
	$http.get('http://localhost:3000/getTop10Questions/1').then(function(response) {
		//console.log("Count Questions mein");
		////console.log(response.data.recordset[0]);
			console.log("top 10 questions ", $scope.content);
			$scope.content = response.data.recordset;
		
		
	})
	
});

app.controller('getTop10Answers',function($scope,$http) {
	
	//console.log("In here");
	$http.get('http://localhost:3000/getTop10Answers/1').then(function(response) {
		//console.log("Count Questions mein");
		////console.log(response.data.recordset[0]);
			console.log("top 10 questions ", $scope.content);
			$scope.content = response.data.recordset;
		
		
	})
	
});

app.controller('getTop10AnsScore',function($scope,$http) {
	
	//console.log("In here");
	$http.get('http://localhost:3000/getTop10AnsScore/1').then(function(response) {
		//console.log("Count Questions mein");
		////console.log(response.data.recordset[0]);
			console.log("top 10 questions ", $scope.content);
			$scope.content = response.data.recordset;
		
		
	})
});


app.controller('getTopUsers',function($scope,$http) {
	
	//console.log("In here");
	$http.get('http://64.103.73.72:3000/getTopUsers/1').then(function(response) {
		//console.log("Count Questions mein");
		//console.log(response.data.recordset[1].DisplayName);
		$scope.content0 = response.data.recordset[0].DisplayName;
		$scope.content1 = response.data.recordset[1].DisplayName;
		$scope.content2 = response.data.recordset[2].DisplayName;
		$scope.content3 = response.data.recordset[3].DisplayName;
		$scope.content4 = response.data.recordset[4].DisplayName;
		$scope.reputation0 = response.data.recordset[0].Reputation;
		$scope.reputation1 = response.data.recordset[1].Reputation;
		$scope.reputation2 = response.data.recordset[2].Reputation;
		$scope.reputation3 = response.data.recordset[3].Reputation;
		$scope.reputation4 = response.data.recordset[4].Reputation;

		
	})
	
});

