import Ember from 'ember';
import moment from 'npm:moment';

export default Ember.Component.extend({
  endyear: Ember.computed(function(){
    return moment(this.get('legislator').term_end).format("YYYY");
  }),
  fullParty: Ember.computed(function(){
    if(this.get('legislator').party === "D"){
      return "Democrat";
    }
    else if(this.get('legislator').party === "R"){
      return "Republican";
    }
    else{
      return "Independent";
    }

}),
});
