const StaticComponent = () => {
    const items =  ["Apple", "Banana", "Orange"];
    return (
        <ul class="list-disc">
            {
                items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    )
};

export default StaticComponent;
