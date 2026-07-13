import React from "react";

function Header() {
    const [count, setCount] = React.useState(0);

    return (
        <header>
            <h1>Hemangi Parmar</h1>
            <p>Welcome to My Portfolio</p>
            <p>This is a simple header component.</p>
            <button onClick={() => setCount(count + 1)}>
                Count is {count}
            </button>
        </header>
    );
}

export default Header;