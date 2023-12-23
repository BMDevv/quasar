export const scrollItens = (id_param: string) => {
    if (id_param) {
      const id = document.getElementById(id_param)
      if (id) id.scrollIntoView({ block: 'center', behavior: 'smooth' })
    }
  }
  