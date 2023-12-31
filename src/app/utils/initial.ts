export function currencyFormat(num: string | number): string {
 
   return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(+num);
}