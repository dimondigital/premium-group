jQuery(document).ready(function($){

	hidePopup('#casePopup');

	// $('#call-form').submit(function(){
	// 	var form = $(this);
	// 	var error = false;
	// 	if(!error) {
	// 		var data = form.serialize();
	// 		$.ajax({
	// 			type: 'POST',
	// 			url: 'ajax.php',
	// 			dataType: 'json',
	// 			data: data,
	// 			beforeSend: function(data) {
	// 				form.find('input[type="submit"]').attr('disabled', 'disabled');
	// 			},
	// 			success: function(data) {
	// 				if(data['error']) {
	// 					alert(data['error']);
	// 				} else {
	// 					$('#call-form #tel').val('');
	// 					$('#call-form #name').val('');
	// 					alert('Благодарим за вашу заявку !');
	// 				}
	// 			},
	// 			error: function(xhr, ajaxOptions, thrownError) {
	// 				alert(xhr.status);
	// 				alert(thrownError);
	// 			},
	// 			complete: function(data) {
	// 				form.find('input[type="submit"]').prop('disabled', false);
	// 			}
	// 		});
	// 	}
	// 	return false;
	// });

	// cases
	
});

function showPopup(popupName, id) {
	// наполнить попап
	var popup = $(popupName);
	$('.case-popup-content').animate({scrollTop: '0px'}, 10);
	// alert(cases[id].number);
	var lawCase = cases[id];
	popup.find('.number').html(lawCase.number).addClass('font-roboto-slab font-size-small col-xs-8');
	popup.find('.caption').html(lawCase.caption);
	popup.find('.plf-name').html(lawCase.plf);
	popup.find('.def-name').html(lawCase.def);
	if(lawCase.myClient == 'plf') {
		popup.find('.plf .my-client').show();
		popup.find('.def .my-client').hide();
	} else {
		popup.find('.plf .my-client').hide();
		popup.find('.def .my-client').show();
	}
	popup.find('.description').html(lawCase.description);
	popup.find('.desicion').html(lawCase.desicion);
	popup.find('.des-link').attr('href', lawCase.link);
	// показать попап
	$(popupName).show();

	
}

function hidePopup(popupName) {
	$(popupName).hide();
}