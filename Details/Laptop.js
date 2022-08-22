const get = (req, res) => {
  res.send([
    {
      id: 2,
      imageurl:
        "http://purepng.com/public/uploads/large/purepng.com-laptopelectronicslaptopcomputer-941524676379zuw2c.png",
      name: "HP-Black",
      description: " ",
      category: "Laptop",
      qnty: 0,
      price: 60000,
    },
    {
      id: 12,
      imageurl: "http://pngimg.com/uploads/macbook/macbook_PNG65.png",
      name: "macbook",
      description: " ",
      category: "Laptop",
      qnty: 0,
      price: 90000,
    },
    {
      id: 13,
      imageurl:
        "http://www.downloadclipart.net/large/dell-laptop-png-free-download.png",
      name: "Dell",
      description: " ",
      category: "Laptop",
      qnty: 0,
      price: 70000,
    },
    {
      id: 14,
      imageurl:
        "http://www.pngfind.com/pngs/m/658-6586213_alienware-18-dell-inspiron-15-5000-gaming-laptop.png",
      name: "dell-inspiron-5000-gaming-laptop",
      description: " ",
      category: "Laptop",
      qnty: 0,
      price: 58000,
    },
    {
      id: 15,
      imageurl:
        "http://cdn.imgbin.com/7/25/1/imgbin-macbook-pro-15-4-inch-apple-mac-mini-laptop-macbook-HsSHaV8t1MH1uY87xMwCGSrw4.jpg",
      name: "macbook-pro-15-4-inch-apple-mac-mini-laptop",
      description: " ",
      category: "Laptop",
      qnty: 0,
      price: 49000,
    },
    {
      id: 16,
      imageurl:
        "http://www.pngfind.com/pngs/m/677-6777181_hp-i3-laptop-silver-hd-png-download.png",
      name: "hp-i3-laptop-silver",
      description: " ",
      category: "Laptop",
      qnty: 0,
      price: 55000,
    },
    {
      id: 17,
      imageurl:
        "http://www.pngitem.com/pimgs/m/247-2475863_acer-laptop-png-transparent-png.png",
      name: "acer-laptop",
      description: " ",
      category: "Laptop",
      qnty: 0,
      price: 65000,
    },
    {
      id: 18,
      imageurl:
        "http://chromeunboxed.com/wp-content/uploads/2021/08/Untitled-1-2-1200x900.jpg",
      name: "lenovo",
      description: " ",
      category: "Laptop",
      qnty: 0,
      price: 55000,
    },
  ]);
};
module.exports.apiController = get;
