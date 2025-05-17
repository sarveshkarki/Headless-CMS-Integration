import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL =
  "https://sarvesh.digital6.au/index.php?rest_route=/acf/v3/pages/9";

type SectionType = {
  acf_fc_layout: string;
  [key: string]: any;
};

export function useHomepageSections() {
  return useQuery<SectionType[], Error>({
    queryKey: ["homepage-section"],
    queryFn: async () => {
      const response = await axios.get(API_URL);
      return response.data.acf.homepage_sections as SectionType[];
    },
  });
}
