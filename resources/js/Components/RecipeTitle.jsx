import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

export default function RecipeTitle({recipe}) {

    const { data, setData } = useForm({
        name: recipe.name || "",
    });

    function handleSubmit(e){
        e.preventDefault();
        put(route("recipes.update", recipe.id));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={data.name}
                onChange={(e) =>setData("name", e.target.value)}
            />
            <button>Edit</button>
        </form>
    );
}
