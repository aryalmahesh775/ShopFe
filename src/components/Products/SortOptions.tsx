import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  interface SortChangeEvent extends React.ChangeEvent<HTMLSelectElement> {}

  const handleSortChange = (e: SortChangeEvent) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  };
  return (
    <div className="mb-4 flex items-center justify-end ">
      <select
        name=""
        id="sort"
        value={searchParams.get("sortBy") || ""}
        onChange={handleSortChange}
        className="border p-2 rounded-md focus:out-none"
      >
        <option value="" className="">
          Default
        </option>
        <option value="priceAsc" className="">
          price: Low To High
        </option>
        <option value="priceDesc" className="">
          Price: High to Low
        </option>
        <option value="popularity" className="">
          Popularity
        </option>
      </select>
    </div>
  );
};

export default SortOptions;
