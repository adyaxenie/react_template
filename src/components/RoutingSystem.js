import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const NotFound = () => <div>404 Page Not Found</div>;

const RoutingSystem = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} /> 

                </Routes>
            </div>
        </Router>
    );
}

export default RoutingSystem;
