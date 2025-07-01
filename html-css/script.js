(() => {
    const $email = document.querySelector("#email");
    const $password = document.querySelector("#password");

    //画面読み込み時にローカルストレージから値を取得して値があればセット
    window.addEventListener("load", () => {
        if(funcLsCheck) {
            let savedEmail = window.localStorage.getItem('email');
            if (savedEmail !== null) {
                $email.value = savedEmail;
            }
            let savedPassword = window.localStorage.getItem('password');
            if (savedPassword !== null) {
                $password.value = savedPassword;
            }
        }
    });

    //"Sign in"ボタンで入力値をローカルストレージに保存
    document.querySelector(".button").addEventListener("click", () => {
        if (funcLsCheck) {
            window.localStorage.setItem("email", $email.value);
            window.localStorage.setItem("password", $password.value);
        }

        alert("Signed in successfully.");
    });

    //ローカルストレージが使用可能かどうかをbool値で返す
    function funcLsCheck () {
        if(('localStorage' in window) && (window.localStorage !== null)) {
            return true;
        } else {
            return false;
        }
    };
})();