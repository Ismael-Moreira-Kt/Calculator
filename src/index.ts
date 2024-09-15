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


async function runCalculator(): Promise<void> {
    const num1: number = await getNumber('Enter the first number: ');
    const num2: number = await getNumber('Enter the second number: ');
    const operation: number = await getOperation();

    switch (operation) {
        case 1:
            console.log(`Addition result: ${Calculator.add(num1, num2)}`);
            break;

        case 2:
            console.log(`Subtraction result: ${Calculator.subtract(num1, num2)}`);
            break;
        
        case 3:
            console.log(`Multiplication result: ${Calculator.multiply(num1, num2)}`);
            break;
        
        case 4:
            if (num2 !== 0) {
                console.log(`Division result: ${Calculator.divide(num1, num2)}`);
            } else {
                console.log('Cannot divide by zero.');
            }

            break;
    }

    rl.close();
}