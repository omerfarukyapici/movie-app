import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import MovieDetail from "./pages/MovieDetail";
import SeriesDetail from "./pages/SeriesDetail";

import PageLayout from "./layouts/PageLayout";
import PageLayoutTwo from "./layouts/PageLayoutTwo";

import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route exact path='/' element={<Home />} />
        </Route>
        <Route element={<PageLayoutTwo />}>
          <Route path='/movie' element={<Movies />} />
          <Route path='/serie' element={<Series />} />
          <Route path='/movie/:id' element={<MovieDetail />} />
          <Route path='/serie/:id' element={<SeriesDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
