export default function createScriptTag(src, onloadCallback, onerrorCallback) {
  // If script tag has been created, simply attach onload to be notified when script has loaded
  // Create script tag and attach to document.body
  const scriptElem = document.createElement('script');

  // Add onload to scriptElem with provided callback
  scriptElem.addEventListener('load', onloadCallback);
  scriptElem.addEventListener('error', onerrorCallback);
  scriptElem.src = src;
  scriptElem.async = true; // @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-async
  document.body.appendChild(scriptElem);

  // Save the scriptContext for other instances of this component to set their own onload
  return scriptElem;
}
