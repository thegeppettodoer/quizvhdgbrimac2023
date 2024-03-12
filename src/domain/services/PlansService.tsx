import { PlansResponse } from "../models/Plans";


class PlansService {
  async getPlansData(): Promise<PlansResponse | null> {
    try {
      const response = await fetch(
        "https://rimac-front-end-challenge.netlify.app/api/plans.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch plans data");
      }
      const plansData: PlansResponse = await response.json();
      return plansData;
    } catch (error) {
      console.error("Error fetching plans data:", error);
      return null;
    }
  }
}

export default PlansService;
