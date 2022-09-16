import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, useForm } from '@inertiajs/inertia-react';


export default function Create(props) {

    const { data, setData, post } = useForm({
        name: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("recipes.store"));
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Recipe Create</h2>}
        >
        <Head title="Recipe Create" />

            <form onSubmit={handleSubmit}>
                <div>Recipe Title</div>
                <input 
                    type="text"
                    value={data.name}
                    onChange={(e) =>
                        setData("name", e.target.value)
                    } 
                />
                <button>Save</button>
            </form>
            
        </AuthenticatedLayout>
    );
}
