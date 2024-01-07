import axios from "axios";

export default axios.create ({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '46695dbbc8e24f98b31fc7e183a2702fx'
  }
})