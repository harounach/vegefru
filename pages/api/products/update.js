import nc from "next-connect";
import {
  updateProduct,
  productExist,
} from "../../../services/product/products";

const handler = nc();

handler.post(
  /**
   * @param {import("next").NextApiRequest} req
   * @param {import("next").NextApiResponse} res
   */
  async (req, res) => {
    // TODO: Update product in the database
    const product = {};
    product["_id"] = req.body._id;
    product["name"] = req.body.name;
    product["price"] = req.body.price;
    product["image"] = req.body.image;
    product["qty_unit"] = req.body.qty_unit;
    product["qty"] = req.body.qty;
    product["countInStock"] = req.body.countInStock;
    product["rating"] = req.body.rating;
    product["numReviews"] = req.body.numReviews;
    product["reviews"] = [];
    res.json({ message: "Product Updated Successfully", payload: { product } });
  }
);

export default handler;
