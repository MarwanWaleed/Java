var text_month=[,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],no_image_url="https://3.bp.blogspot.com/-qnLm52EsvBE/VDkrZ46TWXI/AAAAAAAAAsM/tiJ36WiboU4/s1600/90.jpg";$("#menu ul li a").each(function(){var e=$(this);if(e.text().match("-grid")){var t=e.text().substr(6);$.ajax({url:"/feeds/posts/default/-/"+t+"?alt=json-in-script&max-results=4",type:"get",dataType:"jsonp",success:function(t){for(var a="",r='<ul class="mega-posts">',s=0;s<t.feed.entry.length;s++){for(var n=0;n<t.feed.entry[s].link.length;n++)if("alternate"==t.feed.entry[s].link[n].rel){a=t.feed.entry[s].link[n].href;break}var l=t.feed.entry[s].title.$t,i=t.feed.entry[s].author[0].name.$t,o=t.feed.entry[s].published.$t,d=o.substring(0,4),u=o.substring(5,7),c=o.substring(8,10),f=text_month[parseInt(u,10)]+" "+c+", "+d,p=(t.feed.entry[s].category[0].term,t.feed.entry[s].content.$t),m=$("<div>").html(p);if(p.indexOf("https://www.youtube.com/embed/")>-1||p.indexOf("https://www.youtube.com/embed/")>-1)b='<div class="mag-thumb"><a href="'+a+'" style="background:url('+t.feed.entry[s].media$thumbnail.url.replace("/default.jpg","/mqdefault.jpg")+') no-repeat center center;background-size: cover"/></div>';else if(p.indexOf("<img")>-1)b='<div class="mag-thumb"><a href="'+a+'" style="background:url('+m.find("img:first").attr("src")+') no-repeat center center;background-size: cover"/></div>';else var b='<div class="mag-thumb"><a href="'+a+'" style="background:url('+no_image_url+') no-repeat center center;background-size: cover"/></div>';r+="<li>"+b+'<div class="mag-panel"><h3 class="mag-title"><a href="'+a+'">'+l+'</a></h3><div class="recent-meta"><span class="recent-date">'+f+'</span><span class="recent-author">'+i+"</span></div></div></li>"}r+="</ul>",e.parent().prev("li").addClass("m-mega-menu").append(r),e.parent().remove()}})}});var _0xbf81=["","owlCarousel",".ocraousel ul","<",">","#related-posts > div","#related-posts p","insertAfter","#related-posts .owl-controls"];$(_0xbf81[2])[_0xbf81[1]]({rtl:!0,loop:!0,autoplay:!0,margin:0,nav:!0,navSpeed:900,navText:[_0xbf81[0],_0xbf81[0]],responsive:{0:{items:1},600:{items:2},1e3:{items:2}}}),$(_0xbf81[5])[_0xbf81[1]]({rtl:!0,loop:!0,autoplay:!0,margin:0,nav:!0,navSpeed:900,navText:[_0xbf81[3],_0xbf81[4]],responsive:{0:{items:1},600:{items:2},1e3:{items:2}}}),$(_0xbf81[8])[_0xbf81[7]](_0xbf81[6]);