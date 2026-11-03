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

      // Capturamos usando el atributo 'name' del HTML para que nunca falle
      const datosFormulario = {
        Nombre: formulario.querySelector('[name="nombre"]')?.value || '',
        Apellido: formulario.querySelector('[name="apellido"]')?.value || '',
        Email: formulario.querySelector('[name="email"]')?.value || '',
        Telefono: formulario.querySelector('[name="telefono"]')?.value || '',
        razon: formulario.querySelector('[name="razon"]')?.value || '',
        Comentario: formulario.querySelector('[name="comentario"]')?.value || ''
      }

      console.log('Datos a enviar:', datosFormulario)
      await guardarMensaje(datosFormulario)
      formulario.reset()
    })
  }
})