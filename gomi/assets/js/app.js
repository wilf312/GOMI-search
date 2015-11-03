var app = new Vue({
  el: 'body',

  data: {
    messages: []
  },

  events: {
    'message:created': function (message) {
      this.messages.push(message);
    }
  },

  created: function () {
    var _this = this;

    // 初期化
    _this.messages = [
    ];

    var text = document.getElementById('test').innerHTML;
    _this.messages = JSON.parse( text );
    // var dataList = _.map( text.split('\n'), function( obj ) {

    //     return obj.split(',');
    // });
    // // console.log(dataList);


    // var titleObj = dataList[0];
    // var simpleObj = {};

    // var dataObj = _.map( dataList.splice(1, dataList.length-1), function( obj ) {
    //     // console.log(obj);

    //     simpleObj = {};
    //     simpleObj[ titleObj[0] ] = obj[0];
    //     simpleObj[ titleObj[1] ] = obj[1];
    //     simpleObj[ titleObj[2] ] = obj[2];
    //     simpleObj[ titleObj[3] ] = obj[3];
    //     simpleObj[ titleObj[4] ] = obj[4];

    //     return simpleObj;

    // });


    // // console.log(dataObj);

    // _this.messages = dataObj;


  },

  methods: {
    create: function (event) {
        event.preventDefault(); // submit 時のページ遷移を無効にする

        var _this = this;
    }
  }
});