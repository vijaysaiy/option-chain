import axios from "axios";

export const bankNifty = async (req, res) => {
  try {
    const bankNiftyData = await axios.get(process.env.BANKNIFTY_API);
    // return res.json(bankNiftyData.data);
    return res.status(200).json(axios);
  } catch (error) {
    console.log("ERROR IN BANKNIFTY ==>", error);
    return res.status(500).json(error + process.env.BANKNIFTY_API);
  }
};

export const nifty = async (req, res) => {
  try {
    return res.status(200).json(process.env.BANKNIFTY_API);
  } catch (error) {
    console.log("ERROR IN NIFTY ==>", error);
    return res.status(500).json(error + process.env.BANKNIFTY_API);
  }
};