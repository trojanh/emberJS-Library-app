import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('message');
	},

	actions: {

		deleteMessage(message) {
			let confirmation= confirm("Delete this message ?");
			if(confirmation) {
				message.destroyRecord();
			}
		}
	}
});
