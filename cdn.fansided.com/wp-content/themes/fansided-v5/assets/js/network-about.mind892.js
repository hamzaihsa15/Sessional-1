!function(i){function t(){var t=i.map(d,function(i){return i.vertical});return t=t.filter(function(i,e){return t.indexOf(i)==e}),t.sort(),t}function e(){var i=networkSiteData.vertical.toUpperCase();return i}function a(){var e=t();i(e).each(function(t,e){var a=e.toLowerCase(),o="",n=networkSiteData.siteurl+"/"+networkSiteData.pagename+"/"+a;""===networkSiteData.vertical&&i("#all-sites").addClass("active"),networkSiteData.vertical==a&&(o='class="active"'),c.append('<a href="'+n+'" id="'+a+'"'+o+">"+e+"</a>")}),o()}function o(){var t=networkSiteData.sites,a=i.map(t,function(i){return""==e()?i:i.vertical==e()?i:void 0});s(a),i(a).each(function(i,t){u.append(n(t))}),window.location.hash&&i(window.location.hash).trigger("click")}function n(i){var t="";return t+='<figure class="network-blogs-card" data-division="'+i.division_id+'">',t+='<a href="https://'+i.site_url+'" target="_blank">',t+='<img data-original="'+i.site_logo_url+'" class="logo fs-ll" alt="'+i.site_name+'" style="width: 150px; height: 150px;">',t+="<figcaption>",t+="<h5>"+i.location+" "+i.topic+"</h5>",t+="<em>"+i.site_name+"</em>",t+="</figcaption>",t+="</a>",t+="</figure>"}function s(t){var e=[],a=i(".dropdown");i.each(t,function(t,o){i.inArray(o.division_id,e)==-1&&(e.push(o.division_id),a.append('<a href="#'+o.division_id+'" id="'+o.division_id+'">'+o.division+"</a>"),a.find("a").on("click",r))})}function r(t){t.preventDefault();var e=i(this).attr("id"),a=i(this).text(),o=i(".division-dropdown");o.text(a),history.pushState?window.history.pushState(null,null,"#"+e):window.location.hash="#!"+e,i("#division-toggle").attr("checked",!1),i(".network-blogs figure").removeClass("hide"),"Show All"===o.text()&&i(".showall").addClass("hide"),"Show All"!==a&&(i(".showall").removeClass("hide"),i('.network-blogs figure:not( [data-division="'+e+'"] )').addClass("hide"))}function l(){var t=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("keywords"),queryTokenizer:Bloodhound.tokenizers.whitespace,local:i.map(d,function(i){return i})});t.initialize(),i(".typeahead").typeahead(null,{name:"fsnet",displayKey:"site_name",source:t,templates:{empty:'<div class="empty-message">Sorry, no matches found.</div>',suggestion:Handlebars.compile('<div class="fs-suggest clearit"><a href="https://{{site_url}}"><div class="fs-suggest-logo" style="background-image:url( {{site_logo_url}} )"></div><strong>{{site_name}}</strong><span class="sp">{{location}} {{topic}}</span></a></div>')}})}var d=networkSiteData.sites,c=i("#js-network-blog-nav"),u=i("#js-network-blogs");a(),l()}(jQuery);