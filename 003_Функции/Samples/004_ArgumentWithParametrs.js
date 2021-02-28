(function() {
  var href;

  href = function(link, text) {
    if (text == null) {
      text = "itvdn.com";
    }
    document.write("<a href='http://" + link + "'> " + text + "</a><br/>");
  };

  href("itvdn.com");

  href("cbsystematics.com", "CyberaBionicSystematics");

}).call(this);
