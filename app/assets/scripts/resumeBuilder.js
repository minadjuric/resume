var work = {
	"jobs" : [
		{
			"title": "QA tester",
			"employer": "Itekako",
			"years": "2016 - present",
			"location": "Belgrade, Serbia",
			"description" : "Functional Android/iOS testing. Identifying, recording, tracking bugs in JIRA. Developing test cases, prioritizing testing activities. Regression testing. ADB console"
		},
		{
			"title": "Field Service Coordinator",
			"employer": "NCR",
			"years": "2014 - 2016",
			"location": "Belgrade, Serbia",
			"description": "Supporting the activities of the Customer Engineers within a particular geographic region or territory. Planning, prioritizing, assigning and monitoring all open work orders for CE’s, ensuring the prompt delivery of service to meet contractual terms and conditions. Identifying and escalating to the Team Leader or the Territory Manager, or the correct person, any situation that will cause a work order to exceed the specific contractual response or fix time. Gathering problem information and records data in desktop tools. Working with other Service Coordinators when the movement of engineers across territory boundaries is necessary to fill any skill or resource shortfall. Maintaining effective and timely communication with engineers, obtaining regular progress updates for outstanding work orders, and handling all messages that are required to be transmitted to CE’s within the territory."
		},
		{
			"title": "Latin Language Teacher",
			"employer": "Gimnazija Krusevac",
			"years": "2013 - 2014",
			"location": "Krusevac, Serbia",
			"description": "Preparing and delivering lessons to a range of classes of different ages and abilities. Marking work, giving appropriate feedback on pupils' progress. Writing new curriculum materials. Extracurricular activities such as preparation for states' competition in Latin language. Participating in regular trainings as part of continuing professional development."
		},
		{
			"title": "Regional Project Manager for Belgrade edition",
			"employer": "City Spy Maps, LTD",
			"years": "2012 - 2013",
			"location": "Dublin, Ireland",
			"description": "Selecting amenities for the map in line with company policy. Getting in touch and signing contracts with persons in charge. Coordinating project activities to ensure they are carried out effectively and successfully. Communicating with other members of the team. Managing promotions and distribution of the map."
		}
	]
};

var faculty = {
	"schools" : [
		{
			"uni": "Faculty of Philosophy",
			"field": "The Classics",
			"title" : "MA of Classics",
			"location": "Belgrade, Serbia",
			//"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	]
};

var myHobbies = ["Mentoring at Rails Girls", "Mounteneering and spending time in nature", "yoga", "swimming", "table football", "ping-pong", "reading"];

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
		$("#education").append(faculty.schools[school].location);
	}
}

faculty.display();



myHobbies.display = function() {
	for(var i = 0; i < myHobbies.length; i++) {
		$("#hobbies").append(myHobbies[i]);
	}
}

myHobbies.display();