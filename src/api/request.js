const mock = [
  { id: 1, name: '苹果', price: 5, inventory: 10, count: 0 },
  { id: 2, name: '梨子', price: 4, inventory: 22, count: 0 },
  { id: 3, name: '西瓜', price: 8, inventory: 11, count: 0 },
  { id: 4, name: '香蕉', price: 6, inventory: 33, count: 0 },
  { id: 5, name: '番石榴', price: 5, inventory: 12, count: 0 },
  { id: 6, name: '冬枣', price: 9, inventory: 10, count: 0 },
];

function request() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mock), 1000);
  });
}

export default request;
