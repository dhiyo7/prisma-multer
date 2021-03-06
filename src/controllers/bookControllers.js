const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  getAllBooks: (req, res) => {
    prisma.books
      .findMany({
          orderBy: {
              id : 'desc'
          }
      })
      .then((data) => {
        res.send({
          msg: "Success Get",
          status: 200,
          data,
        });
      })
      .catch((error) => {
        res.send({
          msg: "Error",
          status: 500,
          error,
        });
      });
  },

  paginationBooks : (req, res) => {
    prisma.books
    .findMany({
        skip : parseInt(req.body.skip),
        take : 5
    })
    .then((data) => {
      res.send({
        msg: "Success Get",
        status: 200,
        data,
      });
    })
    .catch((error) => {
      res.send({
        msg: "Error",
        status: 500,
        error,
      });
    });
  },

  postBook : (req, res) => {
      const {body} = req;

      const newBody = {
          ...body,
          book_image : req.file.path
      }

      prisma.books.create({
          data : newBody
      })
      .then((data) => {
          res.status(200).send({
              msg : 'Success POST',
              status: 200,
              data
          })
      })
      .catch((error) => {
          res.status(500).send({
              msg  : 'Error',
              status : 500,
              error
          })
      })
  }
};
