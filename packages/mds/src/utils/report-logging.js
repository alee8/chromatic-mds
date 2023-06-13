export function debugLog(message, data = EMPTY_STRING) {
  const timestamp = timeFormat(Date.now());

  /* eslint-disable-next-line no-console */
  console.log(`🔵  ${timestamp}  ${message}`, data);
}

export function reportError({
  error,
  severity = 'error',
}) {
  console.error(`Error ${error} with severity of ${severity}`);
}
