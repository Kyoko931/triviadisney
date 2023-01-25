var aciertos=0

const preguntaOne=document.getElementById('preguntaOne')

preguntaOne.textContent="¿Qué princesa anda con siete enanos?"

const respuesta=document.getElementById('btn1')
respuesta.textContent="Blancanieves"

const incorrecta1=document.getElementById('btn2')
incorrecta1.textContent="Bella Durmiente"

const incorrecta2=document.getElementById('btn3')
incorrecta2.textContent="Pocahontas"

function oprimir_btn (btn){

  if (btn===0) {
    alert ("Respuesta Correcta")
    aciertos++
  }
  if (btn===1) {
    alert ("Respuesta Incorrecta")

  }
  if (btn===2) {
    alert ("Respuesta Incorrecta")

  }

  alert("Aciertos: " +aciertos)

  preguntaOne.textContent="¿Quien rescata a Fiona?"
  respuesta.textContent="Sherk y burro"
  incorrecta1.textContent="Encantador"
  incorrecta2.textContent="Gato"

}

