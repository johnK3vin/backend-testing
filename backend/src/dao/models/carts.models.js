import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';
const cartSchema = new Schema({
    products: {
        type: [
            {
                id_prod: {
                    type: Schema.Types.ObjectId,
                    ref: 'products',
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                }
            }
        ],
        default: function () {
            return [];
        }
    }
}
)

cartSchema.plugin(mongoosePaginate)

cartSchema.pre('findOne', function(){
    this.populate('products.id_prod')
})

export const cartModel = model("carts", cartSchema);
