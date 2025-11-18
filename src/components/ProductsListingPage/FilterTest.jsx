import { useState } from "react";


const FilterTest = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const handleCheckbox = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;

        if (checked) {
            setSelectedItems((prev) => [...prev, value]);
        }
        else {
            setSelectedItems((prev) => prev.filter((item) => item !== value));
        }
    };

    return (
        <div className="flex flex-col gap-4">
            {/* smartPhone */}
            <div className="flex gap-[20px] items-center">
                <input
                    type="checkbox"
                    id="smartPhone"
                    value="smartPhone"
                    onChange={handleCheckbox}
                    checked={selectedItems.includes("smartPhone")}
                />
                <label htmlFor="smartPhone">Smart Phone</label>
            </div>

            {/* watch */}
            <div className="flex gap-[20px] items-center">
                <input
                    type="checkbox"
                    id="watch"
                    value="watch"
                    onChange={handleCheckbox}
                    checked={selectedItems.includes("watch")}
                />
                <label htmlFor="watch">Watch</label>
            </div>

            {/* powerBank */}
            <div className="flex gap-[20px] items-center">
                <input
                    type="checkbox"
                    id="powerBank"
                    value="powerBank"
                    onChange={handleCheckbox}
                    checked={selectedItems.includes("powerBank")}
                />
                <label htmlFor="powerBank">Power Bank</label>
            </div>

            {/* Debug: Show selected */}
            <pre>{JSON.stringify(selectedItems, null, 2)}</pre>
        </div>
    )
}

export default FilterTest;
