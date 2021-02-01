// Funcion para mostrar una Fotografia
// La siguiente declaración permite separar el contexto de los archivos anteriores del archivo actual
export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

type tplotOptions = {
  [key: string]: string;
};

const Countries: tplotOptions = {
  Afghanistan: "AF",
  AlandIslands: "AX",
  Albania: "AL",
  Algeria: "DZ",
  AmericanSamoa: "AS",
  Andorra: "AD",
  Angola: "AO",
};

interface Player {
  name: string;
  lastName: string;
  country: typeof Countries;
}

const result = Object.keys(Countries).map((key) => ({
  label: key,
  contrie: Countries[key],
}));
console.log(result, "<COUNTRIES>");

// function showPicture(picture: Picture) {
//   console.log(`[title: ${picture.title},
//                  date: ${picture.date},
//                  orientation: ${picture.orientation}]`);
// }

// let myPic = {
//   title: "Test Title",
//   date: "2020-03",
//   orientation: PhotoOrientation.Landscape,
// };

// showPicture(myPic);
// showPicture({
//   title: "Test Title",
//   date: "2020-03",
//   orientation: PhotoOrientation.Portrait,
//   // extra: 'test'// Error
// });

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  // const pic = { title: "Default", date: "2020-03" };
  const pic = { titles: "Defaut", dates: "01-01-2021" };
  if (config.title) {
    pic.titles = config.title;
  }
  if (config.date) {
    pic.dates = config.date;
  }

  return pic;
}

let picture = generatePicture({});
console.log("picture", picture);
// picture = generatePicture({ title: "Travel Pic" });
// console.log("picture", picture);
// picture = generatePicture({ title: "Travel Pic", date: "2021-05" });
// console.log("picture", picture);

// // Intefaz: Usuario
// interface User {
//   readonly id: number; // solo lectura
//   username: string;
//   isPro: boolean;
// }

// let user: User;
// user = { id: 10, username: "luixaviles", isPro: true };
// console.log("user", user);
// user.username = "paparazzi";
// // user.id = 20; //Error!
// console.log("user", user);
