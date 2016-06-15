import Ember from 'ember';

export default Ember.Component.extend({
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
