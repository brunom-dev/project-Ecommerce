import { RatingProps } from "../../interfaces/RatingProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from "@fortawesome/free-solid-svg-icons";

export function Rating({stars = 0}:RatingProps) {
    const maxStars = 5;

    return (
        <div>
            {[...Array(maxStars)].map((_, i) => {
                if (i < Math.floor(stars)) {
                    return (
                        <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            style={{ color: "gold" }}
                        />
                    );
                } else if (i < stars) {
                    return (
                        <FontAwesomeIcon
                            key={i}
                            icon={faStarHalfAlt}
                            style={{ color: "gold" }}
                        />
                    );
                } else {
                    return (
                        <FontAwesomeIcon
                            key={i}
                            icon={faStarEmpty}
                            style={{ color: "#bcbbbb" }}
                        />
                    );
                }
            })}
        </div>
    );
}