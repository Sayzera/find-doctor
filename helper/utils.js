export const fileLoader = (path, def = true) => {
  // bir önceki scripti sil
  const scripts = document.querySelectorAll("script")

  scripts.forEach((script) => {
    if (script.src.includes(path) > -1) {
      script.remove()
    }
  })

  const script = document.createElement("script")
  script.src = path
  script.async = def
  document.head.appendChild(script)
}
