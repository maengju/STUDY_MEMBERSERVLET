
function login() {

	document.getElementById("idDiv").innerText = "";
	document.getElementById("pwdDiv").innerText = "";

	if (document.getElementById("id").value == "") {
		document.getElementById("idDiv").innerText = "아이디를 입력하세요"

	} else if (document.getElementById("pwd").value == "") {
		document.getElementById("pwdDiv").innerText = "비밀번호를 입력하세요"

	}else document.loginForm.submit();

}

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
		document.writeForm.action="http://localhost:8080/memberServlet/WriteServlet"
		document.writeForm.submit();
	}

}

//jQuery
$(function() {   //스크립트가 있을시엔 온로드를 해줘야된다.
	/*$('#writeBtn').click(function() {
		$('#nameDiv').empty();
		$('#idDiv').empty();
		$('#pwdDiv').empty();
		$('#repwdDiv').empty();

		

		if ($('input[name=name]').val() == '') {
			$('#nameDiv').html('이름 입력');//name속성
			$('#name').focus();
		}
		else if ($('#id').val() == '') {
			$('#idDiv').html('아이디 입력');
			$('#id').focus();
		}
		else if ($('#pwd').val() == '') {
			$('#pwdDiv').html('비밀번호 입력');
			$('#pwd').focus();
		}
		else if ($('#repwd').val() != $('#pwd').val()) {
			$('#repwdDiv').html('비밀번호가 틀렸습니다.');
			$('#repwd').focus();
		}
		else $('form[name="writeForm"]').submit();

	});

*/

	$('#loginBtn').click(function() {

		$('#idDiv').empty();
		$('#pwdDiv').empty();


		//name 속성
		if ($('input[name="id"]').val() == '')
			$('#idDiv').html('아이디 입력');
		else if ($('input[name="pwd"]').val() == '')
			$('#pwdDiv').html('비밀번호 입력');
		else
			$('form[name="loginForm"]').submit();
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


//우편번호 Open Api
   function execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                   
               /* 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    document.getElementById("sample6_extraAddress").value = extraAddr;
                   */

                } else {
                    document.getElementById("sample6_extraAddress").value = '';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('zipcode').value = data.zonecode;
                document.getElementById("addr1").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("addr2").focus();
            }
        }).open();
    }

function checkId(){
	myForm = document.writeForm;
	
	document.getElementById("idDiv").innerText ="";
	if (document.getElementById("id").value == "") {
		document.getElementById("idDiv").innerText = "아이디를 입력하세요"
	} else {
		var formOpen = window.open('about:blank','myFormViewer','width=400,height=200');
		
		myForm.action="http://localhost:8080/memberServlet/CheckIdServlet"
		myForm.target = "myFormViewer";
		myForm.method = "post";
		myForm.submit();
		
		
		
	}
	
}

