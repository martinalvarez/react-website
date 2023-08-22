import { useEffect, useState } from "react";

function Biography() {
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function fetchBiography() {
            try {
                const response = await fetch('http://localhost:3001/biography');
                const data = await response.json();
                setBio(data.biography);
            } catch(error) {
                setBio('An error has been ocurred.');
            }
            setLoading(false);
        }

        fetchBiography();
    }, []);


    return(
        <>
            <h1>Biography</h1>
            {loading ? <p>Loading.......</p> : <p>{bio}</p>}
            
        </>
    );
}

export default Biography;