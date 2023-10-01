let login = function() {
    let usern = document.getElementById('user').value;
    let passw = document.getElementById('pass').value;

    if (usern == 'username' && passw == 'username123') {
        alert('Bạn đã đăng nhập thành công');
    }
    else {
        alert('Bạn đã đăng nhập thất bại, mời đăng nhập lại!');
    }
}