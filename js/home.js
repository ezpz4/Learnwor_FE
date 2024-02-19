document.getElementById("loginBtn").addEventListener("click", function() {
    // 클릭 이벤트가 발생했을 때 다른 HTML 페이지로 이동합니다.
    window.location.href = "login.html";
});

document.getElementById("signupBtn").addEventListener("click", function() {
    // 클릭 이벤트가 발생했을 때 다른 HTML 페이지로 이동합니다.
    window.location.href = "signup.html";
});

document.getElementById("mypageBtn").addEventListener("click", function() {
    // 클릭 이벤트가 발생했을 때 다른 HTML 페이지로 이동합니다.
    window.location.href = "mypage.html";
});

function onLoginSuccess() {
    document.getElementById('beforeLogin').style.display = 'none'; // Hide
    document.getElementById('afterLogin').style.display = 'block'; // Show
}

document.addEventListener('DOMContentLoaded', () => {
    // Example condition: Check if a user is logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
        onLoginSuccess();
    }
});
