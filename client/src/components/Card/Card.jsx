import { Link } from "react-router-dom";
import './Card.css';

export default function Card(props) {
    if (props.types[0].hasOwnProperty("type")) {
        return (
            <div className="card-container">
                <h2>{props.name.toUpperCase()}</h2>
                <Link to={`/detail/${props.id}`}>
                    <img src={props.image} alt={props.id}/>
                </Link>
                <h4>Tipos: {props.types.length === 1 ?
                    props.types[0].type.name :
                    `${props.types[0].type.name}, ${props.types[1].type.name}`}</h4>
            </div>
        )
    }
    else {
        return (
            <div className="card-container">
                <h2>{props.name.toUpperCase()}</h2>
                <Link to={`/detail/${props.id}`}>
                    <img src={props.image} alt={props.id}/>
                </Link>
                <h4>Tipos: {props.types.length === 1 ?
                    props.types[0].name :
                    `${props.types[0].name}, ${props.types[1].name}`}</h4>
            </div>
        )
    }
}