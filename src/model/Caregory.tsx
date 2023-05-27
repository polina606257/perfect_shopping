class Category {
  id: number;
  name: string;
  image: string;
  counter = 0;

  constructor(name: string, image: string) {
    this.id = this.generateId();
    this.name = name;
    this.image = image;
  }

  generateId() {
    this.counter++;
    return this.counter;
  }
}

export default Category;

export const categories = [
  new Category(
    "HAT",
    "https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg"
  ),
  new Category(
    "JACKETS",
    "https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg"
  ),
  new Category(
    "DRESSES",
    "https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg"
  ),
  new Category(
    "SHOE",
    "https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg"
  ),
  new Category(
    "PANTS",
    "https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg"
  ),
];
