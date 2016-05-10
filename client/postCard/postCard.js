Template.postCard.helpers({
	'Posts': function () {
		return Posts.find({}, {sort: {dateCreated: -1}});
	}
});
//Temp Delete For Testing
Template.postCard.events({
	'click #delete': function () {
		Posts.remove(this._id);
	}
});
