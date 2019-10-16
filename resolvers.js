const user = {
  _id: '1',
  name: 'Kevin',
  email: 'knphillips01@gmail.com',
  picture: 'https://cloudinary.com/asdg'
}

module.exports = {
  Query: {
    me: () => user
  }
}