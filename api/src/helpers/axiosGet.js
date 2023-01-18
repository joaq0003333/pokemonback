const axios = require("axios")

const axiosGet = async (URL, parameter = undefined) => {
    if(!parameter){
          const infoApi = await axios.get(URL, {
              headers: { "Accept-Encoding": "null" },
            });
        return infoApi.data.results;
    }
    const infoApi = await axios.get(URL.concat(parameter), {
        headers: { "Accept-Encoding": "null" },
      });
    return infoApi;
}
module.exports = axiosGet;