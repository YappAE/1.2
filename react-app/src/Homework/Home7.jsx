import React from "react";
import Clock from "./For7Task/Clock";
import Button from "./For7Task/Button";
import List from "./For7Task/List";
import Search from "./For7Task/Search";

function Home7() {
  const items = ["Время", "Идет", "Очень", "Быстро"];

  return (
    <div>
      {/* Часы */}
      <Clock />

      {/* Запись ререндинга страницы, работает на все.*/}
      {/* <Button /> */}

      {/* Поиск */}
      {/* <Search
        onSearch={(searchValue) => console.log(`Search for ${searchValue}`)}
      />
      {<List items={items} /> */}
      <List items={items}/>
      <Search 
        onSearch={(searchValue) => console.log(`Search for ${searchValue}`)} 
      />
      <Button />
    </div>
  );
}

export default Home7;
