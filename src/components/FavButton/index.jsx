import { Container } from "./styles";

import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export function FavButton({}) {
    const [favHeartOpen, setFavHeartOpen] = useState(false);

    function handleFavHeart() {
        setFavHeartOpen(!favHeartOpen);
    }

    return (
        <Container typeof="button" onClick={handleFavHeart}>
            {favHeartOpen ? <AiFillHeart/> : <AiOutlineHeart/>}
        </Container>
    );
}