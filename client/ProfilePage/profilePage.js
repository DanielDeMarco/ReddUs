Template.profilePage.events({
	'submit #groupForm': function (e,template) {
		e.preventDefault();
		let groupName = template.find('#groupName').value;
		let groupDescription = template.find('#groupDescription').value;

		const makeGroup = {
			groupName: groupName,
			groupDescription: groupDescription
		};
		Groups.insert(makeGroup);
	},
	'click #delGroup':function(){
		Groups.remove(this._id);
	}
});

Template.profilePage.helpers({
	userGroups: function () {
		return Groups.find();
	},
	userName:function() {
		return Meteor.user();
	}
});