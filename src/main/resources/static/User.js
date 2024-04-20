$(async function() {
    await thisUser();
});
async function thisUser() {
    fetch("http://localhost:8080/api/currentUser")
        .then(res => res.json())
        .then(data => {
            $('#currentUserName').append(data.username);

            let roles = data.roles.map(role => " " + role.name);
            $('#currentUserRoles').append(roles);

            let user = `$(
            <tr>
                <td>${data.id}</td>
                <td>${data.username}</td>
                <td>${data.email}</td>
                <td>${roles}</td>)`;
            $('#userData').append(user);
        })
}