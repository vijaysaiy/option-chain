import axios from "axios";
export const bankNifty = async (req, res) => {
  try {
    let cookie = null;
    let url_oc = "https://www.nseindia.com/option-chain"
    let url = "https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY"
    let headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'accept-language': 'en,gu;q=0.9,hi;q=0.8', 'accept-encoding': 'gzip, deflate, br'
    }
    const response = await instance.get(url_oc);
    cookie = response.headers['set-cookie'].join();
    const instance = axios.create({
      baseURL: url_oc,
      headers: headers,
      cookie: cookie ? cookie : ""
    });
    // const bankNiftyData = await instance.get(url);
    return res.status(200).json(cookie);
  } catch (error) {
    console.log("ERROR IN BANKNIFTY ==>", error);
    return res.status(500).json(error);
  }
};

export const nifty = async (req, res) => {
  try {
    const niftyData = await axios.get(process.env.NIFTY_API);
    return res.json(niftyData.data);
  } catch (error) {
    console.log("ERROR IN NIFTY ==>", error);
  }
};
