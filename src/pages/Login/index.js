import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./_login.scss"


const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
});
const onSubmitHandler = (data) => {
    console.log({ data });
};

const Index = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    return (
        <div className="w-full max-w-xs login__page">
            <form onSubmit={handleSubmit(onSubmitHandler)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-3xl font-bold">LOGIN FORM</h2>
                <br />
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                >
                    Email
                </label>
                <input {...register("email")}
                    placeholder="email" type="email"
                    required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <p>{errors.email?.message}</p>
                <br />
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    {...register("password")}
                    placeholder="password"
                    type="password"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <p>{errors.password?.message}</p>
                <br />

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Index
