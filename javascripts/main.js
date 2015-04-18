'use strict';

var Panel = (function() {
	function Panel(panel) {
		if ($(panel).length === 1) {
			this.$panel = $(panel);
			this.$emoticon = this.$panel.find('.emoticon');
			this.$panelBody = this.$panel.find('.panel-body');
			this.$currentBlock = this.$panelBody.find('.panel-body-block').first();

			this.$panelBody.children().hide();
			this.$panelBody.children().first().show().css('left', 0);

			this.blockWidth = this.$panelBody.children().first().width();
		}
	}

	Panel.prototype.isAtFirst = function() {
		if (this.$currentBlock.prev().length === 0) {
			return true;
		}
		else {
			return false;
		}
	};

	Panel.prototype.isAtLast = function() {
		if (this.$currentBlock.next().length === 0) {
			return true;
		}
		else {
			return false;
		}
	};

	Panel.prototype.prev = function() {
		var $prevBlock = this.$currentBlock.prev();

		if (!this.isAtFirst()) {
			this.toggleBlocks(this.$currentBlock, $prevBlock, 'right');
			this.$currentBlock = $prevBlock;
		}
	};

	Panel.prototype.next = function() {
		var $nextBlock = this.$currentBlock.next();

		if (!this.isAtLast()) {
			this.toggleBlocks(this.$currentBlock, $nextBlock, 'left');
			this.$currentBlock = $nextBlock;
		}
	};

	Panel.prototype.toggleBlocks = function($toHide, $toShow, direction) {
		var offset = $toHide.width();

		if (direction === 'left') {
			offset = -offset;
		}
		else {
			$toShow.css('left', -offset);
		}

		$toHide.animate({
			left: offset,
			opacity: 0
		}, function () {
			$toHide.hide().css('left', '100%');

			$toShow.show().css('opacity', 0).animate({
				left: 0,
				opacity: 1
			});
		});
	};

	return Panel;
})();

var PageNavigator = (function () {
	function PageNavigator(pageNavigator) {
		if ($(pageNavigator).length === 1) {
			this.$pageNavigator = $(pageNavigator);
			this.$prevButton = this.$pageNavigator.children('.btn-prev');
			this.$nextButton = this.$pageNavigator.children('.btn-next');
			this.$tipReminder = this.$pageNavigator.children('.tip-reminder');
			this.$currentReminder = this.$tipReminder.children().first();
			this.reminderLoopIntervalID = -1;

			this.$prevButton.hide();
		}
	}

	PageNavigator.prototype.isAtEnd = function() {
		if (this.$currentReminder.next().length === 0) {
			return true;
		}
		else {
			return false;
		}
	};

	PageNavigator.prototype.nextReminder = function(callback) {
		var that = this,
			$nextReminder;

		if (!this.isAtEnd()) {
			$nextReminder = this.$currentReminder.next();
		}
		else {
			$nextReminder = this.$tipReminder.children().first();
		}

		this.$currentReminder.fadeOut(function () {
			that.$currentReminder = $nextReminder;
			$nextReminder.fadeIn(callback);
		});
	};

	PageNavigator.prototype.startReminderLoop = function() {
		var that = this;

		this.reminderLoopIntervalID = setInterval(function () {
			that.nextReminder();
		}, 5000);
	};

	PageNavigator.prototype.stopReminderLoop = function() {
		if (this.reminderLoopIntervalID !== -1) {
			clearInterval(this.reminderLoopIntervalID);
			this.reminderLoopIntervalID = -1;
		}
	};

	return PageNavigator;
})();

var BaseEventHandler = (function () {
	var eventNames = [
		'prevBlockEvent',
		'nextBlockEvent'
	];

	function BaseEventHandler() {
		
	}

	$.each(eventNames, function (index, eventName) {
		BaseEventHandler.prototype.eventName = function (e) {
			// Abstract function.
		};
	});

	return BaseEventHandler;
})();

var EventHandler = (function () {
	function EventHandler() {
		BaseEventHandler.call(this);
	}

	EventHandler.prototype = Object.create(BaseEventHandler.prototype);
	EventHandler.prototype.constructor = EventHandler;

	EventHandler.prototype.prevBlockEvent = function(e) {
		this.models.panel.prev();

		if (this.models.panel.isAtFirst()) {
			this.models.pageNavigator.$prevButton.fadeOut('fast');
		}
		else {
			this.models.pageNavigator.$prevButton.fadeIn('fast');
		}

		this.models.pageNavigator.$nextButton.fadeIn('fast');
	};

	EventHandler.prototype.nextBlockEvent = function(e) {
		this.models.panel.next();

		if (this.models.panel.isAtLast()) {
			this.models.pageNavigator.$nextButton.fadeOut('fast');
		}
		else {
			this.models.pageNavigator.$nextButton.fadeIn('fast');
		}

		this.models.pageNavigator.$prevButton.fadeIn('fast');
	};

	EventHandler.prototype.firstBlockEvent = function(e) {
		while (!this.models.panel.isAtFirst()) {
			EventHandler.prototype.prevBlockEvent.call(this, e);
		}
	};

	EventHandler.prototype.lastBlockEvent = function(e) {
		while (!this.models.panel.isAtLast()) {
			EventHandler.prototype.nextBlockEvent.call(this, e);
		}
	};

	return EventHandler;
})();

var EventController = (function () {
	function isParameterValid(models) {
		$.each(models, function (key, value) {
			if (value === undefined ||
				value === null ||
				value !== 'object') {
				return false
			}
		});

		return true;
	}

	function registerEvents() {
		var that = this;

		this.models.pageNavigator.$prevButton.click(function (e) {
			that.eventHandler.prevBlockEvent.call(that, e);
		});
		this.models.pageNavigator.$nextButton.click(function (e) {
			that.eventHandler.nextBlockEvent.call(that, e);
		});

		$(document).keydown(function (e) {
			switch(e.keyCode) {
				case 38:
					that.eventHandler.firstBlockEvent.call(that, e);
					break;
				case 39:
					that.eventHandler.nextBlockEvent.call(that, e);
					break;
				case 37:
					that.eventHandler.prevBlockEvent.call(that, e);
					break;
				case 40:
					that.eventHandler.lastBlockEvent.call(that, e);
					break;
				default:
					break;
			}
		});
	}

	function EventController(panel, pageNavigator) {
		var models = {
			panel: panel,
			pageNavigator: pageNavigator
		};

		if (isParameterValid(models)) {
			this.models = models;
			this.eventHandler = new EventHandler();
		}

		registerEvents.call(this);
	}

	EventController.prototype.setEventHandler = function(eventHandler) {
		this.eventHandler = eventHandler;
	};

	return EventController;
})();

function showHeader(callback) {
	$('#page-header').animate({
		opacity: 'show',
		width: 'show'
	}, 1000, callback);
}

function showContent(callback) {
	$('#page-content').animate({
		opacity: 'show',
		height: 'show'
	}, 1000, callback);
}

function showFooter(callback) {
	$('#page-footer').animate({
		opacity: 1
	}, 1000, callback);
}

function onReadyAnimation(callback) {
	showHeader(function () {
		showContent(function () {
			showFooter(callback);
		});
	});
}

$(document).ready(function () {
	var panel = new Panel($('.panel')),
		pageNavigator = new PageNavigator($('.page-navigator')),
		eventController = new EventController(panel, pageNavigator);

	onReadyAnimation(function () {
		pageNavigator.startReminderLoop();
	});
});