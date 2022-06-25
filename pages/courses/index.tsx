import React, { useState } from 'react'
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import dynamic from 'next/dynamic';
import Link from 'next/link';
//const Courses = dynamic(() => import('../ui/components/Courses/Courses'));
const getPosts = async () => {
    var posts = await [{ page: 1 }, { page: 2 }, { page: 2 }, { page: 3 }, { page: 4 }, { page: 5 }];
    return posts;
}


const CoursesPage = () => {
    const [posts, updateData] = useState<any>();
    React.useEffect(() => {
        console.log('Courses page rendered')
        const getData = async () => {
            const resp = await getPosts();

            updateData(resp);
        }
        getData();
    }, [])

    return (
        <>
            test
            {posts?.map((post: any) => (
                <Link key={post.page} href={`/courses/course/${post.page}`}> link</Link>
            ))}
            {/* <Router basename="/courses">
                <div>
                    <ul>
                        <li>
                            <Link to="/list">Courses</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>

                    <Routes>
                        <Route path="/list" element={<Courses />}>

                        </Route>
                        <Route path="/" element={<h2>Home</h2>}>

                        </Route>
                    </Routes>
                </div>
            </Router> */}

        </>
    )
}

export default CoursesPage;