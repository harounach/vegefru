import { Order } from "@/app/lib/definitions";
import { ordersData } from "../../data";
import dbConnect from "@/app/lib/database/dbConnect";
import { OrderModel } from "@/app/lib/database/models";
import { HydratedDocument } from "mongoose";

// Number of items per page
const LIMIT = 8;

/*
 * Fetch single order
 */
export async function fetchSingleOrder(id: string) {
  try {
    await dbConnect();
    const rawOrder = (await OrderModel.findById<HydratedDocument<Order>>(id)
      .populate("items.product")
      .lean()
      .exec()) as Order | null;
    if (!rawOrder) {
      return null;
    }

    const singleOrder = {
      ...rawOrder,
      _id: rawOrder._id.toString(),
      createdAt: rawOrder.createdAt.toString(),
    };

    // const singleOrder = ordersData.find((order) => order._id === id);

    return singleOrder as Order;
  } catch (err) {
    console.error("Database Error:", err);
  }
}

export async function fetchPagedOrders(currentPage: number) {
  try {
    await dbConnect();
    const rawOrders = (await OrderModel.find()
      .sort({ createdAt: -1 })
      .limit(LIMIT * 1)
      .skip((currentPage - 1) * LIMIT)
      .lean()
      .exec()) as Array<Order>;

    const orders = rawOrders.map((order) => {
      return {
        ...order,
        _id: order._id.toString(),
        createdAt: order.createdAt.toString(),
      };
    });

    const count = await OrderModel.countDocuments();
    const totalPages = Math.ceil(count / LIMIT);

    // const orders = ordersData;
    // const totalPages = Math.ceil(ordersData.length / LIMIT);

    const result = {
      orders,
      totalPages,
    };

    return result as { orders: Array<Order>; totalPages: number };
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch orders");
  }
}

export async function fetchPagedUserOrders(
  userId: string,
  currentPage: number,
) {
  try {
    await dbConnect();
    const rawOrders = (await OrderModel.find({ user: userId })
      .sort({ createdAt: -1 })
      .limit(LIMIT * 1)
      .skip((currentPage - 1) * LIMIT)
      .lean()
      .exec()) as Array<Order>;

    const orders = rawOrders.map((order) => {
      return {
        ...order,
        _id: order._id.toString(),
        createdAt: order.createdAt.toString(),
      };
    });

    const count = await OrderModel.countDocuments({ user: userId });
    const totalPages = Math.ceil(count / LIMIT);

    // const orders = ordersData;
    // const totalPages = Math.ceil(ordersData.length / LIMIT);

    const result = {
      orders,
      totalPages,
    };

    return result as { orders: Array<Order>; totalPages: number };
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch orders");
  }
}

export async function fetchLatestOrders() {
  try {
    await dbConnect();
    const rawOrders = (await OrderModel.find()
      .sort({ createdAt: -1 })
      .limit(8)
      .lean()
      .exec()) as Array<Order>;

    const orders = rawOrders.map((order) => {
      return {
        ...order,
        _id: order._id.toString(),
        createdAt: order.createdAt.toString(),
      };
    });

    // const orders = ordersData.slice(0, 8);

    return orders as Order[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch orders");
  }
}
