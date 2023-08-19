import { loadAbort } from "../utils/abortFetch";

export const getData = async (searchTerm) => {
  const controller = loadAbort();

  try {
    const response = await fetch(`https://api.twelvedata.com/symbol_search?symbol=${searchTerm}&source=docs`, {
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if (data) {
      return data?.data?.map((p, index) => {
        return { symbol: p.symbol, currency: p.currency, label: p.instrument_name, id: index, key: index };
      });
    }
    return [];
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
export const fetchAction = async (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((res) => res);
};
