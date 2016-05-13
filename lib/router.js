Router.route('/', function () {
  this.render('landingPage');
});
Router.route('/groupPage/:groupID', function(){
	this.render('groupPage', {
		data:function() {
			return Groups.findOne({_id: this.params.groupID});
		}
	});
});
Router.route('/profile',{name: 'profilePage'});
