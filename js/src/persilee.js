$(function(){var e=["/live2dw/assets/hijiki.model.json","/live2dw/assets/tororo.model.json"][Math.round(Math.random())],s=0;s=$(window).width()<=1024?1:.8,L2Dwidget.init({pluginRootPath:"live2dw/",pluginJsPath:"lib/",pluginModelPath:"assets/",model:{jsonPath:e},display:{superSample:1.8,position:"left",width:90,height:220,hOffset:8,vOffset:-126},mobile:{show:!0,scale:.5},react:{opacityDefault:s,opacityOnHover:.2}}),$(".archive .posts-collapse .post-title a>span.archive-title").each(function(){$(this).append('<span class="archive-updated"></span>').find(".archive-updated").html('更新于：<time class="updated">'+$(this).attr("updated")+"</time")}),$(".category-all .category-list-item").on("click",function(){return console.log($(this).find("a").attr("href")),window.location.href=$(this).find("a").attr("href"),!1}),$(".github-corner svg").width(60).height(60),POWERMODE.colorful=!0,POWERMODE.shake=!1,document.body.addEventListener("input",POWERMODE),$("#header").addClass("dark").addClass("animated"),$(".sidebar-toggle").on("click",function(){$("#header").toggleClass("header-has-sidebar")}),$(".popup-trigger.faa-parent.animated-hover").on("click",function(){$(".sidebar-toggle").hide(),$(".back-to-top.back-to-top-on").hide(),$("#sidebar").hide(),$("#header").removeClass("slideInDown"),$(".local-search-popup .local-search-header").addClass("search-middle")}),$(".popup-btn-close").on("click",function(){$(".sidebar-toggle").show(),$("#sidebar").show(),$(".back-to-top.back-to-top-on").show()}),$("#local-search-input").on("change keydown",function(){$(".local-search-popup .local-search-header").removeClass("search-middle")});var a=0,t=0;function i(){var e=$(document).height(),s=$(window).scrollTop(),a=s/((e-$(window).height())/100);$("#load").width(a+"%"),a>=99.5?$("#load").hide():$("#load").show();$(document).width();s>57?$("#header").addClass("light-header").removeClass("dark"):$("#header").removeClass("light-header").addClass("dark")}$(document).on("scroll",function(e){a=$(this).scrollTop(),t<=a?($(window).scrollTop()>10&&$("#header").addClass("slideOutUp").removeClass("slideInDown"),$(window).scrollTop()==$(document).height()-$(window).height()&&showMessage("喵~ 页面到底了，点击右下角箭头 ⬆️ ，可回到顶部",3e3)):$("#header").removeClass("slideOutUp").addClass("slideInDown"),setTimeout(function(){t=a},0)}),$(window).scroll(function(){i()}),$(window).resize(function(){i(),$(window).width()<=990?$("#header").removeClass("header-has-sidebar"):$("#sidebar").width()>0&&$("#header").addClass("header-has-sidebar")});var o=null;function n(){0==$(o).text().indexOf("Safari")?$(o).prepend('<img class="Safari" src="/images/ua/Safari.svg">'):0==$(o).text().indexOf("Mac OS")||0==$(o).text().indexOf("iOS")?$(o).prepend('<img class="Apple" src="/images/ua/Apple.svg">'):0==$(o).text().indexOf("Chrome")?$(o).prepend('<img class="Chrome" src="/images/ua/Chrome.svg">'):0==$(o).text().indexOf("Firefox")?$(o).prepend('<img class="Firefox" src="/images/ua/Firefox.svg">'):0==$(o).text().indexOf("Windows 10")?$(o).prepend('<img class="Windows10" src="/images/ua/windows10.svg">'):0==$(o).text().indexOf("Windows 7")||0==$(o).text().indexOf("Windows 8")||0==$(o).text().indexOf("Windows 9")?$(o).prepend('<img class="Windows7" src="/images/ua/windows7.svg">'):0==$(o).text().indexOf("Android")?$(o).prepend('<img class="Android" src="/images/ua/Android.svg">'):0==$(o).text().indexOf("Ubuntu")?$(o).prepend('<img class="Ubuntu" src="/images/ua/ubuntu.svg">'):0!=$(o).text().indexOf("Microsoft Edge")&&0!=$(o).text().indexOf("MSIE")||$(o).prepend('<img class="Ubuntu" src="/images/ua/ie.png">')}var d=setInterval(function(){var s;if(0==$("#live2d-widget .per-tips").length){if(console.log("aaa"),$("#live2d-widget").prepend('<div class="per-tips"></div >'),s="/live2dw/assets/hijiki.model.json"==e?'喵~ 我是 <span style="color:#fdb9b9">hijiki&nbsp;🐱</span>...</br>':'喵~ 我是 <span style="color:#fdb9b9">tororo&nbsp;🐱</span>...</br>',""!==document.referrer&&"https://lishaoy.net/"!==document.referrer){var a=document.createElement("a");a.href=document.referrer;var t=a.hostname.split(".")[1];"lishaoy.net"==a.hostname?s+='欢迎来到&nbsp;<span style="color:#0099cc;">『'+document.title.split(" | ")[0]+"』</span>,感谢您继续参观本站 🙂":s+="baidu"==t?'来自 百度搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">'+a.search.split("&wd=")[1].split("&")[0]+"</span> 找到的我吗？":"so"==t?'来自 360搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">'+a.search.split("&q=")[1].split("&")[0]+"</span> 找到的我吗？":"google"==t?'来自 谷歌搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『'+document.title.split(" - ")[0]+"』</span>":'来自<span style="color:#0099cc;">&nbsp;'+a.hostname+'&nbsp;</span>的朋友,欢迎来到<span style="color:#0099cc;">『'+document.title.split(" | ")[0]+"』</span>&nbsp;玩耍 🙂"}else if(null!==localStorage.getItem("ValineCache")&&"https://lishaoy.net/"==window.location.href)s+='<span style="color:#0099cc;"><strong>&nbsp;'+JSON.parse(localStorage.getItem("ValineCache")).nick+"&nbsp;</strong></span>欢迎回来！要继续看 👀 些什么吗";else if("https://lishaoy.net/"==window.location.href){var i=(new Date).getHours();s+=i>23||i<=5?"你是夜猫子呀？这么晚还不睡觉，明天起的来嘛":i>5&&i<=7?"早上好！一日之计在于晨，美好的一天就要开始了":i>7&&i<=11?"上午好！工作顺利嘛，不要久坐，多起来走动走动哦！":i>11&&i<=14?"中午了，工作了一个上午，现在是午餐时间！":i>14&&i<=17?"午后很容易犯困呢，今天的运动目标完成了吗？":i>17&&i<=19?"傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~":i>19&&i<=21?"晚上好，今天过得怎么样？":i>21&&i<=23?"已经这么晚了呀，早点休息吧，晚安~":"快来逗我玩吧！"}else s='欢迎阅读<span style="color:#0099cc;">『'+document.title.split(" | ")[0]+"』</span>";showMessage(s,6e3),clearInterval(d)}},100);setTimeout(()=>{$('.vhead .vname[href="https://lishaoy.net"]').after('<span class = "bozhu">博主</span>'),$(".vhead .vsys").each(function(){o=this,n()})},1500),$(".vsubmit.vbtn").on("click",function(){setTimeout(()=>{$(".vhead").eq(0).find('.vname[href="https://lishaoy.net"]~.bozhu')&&$(".vhead").eq(0).find('.vname[href="https://lishaoy.net"]').after('<span class = "bozhu">博主</span>'),$(".vhead:first .vsys").each(function(){o=this,n()})},1e3)})});