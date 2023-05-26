import moment from 'moment';
import 'moment/locale/id';

export const initialUser = (user: String) => {
  const newString = user.split(/\s/);
  let acronym = (arr: String[]) => {
    return arr.reduce((response, word) => (response += word.slice(0, 1)), "");
  };

  if (newString.length > 2) {
    let arr = [];
    arr.push(newString[0], newString[1]);
    return acronym(arr);
  }

  return acronym(newString);
};


export const toCurrency = (
  amount: any,
  useCurrency = true,
  useComma = true
) => {
  return amount > 0
    ? `${useCurrency ? 'Rp ' : ''}${parseInt(amount, 10)
        .toString()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, useComma ? '$1,' : '$1.')}`
    : `${useCurrency ? 'Rp ' : ''}0`;
};

export const formatDate = (date:string, format:string) => {
  return moment(date).format(format);
}