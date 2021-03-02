export default function useSearch(initialData, category, searchData) {
  if (searchData.length > 0) {
    const result = [];
    console.log('category', category);

    initialData.map(item => {
      console.log(item);
      if (item[category].toLowerCase().includes(searchData.toLowerCase())) {
        result.push(item);
      }
    });
    return result;
  } else {
    return initialData;
  }
}
