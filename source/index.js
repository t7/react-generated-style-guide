// Dependencies.
import ReactDOM from 'react-dom'

// CSS.
import './css/reset.css'
import './css/global.css'

// Routes.
import routes from './routes'

// Insertion point.
const el = document.getElementById('app')

ReactDOM.render(routes, el)
