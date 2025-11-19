// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

export default {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {
colors: {
tealBlue: "#0e7490", // 60%
deepBlue: "#0b4f63", // Accent
tigerGold: "#FC6A03", // 10%
}
},
},
plugins: [],
};