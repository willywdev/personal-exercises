import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function ISSTracker() {
  const { data, isLoading, error, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });
  const coords = data
    ? { longitude: data.longitude, latitude: data.latitude }
    : { longitude: 0, latitude: 0 };

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
