import React, { useState } from 'react'; 
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function DeleteBook() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const handleDeleteBook = () => {
        setLoading(true);
        axios.delete(`http://localhost:5000/books/${id}`).then((res) => {
            setLoading(false);
            navigate('/');
        }).catch((err) => {
            console.log(err);
            setLoading(false);
            alert('An error has occurred, please try again later.');
        });
    }
    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Delete Book</h1>
            {loading ? <Spinner /> : (
                <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto'>
                    <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
                    <button className='p-2 bg-red-600 m-8' onClick={handleDeleteBook}>Delete</button>
                </div>
            )}
        </div>
    );
};
