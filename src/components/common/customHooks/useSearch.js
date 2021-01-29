export default function useSearch(initialData, category, searchData) {
  if (searchData.length > 0) {
    const result = [];
    console.log('category', category);

    initialData.map(item => {
      console.log(item);
      if (item[category].includes(searchData)) {
        result.push(item);
      }
    });
    return result;
  } else {
    return initialData;
  }
}
