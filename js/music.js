!function(n){"use strict";n(document).ready(function(){var i=n("body"),e=n(".music-bg"),o=document.getElementById("audio-player");a.any()?(i.addClass("mobile audio-off"),o.pause()):(i.addClass("audio-on"),o.play()),e.on("click",function(n){n.preventDefault(),i.toggleClass("audio-on audio-off"),i.hasClass("audio-on")?o.play():i.hasClass("audio-off")&&o.pause()})});var a={iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return a.Android()||a.BlackBerry()||a.iOS()||a.Opera()||a.Windows()}}}(jQuery);