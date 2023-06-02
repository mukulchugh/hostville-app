import stripe from "stripe";

const stripeSecretKey = NEXT_STRIPE_SECRET_KEY;
const stripeClient = stripe(stripeSecretKey);

const createStripeSession = async (req, res) => {
  const { item } = req.body;

  const redirectURL = "http://localhost:3000/stripe_test";

  const transformedItem = {
    price_data: {
      currency: "inr",
      product_data: {
        images: [item.image],
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    description: item.description,
    quantity: item.quantity,
  };

  const session = await stripeClient.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [transformedItem],
    mode: "payment",
    success_url: `${redirectURL}?status=success`,
    cancel_url: `${redirectURL}?status=cancel`,
    metadata: {
      images: item.image,
    },
  });

  res.json({ id: session.id });
};

export default createStripeSession;
