// Colorjs.io function imports 
// to enable tree shaking later
import {
  to as convert,
  serialize,
  ColorSpace,
  sRGB,
  P3,
  Lab,
  OKLab,
  OKLCH,
  HWB,
  HSL,
} from "colorjs.io/fn";

import Color from "colorjs.io";

// Register color spaces for parsing and converting
ColorSpace.register(sRGB); // sRGB can parse keywords and hex colors
ColorSpace.register(P3); // p3
ColorSpace.register(Lab); // LAB
ColorSpace.register(OKLab); // OKLab
ColorSpace.register(OKLCH);// OKLCH
ColorSpace.register(HWB); // hwb
ColorSpace.register(HSL); // hsl

// Creates the outermost container for the content we will add
const container = document.createElement('div')
container.setAttribute('id', 'container')
container.setAttribute('class', 'container')
document.body.appendChild(container)

/**
 *
 *
 * @param {string} fgColor - Foreground/text color
 * @param {string} bgColor - Background color
 * @param {string} contrastAlgo - The contrast algorithm we want to use. Must be supported by Color.js
 */
function calculateContrast (fgColor, bgColor, contrastAlgo) {
  // Convert the strings into valid Color.js colors
  const foreground = new Color(serialize(convert(fgColor, 'sRGB')))
  const background = new Color(serialize(convert(bgColor, 'sRGB')))

  // calculates the contrast with the algorithm specificied in contrast
  const contrast = foreground.contrast(background, `${contrastAlgo}`)
  console.log(`The ${contrastAlgo} value is ${contrast}`)

  // Without the return the value is undefined
  return contrast
}

/**
 *
 *
 * @param {string} fgColor - Foreground/text color
 * @param {string} bgColor - Background color
 */
function buildContrastBlock(fgColor, bgColor) {
  // const foreground = new Color(serialize(convert(fgColor, 'OKLCH')))
  // const background = new Color(serialize(convert(bgColor, 'OKLCH')))

  const contrastBlock = document.createElement('div');
  contrastBlock.style.width = "400px"
  contrastBlock.style.height = "200px"
  contrastBlock.style.border = "2px solid black"
  contrastBlock.style.backgroundColor = bgColor;

  const blockContent = document.createElement('p')
  const blockContentText = document.createTextNode(fgColor.toString())
  blockContent.style.fontSize = "3rem";
  blockContent.style.color = fgColor;
  blockContent.style.align = "center";
  blockContent.appendChild(blockContentText)

  contrastBlock.appendChild(blockContent)

  container.appendChild(contrastBlock)
}

/**
 *
 *
 * @param {string} fgColor - Foreground/text color
 * @param {string} bgColor - Background color
 */
function buildInverseContrastBlock(fgColor, bgColor) {
  // const foreground = new Color(serialize(convert(fgColor, 'OKLCH')))
  // const background = new Color(serialize(convert(bgColor, 'OKLCH')))

  const contrastBlock = document.createElement('div');
  contrastBlock.style.width = "400px"
  contrastBlock.style.height = "200px"
  contrastBlock.style.border = "2px solid black"
  contrastBlock.style.backgroundColor = fgColor;

  const blockContent = document.createElement('p')
  const blockContentText = document.createTextNode(bgColor.toString())
  blockContent.style.fontSize = "3rem";
  blockContent.style.color = bgColor;
  blockContent.style.align = "center";
  blockContent.appendChild(blockContentText)

  contrastBlock.appendChild(blockContent)

  container.appendChild(contrastBlock)
}

/**
 *
 *
 * @param {string} fgColor - Foreground/text color
 * @param {string} bgColor - Background color
 */
function passesWcagAAContrast(fgColor, bgColor) {
  let wcagContainer = document.createElement('div')
  wcagContainer.setAttribute('class', 'wcag-container container')

  let wcagContrast = calculateContrast(fgColor, bgColor, 'wcag21')
  let paraAANormal = document.createElement('p')
  let paraAAContent = '';
  let paraAALarge = document.createElement('p')
  let paraAALargeContent

  if (wcagContrast < 4.5) {
    console.log(wcagContrast)
    paraAAContent = document.createTextNode(`${wcagContrast} doesn't pass AA small text criteria`)
  } else {
    paraAAContent = document.createTextNode(`${wcagContrast} passes AA small text criteria`)
  }

  paraAANormal.appendChild(paraAAContent)
  wcagContainer.appendChild(paraAANormal);
  container.appendChild(wcagContainer);

  if (wcagContrast < 3.0) {
    paraAALargeContent = document.createTextNode(`${wcagContrast} doesn't pass AA large text criteria`)
  } else {
    paraAALargeContent = document.createTextNode(`${wcagContrast} passes AA large text criteria`)
  }

  paraAALarge.appendChild(paraAALargeContent)
  wcagContainer.appendChild(paraAALarge);
  container.appendChild(wcagContainer);
}

/**
 *
 *
 * @param {string} fgColor - Foreground/text color
 * @param {string} bgColor - Background color
 */
function passesWcagAAAContrast(fgColor, bgColor) {
  let wcagContainer = document.createElement('div')
  wcagContainer.setAttribute('class', 'wcag-container container')

  let wcagContrast = calculateContrast(fgColor, bgColor, 'wcag21')
  let paraAAANormal = document.createElement('p')
  let paraAAAContent = '';
  let paraAAALarge = document.createElement('p')
  let paraAAALargeContent

  if (wcagContrast < 7) {
    console.log(wcagContrast)
    paraAAAContent = document.createTextNode(`${wcagContrast} doesn't pass AAA small text criteria`)
  } else {
    paraAAAContent = document.createTextNode(`${wcagContrast} passes AA small text criteria`)
  }

  paraAAANormal.appendChild(paraAAAContent)
  wcagContainer.appendChild(paraAAANormal);
  container.appendChild(wcagContainer);

  if (wcagContrast < 4.5) {
    paraAAALargeContent = document.createTextNode(`${wcagContrast} doesn't pass AA large text criteria`)
  } else {
    paraAAALargeContent = document.createTextNode(`${wcagContrast} passes AA large text criteria`)
  }

  paraAAALarge.appendChild(paraAAALargeContent)
  wcagContainer.appendChild(paraAAALarge);
  container.appendChild(wcagContainer);
}

/**
 *
 *
 * @export
 * @param {string} fgColor - Foreground/text color
 * @param {string} bgColor - Background color
 */
export function displayContrast(fgColor, bgColor) {
  const contrastTitle = document.createElement('h2')
  const contrastTitleContent = document.createTextNode("How the contrast looks");
  contrastTitle.appendChild(contrastTitleContent);
  container.appendChild(contrastTitle);

  buildContrastBlock(fgColor, bgColor)
  // buildInverseContrastBlock(fgColor, bgColor)

  const wcagTitle = document.createElement('h2')
  const wcagTitleContent = document.createTextNode("WCAG 2.1 Tests");
  wcagTitle.appendChild(wcagTitleContent);
  container.appendChild(wcagTitle);

  passesWcagAAContrast(fgColor, bgColor);
  passesWcagAAAContrast(fgColor, bgColor);
} 