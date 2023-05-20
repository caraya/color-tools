import '../css/style.css'
import {processInput} from './colorTools'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Color Tools Experiment</h1>

    <form id='colorForm'>
      <input type='text' id='colorInput' placeholder='Enter a color'>
      <input type='submit' value='Submit'>
      <input type='reset' value='Reset'>
    </form>
  

  </div>
`

function handleFormSubmit(event) {
  const color = document.getElementById('colorInput').value;
  processInput(color);
  event.preventDefault();
}

function handleFormReset() {
  const containers = document.querySelectorAll('.container')
  containers.forEach((container) => {
    if (container.innerHTML !== '') {
      container.innerHTML = '';
    }
  })
}

document.getElementById('colorForm').addEventListener('submit', handleFormSubmit);
document.getElementById('colorForm').addEventListener('reset', handleFormReset);
