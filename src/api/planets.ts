import axios from "axios";
import {PlanetType, ResponseSwapiType} from "../types";

class PlanetsAPI {
  //Todo fix any
  getPlanets = async (query: any) => {
    const page = query.queryKey[1]
    const response = await axios.get<ResponseSwapiType<PlanetType>>(
      `https://swapi.dev/api/planets?page=${page}`
    )
    return response.data;
  }
}

export default new PlanetsAPI()
