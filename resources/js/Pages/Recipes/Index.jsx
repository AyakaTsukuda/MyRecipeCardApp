import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';

export default function Index(props) {

    const { recipes } =  usePage().props;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Recipe</h2>}
        >
            <Head title="Recipe" />

            <div>
                <h2>Recipe Page</h2>
                <div>
                    {recipes && recipes.map((recipe, index)=>
                        <div key={index}>
                            <div>{recipe.name}</div>
                        </div>
                    )}
                </div>
                <a href={route('recipes.create')}>Recipe Create</a>
            </div>
        </AuthenticatedLayout>
    );
}
