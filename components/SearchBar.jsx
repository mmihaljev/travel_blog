import { getPosts } from "@/services";
import { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import { Router, useRouter } from "next/router";

const SearchBar = ({color}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [posts, setPosts] = useState([]);
    const dropdownRef = useRef(null);
    
    useEffect(() => {
        getPosts()
            .then((result) => setPosts(result));

        // Close suggestions dropdown when clicking outside of it
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                clearSuggestions();
            }
        };

        // Attach the event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Detach the event listener when component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);

    const router = useRouter();

    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Filter the posts based on the input query
        const filteredPosts = posts.filter(post => post.node.title.toLowerCase().includes(query.toLowerCase()));

        // Update the suggestions with the filtered posts
        setSuggestions(filteredPosts);
    };

    const clearSuggestions = () => {
        setSuggestions([]);
    };

    const handleSuggestionClick = (selectedPost, e) => {
        console.log(selectedPost.node.slug);
        router.push(`/post/${selectedPost.node.slug}`);
        clearSuggestions();
    };


    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <input
                className={"flex w-96 rounded-md border-2 border-" + (color) + " py-[9px] pl-10 text-sm placeholder:text-" + (color) + " bg-transparent text-" + (color) + " focus:border-pink-500 focus:outline-none"}
                placeholder="Pretražite lokacije"
                value={searchQuery}
                onChange={handleInputChange}
                onEmptied={clearSuggestions}
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={"w-6 h-6 absolute left-3 top-1/2 -translate-y-1/2 text-" + (color)}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
            </svg>
            {suggestions.length > 0 && (
                <div ref={dropdownRef} className="absolute top-full left-0 w-96 mt-2 bg-transparent rounded-md border border-gray-300 shadow-md">
                    <ul>
                        {suggestions.map((post) => (
                            <li
                                key={post.node.title}
                                className={"py-2 px-4 hover:text-pink-500 cursor-pointer text-" + (color)}
                                onClick={(e) => handleSuggestionClick(post, e)}>
                                    {post.node.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBar;