function firstNonRepeatingLetter(s) {
  return [...s].filter((string) => {
    const escapeString = string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regExp = new RegExp(escapeString, 'gi')
      if ((s.match(regExp) || []).length === 1) {
        return string
      }
    }).shift() || ""
}
