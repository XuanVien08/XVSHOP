export function filterSelectValue(
  value,
  filterValue,
  products,
  setProductsData
) {
  if (filterValue === value) {
    const filteredProducts = products.filter((item) => item.category === value);

    setProductsData(filteredProducts);
  }
}
