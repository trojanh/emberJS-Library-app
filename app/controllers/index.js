import Ember from 'ember';

export default Ember.Controller.extend({
	
	emailAddress:'',


    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  	isDisabled: Ember.computed.not('isValid'),

  	actions: {

    	saveInvitation() {
    		const email=this.get('emailAddress');
    		const newInvitation=this.store.createRecord('invitation',{
    			email: email
    		});

    		newInvitation.save().then((response)=>{
    			console.log('Email address is saved');
    			this.set('responseMessage', `Thank you! We've just saved your email address: ${response.get('email')}`);
      			this.set('emailAddress', '');
    		});


      		// alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      		// this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      		// this.set('emailAddress', '');
    	}
	}
});
