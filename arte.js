$("[arte_vp_url*=PLUS7]").each(function() {
	$.getJSON($(this).attr("arte_vp_url"), function(data) {
		html = '<div class="container"><ul class="span12 functions unstyled">';
		$.each(data.videoJsonPlayer.VSR, function(i, v) {
	        if (v.mediaType == "video/mp4") {
	            html+='<li class="span2 module-grey"><a class="btn btn-block" href="'+v.url+'" target="_blank" download>'+v.versionLibelle + ': ' + v.quality + '</a></li>';
	        }
		});
		html += '</ul></div>';
		$("#details-focus").prepend(html);
	});
	return false;
});