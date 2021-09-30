package member.service;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import member.dao.MemberDAO;


@WebServlet("/CheckIdServlet")
public class CheckIdServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
 
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//데이터
		
		request.setCharacterEncoding("UTF-8"); // 한글처리 - post방식 get방식일떈  안써도 된다.
		String id	= request.getParameter("id");
		
		//DB
		MemberDAO memberDAO =  MemberDAO.getInstance();//싱글톤 - 1번생성해서 계속사용
		String check = memberDAO.idCheck(id); //호출
		
		
		//응답
		
				response.setContentType("text/html;charset=UTF-8"); // 응답에대한 한글처리
				PrintWriter out = response.getWriter();
				out.println("<html>");
				
				out.println("<head>");
				out.println("</head>");
				
				out.println("<body>");
				
				if(check==null) {
					out.println("사용 가능한 아이디 입니다.");
				}else out.println("이미 사용중인 아이디 입니다.");
				
				
				out.println("</body>");
				
				out.println("</html>");
	}

}
