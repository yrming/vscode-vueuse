export function renderMarkdown(markdownText = '') {
  const htmlText = markdownText
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
    .replace(/\*(.*)\*/gim, '<i>$1</i>')
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
    .replace(
      /\[(.*?)\]\((.*?)\)/gim,
      "<a style='color:#44bd87;text-decoration:none;' href='$2'>$1</a>"
    )
    .replace(/`(.*?)`/gim, '<code>$1</code>')
    .replace(/\n$/gim, '<br />')

  return htmlText.trim()
}

export function renderCommitMessage(msg: string) {
  return renderMarkdown(msg).replace(
    /\#([0-9]+)/g,
    "<a href='https://github.com/vueuse/vueuse/issues/$1'>#$1</a>"
  )
}

export function styledName(name: string) {
  if (name.startsWith('use')) return `<span style="opacity: 0.7">use</span>${name.slice(3)}`
  if (name.startsWith('try')) return `<span style="opacity: 0.7">try</span>${name.slice(3)}`
  if (name.startsWith('on')) return `<span style="opacity: 0.7">on</span>${name.slice(2)}`
  return name
}
