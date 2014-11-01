Template.dashboard.rendered = function() {

};

Template.dashboard.helpers({
  formattedDate:function() {
    return moment(this.date).format('DD.MM.YYYY');
  },
  status:function() {
    switch(this.status){
      case 0:
        return 'создан';
      case 1:
        return 'в процессе';
      case 2:
        return 'завершен';
    }
  }
});

