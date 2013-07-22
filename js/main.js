function cacheBuster()
{
	return '?' + Math.round(Math.random() * 1000000);
}

var flashvars = {};
var params = {};
var attributes = {};
swfobject.embedSWF("swf/SWF1.swf" + cacheBuster(), "swf1", "400", "400", "8.0.0", false, flashvars, params, attributes);
// swfobject.embedSWF("swf/SWF2.swf?" + cacheBuster(), "swf2", "400", "400", "8.0.0", false, flashvars, params, attributes);
