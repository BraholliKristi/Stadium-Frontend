import {Link} from "react-router-dom";
import {Card, Col} from "react-bootstrap";
import CardImage from "../../public/img/bck1.jpg";


export default function EventCard({data}){
    return(
        <Link to={"/tickets/"+data.id}>
            <Col>
                <Card>
                    <Card.Img variant="top" src={CardImage} />
                    <Card.Body >
                    <Card.Text>
                           {data.date}
                        </Card.Text>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                           {data.type}
                        </Card.Text>
                        
                        <Card.Text>
                           {data.organizer}
                        </Card.Text>
                    <Card.Text>
                           {data.description}
                        </Card.Text>
                  
                    </Card.Body>
                </Card>
            </Col>
        </Link>
    );
}