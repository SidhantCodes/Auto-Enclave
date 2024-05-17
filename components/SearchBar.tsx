"use client";
import Image from "next/image";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { useRouter } from "next/navigation";

interface SearchButtonProps {
  others: string;

}

const SearchButton = ({ others } :  SearchButtonProps) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${others}`}>
      <Image src='/magnifying-glass.svg' className="object-contain" alt="search-icon"width={40} height={30} />
    </button>
  )

}

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(manufacturer===''||model==='') return alert('Please fill in all fields');
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  }
  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if(model){
      searchParams.set('model', model);
    }else{
      searchParams.delete('model');
    }

    if(manufacturer){
      searchParams.set('manufacturer', manufacturer);
    }else{
      searchParams.delete('manufacturer');
    }
    
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathName, {scroll: false});
  }
  return (
    <form className="searchbar gap-x-2" onSubmit={handleSearch}>
      <div className="searcbar__item">
        <SearchManufacturer 
          manufacturer={manufacturer} 
          setManufacturer={setManufacturer}
        />
        <SearchButton others={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <Image src={'/model-icon.png'} height={25} width={25} className="absolute w-[20px] h-[20px] ml-4" alt="car model"/>
        <input type="text" width={20} name="model" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Tiguan" className="searchbar__input" />
        <SearchButton others={"sm:hidden"} />
      </div>
      <SearchButton others={"max-sm:hidden"} />
    </form>
  )
}

export default SearchBar