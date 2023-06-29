const intersectionArrays = (arr1, arr2) => {
  if (!Array.isArray(arr1, arr2)) throw new Error('Input must be array');
  return arr1.filter((value) => arr2.includes(value));
};

const merge = (left, right) => {
  const sortArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortArr.push(left.shift());
    } else {
      sortArr.push(right.shift());
    }
  }
  return [...sortArr, ...left, ...right];
};

const sortNumbers = (arr) => {
  if (!Array.isArray(arr)) throw new Error('Input must be array');
  if (!arr.every((e) => typeof e === 'number'))
    throw new Error('Input must be array of number');
  // return arr.sort((a, b) => a - b); //simply return with built-in function

  // sort using algorithm (merge sort)
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = sortNumbers(arr.slice(0, mid));
  let right = sortNumbers(arr.slice(mid));

  return merge(left, right);
};

function findPairs(arr, sum) {
  const visited = {};
  const newArr = [];
  for (const element of arr) {
    let compliment = sum - element;

    if (visited.hasOwnProperty(compliment)) {
      let count = visited[compliment];

      for (let j = 0; j < count; j++) {
        newArr.push([compliment, element]);
      }
    }
    if (visited.hasOwnProperty(element)) {
      visited[element]++;
    } else {
      visited[element] = 1;
    }
  }
  return newArr;
}

const getOverdueInvoices = (invoices) => {
  return invoices.filter(({ due_date, paid_date }) => {
    const dueDate = new Date(due_date);
    const paidDate = paid_date ? new Date(paid_date) : new Date();
    return dueDate <= paidDate;
  });
};

const question1 = () => {
  console.log('Question 1');
  console.log(intersectionArrays([1, 2, 3], [2, 3, 4]));
  console.log(intersectionArrays([1, 2, 3], [1, 2, 5]));
  console.log(intersectionArrays([1, 2, 3], [4, 5, 6]));
  console.log(intersectionArrays([], []));
};

const question2 = () => {
  console.log('Question 2');
  console.log(sortNumbers([1, 5, 3, 2, 4])); // [1, 2, 3, 4, 5]
  console.log(sortNumbers([10, 5, 3, 2, 8, 1])); // [1, 2, 3, 5, 8, 10]
  console.log(sortNumbers([0, -1, 10, 100, -50])); //  [-50, -1, 0, 10, 100]
  console.log(sortNumbers([5, 5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5, 5]
  console.log(sortNumbers([])); // []
};

const question3 = () => {
  console.log('Question 3');
  console.log(findPairs([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]]
  console.log(findPairs([1, 2, 3, 4, 5], 8)); // [[3, 5]]
  console.log(findPairs([1, 1, 2, 2, 3, 3], 4)); // [[1, 3], [1, 3], [2, 2], [2, 2], [3, 1], [3, 1], [3, 1], [3, 1]]
  console.log(findPairs([-2, -1, 0, 1, 2, 3], 1)); // [[-2, 3], [-1, 2], [0, 1]]
};

const question4 = () => {
  console.log('Question 4');
  console.log(
    getOverdueInvoices([
      { id: 1, amount: 100, due_date: '2023-06-15', paid_date: null },
      { id: 2, amount: 200, due_date: '2023-06-01', paid_date: null },
      { id: 3, amount: 150, due_date: '2023-05-30', paid_date: '2023-05-05' },
      { id: 4, amount: 300, due_date: '2023-05-01', paid_date: '2023-04-30' },
    ])
  );

  console.log(
    getOverdueInvoices([
      { id: 1, amount: 500, due_date: '2023-04-15', paid_date: null },
      { id: 2, amount: 1000, due_date: '2023-03-31', paid_date: '2023-04-30' },
      { id: 3, amount: 1500, due_date: '2023-04-30', paid_date: '2023-05-05' },
      { id: 4, amount: 2000, due_date: '2023-04-01', paid_date: '2023-04-30' },
    ])
  );

  console.log(
    getOverdueInvoices([
      { id: 1, amount: 500, due_date: '2023-04-15', paid_date: null },
      { id: 2, amount: 1000, due_date: '2023-03-31', paid_date: '2023-04-30' },
      { id: 3, amount: 1500, due_date: '2023-04-30', paid_date: '2023-05-05' },
      { id: 4, amount: 2000, due_date: '2023-04-01', paid_date: '2023-04-30' },
    ])
  );

  console.log(
    getOverdueInvoices([
      { id: 1, amount: 50, due_date: '2023-05-01', paid_date: null },
      { id: 2, amount: 100, due_date: '2023-05-01', paid_date: null },
      { id: 3, amount: 150, due_date: '2023-04-30', paid_date: '2023-05-05' },
      { id: 4, amount: 200, due_date: '2023-05-05', paid_date: null },
    ])
  );
};

question1();
question2();
question3();
question4();
