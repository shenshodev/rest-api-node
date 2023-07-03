const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json');

router.get('/', (req,res) => {
  res.json(movies);
});

router.post('/',(req,res) => {
  const { title, director, year, rating } = req.body;
  if(title && director && year && rating){
    const id = movies.length + 1;
    const newMovie = {...req.body, id};
    movies.push(newMovie);
    res.json(movies);
  }else{
    res.status(500).json({error: "There was an error"});
  }
});

router.put('/:id', (req,res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  if(title && director && year && rating){
    // _.each(movies, (movie, i) => {
    //   if(movie.id == id){
    //     movie.title = title;
    //     movie.director = director;
    //     movie.year = year;
    //     movie.rating = rating;
    //   }
    // });

    let index = movies.findIndex(movie => movie.id == id);
    if(index != -1){
      movies[index].title = title;
      movies[index].director = director;
      movies[index].year = year;
      movies[index].rating = rating;
    }

    res.json(movies);
  }else{
    res.status(500).json({error: 'There was an error'})
  }
});

router.delete('/:id', (req,res) => {
  const { id } = req.params;

  // _.each(movies, (movie, i) => {
  //   if(movie.id == id){
  //     movies.splice(i,1);
  //   }
  // })

  let index = movies.findIndex(movie => movie.id == id);
  movies.splice(index,1);

  res.json(movies);
});

module.exports = router;