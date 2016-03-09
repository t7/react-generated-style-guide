// Dependencies.
import marked from 'marked'

// Convert Markdown to HTML.
function markdown (str) {
  return {
    __html: marked(str, {
      sanitize: true
    })
  }
}

// Expose function.
export default markdown
