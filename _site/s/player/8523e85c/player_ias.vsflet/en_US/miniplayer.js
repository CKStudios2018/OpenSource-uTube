(function(g){var window=this;'use strict';var w4=function(a){g.V.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.Rf=!1;this.player=a;this.N(a,"minimized",this.Xf);this.N(a,"onStateChange",this.yC)},x4=function(a){g.dM.call(this,a);
    this.i=new w4(this.player);this.i.hide();g.GL(this.player,this.i.element,4);a.Ce()&&(this.load(),g.L(a.getRootNode(),"ytp-player-minimized",!0))};
    g.v(w4,g.V);g.k=w4.prototype;
    g.k.QA=function(){this.tooltip=new g.CP(this.player,this);g.G(this,this.tooltip);g.GL(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.kc=new g.ZM(this.player);g.G(this,this.kc);this.eg=new g.V({D:"div",K:"ytp-miniplayer-scrim"});g.G(this,this.eg);this.eg.ya(this.element);this.N(this.eg.element,"click",this.Sw);var a=new g.V({D:"button",Ca:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.VJ()]});g.G(this,a);a.ya(this.eg.element);this.N(a.element,"click",this.Hh);
    a=new g.b0(this.player,this);g.G(this,a);a.ya(this.eg.element);this.Jn=new g.V({D:"div",K:"ytp-miniplayer-controls"});g.G(this,this.Jn);this.Jn.ya(this.eg.element);this.N(this.Jn.element,"click",this.Sw);var b=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.G(this,b);b.ya(this.Jn.element);a=new g.V({D:"div",K:"ytp-miniplayer-play-button-container"});g.G(this,a);a.ya(this.Jn.element);var c=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.G(this,c);c.ya(this.Jn.element);this.HI=new g.zO(this.player,
    this,!1);g.G(this,this.HI);this.HI.ya(b.element);b=new g.wO(this.player,this);g.G(this,b);b.ya(a.element);this.nextButton=new g.zO(this.player,this,!0);g.G(this,this.nextButton);this.nextButton.ya(c.element);this.gg=new g.pP(this.player,this);g.G(this,this.gg);this.gg.ya(this.eg.element);this.Ec=new g.EO(this.player,this);g.G(this,this.Ec);g.GL(this.player,this.Ec.element,4);this.Fw=new g.V({D:"div",K:"ytp-miniplayer-buttons"});g.G(this,this.Fw);g.GL(this.player,this.Fw.element,4);a=new g.V({D:"button",
    Ca:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.VJ()]});g.G(this,a);a.ya(this.Fw.element);this.N(a.element,"click",this.Hh);a=new g.V({D:"button",Ca:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Close"},S:[g.$J()]});g.G(this,a);a.ya(this.Fw.element);this.N(a.element,"click",this.hR);this.N(this.player,"presentingplayerstatechange",this.Dc);this.N(this.player,"appresize",this.rb);this.N(this.player,"fullscreentoggled",this.rb);this.rb()};
    g.k.show=function(){this.od=new g.kn(this.Eo,null,this);this.od.start();this.Rf||(this.QA(),this.Rf=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Ec.show();this.player.unloadModule("annotations_module")};
    g.k.hide=function(){this.od&&(this.od.dispose(),this.od=void 0);g.V.prototype.hide.call(this);this.player.Ce()||(this.Rf&&this.Ec.hide(),this.player.loadModule("annotations_module"))};
    g.k.va=function(){this.od&&(this.od.dispose(),this.od=void 0);g.V.prototype.va.call(this)};
    g.k.Hh=function(){this.player.stopVideo();this.player.La("onCloseMiniplayer")};
    g.k.hR=function(){this.player.playVideo()};
    g.k.Sw=function(a){if(a.target===this.eg.element||a.target===this.Jn.element)g.R(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.YI(this.player.sb())?this.player.pauseVideo():this.player.playVideo():this.player.La("onExpandMiniplayer")};
    g.k.Xf=function(){g.L(this.player.getRootNode(),"ytp-player-minimized",this.player.Ce())};
    g.k.Tc=function(){this.Ec.Tb();this.gg.Tb()};
    g.k.Eo=function(){this.Tc();this.od&&this.od.start()};
    g.k.Dc=function(a){g.T(a.state,32)&&this.tooltip.hide()};
    g.k.rb=function(){g.PO(this.Ec,0,this.player.Xa().getPlayerSize().width,!1);g.GO(this.Ec)};
    g.k.yC=function(a){this.player.Ce()&&(0===a?this.hide():this.show())};
    g.k.dc=function(){return this.tooltip};
    g.k.oe=function(){return!1};
    g.k.Ee=function(){return!1};
    g.k.Ch=function(){return!1};
    g.k.sx=function(){};
    g.k.Ml=function(){};
    g.k.Tp=function(){};
    g.k.Yl=function(){return null};
    g.k.gi=function(){return new g.ag(0,0,0,0)};
    g.k.handleGlobalKeyDown=function(){return!1};
    g.k.handleGlobalKeyUp=function(){return!1};
    g.k.No=function(a,b,c,d,e){var f=0,h=d=0,l=g.yg(a);if(b){c=g.wn(b,"ytp-prev-button")||g.wn(b,"ytp-next-button");var m=g.wn(b,"ytp-play-button"),n=g.wn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.wg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.wn(b,"ytp-miniplayer-button-top-left"),f=g.wg(b,this.element),b=g.yg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Xa().getPlayerSize().width;e=f+(e||0);l=g.ce(h,0,b-l.width);e?(a.style.top=e+"px",
    a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
    g.k.showControls=function(){};
    g.k.Zj=function(){};
    g.k.Aj=function(){return!1};g.v(x4,g.dM);x4.prototype.create=function(){};
    x4.prototype.Qh=function(){return!1};
    x4.prototype.load=function(){this.player.hideControls();this.i.show()};
    x4.prototype.unload=function(){this.player.showControls();this.i.hide()};g.oM.miniplayer=x4;})(_yt_player);
    