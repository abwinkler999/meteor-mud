var MeteorMud = MeteorMud || {};
MeteorMud.Common = MeteorMud.Common || {};

MeteorMud.Common.Data = (function() {

  var self = Object.create(null);
  
  self.insert = function(item) {
    this.collection.insert(item);
  };

  self.count = function() {
    return this.collection.find().count();
  };

  self.byId = function(id) {
    return this.collection.findOne({_id: id});
  };

  return self;
  
})();

MeteorMud.Common.Session = (function() {
  
  var self = Object.create(null);

  self.sessionValue = function(name, value) {
    if (value !== undefined) Session.set(name, value);
    return Session.get(name);
  };

  return self;
  
})();

if (Meteor.isClient) {

  MeteorMud.Common.PassiveView = (function() {
    
    var self = Object.create(null);

    var getField = function(id) {
      return $('#' + id).val();
    };

    var setField = function(id, value) {
      $('#' + id).val(value);
    };

    var focus = function(id) {
      $('#' + id).focus();
    };

    var field = function(id, value) {
      if (value !== undefined) setField(id, value);
      return getField(id);
    };

    self.fieldFn = function(id) {
      return function(value) {
        return field(id, value);
      };
    };

    self.focusFn = function(id) {
      return function() {
        focus(id);
      };
    };

    return self;

  })();

}