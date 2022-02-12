function check(form) {
    if(form.userId.value == 'admin') {
        if(form.userPw.value == '123123') {
            window.open('success.html')
            alert('환영합니다! ^^');
        }
    }
}