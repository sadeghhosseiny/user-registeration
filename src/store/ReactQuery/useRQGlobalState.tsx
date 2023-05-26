import { useQuery } from "@tanstack/react-query";
import client from "../QueryClient";

const useRQGlobalState = (key: string, initialData: any) => [
  useQuery([key], () => initialData, { enabled: false, initialData }).data,
  (value: any) => client.setQueriesData([key], value),
];

export default useRQGlobalState;
