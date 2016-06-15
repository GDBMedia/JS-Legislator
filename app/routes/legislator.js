import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params) {
     var key = config.myApiKey;
     var url1 = 'http://congress.api.sunlightfoundation.com/legislators';
         url1 += '?' + Ember.$.param({
            'apikey': key,
            'bioguide_id': params.id
          });
    return Ember.$.getJSON(url1).then(function(responseJSON) {
                  return responseJSON.results[0];
                });
  }
});
