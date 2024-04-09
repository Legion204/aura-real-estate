import { FaArrowRightLong } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const EstateCard = ({estate}) => {
    const{image,estate_title,description,price,facilities,id}=estate;
    return (
        <div className="card w-96 md:w-[480px] rounded-none bg-base-100 shadow-xl justify-self-center">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <ul className="flex gap-2">
                    {
                        facilities.slice(1,4).map((facilitie,idx)=><li
                        className="text-xs flex items-center"
                        key={idx}
                        ><BsDot className="text-[#EFAB00] text-3xl" />{facilitie}</li>)
                    }
                </ul>
                <h2 className="card-title">{estate_title}</h2>
                <p>{description}</p>
                <div className="card-actions items-center justify-between">
                    <h1 className="font-Playfair text-2xl text-[#EFAB00]">{price}</h1>
                    <Link to={`/estate/${id}`} className="btn btn-ghost hover:text-[#EFAB00] hover:bg-inherit">See Detail<FaArrowRightLong /></Link>
                </div>
            </div>
        </div>
    );
};
EstateCard.propTypes={
    estate:PropTypes.object
}
export default EstateCard;