import { supabase } from './supabase.js'

async function guardarMensaje(formData) {
  const { data, error } = await supabase
    .from('contacto') // <-- En minúscula exacto
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
        nombre: formulario.querySelector('[name="nombre"]')?.value || '',
        apellido: formulario.querySelector('[name="apellido"]')?.value || '',
        email: formulario.querySelector('[name="email"]')?.value || '',
        telefono: formulario.querySelector('[name="telefono"]')?.value || '',
        razon: formulario.querySelector('[name="razon"]')?.value || '',
        comentario: formulario.querySelector('[name="comentario"]')?.value || ''
      }

      console.log('Datos a enviar:', datosFormulario)
      await guardarMensaje(datosFormulario)
      formulario.reset()
    })
  }
})