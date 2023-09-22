export default function convertTimeToNumber(dateInput){
  const date = new Date(dateInput);
  const dateNum = date.getTime()
  return dateNum
}