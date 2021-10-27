import nc from "next-connect";
import {
  deleteProduct,
  productExist,
} from "../../../services/product/products";

const handler = nc();

handler.post(
  /**
   * @param {import("next").NextApiRequest} req
   * @param {import("next").NextApiResponse} res
   */
  async (req, res) => {
    // TODO: Remove product from the database
    const productId = req.body._id;
    res.json({
      message: "Product Removed Successfully",
      payload: { productId },
    });
  }
);

export default handler;
