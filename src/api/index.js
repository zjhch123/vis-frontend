const API_ROOT = 'http://139.129.132.196:4399/ics/';

export const SearchAPI = (condition, page, pageSize, dispatch) => (
  fetch(`${API_ROOT}query?q=${condition}&page=${page}&pageSize=${pageSize}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('search API error', res);
    })
)

export const GroupAPI = (condition, by, limit, order, page, pageSize) => (
  fetch(`${API_ROOT}group?by=${by}&limit=${limit || 7}&sort=${order || -1}&q=${condition}&page=${page || 1}&pageSize=${pageSize || 10}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('group API error', res);
    })
)