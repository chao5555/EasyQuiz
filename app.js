
var num =0;
function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
    result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
    num = num+1
    result.style.color = 'green';
    } else {
    result.textContent = "Incorrect! Try again.";
    result.style.color = 'red';
    }
   }
   
   function checkAnswer2(answer) {
    const result2 = document.getElementById('result2');
    if (answer === 'd') {
    result2.textContent = "ถูกต้อง  อยู่ภูเก็ต ครับ";
    num = num+1
    result2.style.color = 'green';
    } else {
    result2.textContent = "ลองใหม่อีกครั้งนะครับ";
    result2.style.color = 'red';
    return num
     }
          alert(num);
    
   }
