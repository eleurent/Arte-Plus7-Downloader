$("[arte_vp_url*=PLUS7]").each(function() {
	jsonURL = $(this).attr("arte_vp_url");
	$.getJSON(jsonURL, function(data) {
		html = '<div class="container"><ul>';
		$.each(data.videoJsonPlayer.VSR, function(i, v) {
	        if (v.mediaType == "video/mp4") {
	            html+='<li class="span2 module-grey"><a class="btn btn-block" href="'+v.url+'" target="_blank" download>'+v.versionLibelle + ': ' + v.quality + '</a></div>';
	        }
		});
		html += '</ul></div>';
		$("#details-focus").prepend(html);
	});
	return false;
});