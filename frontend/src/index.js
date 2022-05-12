import store from './redux/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './App'
// import App2 from './pages/artSearch/App2'

ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <App2 /> */}
  </Provider>,
  document.getElementById('root')
)
