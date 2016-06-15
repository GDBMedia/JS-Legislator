import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params) {
     var key = config.myApiKey;
     var url1 = 'http://congress.api.sunlightfoundation.com/bills';
         url1 += '?' + Ember.$.param({
            'apikey': key,
            'committee_ids': params.id
          });
    var url2 = 'http://congress.api.sunlightfoundation.com/committees';
        url2 += '?' + Ember.$.param({
           'apikey': key,
           'committee_id': params.id
         });
  return Ember.RSVP.hash({
    bills: Ember.$.getJSON(url1).then(function(responseJSON) {
                  return responseJSON.results;
                }),
    committee: Ember.$.getJSON(url2).then(function(responseJSON) {
                  return responseJSON.results[0];
                }),
  });
}
});
