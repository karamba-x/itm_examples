const names = ['Masha', 'Vasya', 'Petya'] as const;

type Name = typeof names[number];