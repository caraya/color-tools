import '../css/style.css'
import {displayContrast} from './colorTools'

document.querySelector('#app').innerHTML = `
<h1>Color Contrast Experiment</h1>

<form id='colorForm' method='get'>
  <input type='text' id='fgColor' placeholder='Text Color'>
  <input type='text' id='bgColor' placeholder='Background Text'>
  <input type='submit' id='submit' value='Submit'>
  <input type='reset' id='reset' value='Reset'>
</form>
</div>
`

function handleFormSubmit(e) {
  e.preventDefault();

  const textColor = document.getElementById('fgColor').value;
  const backgroundColor = document.getElementById('bgColor').value;

  displayContrast(textColor, backgroundColor);

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
