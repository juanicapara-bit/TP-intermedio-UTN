import { supabase } from './supabase.js'

async function guardarMensaje(formData) {
  const { data, error } = await supabase
    .from('contacto')
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

      // Capturamos todos los inputs y textareas del formulario en orden estricto
      const inputs = formulario.querySelectorAll('input, select, textarea')

      const datosFormulario = {
        nombre: inputs[0] ? inputs[0].value : '',
        apellido: inputs[1] ? inputs[1].value : '',
        email: inputs[2] ? inputs[2].value : '',
        telefono: inputs[3] ? inputs[3].value : '',
        razon: inputs[4] ? inputs[4].value : '',
        comentario: inputs[5] ? inputs[5].value : ''
      }

      console.log('Datos reales a enviar:', datosFormulario)

      // Validamos que al menos el nombre o email tengan datos antes de enviar
      if (!datosFormulario.nombre && !datosFormulario.email) {
        alert('Por favor completa los campos del formulario.')
        return
      }

      await guardarMensaje(datosFormulario)
      formulario.reset()
    })
  }
})