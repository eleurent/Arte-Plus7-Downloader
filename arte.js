$("iframe").each(function() {
	src = $(this).attr("src");
	if (~src.indexOf("json_url")) {
		url = unescape(src.split('json_url=')[1]);
	    $.getJSON(url, function(data) {
			html = '<div class="program-tags"><ul>';
			$.each(data.videoJsonPlayer.VSR, function(i, v) {
		        if (v.mediaType.indexOf("mp4") > -1) {
		            html+='<li><a href="'+v.url+'" target="_blank" download>'+v.versionLibelle + ': ' + v.quality + '</a></li>';
		        }
			});
			html += '</ul></div>';
			$('.program-detail').prepend(html);
	    });
	    return false;
	}
});