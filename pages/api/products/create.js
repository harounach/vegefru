import nc from "next-connect";
import {
  createProduct,
  productExist,
} from "../../../services/product/products";

const handler = nc();

handler.post(
  /**
   * @param {import("next").NextApiRequest} req
   * @param {import("next").NextApiResponse} res
   */
  async (req, res) => {
    // TODO: Add product to the database
    const product = {};
    product["name"] = req.body.name;
    product["price"] = req.body.price;
    product["image"] = req.body.image;
    product["qty_unit"] = req.body.qty_unit;
    product["qty"] = req.body.qty;
    product["countInStock"] = req.body.countInStock;
    product["rating"] = req.body.rating;
    product["numReviews"] = req.body.numReviews;
    product["reviews"] = [];
    res.json({ message: "Product Created Successfully", payload: { product } });
  }
);

export default handler;
