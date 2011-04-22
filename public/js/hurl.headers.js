(function() {
  $.fn.hurlHeaders = function() {
    var el = $(this);
    el.autocomplete({
      data: keyNames( Headers ), 
      delay: 40,
      minChars: 1,
      onItemSelect: function(data) {
        var header=data.value, next = el.siblings('input');
        var more = Headers[header];
        if ( header == "User-Agent" ) {
          next.autocomplete({
            data: keyNames( Headers['User-Agent'] ),
            delay: 40,
            minChars: 1,
            onItemSelect: function(row) {
              next.val( Headers['User-Agent'][row.value] )
            }
          })
        } else if ( more == "date" ) {
          next.focus().val( GetRFC822Date(new Date) )
        } else if ( more ) {
          next.autocomplete( { data: more, delay: 40, minChars: 1 } )
        }

        next.focus()
      }
    })
  };

  function keyNames(obj) {
    var name, names = [];
    for (name in obj) {
      names.push(name)
    }
    return names
  }

  var Headers = {
    "Accept": ["*/*", "text/plain", "text/html, text/plain", "application/xml", "application/json"],
    "Accept-Encoding": [ "compress", "deflate", "gzip", "compress, gzip", "gzip, deflate"],
    "Accept-Language": [ "en", "es", "de", "fr", "*" ],
    "Cache-Control": [ "cache", "no-cache" ],
    "Connection": [ "close", "keep-alive" ],
    "Cookie": null,
    "Content-Length": null,
    "Content-Type": [ "application/octet-stream", "application/x-www-form-urlencoded", "application/xml", "application/json", "text/html", "text/plain", "text/xml" ],
    "From": null,
    "Host": null,
    "If-Match": [ "*" ],
    "If-Modified-Since": "date",
    "If-None-Match": [ "*" ],
    "If-Range": "date",
    "If-Unmodified-Since": "date",
    "Max-Forwards": null,
    "Pragma": [ "cache", "no-cache" ],
    "User-Agent": {
        "Firefox 1.5.0.12 - Mac": "Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en-US; rv:1.8.0.12) Gecko/20070508 Firefox/1.5.0.12",
        "Firefox 1.5.0.12 - Win": "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.0.12) Gecko/20070508 Firefox/1.5.0.12",
        "Firefox 2.0.0.12 - Mac": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-US; rv:1.8.1.12) Gecko/20080201 Firefox/2.0.0.12",
        "Firefox 2.0.0.12 - Win": "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.12) Gecko/20080201 Firefox/2.0.0.12",
        "Firefox 3.0.4 - Mac": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.0.4) Gecko/2008102920 Firefox/3.0.4",
        "Firefox 3.0.4 - Win": "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.12) Gecko/2008102920 Firefox/3.0.4",
        "Firefox 3.5.2 - Mac": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2",
        "Firefox 3.5.2 - Win": "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2",
        "Firefox 3.6.9 - Lin": "Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.9) Gecko/20100915 Gentoo Firefox/3.6.9",
        "Firefox 3.6.9 - Win": "Mozilla/5.0 (Windows; U; Windows NT 6.0; en-GB; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9 ( .NET CLR 3.5.30729; .NET CLR 4.0.20506)",
        "Firefox 4.0 - Mac": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0) Gecko/20100101 Firefox/4.0",
        "Firefox 4.0 - Lin": "Mozilla/5.0 (X11; Arch Linux i686; rv:2.0) Gecko/20110321 Firefox/4.0",
        "Firefox 4.0 - Win": "Mozilla/5.0 (Windows NT 6.1; rv:2.0) Gecko/20110319 Firefox/4.0",
        "Internet Explorer 9.0": "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; Media Center PC 6.0; InfoPath.3; MS-RTC LM 8; Zune 4.7)",
        "Internet Explorer 8.0": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.2; Trident/4.0)",
        "Internet Explorer 7.0": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)",
        "Internet Explorer 6.0": "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)",
        "Internet Explorer 5.5": "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.1)",
        "Internet Explorer 5.2.3 – Mac": "Mozilla/4.0 (compatible; MSIE 5.23; Mac_PowerPC)",
        "Internet Explorer 10.0": "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)",
        "Safari 5.0.5 - Mac": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_7; en-us) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
        "Safari 5.0.4 - Mac": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-us) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
        "Safari 5.0.4 - Win": "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
        "Safari 4.0.2 - Mac": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7; en-us) AppleWebKit/530.19.2 (KHTML, like Gecko) Version/4.0.2 Safari/530.19",
        "Safari 4.0.2 - Win": "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/530.19.2 (KHTML, like Gecko) Version/4.0.2 Safari/530.19.1",
        "Safari 3.2.1 - Mac": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_5; en-us) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/3.2.1 Safari/525.27.1",
        "Safari 3.2.1 - Win": "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-us) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/3.2.1 Safari/525.27.1",
        "Safari 3.1.2 - Mac": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_2; en-us) AppleWebKit/525.13 (KHTML, like Gecko) Version/3.1 Safari/525.13",
        "Safari 3.1.2 - Win": "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-us) AppleWebKit/525.13 (KHTML, like Gecko) Version/3.1 Safari/525.13",
        "Safari 3.0.4 - Mac": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-us) AppleWebKit/523.10.3 (KHTML, like Gecko) Version/3.0.4 Safari/523.10",
        "Safari 2.0.4 - Mac": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en) AppleWebKit/419 (KHTML, like Gecko) Safari/419.3",
        "Safari 1.3.2 - Mac": "Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/312.8 (KHTML, like Gecko) Safari/312.6",
        "Safari 1.2.4 - Mac": "Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/125.5.7 (KHTML, like Gecko) Safari/125.12",
        "Safari iOS 4.1 - iPhone": "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B117 Safari/6531.22.7",
        "Safari iOS 4.1 0 iPad": "Mozilla/5.0 (iPad; U; CPU OS 4_3_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8G4 Safari/6533.18.5",
        "Safari iOS 4.1 - iPod touch": "Mozilla/5.0 (iPod; U; CPU iPhone OS 4_1 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B117 Safari/6531.22.7",
        "Safari iOS 4.0.2 - iPhone": "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0_2 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A400 Safari/6531.22.7",
        "Safari iOS 4.0.2 - iPod touch": "Mozilla/5.0 (iPod; U; CPU iPhone OS 4_0_2 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A400 Safari/6531.22.7",
        "Android 2.3.3": "Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; HTC_DesireS_S510e Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1",
        "Opera 11.01 - Lin": "Opera/9.80 (X11; Linux x86_64; U; Ubuntu/10.10 (maverick); pl) Presto/2.7.62 Version/11.01",
        "Opera 11.01 - Win": "Opera/9.80 (Windows NT 6.1; U; en-US) Presto/2.7.62 Version/11.01",
        "cURL 7.21.1": "curl/7.21.0 (x86_64-pc-linux-gnu) libcurl/7.21.0 OpenSSL/0.9.8o zlib/1.2.3.4 libidn/1.18 libssh2/1.2.5",
        "Lynx 2.8.4rel.1 on Linux": "Lynx/2.8.4rel.1 libwww-FM/2.14",
        "Googlebot 2.1": "Googlebot/2.1 (+http://www.google.com/bot.html)"
    }
  };


  /*
   * Stolen without mercy nor remorse from
   * http://www.sanctumvoid.net/jsexamples/rfc822datetime/rfc822datetime.html
   */

  /*Accepts a Javascript Date object as the parameter;
  outputs an RFC822-formatted datetime string. */
  function GetRFC822Date(oDate)
  {
    var aMonths = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun",
                            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

    var aDays = new Array( "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    var dtm = new String();

    dtm = aDays[oDate.getDay()] + ", ";
    dtm += padWithZero(oDate.getDate()) + " ";
    dtm += aMonths[oDate.getMonth()] + " ";
    dtm += oDate.getFullYear() + " ";
    dtm += padWithZero(oDate.getHours()) + ":";
    dtm += padWithZero(oDate.getMinutes()) + ":";
    dtm += padWithZero(oDate.getSeconds()) + " " ;
    dtm += getTZOString(oDate.getTimezoneOffset());
    return dtm;
  }

  //Pads numbers with a preceding 0 if the number is less than 10.
  function padWithZero(val)
  {
    if (parseInt(val) < 10)
    {
      return "0" + val;
    }
    return val;
  }

  /* accepts the client's time zone offset from GMT in minutes as a parameter.
  returns the timezone offset in the format [+|-}DDDD */
  function getTZOString(timezoneOffset)
  {
    var hours = Math.floor(timezoneOffset/60);
    var modMin = Math.abs(timezoneOffset%60);
    var s = new String();
    s += (hours > 0) ? "-" : "+";
    var absHours = Math.abs(hours)
    s += (absHours < 10) ? "0" + absHours :absHours;
    s += ((modMin == 0) ? "00" : modMin);
    return(s);
  }
})();
