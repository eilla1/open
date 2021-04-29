import { useRouter } from "next/router";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
    const router = useRouter();
    const [search, update] = useState("");
    const submit = () => {
        router.push(`/search?q=${search}`);
    };
    return (
        <div className="m-2 w-auto flex flex-row rounded-full bg-white dark:bg-black dark:bg-opacity-25 focus-within:ring-4 focus-within:ring-white focus-within:ring-opacity-25">
            <input
                type="text"
                className="bg-transparent dark:placeholder-blue focus:outline-none hidden w-full sm:block p-2 px-4 text-xl font-rubik"
                placeholder="Search projects"
                autoComplete="off"
                name="search"
                value={search}
                onKeyUp={(evt) => {
                    if (evt.key === "Enter") {
                        submit();
                    }
                }}
                onChange={(evt) => update(evt.target.value)}
            />

            <button
                type="button"
                onClick={submit}
                className="absolute focus:outline-none top-26 rounded-full right-4 sm:relative p-4 sm:p-none">
                <BsSearch className="sm:hidden" size={30} />
                <BsSearch className="hidden sm:block" />
            </button>
        </div>
    );
}
