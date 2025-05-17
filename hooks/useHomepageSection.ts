import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type SectionType = {
  acf_fc_layout: string;
  [key: string]: any;
};

export function useHomepageSections() {
  return useQuery<SectionType[], Error>({
    queryKey: ["homepage-section"],
    queryFn: async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      if (!API_URL) {
        throw new Error(
          "Environment variable NEXT_PUBLIC_API_URL is not defined"
        );
      }

      const response = await axios.get(API_URL);
      return response.data.acf.homepage_sections as SectionType[];
    },
  });
}
