import { Card, ListGroup } from "react-bootstrap";
import PropTypes from 'prop-types';
import imagen from 'src/components/assets/titanic.jpg'

const Tarjeta = ({ movie }) => {
    return (
        <Card className="bg-light p-2">
            <Card.Img
                variant="top"
                src={imagen}
                //src={movie.img.src}
                alt={movie.img.alt}
                width='200'
            />
            <Card.Body className="bg-light">
                <Card.Title>{`#${movie.ranking} - ${movie.title} (${movie.year})`}</Card.Title>
            </Card.Body>
            <ListGroup variant="flush" >
                <ListGroup.Item className="bg-light">{`Distributor: ${movie.distributor}`}</ListGroup.Item>
                <ListGroup.Item className="bg-light">{`Amount: ${movie.amount}`}</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

Tarjeta.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        distributor: PropTypes.string,
        year: PropTypes.number,
        amount: PropTypes.string,
        img: PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string
        }),
        ranking: PropTypes.number
    })
}

export default Tarjeta
