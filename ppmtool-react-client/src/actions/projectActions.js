import axios from "axios";
import { GET_ERRORS } from "./types";

export const createProject = (project, history) => async dispath => {
  try {
    const res = await axios.post("http://localhost:8080/api/project", project);
    history.push("/dashboard");
  } catch (err) {
    dispath({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
