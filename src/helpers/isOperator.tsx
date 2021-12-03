export default function isOperator(char: string): boolean {
  return isNaN(parseInt(char));
}
