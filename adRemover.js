javascript:( function(){
  if (typeof String.prototype.startsWith != 'function') {
	  String.prototype.startsWith = function (str){
		return this.slice(0, str.length) == str;
	  };
	}

	var a = document.getElementsByClassName("uiButton uiButtonOverlay");
	var all = [];
	for (var i =0; i< a.length; i++)
	{
		if ( a[i].getAttribute("class") == "uiButton uiButtonOverlay"){
			all.push(a[i]);
		}
	}
	console.log( "found " + all.length + " ads.");

	for (var j =0; j< all.length; j++)
	{
		var curr = all[j];
		while (curr.getElementsByClassName("uiPopover highlightSelector uiStreamHide").length == 0){
			curr = curr.parentNode;
		}
		if ( curr.getElementsByClassName("uiPopover highlightSelector uiStreamHide").length == 1){
			curr.getElementsByClassName("uiPopover highlightSelector uiStreamHide")[0].firstChild.click();
		}
	}
	
	var sides = document.getElementsByClassName("ego_unit");
	for (var k = 0 ; k < sides.length; k++)
	{
		var opens = sides[k].getElementsByClassName("uiSelectorButton uiCloseButton uiCloseButtonSmall");
		for (var l = 0; l < opens.length; l++)
		{
			opens[l].click();
		}		
	}
	setTimeout(function () {
		var sides = document.getElementsByClassName("ego_unit");
		for (var k = 0 ; k < sides.length; k++)
		{
			var closes = sides[k].getElementsByClassName("uiMenuItem");
			console.log ("found " + closes.length + " side ads");
			for (var l = 0; l < closes.length; l++)
			{
				if (closes[l].getAttribute("data-label") != null && 
					closes[l].getAttribute("data-label").startsWith("Hide all from") ) {
						console.log("hiding ad");
						closes[l].getElementsByClassName("itemAnchor")[0].click();
						
				}
			}
		}
	}, 250);
	
	
	setTimeout(function () {
		c = document.getElementsByClassName("itemAnchor");
		var d = [];
		for (var i = 0 ; i <c.length;i++){
			var elem = c[i];
			if ( elem.getAttribute("ajaxify") != null){
				if ( elem.getAttribute("ajaxify").startsWith("/ajax/feed/filter_action/mark_as_spam/?action=mark_as_spam")){
					d.push(elem);
				}
			}
		}

		for (var i = 0 ; i <d.length;i++){
			console.log("removing ad");
			d[i].click();
		}
		
		
	}, 500);
	setTimeout(function () {
		var spans = document.getElementsByTagName('label');
		var tomark = [];
		for (var i = 0; i < spans.length; ++i) {
		  if (spans[i].innerText == "Offensive") {			
			tomark.push(spans[i]);
		  }
		}
		for (var k = 0 ; k < tomark.length; k++)
		{
			console.log("marked as offensive");
			tomark[k].previousSibling.click();
		}
	},1000);
})();
