import { supabase } from './supabase.js'

async function guardarMensaje(formData) {
  const { data, error } = await supabase
    .from('Contacto')
    .insert([formData])

  if (error) {
    console.error('Error al guardar:', error.message)
    alert('Hubo un error al enviar el mensaje.')
  } else {
    console.log('Mensaje enviado con éxito:', data)
    alert('¡Mensaje enviado con éxito!')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('form')

  if (formulario) {
    formulario.addEventListener('submit', async (e) => {
      e.preventDefault()

      const inputs = formulario.querySelectorAll('input, select, textarea')
      
      const datosFormulario = {
        nombre: inputs[0].value,
        apellido: inputs[1].value,
        email: inputs[2].value,
        telefono: inputs[3].value,
        razon: inputs[4].value,
        comentario: inputs[5].value
      }

      await guardarMensaje(datosFormulario)
      formulario.reset()
    })
  }
})