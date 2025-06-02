const ComicBook = require("../models/comicBookModel");

const getAllComicBooks = async (request, response, next) => {
  try {
    const comicBooks = ComicBook;

    return response.status(200).json({
      success: { message: "List all of the Comic Books in the inventory" },
      data: { comicBooks },
    });
  } catch (error) {
    return next(error);
  }
};

const getComicBook = async (request, response, next) => {
  const { _id } = request.params;

  try {
    if (!_id) {
      throw new Error("Id needed to find the comic, please try again.");
    }

    const comicBook = ComicBook.findById(_id);

    if (!comicBook) {
      throw new Error("Unable to find comic book.");
    }

    return response.status(200).json({
      success: { message: "Found" },
      data: { comicBook },
    });
  } catch (error) {
    return next(error);
  }
};

const createComicBook = async (request, response, next) => {
  const { title, author, artist, publisher, published, about, imageURL, price } =
    request.body;

  try {
    if (!title || !author || !publisher || !about || !imageURL || !price) {
      throw new error("Missing Data. Please enter again");
    }

    const newComicBook = {
      title,
      author,
      artist,
      publisher,
      published,
      about,
      imageURL,
      price,
    };

    await newComicBook.save();

    return response.status(201).json({
      success: { message: "New comic created." },
      data: { newComicBook },
    });
  } catch (error) {
    return next(error);
  }
};

const updateComicBook = async (request, response, next) => {
  const { _id } = request.params;

  const {
      title,
      author,
      artist,
      publisher,
      published,
      about,
      imageURL,
      price,
  } = request.body;

  try {

     if(!title || !author || !publisher || !about || !imageURL) {
      throw new error("Missing Data. Please enter again");
    };

   const updatedComicBook = await Book.findByIdAndUpdate(
      _id,
      {
        $set: {
      title,
      author,
      artist,
      publisher,
      published,
      about,
      imageURL,
      price,
        }
      },
      {new: true}
    );

     if (!updatedComicBook) {
      throw new Error("Comic not found.");
    };

    return response.status(201).json({
      success: { message: "Comic updated." },
      data: { updateBook },
    });
  } catch(error) {
    return next(error);
  };
};

const deleteComicBook = async (request, response, next) => {
  const { _id } = request.params;

  try {
      if(!_id){
    throw new Error("Id needed to find the comic, please try again.");
  };

     await ComicBook.findByIdAndDelete(_id);

    return response.status(200).json({
      success: { message: "Comic deleted." },
    });
  } catch(error) {
    return next(error);
  };
  };

module.exports = {getAllComicBooks, createComicBook, getComicBook, updateComicBook, deleteComicBook};