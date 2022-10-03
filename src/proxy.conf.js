module.exports = [
  {
    context: ['/search', '/artist'],
    target: 'https://api.deezer.com/',
    secure: true,
    changeOrigin: true,
  }
];
