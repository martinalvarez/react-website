import { useState, useEffect } from "react";
import Album from './Album';

function Albums() {
    const [albums, setAlbums] = useState([]);

    useEffect(()=> {
        async function fetchAlbums() {
            try {
                const response = await fetch('http://localhost:3001/albums');
                const data = await response.json();
                setAlbums(data);
            } catch (error) {
                setAlbums(error);
            }
        }

        fetchAlbums();
    }, []);

    return(
        <>
            {albums.map((album)=>{
                return (<Album key={album.id} album={album} />)
            })}
        </>
    );
}

export default Albums;