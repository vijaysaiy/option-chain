import axios from "axios";

export const bankNifty = async (req, res) => {
  try {
    let url_oc = "https://www.nseindia.com/option-chain";
    let url = process.env.BANKNIFTY_API;
    let headers = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      "accept-language": "en,gu;q=0.9,hi;q=0.8",
      "accept-encoding": "gzip, deflate, br",
    };
    const instance = axios.create({
      baseURL: url_oc,
      headers: headers,
      cookie:
        "nsit=XmhYMG7WgIvHuRPLrdXud467; Max-Age=3600; Path=/; HttpsOnly; Secure; SameSite=None,nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTY1OTc4NzY1NywiZXhwIjoxNjU5NzkxMjU3fQ.-DvOVVMgZd1aghuNz_JF3Mbz6z83eiXMTJ_ZNj4hRVU;Max-Age=3600; Path=/; Expires=Sat, 06 Aug 2022 19:27:37 GMT; HttpsOnly; Secure; SameSite=None,ak_bmsc=B612E9C73BE171B245315A490B33DACB~000000000000000000000000000000~YAAQhXxBF4lJP0eCAQAAZ8INcxCYr7WVn+n1pSP7x8+N+cu3aqHcTNaGE8V/aAJ6fHhLKXvQdb9slFQpuGVh+8+EnBoETb4UCxNTSdTF2stg/+5bfu28uF7boLcz90ne8yDunmAuaqo3JxR6xDq4eJ+ggd16hWomgPtkBUCQLMlGiU15Y26A006cYf5c75km406bM4pqhOz5VFeQQrKDOOCTX8bTJLohZ5NSdTK3rCnmf6x2r/VffV+6SNZChaiBni9ZV2SSW0+sd8z6bdDzkeSmc6nG4Fm8LKYQuTet2Cjg387fo0Bz1Fdr27WK/Gu7vKjh2N9+njjAUMh6dd8swLJ18HO+JmC3mBfwJpeFYkZxs40o99EsedwogYQ6qw==;Domain=.nseindia.com; Path=/; Expires=Sat, 06 Aug 2022 20:27:37 GMT; Max-Age=7200; HttpsOnly,bm_mi=723699FB8A4940A0A4010A24B9B59B34~YAAQhXxBF4pJP0eCAQAAZ8INcxBUz65rEGkIKwUdmlsYxMbWVUg8tCb3F7PZom+lRrhpaWAJMXHD7B+k5ue9oAzBbcH30g4ffie4hFDA+yxmUkYRwJ1eG8GFpaXoxLcJMjW/Gpe7MjE+lJe3bKu6IeNqHYhVj8819aXrSctq55NvWVCuv4s5GbppPpTXkbmlFw2WrUYvVg/NkLFiWIgHFctaItUFJHEKDk2MfMtmErnpahM4xmagcjjeY9GfqKZEPaUc3hK12mOgZYsEmahLI7SNBCQ+XPGYXJU162ofbMZeS3hQ3UUKCgOr6A/8AKbS6U61LQw3iE9dNYk=~1;Domain=.nseindia.com; Path=/; Expires=Sat, 06 Aug 2022 18:27:37 GMT; Max-Age=0; Secure",
    });
    const bankNiftyData = await instance.get(url);
    return res.status(200).json(bankNiftyData.data);
  } catch (error) {
    console.log("ERROR IN BANKNIFTY ==>", error);
    return res.status(500).json(error);
  }
};
//https://dev.to/shahstavan/nse-option-chain-data-using-python-4fe5 - check
export const nifty = async (req, res) => {
  try {
    const niftyData = await axios.get(process.env.NIFTY_API);
    return res.json(niftyData.data);
  } catch (error) {
    console.log("ERROR IN NIFTY ==>", error);
  }
};
