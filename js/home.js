//기본 설정
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
        
        const firebaseConfig = {
            apiKey: "AIzaSyAUkBV_sZ59E5gpSv7mQpfV_eIpt6nOAE0",
            authDomain: "learnwor-aa74b.firebaseapp.com",
            projectId: "learnwor-aa74b",
            storageBucket: "learnwor-aa74b.appspot.com",
            messagingSenderId: "609292163867",
            appId: "1:609292163867:web:7120c8cb909d89946251be"
        };
        
        const app = initializeApp(firebaseConfig);

        console.log('hello world')
        console.log(app)

        /**
         * 
         * 27번째 줄 ~ 46번째 줄
         * 현재 로그인 된 계정의 정보를 개발자 도구 칸에서 확인하실 수 있어요.
         * 처음 화면 켰을 때 아무것도 안나오는 게 정상.
         * 회원가입 했을 때는 uid만 나오는게 정상.
         * 로그인 후 uid와 이메일까지 나오는게 정상 입니다.
         * 
         */
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const auth = getAuth();
const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    const display = user.displayName;
    console.log(user)
    console.log(uid)
    console.log(display)
    // ...
    } else {
    // User is signed out
    // ...
    
    }
});



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
