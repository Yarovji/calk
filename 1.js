

$('input').click(function znachvalue() {
	var num = $(this).attr('value');
		function insert() {
		    document.form.display.value=document.form.display.value+num;
	    }
	insert()
});

$('#delit').click(function () {
	document.form.display.value="";
	    });

$('#dor').click(function () {
	document.form.display.value=eval(document.form.display.value);
	    });

$('#Backspace').click(function () {
	document.form.display.value=document.form.display.value.substring(0,document.form.display.value.length-1);
	    });






