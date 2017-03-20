angular.module('mynewapp', []).
component('itemList',{
	templateUrl:'temple-list.html',
	controller:function itemlistcontroller($http){
		var myapp = this;
		myapp.list = {};
		$http.get('item_list.json').then(function(response){
			myapp.list = response.data;
		});
	}
});