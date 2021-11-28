import axios from "axios";
import {PlanetType, ResponseSwapiType} from "../types";

class PlanetsAPI {
  getPlanets = async () => {
    const response = await axios.get<ResponseSwapiType<PlanetType>>(
      `https://swapi.dev/api/planets`
    )
    return response.data;
  }
}

export default new PlanetsAPI()
