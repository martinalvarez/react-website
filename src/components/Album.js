function Album({ album }) {
    const { cover, name, year } = album;

    return(
        <div>
            <h3>{name}</h3>
            <h4>{year}</h4>
            <img src={cover} title={name} alt={name} width={200} height={200} />
        </div>
    );
}

export default Album;