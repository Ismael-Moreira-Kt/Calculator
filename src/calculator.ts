export class Calculator {
    static add(first_number: number, second_number: number): number {
        return first_number + second_number;
    }


    static subtract(first_number: number, second_number: number): number {
        return first_number - second_number;
    }


    static multiply(first_number: number, second_number: number): number {
        return first_number * second_number;
    }


    static divide(first_number: number, second_number: number): number {
        if (second_number === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        
        return first_number / second_number;
    }
}