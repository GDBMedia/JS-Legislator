import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
    key: config.myApiKey,
    id: Ember.computed(function(){
      return this.get('legislator').bioguide_id;
    }),
    url1: Ember.computed(function(){
      Ember.Logger.log(this.id);
      Ember.Logger.log(this.key);
      var url1 = 'http://congress.api.sunlightfoundation.com/committees';
          url1 += '?' + Ember.$.param({
             'apikey': this.key,
             'member_ids': this.id
           });
       return url1;
    }),
    url2: 'http://congress.api.sunlightfoundation.com/committees?apikey=' + this.key + 'member_ids' + this.id,

    bills: Ember.$.getJSON(this.url1).then(function(responseJSON) {
            Ember.Logger(this.url1);
                  return responseJSON.results;
                }),
    committees: Ember.$.getJSON(this.url2).then(function(responseJSON) {
                  return responseJSON.results;
                }),

  toggle: true,
  actions:{
    toggleAction(){
      if(this.toggle === true){
        this.set('toggle', false);
      }else{
        this.set('toggle', true);
      }
    }
  }

});
