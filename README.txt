WEBSITE LỜI CHÚC 20/11

CẤU TRÚC
- index.html: khung nội dung website
- style.css: màu sắc, bố cục và giao diện
- script.js: đọc file lời chúc và tạo card
- loi-chuc.txt: nội dung lời chúc, mỗi lời chúc một dòng

CÁCH THÊM LỜI CHÚC
Mở loi-chuc.txt, thêm mỗi lời chúc ở một dòng mới, lưu file.
Sau khi cập nhật file trên GitHub, Vercel sẽ tự deploy lại website.

DEPLOY VERCEL
1. Tạo repository GitHub mới và upload toàn bộ 4 file website (README.txt có thể upload thêm).
2. Đăng nhập Vercel bằng GitHub.
3. Chọn Add New -> Project, import repository vừa tạo.
4. Framework Preset: Other. Build Command để trống. Output Directory để mặc định hoặc ./ .
5. Nhấn Deploy.

LƯU Ý
Không mở index.html bằng cách nhấp đúp để kiểm tra fetch file .txt vì trình duyệt có thể chặn yêu cầu đọc file cục bộ. Hãy kiểm tra sau khi deploy trên Vercel hoặc chạy qua một local web server.
