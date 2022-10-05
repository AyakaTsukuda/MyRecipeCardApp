import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, useForm, usePage } from '@inertiajs/inertia-react';
import { v4 as uuidv4 } from 'uuid';


export default function Create(props) {

    // api
    const [error, setError]       = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems]       = useState([]);
    const [search, setSearch]     = useState("");
    // form data
    const { recipe }                    = usePage().props;
    const { data, setData, post, get }  = useForm({});
    const [item_id, setItemId]          = useState("");
    const [quantity, setQuantity]       = useState("");
    const [unit, setUnit]               = useState("");
    const [ingredients, setIngredients] = useState([]);
    // form control
    const [nowSearchTyping, setNowSearchTyping]     = useState(false);
    // const [addLineInsertable, setAddLineInsertable] = useState(false);

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
        setItemId(item.id);
        setSearch(item.name);
        setNowSearchTyping(false);
    }

    /* line add btn change status */
    function addBtnChangeStatus(){
        // if(item_id=="" || quantity=="" || unit==""){
        //     setAddLineInsertable(false);
        // } else {
        //     setAddLineInsertable(true);
        // }
    }

    /* line add btn on click action */
    function handleAddBtnClick(){
        const add_item = {
            key       : uuidv4(),
            recipe_id : recipe.id,
            item_name : search,
            item_id   : item_id,
            type_id   : 1,
            quantity  : quantity,
            unit      : unit
        }
        ingredients.unshift(add_item);
        setSearch("");
        setItemId("");
        setQuantity("");
        setUnit("");
    }

    /* line Delete btn on click action */
    function handleItemDelete(del_item_key){
        let list = [];
        ingredients.map((item) => {
            item.key !== del_item_key && list.push(item);
        });
        setIngredients(list);
    }

    /* form submit action */
    function handleSubmit(e) {
        e.preventDefault();
        // setData(ingredients);
        // post(route("ingredients.store"));
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Recipe Create</h2>}
        >
        <Head title="Recipe Create" />

            {/* titel area */}
            <div>
                <div>Recipe Title</div>
                <div>{recipe.name}</div>
                <button>Edit</button>
            </div>

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
                        setSearch( e.target.value)
                        setNowSearchTyping(true)
                    }}
                />
                <input
                    type="text"
                    className="hidden"
                    name="item_id"
                    value={item_id}
                    onChange={(e)=>{
                        setItemId(e.target.value)
                        addBtnChangeStatus()
                    }}
                />
                <input
                    type="text"
                    className=""
                    name="quantity"
                    placeholder="1/2"
                    value={quantity}
                    onChange={(e)=>{
                        setQuantity(e.target.value)
                        addBtnChangeStatus()
                    }}
                />
                <input
                    type="text"
                    className=""
                    name="unit"
                    placeholder="コ"
                    value={unit}
                    onChange={(e)=>{
                        setUnit(e.target.value)
                        addBtnChangeStatus()
                    }}
                />
                <button
                    type="button"
                    // className={addLineInsertable? "text-black": "text-blue-400"}
                    // disabled={addLineInsertable? false: true}
                    onClick={handleAddBtnClick}
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

            {/* ingredient list line */}
            <form onSubmit={handleSubmit}>

                {ingredients.map((item, index)=>
                    <div
                        key={item.key}
                        className="flex flex-row">
                            <input
                                value={item.item_name}
                                readOnly
                            />
                            <input
                                className="hidden"
                                name="item_id[]"
                                value={item.item_id}
                                readOnly
                            />
                            <input
                                name="quantity[]"
                                value={item.quantity}
                                readOnly
                            />
                            <input
                                name="unit[]"
                                value={item.unit}
                                readOnly
                            />
                            <button
                                type="button"
                                onClick={()=>handleItemDelete(item.key)}>
                                    -
                            </button>
                            <input type="hidden" name="recipe_id[]" value={recipe.id}></input>
                            <input type="hidden" name="type_id[]" value="1"/>
                    </div>
                )}

                <button type="submit">Save</button>
            </form>

        </AuthenticatedLayout>
    );
}
