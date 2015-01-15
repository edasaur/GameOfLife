var infLoopStop=false;
document.head = document.head || document.getElementsByTagName('head')[0];
var src="FF00FE"
var change = function changeFavicon() {
        var link = document.createElement('link'),
                oldLink = document.getElementById('dynamic-favicon');
        link.id = 'dynamic-favicon';
        link.rel = 'icon';
        prevhref = oldLink.href[oldLink.href.length-5];
        if (prevhref=="1") {
                link.href = "images/"+src+"/favicon2.ico";
        } else if (prevhref=="2") {
                link.href = "images/"+src+"/favicon3.ico";
        } else if (prevhref=="3") {
                link.href = "images/"+src+"/favicon4.ico";
        } else {
                link.href = "images/"+src+"/favicon1.ico";
        }
        if (oldLink) {
                document.head.removeChild(oldLink);
        }
        document.head.appendChild(link);
        if(!infLoopStop) window.setTimeout(change,1000);
}
change();

