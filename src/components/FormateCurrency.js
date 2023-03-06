
const formatter = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
export const FormateCurrency = (number) => {
  return formatter.format(number);
};
