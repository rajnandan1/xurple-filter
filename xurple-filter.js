angular.module('xurple-filters', []).filter('xf', function() {
	function keyfind(f, obj) {
		if (obj === undefined)
			return -1;
		else {
			var sf = f.split(".");
			if (sf.length <= 1) {
				return obj[sf[0]];
			} else {
				var newobj = obj[sf[0]];
				sf.splice(0, 1);
				return keyfind(sf.join("."), newobj)
			}
		}

	}
	return function(input, clause, fields) {
		var out = [];
		if (clause && clause.query && clause.query.length > 0) {
			clause.query = String(clause.query).toLowerCase();
			angular.forEach(input, function(cp) {
				for (var i = 0; i < fields.length; i++) {
					var haystack = String(keyfind(fields[i], cp)).toLowerCase();
					if (haystack.indexOf(clause.query) > -1) {
						out.push(cp);
						break;
					}
				}
			})
		} else {
			angular.forEach(input, function(cp) {
				out.push(cp);
			})
		}
		return out;
	}

})