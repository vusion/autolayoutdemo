import AutoLayout from '@lume/autolayout';
var transformAttr = 'transform' in document.documentElement.style ? 'transform' : undefined;
transformAttr =
	transformAttr || ('-webkit-transform' in document.documentElement.style ? '-webkit-transform' : 'undefined');
    transformAttr = transformAttr || ('-moz-transform' in document.documentElement.style ? '-moz-transform' : 'undefined');
    transformAttr = transformAttr || ('-ms-transform' in document.documentElement.style ? '-ms-transform' : 'undefined');
    transformAttr = transformAttr || ('-o-transform' in document.documentElement.style ? '-o-transform' : 'undefined');
function setAbsoluteSizeAndPosition(elm, left, top, width, height) {
	elm.setAttribute( 'style', 
        `width: ${width}px;
         height: ${height}px;
         ${transformAttr}: translate3d(${left}px, ${top}px, 0px);`
	);
}
export function autoLayout(parentElm, visualFormat) {
	var view = new AutoLayout.View();
	view.addConstraints(AutoLayout.VisualFormat.parse(visualFormat, {extended: true}));
	var elements = {};
	for (var key in view.subViews) {
		var elm = document.getElementById(key);
		if (elm) {
			elm.className += elm.className ? ' abs' : 'abs';
			elements[key] = elm;
		}
	}
	var updateLayout = function () {
		view.setSize(
			parentElm ? parentElm.clientWidth : window.innerWidth,
			parentElm ? parentElm.clientHeight : window.innerHeight,
		);
		for (key in view.subViews) {
			var subView = view.subViews[key];
			if (elements[key]) {
				setAbsoluteSizeAndPosition(elements[key], subView.left, subView.top, subView.width, subView.height);
			}
		}
	};
	window.addEventListener('resize', updateLayout);
	updateLayout();
	return updateLayout;
}