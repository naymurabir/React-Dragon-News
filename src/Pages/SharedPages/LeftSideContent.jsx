import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideContent = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("categories.json")
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="p-4">
            <h2 className="font-bold">All Categories</h2>
            <div className="p-4 space-y-4">
                {
                    categories.map(category => <Link to={`/category/${category.id}`} className="block font-semibold" key={category.id}>
                        <h2 className=" ">{category.name}</h2>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideContent;