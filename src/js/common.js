console.log('common');

function sendMessage (id: number, message: string): boolean {
  console.log(id, message);
  const span = document.createElement('span');
  span.textContent = 'test';
  document.body.appendChild(span);
  return true;
}

sendMessage({}, "");
