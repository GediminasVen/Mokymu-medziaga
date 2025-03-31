import Roles from "./Roles"

const VisosRoles = () => {
    let roles = [
        {kiekis: 1, role: 'Admin'},
        {kiekis: 22, role: 'User'},
        {kiekis: 3, role: 'Moderator'}
    ]


    return (
        <div>
            <h1>Visos Roles</h1>

            {roles.map((role, i) => (
        <Roles key={i} kiekis={role.kiekis} role={role.role} />
      ))}
        </div>
    )
}

export default VisosRoles