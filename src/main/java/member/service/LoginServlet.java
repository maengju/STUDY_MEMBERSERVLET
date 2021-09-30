package member.service;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import member.bean.MemberDTO;
import member.dao.MemberDAO;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// 데이터
		request.setCharacterEncoding("UTF-8"); // 한글처리 - post방식 get방식일떈 안써도 된다.

		String id = request.getParameter("id");
		String pwd = request.getParameter("pwd");

		MemberDTO memberDTO = new MemberDTO();

		memberDTO.setId(id);
		memberDTO.setPwd(pwd);

		// DB연동
		MemberDAO memberDAO = MemberDAO.getInstance();// 싱글톤 - 1번생성해서 계속사용
		String name =memberDAO.login(memberDTO); // 호출
		
		// 응답

		response.setContentType("text/html;charset=UTF-8"); // 응답에대한 한글처리
		PrintWriter out = response.getWriter();
		out.println("<html>");

		out.println("<head>");
		out.println("</head>");

		out.println("<body>");
		
		if(name==null) {
			out.println("아이디 또는 비밀번호가 틀렷습니다.");
		}else out.println(name +"님의 로그인을 축하합니다.");
		

		out.println("</body>");

		out.println("</html>");

	}

}
