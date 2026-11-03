import { supabase } from './supabase.js'

async function guardarMensaje(formData) {
  const { data, error } = await supabase
    .from('Contacto')
    .insert([formData])

  if (error) {
    console.error('Detalle del error de Supabase:', error)
    alert('Error al enviar: ' + error.message)
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

      const datosFormulario = {
        Nombre: document.getElementById('name').value,
        Apellido: document.getElementById('lastname').value,
        Email: document.getElementById('email').value,
        Telefono: document.getElementById('phone').value,
        razon: document.getElementById('reason').value, // <-- En minúscula para que coincida con la base de datos
        Comentario: document.getElementById('comment').value
      }

      console.log('Datos a enviar:', datosFormulario)
      await guardarMensaje(datosFormulario)
      formulario.reset()
    })
  }
})