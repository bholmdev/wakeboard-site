

const Sponsor = ({ sponsor }) => {
    if (sponsor) {
        const { image, name, description, link } = sponsor

        return (
            <>  
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={image}
                        alt={name}
                        style={{ width: "150px" }}
                    />
                </a>
                <div className="m-4">
                    <h5 className="fw-bold">{name}</h5>
                    {description}
                    <div>
                        <br />
                        Website: <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
                    </div>
                </div>
            </>
        );
    }

    return null;
};

export default Sponsor;