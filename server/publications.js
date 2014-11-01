Meteor.publishComposite("items", function() {
  return {
    find: function() {
      return Items.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});
Meteor.publishComposite("projects", function() {
  return {
    find: function() {
      return Projects.find({});
    }
  }
});
