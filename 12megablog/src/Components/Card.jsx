import React from 'react';
import appwriteServices from '../Appwrite/configuration';
import { Link } from 'react-router-dom';


function Card({ $id, title, image }) {

    return (
        <Link to={`/post/${$id}`}>
            <div className=' w-full rounded-xl p-5 bg-yellow-400'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteServices.getFilePreview(image)} alt={title} className='rounded-xl' />
                </div>
                <h2 className='text=xl font-bold'>
                    {title}
                </h2>
            </div>

        </Link>
    )
}

export default Card