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
        Nombre: inputs[0].value,
        Apellido: inputs[1].value, // Con 'A' mayúscula
        Email: inputs[2].value,    // Con 'E' mayúscula
        Telefono: inputs[3].value, // Con 'T' mayúscula
        Razon: inputs[4].value,    // Con 'R' mayúscula
        Comentario: inputs[5].value // Con 'C' mayúscula
      }

      await guardarMensaje(datosFormulario)
      formulario.reset()
    })
  }
})