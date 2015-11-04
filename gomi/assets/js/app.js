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

  },

  methods: {
    create: function (event) {
        event.preventDefault(); // submit 時のページ遷移を無効にする

        var _this = this;
    }
  }
});