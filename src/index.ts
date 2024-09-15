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


function getOperation(): Promise<number> {
    return new Promise((resolve) => {
        rl.question(
            'Choose the operation:\n1 - Add\n2 - Subtract\n3 - Multiply\n4 - Divide\n> ',
            (input) => {
                const operation = parseInt(input);
                
                if ([1, 2, 3, 4].includes(operation)) {
                    resolve(operation);
                } else {
                    console.log('Please choose a valid operation.');
                    
                    resolve(getOperation());
                }
            }
        );
    });
}