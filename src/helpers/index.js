export const generarId = () => {
  const random = Math.random().toString(36).substring(2)
  const fecha = Date.now().toString(36)

  return random + fecha
}

export const dateFormat = (date) => {
  const newDate = new Date(date)
  const optionsDate = {
    year: 'numeric',
    month: 'long',
    dat: '2-digit'
  }

  return newDate.toLocaleDateString('en-US', optionsDate)
}