import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  queryParams:{
      pubyear:{refreshModel: true},
      pubtype:{refreshModel: true}
  },
  beforeModel: function() {
		Ember.$("body").addClass("loading");
	},
	afterModel: function(model, transition) {
		Ember.$("body").removeClass("loading");
    this.controllerFor('application').set('currentList', transition.targetName);
	},
  model: function(params) {
    params.for_biblreview = true;
    return this.store.find("publication", params);
  },
	actions: {
		editItem: function(item, params) {
			console.log("transitionTo publication.show.edit", item, params);
			this.transitionTo('publications.show.edit', item.id, {queryParams: params});
		}
	}
});
