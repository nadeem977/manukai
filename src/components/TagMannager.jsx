import React, { useState, useRef, useEffect } from "react";
import { SearchIcon } from "./Icon";

const TagMannager = () => {

  const [tags, setTags] = useState(["War", "Ukraine", "Russia", "Hamas"]);
  const [input, setInput] = useState("");

  const addTag = (e) => {
    e.preventDefault();
    if (input.trim() !== "" && !tags.includes(input.trim())) {
      setTags([...tags, input.trim()]);
      setInput("");
    }
  };
  const [searchOpen, setSearchOpen] = React.useState(false);
  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const searchFormRef = useRef(null);
  const handleClickOutside = (event) => {
    if (
      searchFormRef.current &&
      !searchFormRef.current.contains(event.target)
    ) {
      setSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
        <div className="flex items-center cursor-pointer gap-2 w-full border-[1.5px] h-[36px] rounded 	overflow-hidden  border-[#4ED2EF80] pr-3">
          <div
            onClick={() => setSearchOpen(!searchOpen)}
            className="w-full p-2 py-3 text-[14px] min-w-[200px] h-full text-[#787878] flex items-center bg-transparent outline-none border-none">
            Search
          </div>
          <SearchIcon />
        </div> 
        <div
          ref={searchFormRef}
          className={`search-form-area w-full left-0 top-[80px] ${
            searchOpen ? "active" : ""
          }`}>
          <form className="search-form" onSubmit={addTag}>
            <input
              type="text"
              className="form-control "
              placeholder="Search anything.."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onBlur={() => setSearchOpen(false)}/>
            <button type="submit" className="no-gutter">
              <SearchIcon />
            </button>
          </form>
          <div className="search-suggestion overflow-y-auto">
            <h6 className="title">Search option</h6>
            <ul className="list">
              <li>
                <strong>Key:</strong>
                <span>Keywords</span>
              </li>
              <li>
                <strong>Media:</strong>
                <span>Said by a group of news sources in a country</span>
              </li>
              <li>
                <strong>Media Name:</strong>
                <span>Said By a specific news source</span>
              </li>
              <li>
                <strong>Country: </strong>
                <span>
                  Said by Country Officials and government representatives
                </span>
              </li>
              <li>
                <strong>From:</strong>
                <span>Specific Influential Figures or Politicians</span>
              </li>
            </ul>
          </div>
        </div>
      <div className="flex items-center gap-2 mt-3 flex-wrap">
        {tags.map((tag, i) => (
          <button
            key={i}
            className="bg-[#114652] text-[10px] p-1 px-2 rounded-[5px] border-[1px] border-[#4ED2EF]">
            {tag} <i className="bi bi-x-lg" onClick={() => removeTag(tag)}></i>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagMannager;
