;(function($, window, document, undefined) {
	var pluginName = 'scrooly', defaults = {
		scrollStep: 15,
		smoothSpeed: 0,
		visible: false,
		opacity: 0.5
	};
	
	function Plugin(element, options) {
		var self = this;
		this._name = pluginName;
		this.opts = $.extend({}, defaults, options);
		this.element = $(element);
		this.previousMousePos = -1;
		this.isMoving = false;
		this.visibleTrack = false
		this.element.wrap('<div />');
		this.height = this.element.height();
		this.container = this.element.parent().css({
			position: 'relative',
			width: this.element.width(),
			height: this.height,
			'overflow-y': 'hidden',
			'overflow-x': 'visible'
		});
		this.element.css({
			position: 'absolute',
			top: 0,
			left: 0,
			height: 'auto'
		}).addClass('scr_content');
		this.container.append('<div class="scr_track"><div class="scr_drag" /></div>').on({
			mouseenter: function() {
				if (self.visibleTrack && !self.opts.visible)
					self.track.stop().animate({
						opacity: self.opts.opacity
					}, 200);
			},
			mouseleave: function () {
				if (self.visibleTrack && !self.opts.visible)
					self.track.stop().animate({
						opacity: 0
					}, 200);
			}
		});
		this.track = $('.scr_track', this.container).css({
			position: 'absolute',
			height: this.height,
			opacity: self.opts.opacity,
			top: 0,
			right: 0
		});
		this.drag = $('.scr_drag', this.container).css({
			position: 'absolute',
			width: this.opts.width,
			top: 0,
			right: 0
		});
		if (this.opts.visible)
			this.element.width(parseInt(this.container.width()) - parseInt(this.track.outerWidth(true)));
		this.calcHeight();
		this.moveDrag = false;
		this.previousMove = null;
		this.container.on({
			mousewheel : function(){
				var e = event || window.event;
                var delta = (-e.detail / 3) || (e.wheelDelta / 120);
				self.move((delta < 0 ? 1 : -1 ) * self.opts.scrollStep);
				return false;
			},
			DOMMouseScroll: function (event) {
				var delta = event.originalEvent.detail;
				self.move((delta > 0 ? 1 : -1 ) * self.opts.scrollStep);
				return false;
			},
			touchstart: function (event) {
				var e = event.originalEvent;
				self.previousMove = e.targetTouches[0].pageY;
				self.moveDrag = true;
			},
			touchmove: function (event) {
				event.preventDefault();
				var e = event.originalEvent;
				self.move(e.targetTouches[0].pageY - self.previousMove);
				self.previousMove = e.targetTouches[0].pageY;
			},
			touchend: function () {
				self.moveDrag = false;
			}
        });
		this.drag.on({
			mousedown: function(e) {
				e.preventDefault();
				self.moveDrag = true;
				self.previousMove = e.pageY;
			},
			mouseenter : function () {
				self.drag.addClass('scr_hover');
			},
			mouseleave : function () {
				self.drag.removeClass('scr_hover');
			}
		});
		$(document).on({
			mouseup: function () {
				self.moveDrag = false;
				self.drag.removeClass('scr_moving');
			},
			mousemove: function (e) {
				if (self.moveDrag) {
					self.move(e.pageY - self.previousMove);
					self.previousMove = e.pageY;
					self.drag.addClass('scr_moving');
				}
			}
		});
	};
	
	Plugin.prototype.calcHeight = function() {
		var h = Math.ceil(this.height *  this.height / this.element.height());
		if (h > this.height) h = this.height;
		if (h == this.height)
			this.visibleTrack = false;
		else
			this.visibleTrack = true;
		this.maxT = this.height - h;
		this.ratio = this.height / this.element.height();
		this.drag.height(h);
		if (!this.visibleTrack)
			this.track.css('opacity', 0);
		else
			if (this.opts.visible)
				this.track.css('opacity', this.opts.opacity);
	};
	
	Plugin.prototype.move = function(move) {
		var t = parseInt(this.drag.css('top'));
		t += move;
		if (t > this.maxT)
			t = this.maxT;
		if (t < 0)
			t = 0;
		this.drag.css('top', t);
		this.element.stop().animate({
			top : Math.ceil(-t / this.ratio)
		}, this.opts.smoothSpeed);
	};
	
	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if(!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
		});
	}
})(jQuery, window, document);
