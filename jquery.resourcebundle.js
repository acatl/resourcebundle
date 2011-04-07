/*
 * ResourceBundle
 *
 * Copyright 2011, Acatl Pacheco
 * Licensed under the MIT License.
 *
 */

(function( $ ){

	function ResourceBundle(name) {
		var bundleName = name;
		var bundle = {};
		function build() {
			var bundleRaw = $.trim($("script#" + bundleName ).text()).split("\n");
			var bundleData = {};
			for (var i=0; i<bundleRaw.length; i++) {
				var row = $.trim(bundleRaw[i]);
				var sep = row.indexOf("=");
				bundleData[row.slice(0,sep)] = row.slice(sep+1);
			}
			bundle = bundleData;
		}

		build();
		
		return {
			getString:function(key) {
				return bundle[key];
			}
		};
	}

	$.extend({
		getResourceBundle: function (name) {
			return new ResourceBundle(name);		
		}
	});

})( jQuery );