import { useSelector } from "react-redux";
import { Col } from "reactstrap";
import Sponsor from "./Sponsor";
import { selectAllSponsors } from "./sponsorSlice";

const SponsorsList = () => {
    const sponsors = useSelector(selectAllSponsors);

    return (
        <Col className="mt-4">
            {sponsors.map(sponsor => {
                return (
                    <div
                        className="d-flex mb-5"
                        key={sponsor.id}
                    >
                        <Sponsor sponsor={sponsor} />
                    </div>
                );
            })}
        </Col>
    );
};

export default SponsorsList;