Template.chat.helpers({
	'Comments': function () {
		return Comments.find({}, {sort: {dateCreated: -1}});
	}
});
Template.chat.events({
	'click #delcom': function () {
		Comments.remove(this._id);
	}
});

Template.submitcomment.events({
	'submit': function (e,template) {
		e.preventDefault();
		var comment = template.find('#addchat').value;
		document.getElementById('addchat').value = null;
		const ins_com = {
			dateCreated: new Date(),
			chatbubble: comment
		};
		Comments.insert(ins_com);
		console.log("Added " + comment);
	}
});