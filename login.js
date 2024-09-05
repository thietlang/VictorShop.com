 // Đảm bảo thông báo không hiện khi trang mới tải
 document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('customAlert').style.display = 'none';
});

function validateForm() {
    var email = document.forms["registrationForm"]["email"].value;
    var password = document.forms["registrationForm"]["password"].value;
    var name = document.forms["registrationForm"]["name"].value;

    // Kiểm tra họ và tên
    if (!/^[a-zA-Z\sÀ-ỹ]{1,255}$/.test(name)) {
        alert("Họ và tên không được chứa ký tự đặc biệt và không quá 255 ký tự");
        return false;
    }
    // Kiểm tra cú pháp email
    if (!/^\w+([\.-]?\w+)*@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com|icloud\.com|me\.com|protonmail\.com|yandex\.com|live\.com|qq\.com|163\.com)$/.test(email)) {
        alert("Email phải có định dạng hợp lệ và đuôi phổ biến như @gmail.com, @yahoo.com, v.v.");
        return false;
    }

    // Kiểm tra chiều dài mật khẩu
    if (password.length <= 5 || password.length >= 255) {
        alert("Mật khẩu phải dài ít nhất 6 kí tự và không quá 255 kí tự");
        return false;
    }

    // Kiểm tra khoảng trắng mật khẩu
    if (/\s/.test(password)) {
        alert("Mật khẩu không được chứa khoảng trắng.");
        return false;
    }

    // Nếu tất cả các điều kiện đều vượt qua, hiển thị thông báo thành công
    document.getElementById('customAlert').style.display = 'block';

    // Ngăn chặn việc submit form để người dùng thấy thông báo thành công
    return false;
}

function closeAlert() {
    document.getElementById('customAlert').style.display = 'none';
}