import axios from "axios";

export const bankNifty = async (req, res) => {
  try {
    const bankNiftyData = await axios.get(process.env.BANKNIFTY_API);
    // return res.json(bankNiftyData.data);
    return res.status(200).json("tru7e");
  } catch (error) {
    console.log("ERROR IN BANKNIFTY ==>", error);
  }
};

export const nifty = async (req, res) => {
  try {
    const niftyData = await axios.get(process.env.NIFTY_API);
    return res.status(200).json(niftyData.data);
  } catch (error) {
    console.log("ERROR IN NIFTY ==>", error);
  }
};