const compress = (a, b = true) => {
	if (typeof a !== 'string' && typeof a !== 'String') {
	  throw new Error('InvalidType');
	}
  
	if (a === '') {
	  return '';
	}
  
	const isCompressedFormat = /[0-9]/.test(a);
  
	if (b && a.length > 1) {
	  const chars = a.split('');
	  const compressed = [];
	  let currentChar = chars[0];
	  let count = 1;
  
	  for (let i = 1; i < chars.length; i++) {
		if (chars[i] === currentChar) {
		  count++;
		} else {
		  compressed.push(currentChar + count.toString());
		  currentChar = chars[i];
		  count = 1;
		}
	  }
  
	  compressed.push(currentChar + count.toString());
	  return compressed.join('');
	} else if (!b) {
	  if (!isCompressedFormat) {
		return a;
	  }
  
	  const compressedChars = a.split('');
	  const decompressedChars = [];
	  let currentChar = compressedChars[0];
	  let count = parseInt(compressedChars[1]);
  
	  for (let i = 2; i < compressedChars.length; i++) {
		if (i % 2 === 0) {
		  decompressedChars.push(currentChar.repeat(count));
		  currentChar = compressedChars[i];
		  count = parseInt(compressedChars[i + 1]);
		}
	  }
  
	  decompressedChars.push(currentChar.repeat(count));
	  return decompressedChars.join('');
	} else {
	  return a;
	}
  };
  
  
  module.exports = compress;
  