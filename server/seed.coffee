Meteor.startup ->
  Projects.remove({})

  Factory.define 'items', Items,
    name: -> Fake.sentence()
    rating: -> _.random(1,5)

  projectNames = ['Акбарс банк', 'Казанские аптеки', 'Магазин Ricker', 'Салон красоты', 'Сбербанк'];

  Factory.define 'projects', Projects,
    name: ->
      i = _.random(0, projectNames.length - 1)   
      projectNames[i]
    date: ->
      (new Date).getTime()
    status: ->
      _.random(0, 2)

  if Items.find({}).count() is 0
    _(10).times (n)->
      Factory.create('items')

  _(10).times ->
    Factory.create('projects')