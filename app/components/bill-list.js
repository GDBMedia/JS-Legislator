import Ember from 'ember';
import moment from 'npm:moment';

export default Ember.Component.extend({
  introduction:  Ember.computed(function(){
    return moment(this.get('bill').introduced_on).format("MMMM Do, YYYY");
  }),
  lastAction:  Ember.computed(function(){
    return moment(this.get('bill').last_action_at).format("MMMM Do, YYYY");
  }),
});
