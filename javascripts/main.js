var Panel = (function() {
	function registerEvents() {
		var that = this;

		this.$prevButton.click(function () {
			that.prev();
		});

		this.$nextButton.click(function () {
			that.next();
		});

		$(document).keydown(function (e) {
			switch(e.keyCode) {
				case 39:
					that.next();
					break;
				case 37:
					that.prev();
					break;
				default:
					break;
			}
		});
	}

	function Panel(panel) {
		if ($(panel).length === 1) {
			this.$panel = $(panel);
			this.$emoticon = this.$panel.find('.emoticon');
			this.$panelBody = this.$panel.find('.panel-body');
			this.$prevButton = this.$panel.find('.btn-prev');
			this.$nextButton = this.$panel.find('.btn-next');
			this.$currentBlock = this.$panelBody.find('.panel-body-block').first();

			this.$panelBody.children().hide();
			this.$panelBody.children().first().show().css('left', 0);

			this.blockWidth = this.$panelBody.children().first().width();

			registerEvents.call(this);
		}
	}

	Panel.prototype.isAtTop = function() {
		if (this.$currentBlock.prev().length === 0) {
			return true;
		}
		else {
			return false;
		}
	};

	Panel.prototype.isAtBottom = function() {
		if (this.$currentBlock.next().length === 0) {
			return true;
		}
		else {
			return false;
		}
	};

	Panel.prototype.prev = function() {
		var $prevBlock = this.$currentBlock.prev();

		if (!this.isAtTop()) {
			this.toggleBlocks(this.$currentBlock, $prevBlock, 'right');
			this.$currentBlock = $prevBlock;

			if (this.isAtTop()) {
				this.$prevButton.hide();
			}
			else {
				this.$prevButton.show();
			}

			this.$nextButton.show();
		}
	};

	Panel.prototype.next = function() {
		var $nextBlock = this.$currentBlock.next();

		if (!this.isAtBottom()) {
			this.toggleBlocks(this.$currentBlock, $nextBlock, 'left');
			this.$currentBlock = $nextBlock;

			if (this.isAtBottom()) {
				this.$nextButton.hide();
			}
			else {
				this.$nextButton.show();
			}

			this.$prevButton.show();
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

function onReadyAnimation() {
	showHeader(showContent);
}

$(document).ready(function () {
	var panel = new Panel($('.panel'));

	onReadyAnimation();
});