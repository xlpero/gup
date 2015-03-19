import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
	    queryAuthors: function(query, deferred) {
	      deferred.reject = function(reason) {
	        console.log(reason);
	      };
	      var fromStore = this.store.find("person", {search_term: query.term});
	      fromStore.then(deferred.resolve, deferred.reject);
	  
	    },


	    remove: function(id) {
	    	this.sendAction('removeAuthor', id);
	    },

	    toggleAddNewAuthor: function(item) {
			if (item.get("transformedToNewAuthor") === true) {
				item.set("transformedToNewAuthor", false);
			}
			else {
				item.set("transformedToNewAuthor", true);
			}
	      
	    },
	    createAuthor: function(item) {
	        var successHandler = function(model) {
	            item.set('selectedAuthor', model);
	            item.set('transformedToNewAuthor', false);
	        };
	        var errorHandler = function() {
	            alert("error");
	        };
	        //console.log(newAuthor.get('firstName'));
	        this.store.save('person',{'first_name': item.newAuthorForm.get('firstName'), 'last_name': item.newAuthorForm.get('lastName'), 'birthyear': item.newAuthorForm.get('birthyear'), 
	                            'xaccount': item.newAuthorForm.get('xaccount'), 'orcid': item.newAuthorForm.get('orcid') }).then(successHandler, errorHandler);
	    },
	}
});
