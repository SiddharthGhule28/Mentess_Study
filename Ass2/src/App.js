import { Counter, Login, Rating, Register } from './components'

function App() {
  return (
    <div className='App'>
      {/* Create a login component to get email address and password from user. The component should contain a login button. The login button should print the user credentials on console. */}
      {/* <Login /> */}

      {/* Create a registration component to get the user details. The component should contain a register button. The button should print the user credentials on console. */}
      {/* <Register /> */}

      {/* Create a counter component with two buttons and one label. One button will increment while another button will decrement the counter. The label should show the current value of counter. */}
      {/* <Counter /> */}

      {/* Create a component which will show the rating using star images. The component should receive a property rating which should control number of stars to be shown. */}
      <Rating />

    </div>
  )
}

export default App
