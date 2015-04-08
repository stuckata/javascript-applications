'use strict';

(function () {

	function arrayContains(array, value) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] === value) {
				return true;
			}
		}
		return false;
	};

	var userName = localStorage.getItem("name") || undefined;
	var counter = localStorage.getItem("count") || 0;
	var userSessionsCount = localStorage.getItem(userName) || 1;
	var users = localStorage.getItem("users") || null;

	$("#greetingAlert").hide();

	if (localStorage.name != undefined) {
		$("#inputForm").hide();
		$("#logoutButton").hide();
		$("#greeting").append(', ' + localStorage.name + '!');
		$("#userVisitsCount").append(localStorage.name + ' visits count: ' + userSessionsCount);
		$("#totalVisitsCount").append('Total visits count: ' + counter);
		$("#greetingAlert").show();
		$("#userVisitsCount").show();
		$("#totalVisitsCount").show();
		$("#logoutButton").show();
	};

	$("#submitButton").click(function(event) {
		userName = $("#inputName").val();
		counter++;
		localStorage.setItem("count", counter);
		localStorage.setItem("name", userName);
		var usersData = JSON.parse(localStorage.getItem("users")) || [];

		if (arrayContains(usersData, userName)) {
			userSessionsCount++;
			localStorage.setItem(userName, userSessionsCount);
		} else {
			usersData.push(userName);
			users = JSON.stringify(usersData);
			localStorage.setItem("users", users);
		}		
	});

	$("#logoutButton").click(function(event) {
		userName = localStorage.name;
		localStorage.removeItem("name", userName);
		$("#greetingAlert").hide();
		$("#userVisitsCount").hide();
		$("#greetingAlert").hide();
		$("#totalVisitsCount").hide();
		$("#inputForm").show();
	});
})();
