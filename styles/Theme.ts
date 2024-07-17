export const CustomTheme =  ([, value]: RegExpMatchArray, ) => {
	if (value == "dark") {
		return {
			'background-color': '#515151',
			// 'height': '500px',
		};
	} else {
		return {
			'background-color': '#d3d3d380',
			// 'height': '500px',
		};
	}
	
}