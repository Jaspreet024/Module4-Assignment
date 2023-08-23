(function (window) {
  var byeSpeaker={};
  byeSpeaker.names=[];
  var speakWord = "Goodbye";
  byeSpeaker.speak=function(names){
    console.log(speakWord + " " + byeSpeaker.names);
  }
  window.byeSpeaker=byeSpeaker;
})(window);
