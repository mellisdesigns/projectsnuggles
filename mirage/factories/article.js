import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() { return faker.commerce.productName(); },
  content() { return faker.lorem.paragraphs(); },
  tag() { return faker.random.word(); }
});
