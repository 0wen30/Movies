import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Tarjeta from './Tarjeta'

const List = () => {

    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);

    const traerData = async () => {

        const movies = await fetch('../../src/components/assets/data.json');
        const moviesJSON = await movies.json();

        console.log(moviesJSON)
        if (moviesJSON) {
            setdata(moviesJSON);
            setloading(false);
        }
    }

    useEffect(() => {
        traerData();
    }, []);

    return (
        <>
            {
                loading
                    ? <div>Loading...</div>
                    : (
                        <Row className="mt-2">
                            {data.map(movie => (
                                <Col key={movie.id} sm="2" className="mt-2">
                                    <Tarjeta key={movie.id} movie={movie} />
                                </Col>
                            ))}
                        </Row>
                    )
            }
        </>
    );
}

export default List
