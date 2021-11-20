import axios from "axios";
import {PlanetType, ResponseSwapiType} from "../types";

class PlanetsAPI {
  getPlanets = async (page: number) => {
    const response = await axios.get<ResponseSwapiType<PlanetType>>(
      `https://swapi.dev/api/planets?page=${page}`
    )
    return response.data;
  }
}

export default new PlanetsAPI()
