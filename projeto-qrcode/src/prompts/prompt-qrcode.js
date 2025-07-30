import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.blue.bold("Digite o link para gerar o QR CODE"),
    },
    {
        name: "type",
        description: chalk.blue.bold("escolha entre o tipo de QRcode (1- NORMAL OU (2- TERMINAL"),

    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
},

];

export default promptQRCode;