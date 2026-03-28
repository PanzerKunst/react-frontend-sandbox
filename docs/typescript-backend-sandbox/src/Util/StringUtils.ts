export function removePunctuation(text: string) {
  return text.replace(/\p{P}/gu, "")
}

export function removeAccents(text: string) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ")
}

export function getQueryStringFromArray(array: string[]): string | undefined {
  if (array.length === 0) {
    return undefined
  }

  return array.join(" ")
}
