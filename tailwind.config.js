const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Adicione seus caminhos de conteúdo aqui
  ],
  theme: {
    extend: {
      colors: {
        primary: "#facc15",
        "primary-foreground": "#3f4206",
        background: "#242608",
        "background-foreground": "#181a03"
      },
    },
  },
  plugins: [
    nextui({
      themes: {
      
      },
    }),
  ],
};
