
//JavaScript
function check() {
	document.getElementById("nameDiv").innerText = "";
	document.getElementById("idDiv").innerText = "";
	document.getElementById("pwdDiv").innerText = "";
	document.getElementById("repwdDiv").innerText = "";


	//if(현재문서.form이름.name속성.value)
	if (document.getElementById("name").value == "") {
		document.getElementById("nameDiv").innerText = "이름을 입력하세요"

	} else if (document.getElementById("id").value == "") {
		document.getElementById("idDiv").innerText = "아이디를 입력하세요"

	} else if (document.getElementById("pwd").value == "") {
		document.getElementById("pwdDiv").innerText = "비밀번호를 입력하세요"

	} else if (document.getElementById("repwd").value != document.getElementById("pwd").value) {
		document.getElementById("repwdDiv").innerText = "비밀번호가 다릅니다."

	}else{
		document.paramForm.submit();
	}

}

//jQuery
$(function(){
	$('#writeBtn').click(function(){
		$('#nameDiv').empty();
		$('#idDiv').empty();
		$('#pwdDiv').empty();
		$('#repwdDiv').empty();
		
		/*if($('#name').val()=='') $('#nameDiv').html('이름 입력'); //id속성*/
		
		if($('input[name=name]').val()==''){
			$('#nameDiv').html('이름 입력');//name속성
			$('#name').focus();
		} 
		else if($('#id').val()==''){
			$('#idDiv').html('아이디 입력');
			$('#id').focus();
		}
		else if($('#pwd').val()==''){
			$('#pwdDiv').html('비밀번호 입력');
			$('#pwd').focus();
		}
		else if($('#repwd').val()!=$('#pwd').val()){
			$('#repwdDiv').html('비밀번호가 틀렸습니다.');
			$('#repwd').focus();
		}
		else $('form[name="writeForm"]').submit();
		
	});
});




function emailSelect(select) {
	index = select.selectedIndex;
	emailText = select.options[index].value;

	if (index == 1) {
		document.getElementById("email2").value = emailText;
	} else if (index == 2) {
		document.getElementById("email2").value = emailText;
	} else if (index == 3) {
		document.getElementById("email2").value = emailText;
	} else document.getElementById("email2").value = "";
}



