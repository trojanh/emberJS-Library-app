import Ember from 'ember';

export default Ember.Controller.extend({

	emailAddress:'',
	message:'',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),
  isValidButton:Ember.computed.gte('message.length',5),

  
  actions: {

   sendMessage() {

     
     this.set('responseMessage', `Thank you  ${this.get('emailAddress')}! We've recieved your message.We will get back to you soon.`);
     this.set('emailAddress', '');
     this.set('message', '');
   }
 }
});
