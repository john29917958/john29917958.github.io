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
			this.blockHeight = this.$panelBody.first().css('height');
			this.$prevButton = this.$panel.find('.btn-prev');
			this.$nextButton = this.$panel.find('.btn-next');
			this.$currentBlock = this.$panelBody.children().first();

			this.$panelBody.children().hide();
			this.$panelBody.children().first().show();

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
			this.$currentBlock.hide();
			$prevBlock.show();
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
			this.$currentBlock.hide();
			$nextBlock.show();
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

	return Panel;
})();

$(document).ready(function () {
	var panel = new Panel($('.panel'));
});