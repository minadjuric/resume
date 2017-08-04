var work = {
	"jobs" : [
		{
			"title": "QA tester",
			"employer": "Itekako",
			"years": "2016 - present",
			"location": "Belgrade, Serbia",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"title": "Field Service Coordinator",
			"employer": "NCR",
			"years": "2014 - 2016",
			"location": "Belgrade, Serbia",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	]
};

var faculty = {
	"schools" : [
		{
			"uni": "Faculty of Philosophy",
			"field": "The Classics",
			"title" : "MA of Classics",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	]
};

var myHobbies = ["walking", "talking", "listening"];

work.display = function () {
	for(job in work.jobs) {
		$("#experience").append(work.jobs[job].title);
		$("#experience").append(work.jobs[job].employer);
		$("#experience").append(work.jobs[job].years);
		$("#experience").append(work.jobs[job].location);
		$("#experience").append(work.jobs[job].description);
	}
}

work.display();

faculty.display = function() {
	for(school in faculty.schools) {
		$("#education").append(faculty.schools[school].uni);
		$("#education").append(faculty.schools[school].field);
		$("#education").append(faculty.schools[school].title);
		$("#education").append(faculty.schools[school].description);
	}
}

faculty.display();



myHobbies.display = function() {
	for(var i = 0; i < myHobbies.length; i++) {
		$("#hobbies").append(myHobbies[i]);
	}
}

myHobbies.display();