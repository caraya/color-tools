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

function handleFormSubmit(e) {
  const color = document.getElementById('colorInput').value;
  processInput(color);
  e.preventDefault();
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

const colorInput = document.getElementById('colorInput');
colorInput.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
    handleFormSubmit;
  }
});