//RGB转HEX
export const rgb2hex = function (rgb) {
	var aRgb = rgb instanceof Array ? rgb : (rgb.split(',') || [0, 0, 0]);
	var temp;
	return [
		(temp = Number(aRgb[0]).toString(16)).length == 1 ? ('0' + temp) : temp,
		(temp = Number(aRgb[1]).toString(16)).length == 1 ? ('0' + temp) : temp,
		(temp = Number(aRgb[2]).toString(16)).length == 1 ? ('0' + temp) : temp,
	].join('');
}

//HEX转RGB
export const hex2rgb = (hex) => {
	if (hex.length == 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}
	return [
		parseInt(hex[0] + hex[1], 16),
		parseInt(hex[2] + hex[3], 16),
		parseInt(hex[4] + hex[5], 16),
	].join();
}