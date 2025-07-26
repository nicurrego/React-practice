import { useState } from 'react';

const NameForm = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <input
                type="text"
                placeholder="Escribe tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Hola, {name || "tu"}</p>
        </div>
    )
}
export default NameForm;