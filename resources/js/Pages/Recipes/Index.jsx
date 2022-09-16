import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';

export default function Index(props) {

    // const { posts } = usePage().props

    // function destroy(e) {
    //     if (confirm("Are you sure you want to delete this user?")) {
    //         Inertia.delete(route("posts.destroy", e.currentTarget.id));
    //     }
    // }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Posts</h2>}
        >
            <Head title="Posts" />

            <div> Yup
            </div>
        </AuthenticatedLayout>
    );
}
