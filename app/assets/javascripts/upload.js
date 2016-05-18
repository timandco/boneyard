$('#fileupload').fileupload({
	autoUpload: false,
	replaceFileInput: false,
	dataType: "script",
    add: function (e, data) {
    	console.log('data added')
    	$('#upload-btn').click( function () {
    		data.submit();
    	});
    },
    send: function (e, data) {
    	console.log('data sent')
    	$('#loader').show();
    },
    progress: function (e, data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);
        $('#progress .bar').css(
            'width',
            progress + '%'
        );
    },
    done: function (e, data) {
    	$('#loader').hide();
    }
});
