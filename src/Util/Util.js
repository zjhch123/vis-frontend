var Util = {
  getUrlParam: function(url, param) {
      var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)");
      var r = url.substr(1).match(reg);
      if (r != null) return unescape(r[2]); return null;
  },
  fuckXSS: function(str) {
    return str.replace(/[<>"'']/g,function(arg) {
        if(arg === '<')
          return '&lt;'
        else if(arg === '>')
          return '&gt;'
        else if(arg === '"') 
          return '&quot;'
        else if(arg === '\'')
          return '&apos;'
      }).replace(/&lt;em class=&apos;hlt&apos;&gt;|&lt;\/em&gt;/g,function(arg) {
        if(arg === "&lt;em class=&apos;hlt&apos;&gt;")
          return '<em class="hlt">'
        else if(arg === '&lt;\/em&gt;')
          return '</em>'
      })
  }
}
export default Util;