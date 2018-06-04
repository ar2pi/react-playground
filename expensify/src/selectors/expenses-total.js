// Get expenses total amount

export default (expenses = []) => {
    return expenses.reduce((acc, { amount }) => {
        return acc + amount
    }, 0);
};
