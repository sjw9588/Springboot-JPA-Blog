let index = {
	init: function() {
		$("#btn-save").on("click", () => { //  function(){} 대신에 ()=>{} this를 바인딩하기 위해서!!
			this.save();
		});
	},

	save: function() {
		let data = {
			title: $("#title").val(),
			content: $("#content").val(),
		};

		// console.log(data);

		// ajax 호출 시 default 가 비동기 호출
		// ajax 통신을 이용해서 3개의 데이터를 json으로 변경하여 insert 요청!
		// ajax가 통신을 성공하고 서버가 json을 리턴해주면 자동으로 자바 오브젝트로 변환해준다.
		$.ajax({
			// 글쓰기 수행 요청
			type: "POST",	//글쓰기이므로 POST 요청.
			url: "/api/board",
			data: JSON.stringify(data), // http body데이터
			contentType: "application/json; charset=utf-8", //body 데이터가 어떤 타입인지(MIME)
			dataType: "json" // 요청을 서버로 해서 응답이 왔을 때 기본적으로 모든 것이 문자열 (생긴게 json이라면) => javascript오브젝트로 변경 
		}).done(function(resp) {
			alert("글쓰기가 완료되었습니다.");//정상일 때 실행
			//console.log(resp);
			location.href = "/";
		}).fail(function(error) {
			alert(JSON.stringify(error));
			// 실패했을 때 실행
		});
	}
}

index.init();