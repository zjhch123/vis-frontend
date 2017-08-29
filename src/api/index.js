const API_ROOT = 'http://139.129.132.196:4399/ics/'

export const SearchAPI = (condition, page, pageSize, dispatch) => (
  fetch(`${API_ROOT}query?q=${condition}&page=${page}&pageSize=${pageSize}`)
    .then(res => {
      if (res.status === 200) {
        return res.json()
      }
      throw new Error('search API error', res)
    })
)
