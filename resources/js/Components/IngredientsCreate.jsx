import React, { useEffect, useState } from 'react'
import { useForm } from '@inertiajs/inertia-react';

export default function IngredientsCreate({recipe, type}) {

    const { data, setData, post } = useForm({
        // form
        recipe_id : recipe.id,
        type_id   : type,
        item_id   : "",
        quantity  : "",
        unit      : ""
    });

    // api
    const [search, setSearch]     = useState("");
    const [error, setError]       = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems]       = useState([]);

    // form
    const [nowSearchTyping, setNowSearchTyping] = useState(false);

    /* item_list search api call */
    useEffect(()=>{
        fetch(`/api/item_search?word=${search}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                }
            )
    }, [search]);

    /* item_list api result write to html area */
    if(error){
        return <div>Error : {error.message}</div>;
    } else if(!isLoaded){
        return <div>Loading...</div>;
    } else {
        // Do Nothing...
    }

    /* add form, item_id into input area and state set */
    function handleItemInput(item){
        setData("item_id", item.id);
        setSearch(item.name);
        setNowSearchTyping(false);
    }

    function handleSubmit(e){
        e.preventDefault(e);
        post(route("ingredients.store"));
        setSearch("");
        setData("item_id","");
        setData("quantity","");
        setData("unit","");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>材料</div>
            {/* ingreient add line */}
            <div className="flex flex-row">
                <input
                    type="text"
                    className={nowSearchTyping? "text-blue-400": "text-black"}
                    id="item_name"
                    value={search}
                    placeholder="玉ねぎ"
                    onChange={(e)=>{
                        setSearch(e.target.value)
                        setNowSearchTyping(true)
                    }}
                />
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
                        +
                </button>
            </div>

            <div
                id="ingredient-select-area"
                className="flex flex-col"
            >
                <ul className="cursor-pointer">
                    {items.map((item, index)=>
                        <li
                            key={index}
                            id={item.id}
                            onClick={()=>handleItemInput(item)}>
                            {item.name}
                        </li>
                    )}
                </ul>
            </div>
        </form>
    )
}
