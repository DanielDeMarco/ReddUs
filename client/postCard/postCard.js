Template.postCard.helpers({
	'Posts': function () {
		return Posts.find({group:this._id}, {sort: {dateCreated: -1}});
	}
});
//Temp Delete For Testing
Template.postCard.events({
	'click #delete': function () {
		Posts.remove(this._id);
	}
});
