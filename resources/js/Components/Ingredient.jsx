import React from 'react'
import { useForm } from '@inertiajs/inertia-react';

export default function Ingredient(ingredient) {

    const { data, setData, put } = useForm({
        recipe_id : ingredient.recipe_id,
        type_id   : ingredient.type_id,
        item_id   : ingredient.item_id || "",
        quantity  : ingredient.quantity || "",
        unit      : ingredient.unit || ""
    });

    return (
        <form>
            <div className="flex flex-row">
                <div>
                    Item Name !!
                </div>
                <input
                    type="text"
                    className="hidden"
                    name="item_id"
                    value={data.item_id}
                    onChange={(e)=>{
                        setData("item_id", e.target.value)
                    }}
                />
                <input
                    type="text"
                    className=""
                    name="quantity"
                    placeholder="1/2"
                    value={data.quantity}
                    onChange={(e)=>{
                        setData("quantity", e.target.value)
                    }}
                />
                <input
                    type="text"
                    className=""
                    name="unit"
                    placeholder="コ"
                    value={data.unit}
                    onChange={(e)=>{
                        setData("unit", e.target.value)
                    }}
                />
                <button
                    type="submit"
                    >
                        Edit
                </button>
                <button
                    type="submit"
                    >
                        Delete
                </button>
            </div>


        </form>
  )
}
