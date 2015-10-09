// Dependencies.
import marked from 'marked'

// Convert Markdown to HTML.
export default function (str) {
  return {
    __html: marked(str, {
      sanitize: true
    })
  }
}
