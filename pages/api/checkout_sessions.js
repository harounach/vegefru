import nc from "next-connect";
import Stripe from "stripe";
import cors from "cors";
const handler = nc();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

handler.use(cors()).post(
  /**
   * @param {import("next").NextApiRequest} req
   * @param {import("next").NextApiResponse} res
   */
  async (req, res) => {
    try {
      const itemsToBuy = req.body.order.items;

      const itemsToSell = itemsToBuy.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: 100,
          },
          quantity: item.qty,
        };
      });

      console.dir(itemsToSell);

      // create Checkout Sessions from body params
      const session = await stripe.checkout.sessions.create({
        line_items: itemsToSell,
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });

      res.json({ url: session.url });
      // res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  }
);

export default handler;
