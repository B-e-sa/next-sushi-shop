const Subscribe = () => {
    return (
        <div>
            <div></div>
            <div></div>
            <form action="" method="post">
                <p>subscribe to news</p>
                <input
                    type="text"
                    title="name"
                    name="name"
                />
                <input
                    type="email"
                    title="email"
                    name="email"
                />
                <button
                    className="bg-amber-200"
                    type="submit"
                    title="subscribe"
                >Subscribe</button>
            </form>
        </div>
    );
};

export default Subscribe;