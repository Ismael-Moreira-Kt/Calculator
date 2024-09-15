import { Calculator } from './calculator';
import readline from 'readline';



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function getNumber(question: string): Promise<number> {
    return new Promise((resolve) => {
        rl.question(question, (input) => {
            const number = parseFloat(input);

            if (!isNaN(number)) {
                resolve(number);
            } else {
                console.log('Please enter a valid number.');
                resolve(getNumber(question));
            }
        });
    });
}