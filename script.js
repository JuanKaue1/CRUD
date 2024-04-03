document.getElementById('crudForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    if (name && email) {
      const user = {
        id: new Date().getTime(),
        name,
        email
      };
  
      createUser(user);
      clearForm();
    } else {
      alert('Please enter name and email.');
    }
  });
  
  document.getElementById('clear').addEventListener('click', clearForm);
  
  function createUser(user) {
    const userList = document.getElementById('userList');
  
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `
      <div>${user.name}</div>
      <div>${user.email}</div>
      <button class="btn btn-danger btn-sm float-right delete">Delete</button>
    `;
  
    userList.appendChild(li);
  
    li.querySelector('.delete').addEventListener('click', function() {
      deleteUser(user.id);
      li.remove();
    });
  }
  
  function deleteUser(id) {
    // Implement logic to delete user by id
  }
  
  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  }
  
