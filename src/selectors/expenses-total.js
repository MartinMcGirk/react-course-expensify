const getExpensesTotal = (expenses) => {
    return expenses.map(
        expense => expense.amount
    ).reduce(
        (total, num) => num + total,
        0
    );
};

export { getExpensesTotal }