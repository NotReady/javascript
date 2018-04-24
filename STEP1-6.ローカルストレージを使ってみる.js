// localStrageのクリア
localStorage.clear();

// messageというキーに"こんにちはlocalStorage"という値を保存
localStorage.setItem("message", "こんにちはlocalStorage");

// messageというキーに保存した値を取得して表示
const mes = localStorage.getItem("message");
document.getElementById("message").innerText = mes;

// 保存済のデータ数
document.write(String(localStorage.length)+"<br>");

// 追加
localStorage.setItem("key", "value");

// 保存済のデータ数 
document.write(String(localStorage.length+"<br>"));

// 削除
localStorage.removeItem("key");
 
// 保存済のデータ数 
document.write(String(localStorage.length));
