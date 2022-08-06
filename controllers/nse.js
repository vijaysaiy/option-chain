import axios from "axios";

export const bankNifty = async (req, res) => {
  try {
    let url_oc = "https://www.nseindia.com/option-chain"
    let url = "https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY"
    let headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'accept-language': 'en,gu;q=0.9,hi;q=0.8', 'accept-encoding': 'gzip, deflate, br'
    }
    const instance = axios.create({
      baseURL: url_oc,
      headers: headers,
      cookie: `nsit=XmhYMG7WgIvHuRPLrdXud467; Max-Age=3600; Path=/; HttpsOnly; Secure; SameSite=None,
      nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTY1OTc4NzY1NywiZXhwIjoxNjU5NzkxMjU3fQ.-DvOVVMgZd1aghuNz_JF3Mbz6z83eiXMTJ_ZNj4hRVU;
       `
    });
    const bankNiftyData = await instance.get(url);
    return res.status(200).json(bankNiftyData.data);
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
