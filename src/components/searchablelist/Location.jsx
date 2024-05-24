export default function Location({ location }) {
    return (
        <div className="place">
            <img src={location.image} alt={location.title} />
            <div>
                <h2>{location.title}</h2>
                <p>{location.description}</p>
            </div>
        </div>
    );
}
