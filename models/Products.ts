import mongoose,{Schema,model,models} from "mongoose";

const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: String,
  thumbnail: String,
  stock: Number,
}, { timestamps: true });

export const ProductMode=models.Product || model("Product",ProductSchema)

