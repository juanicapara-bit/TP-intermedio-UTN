// 1. Importas Supabase arriba del todo
import { supabase } from './supabase.js'

// 2. Función para guardar en la base de datos
async function guardarMensaje(formData) {
  const { data, error } = await supabase
    .from('Contacto') // Asegúrate de que tu tabla en Supabase se llame así
    .insert([formData])

  if (error) {
    console.error('Error al guardar:', error.message)
    alert('Hubo un error al enviar el mensaje.')
  } else {
    console.log('Mensaje enviado con éxito:', data)
    alert('¡Mensaje enviado con éxito!')
  }
}

// 3. Escuchamos cuando se envíe el formulario en el HTML
document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('form')

  if (formulario) {
    formulario.addEventListener('submit', async (e) => {
      e.preventDefault() // Evita que la página se recargue

      // Recolectamos los valores de los inputs según su posición o atributos
      const inputs = formulario.querySelectorAll('input, select, textarea')
      
      // Creamos un objeto ordenado con los datos
      const datosFormulario = {
        Nombre: inputs[0].value,    // Nombre
        Apellido: inputs[1].value,  // Apellido
        Email: inputs[2].value,     // Email
        Telefono: inputs[3].value,  // Teléfono
        Razon: inputs[4].value,     // Razón (select)
        Comentario: inputs[5].value // Comentario (textarea)
      }

      await guardarMensaje(datosFormulario)
      formulario.reset() // Limpia el formulario tras enviar
    })
  }
})