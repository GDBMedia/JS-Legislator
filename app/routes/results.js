import config from '../config/environment';
import Ember from 'ember';
import moment from "npm:moment";


export default Ember.Route.extend({
  model: function(params){
    Ember.Logger.log(moment().format());
       var key = config.myApiKey;
       var url = 'http://congress.api.sunlightfoundation.com/legislators/locate';
       url += '?' + Ember.$.param({
          'apikey': key,
          'zip': params.zip
        });
       return Ember.$.getJSON(url).then(function(responseJSON) {
         return responseJSON.results;
       });
    }
 });
