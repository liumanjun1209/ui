import Ember from 'ember';
import fetch from 'ember-api-store/utils/fetch';

export default Ember.Controller.extend({
  passwordRest: false,
  loading: false,
  password: null,
  canSend: false,
  actions: {
    resetPassword: function() {
      var body = this.get('model');
      body.token = this.get('token');
      body.pw = this.get('password');
      this.set('loading', true);
      fetch('/update-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(() => {
        this.set('loading', false);
        window.location.href = '/';
      });
    }
  },
});
