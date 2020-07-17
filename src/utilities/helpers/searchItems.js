import _ from 'lodash';

const contains = (item, query) => {
  if (item.toLowerCase().includes(query)) {
    return true;
  }

  return false;
};

export const SearchItems = (list, limit = 20, query = '') => {
  return new Promise((resolve, reject) => {
    if (query.length === 0) {
      resolve(_.take(list, list.length));
    } else {
      const formattedQuery = query.toLowerCase();
      const results = _.filter(list, (user) => {
        return contains(user, formattedQuery);
      });
      resolve(_.take(results, limit));
    }
  });
};

export default SearchItems;
