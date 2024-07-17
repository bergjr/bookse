// Importa todos os SVGs da pasta assets
const importAll = (requireContext) => {
  let images = {};
  requireContext.keys().forEach((item, index) => {
    images[item.replace('./', '')] = requireContext(item);
  });
  return images;
};

// Chama a função com o contexto do webpack
 const books = importAll(require.context('./', false, /\.svg$/));

export default books;