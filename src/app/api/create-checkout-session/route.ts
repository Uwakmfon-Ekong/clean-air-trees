import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { amount, frequency } = await req.json();
     

    const safeAmount = Number(amount);

    if (!safeAmount || safeAmount < 1) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      );
    }

    if (!["monthly", "one-time"].includes(frequency)){
      return NextResponse.json(
        { error: "Invalid frequency" },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const mode =
      frequency === "monthly" ? "subscription" : "payment";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode,

      line_items: [
        frequency === "monthly"
          ? {
              price_data: {
                currency: "usd",
                product_data: {
                  name: "Monthly Tree Donation – TRCC Initiative",
                },
                unit_amount: Math.round(safeAmount * 100),
                recurring: {
                  interval: "month",
                },
              },
              quantity: 1,
            }
          : {
              price_data: {
                currency: "usd",
                product_data: {
                  name: "One-time Tree Donation – TRCC Initiative",
                },
                unit_amount: Math.round(safeAmount * 100),
              },
              quantity: 1,
            },
      ],

      success_url: `${baseUrl}/donate/success`,
      cancel_url: `${baseUrl}/donate`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe Error:", err.message);

    return NextResponse.json(
      { error: "Checkout session failed" },
      { status: 500 }
    );
  }
}