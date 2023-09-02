import { Link } from "react-router-dom"
import Cards from "../Cards/Cards";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { storePokes } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(storePokes());
    },[]);
  
    return (
        <div>
            <Cards />
        </div>
    )
}

export default Home;