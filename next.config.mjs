/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  
  output: 'export',
  distDir: 'dist',

  images:{
    domains: [
      "https://github.githubassets.com/",
      "https://play-lh.googleusercontent.com/",
      "https://upload.wikimedia.org/",
      "https://tailwindcss.com/",
      "https://ionicframework.com/",
      "https://static.djangoproject.com/",
      "https://gorzelinski.com/",
      "https://logos-world.net/",
      "https://colab.research.google.com/",
      "https://www.zestbrains.com/",
      "https://cdn3.iconfinder.com/",
    ]
  }

  };
  
  
export default nextConfig;
