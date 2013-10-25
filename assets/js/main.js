!function($){
    $(document).ready(function() {
		
		jQuery('#scrooly').scrooly({
			step: 15,
			opacity: 0.5,
			speed: 200
		});
		
		jQuery('#addContent').on('click', function () {
			jQuery('#scrooly .scr_content').append('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet quam et orci dictum sagittis. In hac habitasse platea dictumst. Morbi sed dictum nibh. Nullam felis est, feugiat a ullamcorper sed, iaculis ut ligula. Aliquam erat volutpat. Nam in sapien magna, in feugiat velit. Quisque tellus est, ultricies a euismod sed, consectetur et libero. Quisque ac libero in elit suscipit semper. Cras eget metus quis turpis ultrices aliquam sed at enim. Integer ullamcorper odio consequat nunc egestas tempus. Cras eget orci elit, ac eleifend nunc. Phasellus tincidunt nibh arcu. Donec laoreet ornare nisl, sit amet rutrum sem mollis sed.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet quam et orci dictum sagittis. In hac habitasse platea dictumst. Morbi sed dictum nibh. Nullam felis est, feugiat a ullamcorper sed, iaculis ut ligula. Aliquam erat volutpat. Nam in sapien magna, in feugiat velit. Quisque tellus est, ultricies a euismod sed, consectetur et libero. Quisque ac libero in elit suscipit semper. Cras eget metus quis turpis ultrices aliquam sed at enim. Integer ullamcorper odio consequat nunc egestas tempus. Cras eget orci elit, ac eleifend nunc. Phasellus tincidunt nibh arcu. Donec laoreet ornare nisl, sit amet rutrum sem mollis sed.</p>');
			jQuery('#scrooly').scrooly('resize');
			return false;
		});
    	
    	jQuery('#addContentAndGoToBottom').on('click', function () {
			jQuery('#scrooly .scr_content').append('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet quam et orci dictum sagittis. In hac habitasse platea dictumst. Morbi sed dictum nibh. Nullam felis est, feugiat a ullamcorper sed, iaculis ut ligula. Aliquam erat volutpat. Nam in sapien magna, in feugiat velit. Quisque tellus est, ultricies a euismod sed, consectetur et libero. Quisque ac libero in elit suscipit semper. Cras eget metus quis turpis ultrices aliquam sed at enim. Integer ullamcorper odio consequat nunc egestas tempus. Cras eget orci elit, ac eleifend nunc. Phasellus tincidunt nibh arcu. Donec laoreet ornare nisl, sit amet rutrum sem mollis sed.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet quam et orci dictum sagittis. In hac habitasse platea dictumst. Morbi sed dictum nibh. Nullam felis est, feugiat a ullamcorper sed, iaculis ut ligula. Aliquam erat volutpat. Nam in sapien magna, in feugiat velit. Quisque tellus est, ultricies a euismod sed, consectetur et libero. Quisque ac libero in elit suscipit semper. Cras eget metus quis turpis ultrices aliquam sed at enim. Integer ullamcorper odio consequat nunc egestas tempus. Cras eget orci elit, ac eleifend nunc. Phasellus tincidunt nibh arcu. Donec laoreet ornare nisl, sit amet rutrum sem mollis sed.</p>');
			jQuery('#scrooly').scrooly('resize').scrooly('moveTo', Infinity);
			return false;
		});
    	
    });
}(window.jQuery);
