function duplicate(list) {
  const count = {}
  const result = []

  for (let email of list) {
    count[email] = (count[email] || 0) + 1
  }

  for (let email in count) {
    if (count[email] > 1) {
      result.push(email)
    }
  }

  return result;
}

const emails = [
  'lyhxr@example.com',
  'lyhxr@example.com',
  'masha@example.com',
  'fedya@example.com',
  'katya@example.com',
  'fedya@example.com',
  'katya@example.com',
  'lyhxr@example.com',
];

const val = duplicate(emails);
console.log(val); // [ 'lyhxr@example.com', 'fedya@example.com', 'katya@example.com' ]