export default (function(){

	var list, filters;
	
	var _rangeFilter = function(filter){
		
		list = list.filter(function(item){
			return item[filter.field] >= filter.start.point;
		}).filter(function(item, field){
			return item[filter.field] <= filter.end.point;
		});
		
		if(!filter.start.inclusive){
			list = list.filter(function(item){
				return item[filter.field] != filter.start.point;
			});
		}
		
		if(!filter.end.inclusive){
			list = list.filter(function(item){
				return item[filter.field] != filter.end.point;
			});
		}
	},
	
	_equalityFilter = function(filter){
		list = list.filter(function(item){
			if(typeof(item[filter.field]) == 'string'){
				return item[filter.field].toLowerCase() == filter.value.toLowerCase();
			}
			return item[filter.field] == filter.value;
		})
	},
	
	_filter = function(){
		var that = this;
		filters.forEach(function(filter){
			switch(filter.type){
				case 'range':
					_rangeFilter(filter);
					break;
				default:
					_equalityFilter(filter);
			}
		});
	}

	return {
		
		filter: function(userList, userFilters){
			[list, filters] = [userList, userFilters];
			_filter.call(this);
			return list;
		}
	};
})();