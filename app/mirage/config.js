export default function() {
  this.get('/articles', (schema) => {
    return schema.articles.all();
  });
  this.get('/articles/:id', (schema, request) => {
    var id = request.params.id;
    return schema.articles.find(id);
  });
}
