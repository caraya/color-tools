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

// Register color spaces for parsing and converting
ColorSpace.register(sRGB); // sRGB can parse keywords and hex colors
ColorSpace.register(P3); // p3
ColorSpace.register(Lab); // LAB
ColorSpace.register(OKLab); // OKLab
ColorSpace.register(OKLCH);// OKLCH
ColorSpace.register(HWB); // hwb
ColorSpace.register(HSL); // hsl

const container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

/**
 * @name buildColorBlock
 * 
 * @param {string} color 
 * @param {string} space 
 */
export function buildColorBlock(color, space) {
  const theColor = serialize(convert(color, `${space}`))
  const box = document.createElement('div')
  box.classList.add('box', `box-${space}`);
  box.style.backgroundColor = theColor;
  const para = document.createElement('p')
  para.textContent = theColor;
  box.appendChild(para);
  container.appendChild(box);  
};

/**
 * @name processInput
 * @param {string} color 
 */
export function processInput(color) {
  // call buildColorBlock once for each
  // color space we want to show
  buildColorBlock(color, 'sRGB');
  buildColorBlock(color, 'P3');
  buildColorBlock(color, 'Lab');
  buildColorBlock(color, 'hwb');
  buildColorBlock(color, 'hsl');
  buildColorBlock(color, 'OKLab');
  buildColorBlock(color, 'OKLCH');
}