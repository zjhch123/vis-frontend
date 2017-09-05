const API_ROOT = 'http://139.129.132.196:4399/';

export const SearchAPI = (condition, page, pageSize, dispatch) => (
  fetch(`${API_ROOT}ics/query?q=${condition}&page=${page}&pageSize=${pageSize}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('search API error', res);
    })
)

export const GroupAPI = (condition, by, limit, order, page, pageSize) => (
  fetch(`${API_ROOT}ics/group2?by=${by}&limit=${limit || 7}&sort=${order || -1}&q=${condition}&page=${page || 1}&pageSize=${pageSize || 10}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('group API error', res);
    })
)

export const MapAPI = (condition) => (
  fetch(`${API_ROOT}map/coordinateArr?q=${condition}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('map API error', res);
    }).then(json => {
      let result = json.result[0];
      let data = [];
      for(let i = 0; i < result.length; i += 3) {
        let lat = result[i];
        let lng = result[i + 1];
        data.push([Number(lng), Number(lat)]);
      }
      return data;
    })
)

export const HostAPI = (condition) => (
  fetch(`${API_ROOT}ics/host?q=${condition}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('host API error', res);
    })
)




