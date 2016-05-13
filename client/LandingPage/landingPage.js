

Template.landingPage.rendered = function () {

	btn = $('#btn');
	redd = $('#redd');
	us = $('#us');
// call elements

function animateLogo(){
	TweenMax.from(redd,1,{opacity:0, x:-200});
	TweenMax.from(us,1.3,{opacity:0, rotation:-360,ease: Bounce.easeOut,y: -300, x:100 ,delay:1.2});
	TweenMax.to(redd,.3,{x:-50,delay:1.67,ease: Power4.easeOut});
	TweenMax.to(redd,1,{x:0,delay:3,ease:Power2.easeInOut})
}
	animateLogo();
};

Template.landingPage.events({
	'submit form': function (e ,template) {
		e.preventDefault();
		let userName = template.find('#username').value;
		let password = template.find('#password').value;
		Meteor.loginWithPassword(userName,password,function(err){
			if (err) {
				alert("invalid")
			}else{
				Router.go("/profile");
			}
		});

		
	},
	'click #register': function(e,template){
		e.preventDefault();
		let userName = template.find('#username').value;
		let password = template.find('#password').value;
		Accounts.createUser({
			username: userName,
			password: password,
		}, function(err){
			if (err) {
				alert("Invalid");
			}else{
				alert("Account Created");
			}
		}
		);
	}

});
