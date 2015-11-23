/*
*
* mads - version 2.00.01  
* Copyright (c) 2015, Ninjoe
* Dual licensed under the MIT or GPL Version 2 licenses.
* https://en.wikipedia.org/wiki/MIT_License
* https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
*
*/
var mads = function () {
    /* Get Tracker */
    if (typeof custTracker == 'undefined' && typeof rma != 'undefined') {
        this.custTracker = rma.customize.custTracker;
    } else if (typeof custTracker != 'undefined') {
        this.custTracker = custTracker;
    } else {
        this.custTracker = [];
    }
    
    /* Unique ID on each initialise */
    this.id = this.uniqId();
    
    /* Tracked tracker */
    this.tracked = [];
    
    /* Body Tag */
    this.bodyTag = document.getElementsByTagName('body')[0];
    
    /* Head Tag */
    this.headTag = document.getElementsByTagName('head')[0];
    
    /* RMA Widget - Content Area */
    this.contentTag = document.getElementById('rma-widget');
    
    /* URL Path */
    this.path = typeof rma != 'undefined' ? rma.customize.src : '';
};

/* Generate unique ID */
mads.prototype.uniqId = function () {
    
    return new Date().getTime();
}

/* Link Opner */
mads.prototype.linkOpener = function (url) {

	if(typeof url != "undefined" && url !=""){
		if (typeof mraid !== 'undefined') {
			mraid.open(url);
		}else{
			window.open(url);
		}
	}
}

/* tracker */
mads.prototype.tracker = function (tt, type, name) {
    
    /* 
    * name is used to make sure that particular tracker is tracked for only once 
    * there might have the same type in different location, so it will need the name to differentiate them
    */
    name = name || type; 
    
    if ( typeof this.custTracker != 'undefined' && this.custTracker != '' && this.tracked.indexOf(name) == -1 ) {
        for (var i = 0; i < this.custTracker.length; i++) {
            var img = document.createElement('img');
            
            /* Insert Macro */
            var src = this.custTracker[i].replace('{{type}}', type);
            src = src.replace('{{tt}}', tt);
            /* */
            img.src = src + '&' + this.id;
            
            img.style.display = 'none';
            this.bodyTag.appendChild(img);
            
            this.tracked.push(name);
        }
    }
};

/* Load JS File */
mads.prototype.loadJs = function (js, callback) {
    var script = document.createElement('script');
    script.src = js;
    if (typeof callback != 'undefined') {
        script.onload = callback;
    }
    this.headTag.appendChild(script);
}
/* Load CSS File */
mads.prototype.loadCss = function (href) {
    var link = document.createElement('link');
    link.href = href;
    link.setAttribute('type', 'text/css');
    link.setAttribute('rel', 'stylesheet');
    this.headTag.appendChild(link);
}

/*
*
* Unit Testing for mads 
*
*/
var testunit = function () {
    var app = new mads();
    app.loadCss(app.path+'css/style.css');
    
        setTimeout(function () {
            app.contentTag.innerHTML = '<div id="bgBom"></div> \
                <div class="logo"> \
                    <img src="'+ app.path +'img/logo.png" alt="logo"> \
                </div> \
                <div class="nameLipton"> \
                    <img src="'+ app.path +'img/nameLipton.png" alt=""> \
                </div> \
                <div id="textAppendName"> \
                    <p>Celup uncang teh Lipton dengan mengerakkan telefon anda secara menegak.</p> \
                </div> \
                <div class="displayNone" id="textAppendName1"> \
                    <p>Celup dan hantar paling banyak "Smiley" untuk menangi sebuah kereta baharu.</p> \
                </div> \
                <div id="btShadow"></div> \
                <div id="cup" class="cup"> \
                </div> \
                <div id="teaBug"> \
                </div> \
                <div id="cup2" class="cup2"> \
                </div> \
                <div id="copiratete"><p>*Tertakluk kepada terma dan syarat.</p></div> \
                <div id="car"> \
                    <img src="'+ app.path +'img/car.png" alt="car"> \
                </div> \
                <div id="textCar"> \
                    <p>Menangi sebuah kereta Renault* dan juga hadiah-hadiah lain yang hebat!</p> \
                </div> \
                <div id="btn" style="bottom:37px;"> \
                    <img src="'+ app.path +'img/btn.png" alt="q"> \
                </div> \
                <div id="phoneWQ"> \
                    <img style="display:none" src="'+ app.path +'img/phoneWQ.png" alt="phoneWQ" /> \
                </div>';


                document.getElementById("btn").onclick=function() { 
                    app.linkOpener('http://bit.ly/1LQ8aVV')
                    app.tracker('CTR', 'site'); 
                }
                document.getElementById("bgBom").onclick=function() {
                    app.linkOpener('http://bit.ly/1LQ8aVV')
                    app.tracker('CTR', 'site'); 
                }

            app.loadJs(app.path+'js/animation.js');
        },500);
    
        
}
testunit();
