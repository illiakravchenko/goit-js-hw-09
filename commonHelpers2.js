import"./assets/modulepreload-polyfill-3cfb730f.js";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".feedback-form"),a=JSON.parse(localStorage.getItem("feedback-form-state"));a&&(e.email.value=a.email,e.message.value=a.message),e.addEventListener("input",()=>{const t={email:e.email.value.trim(),message:e.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),e.addEventListener("submit",t=>{if(t.preventDefault(),e.email.value.trim()===""||e.message.value.trim()===""){alert("Please fill in all fields.");return}const m={email:e.email.value.trim(),message:e.message.value.trim()};console.log(m),localStorage.removeItem("feedback-form-state"),e.reset()})});
//# sourceMappingURL=commonHelpers2.js.map
