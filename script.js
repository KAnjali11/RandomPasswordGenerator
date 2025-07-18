
let password;
let button=document.querySelector('.btn');
function generate(length=10){
  let characterset="1234567890abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY!@#$%^&*()_";
  let password=" ";
  for(let i=0;i<length;i++){
    const randomIndex = Math.floor(Math.random() * characterset.length);
    password += characterset[randomIndex];
  }
return password;
}

button.addEventListener('click',()=>{
  let newPassword=generate(10)
  document.querySelector('.text').innerHTML=newPassword
  })