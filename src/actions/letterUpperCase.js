export default function letterUpperCase(value, setvalue) {
  const letter = (value[0] || '').toUpperCase();
  const newValue = letter + value.substr(1);
  setvalue(newValue);
}
