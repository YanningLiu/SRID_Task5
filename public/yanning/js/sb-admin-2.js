/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
$(function() {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});

// my part

var data = [
  { id: 1, name: 'Team Leader', lat: 37.418, lng: -122.06, tel: '650-761-2444' },
  { id: 2, name: 'Communication Officer', lat: 37.418, lng: -122.06, tel: '650-761-2444' },
  { id: 3, name: 'Health Team', lat: 37.418, lng: -122.06, tel: '650-761-2444' },
  { id: 4, name: 'Chi-I', lat: 37.408, lng: -122.06, tel: '650-761-2444' },
  { id: 5, name: 'Gaurav', lat: 37.400, lng: -122.08, tel: '650-761-2444' },
  { id: 6, name: 'Harpreet', lat: 37.395, lng: -122.06, tel: '650-761-2444' },
  { id: 7, name: 'Yanning', lat: 37.405, lng: -122.08, tel: '650-761-2444' },
  { id: 8, name: 'Rescue Team A', lat: 37.418, lng: -122.06, tel: '650-761-2444' },
];

var dict = {};

(function(){
  data.forEach(function(d){
    dict[d.id] = d;
  });

  var ctrl = function(){
    var userId = location.hash.slice(1);
    if (!userId) return;
    $('#profile-name').text(dict[userId].name + ' Channel');
    $('#noti-good').show();
    $('#imagechat').hide();
    $('#videochat').hide();
    if (userId != 1) {
      $('#leaderchat').hide();
    } else {
      $('#leaderchat').show();
    }
  };

  var init = function(){
    ctrl();
    $('#volumeup-btn').hide();
    $('#volumedown-btn').hide();
    $('#endcall-btn').hide();
  };

  $("#voicecall-btn").click(function() {
    $('#voicecall-btn').hide();
    $('#endcall-btn').show();
    $('#volumeup-btn').show();
    $('#volumedown-btn').show();
  });

  $("#endcall-btn").click(function() {
    $('#endcall-btn').hide();
    $('#volumeup-btn').hide();
    $('#volumedown-btn').hide();
    $('#voicecall-btn').show();
  });

  var imageSelector = $('<input type="file">');
  var videoSelector = $('<input type="file">');

  $("#sendimage-btn").click(function() {
    imageSelector.click();
    imageSelector.change(function(e) {
      $('#imagechat').show();
    });
  });

  $("#sendvideo-btn").click(function() {
    videoSelector.click();
    videoSelector.change(function(e) {
      $('#videochat').show();
    });
  });

  $("#btn-chat").click(function() {
    $("#btn-input").val('');
  });

  $(window).on('hashchange', ctrl);
  $(window).on('load', init);
  $('#search-input').on('input', function(e){
    var input = $('#search-input').val();
    var re = new RegExp(input, "i");
    for(var i = 1; i <= 8; i++){
      if (dict[i].name.match(re))
        $('#name-list-' + i).show();
      else
        $('#name-list-' + i).hide();
    }
  });
})();
