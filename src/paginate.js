/** @format */

const pagination = (poems) => {
  const itemsPerPage = 10;
  const numOfPages = Math.ceil(poems.length / itemsPerPage);

  const newPoems = Array.from({ length: numOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return poems.slice(start, start + numOfPages);
  });
  return newPoems;
};
export default pagination;
