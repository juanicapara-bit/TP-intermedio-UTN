// 1. Importas Supabase arriba del todo
import { supabase } from '../supabase.js'

// 2. Función para guardar en la base de datos
async function guardarMensaje(formData) {
  const { data, error } = await supabase
    .from('contacto') // Asegúrate de que tu tabla en Supabase se llame así
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
        nombre: inputs[0].value,    // Nombre
        apellido: inputs[1].value,  // Apellido
        email: inputs[2].value,     // Email
        telefono: inputs[3].value,  // Teléfono
        razon: inputs[4].value,     // Razón de contacto (select)
        comentario: inputs[5].value // Comentario (textarea)
      }

      await guardarMensaje(datosFormulario)
      formulario.reset() // Limpia el formulario tras enviar
    })
  }
})