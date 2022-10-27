
(function ($) {"use strict";

$(function () {
  var header = $(".start-style");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
      header.removeClass('start-style').addClass("scroll-on");
    } else {
      header.removeClass("scroll-on").addClass('start-style');
    }
  });
});

//Animation

$(document).ready(function () {
  $('body.hero-anime').removeClass('hero-anime');
});

//Menu On Hover

$('body').on('mouseenter mouseleave', '.nav-item', function (e) {
  if ($(window).width() > 750) {
    var _d = $(e.target).closest('.nav-item');_d.addClass('show');
    setTimeout(function () {
      _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
    }, 1);
  }
});

//Switch light/dark

$("#switch").on('click', function () {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $("#switch").removeClass("switched");
  } else
  {
    $("body").addClass("dark");
    $("#switch").addClass("switched");
  }
});

})(jQuery);
//# sourceURL=pen.js



//
slider = document.getElementById('pwd-length-slider');
indicator = document.getElementById('indicate');

const updateSlider = () => {
  // passing slider value as counter text
  upadatePassIndicator();
}
const upadatePassIndicator = () => {
}
updateSlider();

slider.addEventListener("input", updateSlider);




$(function() {
  var password = {
    upperAlphaChar: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowerAlphaChar: 'abcdefghijklmnopqrstuvwxyz',
    numericChar: '1234567890',
    specialChar: '~!@#$%^&*()_-+="?/',
    customChar: '',
    checkOptions: function () {
      var pwdLength = $('#pwd-length-slider').val(),
        options = new Array(), i=0;
  
      password.customChar = ''; //reset
  
      $('.pwd-generator-container input[type="checkbox"]').each(function () {
        if ($(this).is(':checked')) {
          if ($(this).attr('value') === 'customChar') {
            var customChars = $('#custom-chars').val();
            if($.trim(customChars).length > 0) {
              password.customChar = customChars;
              $(this).parent().addClass('selected');
              options[i] = $(this).attr('value');
              i++;
            }
          }
          else {
            $(this).parent().addClass('selected');
            options[i] = $(this).attr('value');
            i++;
          }
        }
        else {
          $(this).parent().removeClass('selected');
        }
      });

      if (options.length > 0) {
        password.generate(pwdLength,options);  
      }
      else {
        $('#generated-password').val('');
      }
    },
    generate: function (pwdLength, options) {
      var password = '', charset;
      for(var i=0; i<pwdLength; i++) {
        charset = options[Math.floor(Math.random() * options.length)];
        charIndex = Math.floor(Math.random() * this[charset].length);
        password += this[charset][charIndex];
      }
      
      if (this.validated(password, options)) {
       
        document.getElementById('generated-password').innerHTML = password;
      }
      else { this.generate(pwdLength, options); }
    },
    validated: function (password, options) {
      var charCount = {};
      for (var i=0; i<options.length; i++) {
        charCount[options[i]] = 0;
      }
      
      for (i=0; i<password.length; i++) {
        for (var j=0; j<options.length; j++) {
          if (this.isChar(password[i], options[j])) {
            charCount[options[j]]++;
          }
        }
      }
      
      for (i=0; i<options.length; i++) {
        if(charCount[options[i]] === 0) {
          return false;
        }
      }
      
      return true;
    },
    isChar: function (char, type) {
      var charset = this[type];
      for (var i=0; i<charset.length; i++) {
        if (char == charset[i]) {
          return true;
        }
      }
      return false;
    }
  };
  
  var passwordBox = {
    init: function () {
      this.initSlider();
      $('input[type="checkbox"]').click(password.checkOptions);
      
      $('.pwd-generator-container input').off('change', password.checkOptions);
      $('.pwd-generator-container input').on('change', password.checkOptions);
      $('#custom-chars').on('keyup', password.checkOptions);
      $('#generate-new').on('click', password.checkOptions);
    
      
      password.checkOptions();
    },
    initSlider: function () {
      var changePwdLength = function () {
        indicator.id = slider.value <= 10 ? "weak" : slider.value <= 18 ? "medium" : "strong";
        $('#pwd-length-value').html($('#pwd-length-slider').val());
      };
      
      $('#pwd-length-slider').on('change', changePwdLength);
      $('#pwd-length-slider').on('input', changePwdLength);
      
      
      changePwdLength();
    }
  };
  passwordBox.init();
});


function copied (){
  navigator.clipboard.writeText(document.getElementById('generated-password').innerHTML);

}



function showToast(text) {
  // Get the snackbar DIV
  copied();
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.innerHTML = text;
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
} 


function username (){


  var data = JSON.parse(colors);
  console.log(data)
}
username();