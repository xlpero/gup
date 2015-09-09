import Ember from 'ember';

export default Ember.Component.extend({
  getFullObject: function() {
     var fullObject = this.get("selectedPublicationType");
     if (fullObject) {
        var correctObjectBasedOnFieldName = fullObject.all_fields.findBy('name',this.get("fieldName"));
        if (!correctObjectBasedOnFieldName) {
          return null;
        }
        if (correctObjectBasedOnFieldName) {
          return correctObjectBasedOnFieldName;
        }
        else {
          return null;
        }
      }
      else { // if no object was found
        return null;
      }

  }.observes('selectedPublicationType'),


  getRule: function() {
    var fullObj = this.getFullObject();
    if (fullObj) {
      if (fullObj.rule) {
        return fullObj.rule;
      }
      else {
        return null;
      }
    }
    else {
      return null;
    }
  }.observes('selectedPublicationType'),

  getLabel: function() {

    if (this.get('label')) {
      return this.get('label');
    }

    var fullObj = this.getFullObject();
    if (fullObj) {
      if (fullObj.label) {
        return fullObj.label;
      }
      else {
        return null;
      }
    }
    else {
      return null;
    }
  }.property('selectedPublicationType'),

  isMandatory: function() {
    var rule = this.getRule();
    if (rule === 'R') {
      return true;
    }
    else {
      return false;
    }
  }.property('selectedPublicationType'),

  isVisible: function() {
    if (this.get('fieldName') === 'content_type') {
      return true;
    }

    var rule = this.getRule();
    if (rule) {
    	if (rule === "na") {
    		return false;
    	}
    	else {
    		return true;
    	}
    }
    else {
    	return false;
    }
  }.property('selectedPublicationType'),

	isTypeJournal: Ember.computed.equal('type', 'journal'),
	isTypeText: Ember.computed.equal('type', 'text'),
	isTypeDate: Ember.computed.equal('type', 'date'),
	isTypeISSN: Ember.computed.equal('type', 'issn'),
	isTypeISBN: Ember.computed.equal('type', 'isbn'),
	isTypeTextarea: Ember.computed.equal('type', 'textarea'),
    isTypeCategorySelector: Ember.computed.equal('type', 'category-selector'),
    isTypeSelect: Ember.computed.equal('type', 'select'),
	
	showWarningSymbol: Ember.computed('isValidISSN', 'isValidISBN', function() {
		if(!this.get('isValidISSN')) {
			return true;
		}
		if(!this.get('isValidISBN')) {
			return true;
		}
		return false;
	}),

	isValidISSN: Ember.computed('isTypeISSN', 'value', function() {
		if(!this.get('isTypeISSN')) {
			return true;
		}
		var issn = this.get('value');
		if(!issn) {
			return true;
		}
		issn = issn.replace(/[^\dX]/gi, '');
		if(issn.length !== 8){
			return false;
		}
		var chars = issn.split('');
		if(chars[7].toUpperCase() === 'X'){
			chars[7] = 10;
		}
		var sum = 0;
		for (var i = 0; i < chars.length; i++) {
			sum += ((8-i) * parseInt(chars[i]));
		}
		return ((sum % 11) === 0);
	}),

	isValidISBN: Ember.computed('isTypeISBN', 'value', function() {
    var sum, weight, digit, check, i;

		if(!this.get('isTypeISBN')) {
			return true;
		}
		var isbn = this.get('value');
		if(!isbn) {
			return true;
		}

    isbn = isbn.replace(/[^0-9X]/gi, '');

    if (isbn.length !== 10 && isbn.length !== 13) {
      return false;
    }

    if (isbn.length === 13) {
      sum = 0;
      for (i = 0; i < 12; i++) {
        digit = parseInt(isbn[i]);
        if (i % 2 === 1) {
          sum += 3*digit;
        } else {
          sum += digit;
        }
      }
      check = (10 - (sum % 10)) % 10;
      return (check.toString() === isbn[isbn.length-1]);
    }

    if (isbn.length === 10) {
      weight = 10;
      sum = 0;
      for (i = 0; i < 9; i++) {
        digit = parseInt(isbn[i]);
        sum += weight*digit;
        weight--;
      }
      check = 11 - (sum % 11);
      if (check === 10) {
        check = 'X';
      }
      return (check.toString() === isbn[isbn.length-1].toUpperCase());
    }
	}),
    actions: {
        queryJournals: function(query, deferred) {
            this.store.find('journal', { search_term: query.term })
                .then(deferred.resolve, deferred.reject);
            
        }
    }
});
