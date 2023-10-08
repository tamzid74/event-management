import Navbar from "../pages/Navbar";

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-between items-center">
                <h1 className="text-7xl font-bold">404 not Found</h1>
            </div>
        </div>
    );
};

export default Error;