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

    window.addEventListener("load", function(){

        var request = window.superagent;

        request
            .get('/data/json')
            .set('Accept', 'application/json')
            .end(function(err, res){
                // console.log('res -> ', res);
                // console.log('err -> ', err);
                if (err == null) {
                    _this.messages = JSON.parse(res.text);
                    // console.log(JSON.parse(res.text));
                }
            });


    }, false);


  },

  methods: {
    create: function (event) {
        event.preventDefault(); // submit 時のページ遷移を無効にする

        var _this = this;
    }
  }
});