import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  pitch: DS.attr('string'),
  status: DS.attr('string'),
  incubator: DS.belongsTo('incubator', { async: false })
});
