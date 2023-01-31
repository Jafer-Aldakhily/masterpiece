import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import MasonryLayout from "./MasonryLayout";
import axios from "axios";

// indexPins refer to pins in pins component I sent it as props
export default function Search({ searchTerm }) {
  const [pins, setPins] = useState([]);
  const [allPins, setAllPins] = useState();
  const [loading, setLoading] = useState(false);
  // const [allpins, setAllpins] = useState(indexPins);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    axios.get("http://127.0.0.1:8000/api/all/pins").then((response) => {
      setPins(response.data.pins);
      setAllPins(response.data.pins);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (searchTerm !== "") {
      setLoading(true);
      setPins(() => {
        return pins
          .filter((pin) =>
            pin.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((pin) => pin);
      });
      // setSearch(searchTerm.toLowerCase());
      // axios
      //   .get(`http://127.0.0.1:8000/api/all/pins/${search}`)
      //   .then((response) => {
      //     setPins(response.data.pins);
      //     setLoading(false);
      //   });
    } else {
      setLoading(true);
      axios.get("http://127.0.0.1:8000/api/all/pins").then((response) => {
        setPins(response.data.pins);
        setAllPins(response.data.pins);
        console.log(response.data.pins);
        setLoading(false);
      });
      // setPins(allPins);
      // setLoading(false);
    }
  }, [searchTerm]);

  return (
    <div>
      {loading && <Spinner message="Searching for a pin..." />}
      {pins?.length !== 0 && <MasonryLayout pins={pins} />}
      {pins?.length === 0 && searchTerm !== "" && !loading && (
        <div className="mt-10 text-center text-xl">No Pins Found !</div>
      )}
    </div>
  );
}
