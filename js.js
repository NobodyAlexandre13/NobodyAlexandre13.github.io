const enviar = document.querySelector(".enviar")
const msm = document.querySelector(".texto")

enviar.addEventListener("click", ()=>{
  if(msm.value === ""){
    alert("Preenche o campo do comentario")
  }else{
    const linkWhat = `https://api.whatsapp.com/send?phone=926224888&text=${encodeURIComponent(msm.value)}`

    window.open(linkWhat, '_blank')
  }
})
