Template.navBar.events({
	'submit': function (e, template) {
		e.preventDefault();
		var post = template.find('#addpost').value;
		document.getElementById('addpost').value=null;


	let apiBase = "https://www.reddit.com/api/info.json?url=";
	apiRequest = apiBase + post;



	$.getJSON(apiRequest, function(data) {
	var urldata = window.location.pathname.split('/');
	var currentGroup = urldata[2];
	var sub = data.data.children[0].data.subreddit;
	var title = data.data.children[0].data.title;
	var preview = data.data.children[0].data.preview.images[0].source.url;
	var domain = data.data.children[0].data.domain;

	const newPost = {
		dateCreated: new Date(),
		title: title,
		preview: preview,
		domain: domain,
		subreddit: sub,
		link: post,
		group: currentGroup
	};

	Posts.insert(newPost);
	});  

	}
});