import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RecipeTitle from '@/Components/RecipeTitle';
import { Head, usePage } from '@inertiajs/inertia-react';

export default function Edit(props) {

    const { recipe } = usePage().props;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Recipe Edit</h2>}
        >
        <Head title="Recipe Edit" />


        <RecipeTitle recipe={recipe} />


        </AuthenticatedLayout>
    )
}

